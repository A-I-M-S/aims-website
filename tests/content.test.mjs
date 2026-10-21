import assert from "node:assert/strict";
import test from "node:test";
import { services, getService } from "../lib/services.ts";
import { insights } from "../lib/insights.ts";
import { solutions } from "../lib/solutions.ts";
import { agents, getAgent } from "../lib/agents.ts";
import { hardware, getHardware } from "../lib/hardware.ts";
import { platforms } from "../lib/platforms.ts";

test("all capabilities have unique, valid URLs and substantive content", () => {
  assert.ok(services.length >= 10);
  assert.equal(
    new Set(services.map((service) => service.slug)).size,
    services.length,
  );
  assert.equal(
    new Set(services.map((service) => service.description)).size,
    services.length,
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

test("the original service URLs remain available after the expansion", () => {
  for (const slug of [
    "workflow-automation",
    "ai-copilots",
    "api-mcp-integration",
    "rag-model-fine-tuning",
    "agent-harness-engineering",
    "agentic-environments",
    "coding-agents-cicd",
    "llm-gateway-caching",
    "private-ai-inference",
    "frontier-model-access",
  ])
    assert.ok(getService(slug), `${slug} must remain accessible`);
});

test("agent and hardware routes are unique and links resolve to real services", () => {
  for (const catalogue of [agents, hardware, platforms]) {
    assert.equal(
      new Set(catalogue.map((item) => item.slug)).size,
      catalogue.length,
    );
    for (const item of catalogue)
      assert.match(item.slug, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  }
  for (const agent of agents) {
    assert.equal(getAgent(agent.slug), agent);
    for (const slug of agent.services)
      assert.ok(getService(slug), `${agent.slug}: missing ${slug}`);
  }
  for (const platform of platforms)
    assert.ok(getService(platform.service), platform.slug);
  for (const item of hardware) assert.equal(getHardware(item.slug), item);
  assert.equal(getAgent("__proto__"), undefined);
  assert.equal(getHardware("not-a-model"), undefined);
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
