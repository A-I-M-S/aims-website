"use client";

import { useState } from "react";
import type { Agent } from "../lib/agents";
import { matchesSearch } from "../lib/catalogue";
import { AgentCard } from "./agent-card";
import { CatalogueControls, EmptyCatalogue } from "./catalogue-controls";

export function AgentExplorer({ agents }: { agents: Agent[] }) {
  const [category, setCategory] = useState("All agents");
  const [query, setQuery] = useState("");
  const results = agents.filter(
    (agent) =>
      (category === "All agents" || agent.category === category) &&
      matchesSearch(query, [
        agent.name,
        agent.category,
        agent.tagline,
        agent.description,
        ...agent.tasks,
        ...agent.tools,
      ]),
  );
  return (
    <>
      <CatalogueControls
        categories={[
          "All agents",
          "Operations",
          "People & finance",
          "Product & creative",
          "Customer growth",
        ]}
        category={category}
        onCategory={setCategory}
        query={query}
        onQuery={setQuery}
        label="agents"
        placeholder="Try HR, video, or Teams"
      />
      <p className="results-count" role="status">
        {results.length} {results.length === 1 ? "agent idea" : "agent ideas"}{" "}
        to make your own
      </p>
      <div className="agent-grid">
        {results.map((agent) => (
          <AgentCard key={agent.slug} agent={agent} />
        ))}
      </div>
      {results.length === 0 && (
        <EmptyCatalogue
          onReset={() => {
            setCategory("All agents");
            setQuery("");
          }}
        />
      )}
    </>
  );
}
