import Link from "next/link";
import type { Agent } from "../lib/agents";
import { Icon } from "./icon";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className={`agent-card tone-${agent.colour}`}>
      <div className="agent-card-top">
        <span className="role-icon">
          <Icon name={agent.icon} />
        </span>
        <span className="card-kicker">{agent.category}</span>
        <Icon name="sparkles" />
      </div>
      <h3>
        <Link href={`/agents/${agent.slug}`}>
          {agent.name}
          <Icon name="diagonal" />
        </Link>
      </h3>
      <p className="agent-tagline">{agent.tagline}</p>
      <p>{agent.description}</p>
      <div className="agent-card-bottom">
        <span>{agent.tools.slice(0, 2).join(" + ")}</span>
        <span>
          Explore agent <Icon name="arrow" />
        </span>
      </div>
    </article>
  );
}
