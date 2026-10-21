"use client";

import Link from "next/link";
import { useState } from "react";
import type { Platform } from "../lib/platforms";
import { matchesSearch } from "../lib/catalogue";
import { CatalogueControls, EmptyCatalogue } from "./catalogue-controls";
import { Icon } from "./icon";

export function PlatformExplorer({ platforms }: { platforms: Platform[] }) {
  const [category, setCategory] = useState("All platforms");
  const [query, setQuery] = useState("");
  const results = platforms.filter(
    (platform) =>
      (category === "All platforms" || platform.category === category) &&
      matchesSearch(query, [
        platform.name,
        platform.description,
        platform.example,
        platform.bestFor,
      ]),
  );
  return (
    <>
      <CatalogueControls
        categories={[
          "All platforms",
          "Workflow automation",
          "Microsoft AI",
          "Agent building",
        ]}
        category={category}
        onCategory={setCategory}
        query={query}
        onQuery={setQuery}
        label="platforms"
        placeholder="Find a tool or use case"
      />
      <p className="results-count" role="status">
        {results.length} {results.length === 1 ? "platform" : "platforms"} to
        connect the work
      </p>
      <div className="platform-grid">
        {results.map((platform) => (
          <article
            key={platform.slug}
            id={platform.slug}
            className={`platform-card tone-${platform.colour}`}
          >
            <div className="platform-card-heading">
              <span className="platform-mark" aria-hidden="true">
                {platform.mark}
              </span>
              <div>
                <span className="card-kicker">{platform.category}</span>
                <h2>{platform.name}</h2>
              </div>
            </div>
            <p>{platform.description}</p>
            <div className="platform-example">
              <span className="card-kicker">Something we can build</span>
              <p>{platform.example}</p>
            </div>
            <p className="platform-fit">
              <strong>A good fit for</strong> {platform.bestFor.toLowerCase()}.
            </p>
            <Link href={`/services/${platform.service}`} className="text-link">
              Explore the service <Icon name="arrow" />
            </Link>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <EmptyCatalogue
          onReset={() => {
            setCategory("All platforms");
            setQuery("");
          }}
        />
      )}
    </>
  );
}
