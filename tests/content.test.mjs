import assert from "node:assert/strict";
import test from "node:test";
import { services, getService } from "../lib/services.ts";
import { insights } from "../lib/insights.ts";
import { solutions } from "../lib/solutions.ts";

test("all ten requested capabilities have unique, valid URLs and substantive content", () => {
  assert.equal(services.length, 10);
  assert.equal(new Set(services.map((service) => service.slug)).size, 10);
  assert.equal(
    new Set(services.map((service) => service.description)).size,
    10,
  );
  for (const service of services) {
    assert.match(service.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(service.deliverables.length >= 4, service.slug);
    assert.ok(service.faqs.length >= 3, service.slug);
    assert.ok(service.measures.length >= 3, service.slug);
    assert.equal(getService(service.slug), service);
    assert.ok(service.description.length <= 190, service.slug);
  }
});

test("related capabilities and solution paths never point to a missing service", () => {
  for (const service of services) {
    assert.ok(!service.related.includes(service.slug));
    for (const slug of service.related)
      assert.ok(getService(slug), `${service.slug} links to missing ${slug}`);
  }
  for (const solution of solutions)
    for (const slug of solution.services)
      assert.ok(getService(slug), `${solution.id} links to missing ${slug}`);
});

test("guide links and table-of-contents anchors are unique and complete", () => {
  assert.equal(
    new Set(insights.map((insight) => insight.slug)).size,
    insights.length,
  );
  for (const insight of insights) {
    assert.equal(
      new Set(insight.sections.map((section) => section.id)).size,
      insight.sections.length,
      insight.slug,
    );
    for (const slug of insight.relatedServices)
      assert.ok(getService(slug), `${insight.slug} links to missing ${slug}`);
    for (const section of insight.sections)
      assert.ok(section.paragraphs.length >= 2);
  }
});

test("unknown capability requests do not fall back to an unrelated service", () => {
  assert.equal(getService("not-a-service"), undefined);
  assert.equal(getService("__proto__"), undefined);
});
