"use client";

import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { solutions } from "../lib/solutions";
import { Icon } from "./icon";

export function SolutionExplorer() {
  const [selected, setSelected] = useState(0);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeys(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % solutions.length;
    else if (event.key === "ArrowLeft")
      next = (index - 1 + solutions.length) % solutions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = solutions.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="solution-explorer">
      <div
        className="solution-tabs"
        role="tablist"
        aria-label="Explore an AI use case"
      >
        {solutions.map((solution, index) => (
          <button
            key={solution.id}
            type="button"
            role="tab"
            id={`${id}-tab-${index}`}
            aria-selected={selected === index}
            aria-controls={`${id}-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            onKeyDown={(event) => handleKeys(event, index)}
            onClick={() => setSelected(index)}
          >
            <Icon name={solution.icon} />
            {solution.label}
            <Icon name="arrow" />
          </button>
        ))}
      </div>
      {solutions.map((solution, index) => (
        <div
          key={solution.id}
          role="tabpanel"
          id={`${id}-panel-${index}`}
          aria-labelledby={`${id}-tab-${index}`}
          hidden={index !== selected}
          className="solution-panel"
          tabIndex={0}
        >
          <div className="solution-copy">
            <span className="mono accent">{solution.eyebrow}</span>
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <ul className="check-list">
              {solution.outcomes.map((outcome) => (
                <li key={outcome}>
                  <Icon name="check" />
                  {outcome}
                </li>
              ))}
            </ul>
            <Link
              href={`/services/${solution.services[0]}`}
              className="text-link"
            >
              Explore the capability
              <Icon name="arrow" />
            </Link>
          </div>
          <div className="workflow-diagram">
            <div className="diagram-heading">
              <span className="mono">
                WORKFLOW / {String(index + 1).padStart(2, "0")}
              </span>
              <span>Illustrative architecture</span>
            </div>
            <div className="workflow-steps">
              {solution.steps.map((step, stepIndex) => (
                <div key={step.label} className="workflow-step">
                  <div className="workflow-node">
                    <Icon name={step.icon} />
                  </div>
                  <div>
                    <span className="mono">0{stepIndex + 1}</span>
                    <strong>{step.label}</strong>
                    <p>{step.detail}</p>
                  </div>
                  <span className="step-indicator" />
                </div>
              ))}
            </div>
            <div className="diagram-measure">
              <span>MEASURE WHAT MATTERS</span>
              <p>{solution.measure}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
