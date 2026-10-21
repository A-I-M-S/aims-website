"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { Hardware } from "../lib/hardware";
import { matchesSearch } from "../lib/catalogue";
import { CatalogueControls, EmptyCatalogue } from "./catalogue-controls";
import { Icon } from "./icon";

export function HardwareExplorer({ hardware }: { hardware: Hardware[] }) {
  const [category, setCategory] = useState("All hardware");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const comparison = useRef<HTMLDivElement>(null);
  const results = hardware.filter(
    (item) =>
      (category === "All hardware" || item.category === category) &&
      matchesSearch(query, [
        item.name,
        item.family,
        item.summary,
        item.fit,
        item.note,
      ]),
  );
  const compared = hardware.filter((item) => selected.includes(item.slug));
  function toggle(slug: string) {
    setSelected((current) =>
      current.includes(slug)
        ? current.filter((value) => value !== slug)
        : current.length < 3
          ? [...current, slug]
          : current,
    );
  }
  return (
    <>
      <CatalogueControls
        categories={[
          "All hardware",
          "GPU accelerators",
          "AI systems",
          "CPU platforms",
        ]}
        category={category}
        onCategory={setCategory}
        query={query}
        onQuery={setQuery}
        label="hardware"
        placeholder="Try H100, B300, or Rubin"
      />
      <div className="catalogue-results">
        <p className="results-count" role="status">
          {results.length} {results.length === 1 ? "option" : "options"} ·{" "}
          {selected.length} of 3 selected for comparison
        </p>
        <span className="catalogue-help">Select up to three to compare.</span>
      </div>
      {compared.length > 0 && (
        <div className="comparison-selection">
          <p>
            <strong>{compared.length} selected</strong>
            <span>{compared.map((item) => item.name).join(" · ")}</span>
          </p>
          <a
            href="#hardware-comparison"
            className="button button-small"
            onClick={() => comparison.current?.focus()}
          >
            View comparison <Icon name="arrow" />
          </a>
          <button
            type="button"
            className="text-link"
            onClick={() => setSelected([])}
          >
            Clear selection
          </button>
        </div>
      )}
      <div className="hardware-grid">
        {results.map((item) => (
          <article className="hardware-card" key={item.slug}>
            <div className="hardware-card-visual" aria-hidden="true">
              <div className="chip-mini">
                <Icon
                  name={
                    item.category === "CPU platforms" ? "environment" : "server"
                  }
                />
              </div>
              <span>{item.family}</span>
            </div>
            <div className="hardware-card-copy">
              <span className="card-kicker">{item.category}</span>
              <h3>
                <Link href={`/hardware/${item.slug}`}>
                  {item.name} <Icon name="diagonal" />
                </Link>
              </h3>
              <p>{item.summary}</p>
              <span className="availability-label">
                Availability confirmed by quote
              </span>
              <div className="hardware-card-actions">
                <Link
                  href={`/contact?hardware=${item.slug}`}
                  className="text-link"
                >
                  Request a quote <Icon name="arrow" />
                </Link>
                <label className="compare-toggle">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.slug)}
                    disabled={
                      selected.length === 3 && !selected.includes(item.slug)
                    }
                    onChange={() => toggle(item.slug)}
                  />
                  <span>
                    Compare<span className="sr-only"> {item.name}</span>
                  </span>
                </label>
              </div>
            </div>
          </article>
        ))}
      </div>
      {results.length === 0 && (
        <EmptyCatalogue
          onReset={() => {
            setCategory("All hardware");
            setQuery("");
          }}
        />
      )}
      {compared.length > 0 && (
        <div
          className="hardware-comparison"
          id="hardware-comparison"
          ref={comparison}
          tabIndex={-1}
        >
          <div className="comparison-heading">
            <h2>Find the right fit.</h2>
            <p>
              Compare deployment needs, then confirm the exact specification
              with us.
            </p>
          </div>
          <div
            className="table-scroll"
            role="region"
            aria-label="Hardware comparison"
            tabIndex={0}
          >
            <table>
              <caption className="sr-only">
                Selected hardware requirements and deployment comparison
              </caption>
              <thead>
                <tr>
                  <th scope="col">Consideration</th>
                  {compared.map((item) => (
                    <th scope="col" key={item.slug}>
                      {item.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Platform family", key: "family" },
                  { label: "Hardware type", key: "category" },
                  { label: "Workload fit", key: "fit" },
                  { label: "Deployment", key: "deployment" },
                ].map((row) => (
                  <tr key={row.key}>
                    <th scope="row">{row.label}</th>
                    {compared.map((item) => (
                      <td key={item.slug}>
                        {
                          item[
                            row.key as
                              | "family"
                              | "category"
                              | "fit"
                              | "deployment"
                          ]
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row">What to confirm</th>
                  {compared.map((item) => (
                    <td key={item.slug}>
                      <ul>
                        {item.considerations.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <Link
            className="button"
            href={`/contact?hardware=${compared.map((item) => item.slug).join(",")}`}
          >
            Discuss these options <Icon name="diagonal" />
          </Link>
        </div>
      )}
    </>
  );
}
