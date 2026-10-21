"use client";

import { useId, useState } from "react";
import { Icon } from "./icon";

const stages = [
  { title: "Receive", icon: "mail" },
  { title: "Plan", icon: "agent" },
  { title: "Use tools", icon: "connect" },
  { title: "Review", icon: "shield" },
  { title: "Complete", icon: "check" },
];
const scenarios = [
  {
    name: "Accounts",
    icon: "receipt",
    prompt: "Can you prepare this invoice for approval?",
    tools: "Inbox + accounting system + your team",
    steps: [
      "An invoice arrives in the approved finance inbox.",
      "The agent identifies the supplier, amount, and purchase order to check.",
      "It checks accounting records and flags duplicate invoices or mismatches.",
      "Finance reviews the proposed entry and approves the next action.",
      "The approved entry is recorded with its source and review history.",
    ],
  },
  {
    name: "HR",
    icon: "people",
    prompt: "Let’s get our new teammate ready for day one.",
    tools: "SharePoint + Teams + Power Automate",
    steps: [
      "An approved new-hire record starts the onboarding workflow.",
      "The agent prepares a checklist for the role and start date.",
      "It gathers approved documents and drafts IT and manager tasks.",
      "HR reviews the welcome pack and managers approve access requests.",
      "Approved tasks are assigned and outstanding items stay visible.",
    ],
  },
  {
    name: "Creative",
    icon: "palette",
    prompt: "Turn this approved story into a campaign draft.",
    tools: "Brand library + creative tools + your team",
    steps: [
      "A brief arrives with approved source material and channel requirements.",
      "The agent outlines messages, formats, and a creative checklist.",
      "It prepares draft copy, visual directions, and caption suggestions.",
      "Your creative team checks the brand, claims, and asset rights.",
      "Approved material is packaged for the agreed publishing workflow.",
    ],
  },
];

export function AgentWorkflow() {
  const [scenario, setScenario] = useState(0);
  const [stage, setStage] = useState(3);
  const id = useId();
  const selected = scenarios[scenario];
  return (
    <div className="agent-workflow">
      <div className="workflow-decoration decoration-star" aria-hidden="true">
        <Icon name="sparkles" />
      </div>
      <div className="workflow-decoration decoration-note" aria-hidden="true">
        A little help.
        <br />
        <strong>A big possibility.</strong>
        <span>↗</span>
      </div>
      <div className="agent-workflow-board">
        <div className="workflow-board-top">
          <span>
            <span className="board-dot" /> YOUR WORK, CONNECTED
          </span>
          <span className="example-badge">Example</span>
        </div>
        <div className="workflow-persona">
          <span className="persona-avatar">
            <Icon name={selected.icon} />
          </span>
          <div>
            <span className="card-kicker">Meet your</span>
            <h2>
              {selected.name.toLowerCase()} agent
              <span className="persona-spark">✳</span>
            </h2>
          </div>
        </div>
        <div
          className="workflow-scenarios"
          role="group"
          aria-label="Choose an example agent"
        >
          {scenarios.map((item, index) => (
            <button
              type="button"
              key={item.name}
              aria-pressed={index === scenario}
              onClick={() => {
                setScenario(index);
                setStage(0);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="workflow-prompt">
          <Icon name="chat" />
          <p>“{selected.prompt}”</p>
        </div>
        <ol
          className="agent-stage-list"
          aria-label="Explore the workflow steps"
        >
          {stages.map((item, index) => (
            <li key={item.title}>
              <button
                type="button"
                aria-pressed={stage === index}
                aria-controls={`${id}-detail`}
                onClick={() => setStage(index)}
              >
                <span>
                  <Icon name={item.icon} />
                </span>
                {item.title}
              </button>
            </li>
          ))}
        </ol>
        <div
          id={`${id}-detail`}
          className={`agent-stage-detail ${stage === 3 ? "review-stage" : ""}`}
          aria-live="polite"
        >
          <span className="detail-step">
            0{stage + 1} / {stages[stage].title}
          </span>
          <p>{selected.steps[stage]}</p>
        </div>
        <div className="workflow-board-bottom">
          <Icon name="connect" />
          <span>{selected.tools}</span>
        </div>
      </div>
      <div className="workflow-caption">
        <span className="status-dot" />
        Illustrative workflow · Built around your people
      </div>
    </div>
  );
}
