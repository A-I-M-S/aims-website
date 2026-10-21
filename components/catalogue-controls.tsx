"use client";

import { Icon } from "./icon";

export function CatalogueControls({
  categories,
  category,
  onCategory,
  query,
  onQuery,
  label,
  placeholder,
}: {
  categories: string[];
  category: string;
  onCategory: (category: string) => void;
  query: string;
  onQuery: (query: string) => void;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="catalogue-controls">
      <div
        className="category-filters"
        role="group"
        aria-label={`Filter ${label}`}
      >
        {categories.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={item === category}
            onClick={() => onCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <label className="service-search">
        <Icon name="search" />
        <span className="sr-only">Search {label}</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
}

export function EmptyCatalogue({ onReset }: { onReset: () => void }) {
  return (
    <div className="empty-results">
      <Icon name="search" />
      <h2>No matches just yet.</h2>
      <p>
        Try a different search or reset the filters to see all the
        possibilities.
      </p>
      <button type="button" className="button button-outline" onClick={onReset}>
        Reset filters <Icon name="arrow" />
      </button>
    </div>
  );
}
