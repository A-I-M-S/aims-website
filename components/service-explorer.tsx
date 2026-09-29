"use client";

import Link from "next/link";
import { useState } from "react";
import type { Service } from "../lib/services";
import { Icon } from "./icon";

export type ServicePreview = Pick<
  Service,
  | "number"
  | "slug"
  | "shortTitle"
  | "title"
  | "summary"
  | "category"
  | "tags"
  | "icon"
  | "searchTerms"
>;
const categories = [
  "All capabilities",
  "Automation",
  "AI engineering",
  "Infrastructure",
];

export function ServiceExplorer({ services }: { services: ServicePreview[] }) {
  const [category, setCategory] = useState("All capabilities");
  const [query, setQuery] = useState("");
  const words = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const results = services.filter(
    (service) =>
      (category === "All capabilities" || service.category === category) &&
      words.every((word) =>
        `${service.title} ${service.shortTitle} ${service.summary} ${service.tags.join(" ")} ${(service.searchTerms || []).join(" ")}`
          .toLowerCase()
          .includes(word),
      ),
  );

  return (
    <div className="service-explorer">
      <div className="service-toolbar">
        <div
          className="category-filters"
          role="group"
          aria-label="Filter capabilities"
        >
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
            >
              {item}
              {item === "All capabilities" && <span>{services.length}</span>}
            </button>
          ))}
        </div>
        <label className="service-search">
          <Icon name="search" />
          <span className="sr-only">Search capabilities</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find a capability"
          />
        </label>
      </div>
      <p className="results-count mono" role="status">
        {results.length} {results.length === 1 ? "capability" : "capabilities"}
        {category !== "All capabilities"
          ? ` in ${category.toLowerCase()}`
          : " across the AI stack"}
      </p>
      <div className="service-grid">
        {results.map((service) => (
          <Link
            className="service-card"
            key={service.slug}
            href={`/services/${service.slug}`}
          >
            <div className="service-card-top">
              <span className="service-icon">
                <Icon name={service.icon} />
              </span>
              <span className="mono">
                {service.number} / {service.category}
              </span>
              <Icon name="diagonal" className="card-arrow" />
            </div>
            <h2>{service.shortTitle}</h2>
            <p>{service.summary}</p>
            <div className="tag-list">
              {service.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
      {results.length === 0 && (
        <div className="empty-results">
          <Icon name="search" />
          <h2>No matching capabilities.</h2>
          <p>
            Try “MCP”, “agents”, “caching”, or tell us what you have in mind.
          </p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => {
              setCategory("All capabilities");
              setQuery("");
            }}
          >
            Reset filters
            <Icon name="arrow" />
          </button>
        </div>
      )}
    </div>
  );
}
