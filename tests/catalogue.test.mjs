import assert from "node:assert/strict";
import test from "node:test";
import { matchesSearch } from "../lib/catalogue.ts";
import { getEnquiryContext } from "../lib/enquiry.ts";
import { agents } from "../lib/agents.ts";
import { hardware } from "../lib/hardware.ts";
import { services } from "../lib/services.ts";
import { validateContact } from "../lib/contact.ts";

const catalogues = { agents, hardware, services };

test("catalogue search matches all words across names and tools, ignoring case and spacing", () => {
  assert.ok(matchesSearch("  HR   TEAMS ", ["HR agent", "Microsoft Teams"]));
  assert.ok(matchesSearch("", ["NVIDIA H100"]));
  assert.ok(!matchesSearch("H100 Rubin", ["NVIDIA H100", "Hopper"]));
  assert.ok(matchesSearch("h20e", [hardware[0].name, hardware[0].note]));
});

test("every agent CTA selects a real form option and supplies a valid enquiry draft", () => {
  for (const agent of agents) {
    const result = getEnquiryContext({ agent: agent.slug }, catalogues);
    assert.equal(result.interest, `${agent.name} development`);
    assert.match(result.message, /process we want to improve/);
    assert.ok(
      validateContact({
        name: "Alex",
        email: "alex@example.com",
        interest: result.interest,
        message: result.message,
      }).ok,
    );
  }
});

test("hardware comparison preserves distinct selections in an enquiry and is bounded to three", () => {
  const result = getEnquiryContext(
    {
      hardware: "nvidia-h100,nvidia-b300,nvidia-h100,nvidia-rubin,nvidia-h200",
    },
    catalogues,
  );
  assert.equal(result.interest, "GPU hardware & installation");
  assert.match(
    result.message,
    /NVIDIA H100, NVIDIA B300, NVIDIA Rubin platforms/,
  );
  assert.doesNotMatch(result.message, /H200/);
  assert.match(result.message, /Installation location/);
});

test("unknown, repeated, and untrusted URL parameters never become enquiry content", () => {
  for (const params of [
    { agent: "<script>alert(1)</script>" },
    { hardware: "__proto__,missing" },
    { agent: ["admin-agent", "hr-agent"] },
    { hardware: ["nvidia-h100"] },
  ]) {
    assert.deepEqual(getEnquiryContext(params, catalogues), {
      interest: undefined,
      message: "",
    });
  }
  assert.deepEqual(
    getEnquiryContext(
      { service: "workflow-automation", agent: "unknown" },
      catalogues,
    ),
    { interest: "Workflow automation", message: "" },
  );
});
