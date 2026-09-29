import Link from "next/link";
import type { Insight } from "../lib/insights";
import { Icon } from "./icon";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link className="insight-card" href={`/insights/${insight.slug}`}>
      <div
        className={`insight-visual insight-visual-${insight.icon}`}
        aria-hidden="true"
      >
        <div className="insight-orbit orbit-a" />
        <div className="insight-orbit orbit-b" />
        <div className="insight-orbit orbit-c" />
        <div className="insight-visual-icon">
          <Icon name={insight.icon} />
        </div>
        <span className="mono">AIMS / FIELD NOTES</span>
        <Icon name="diagonal" />
      </div>
      <div className="insight-card-copy">
        <div className="insight-meta">
          <span>{insight.category}</span>
          <span>{insight.readTime}</span>
        </div>
        <h3>{insight.title}</h3>
        <p>{insight.description}</p>
        <span className="text-link">
          Read the guide
          <Icon name="arrow" />
        </span>
      </div>
    </Link>
  );
}
