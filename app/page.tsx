import Link from "next/link";
import { IntelligenceVisual } from "../components/intelligence-visual";
import { Icon } from "../components/icon";
import { SolutionExplorer } from "../components/solution-explorer";
import {
  FaqSection,
  ProcessSection,
  ProjectCta,
  SectionHeading,
} from "../components/sections";
import { InsightCard } from "../components/insight-card";
import { services } from "../lib/services";
import { insights } from "../lib/insights";
import { homeFaqs } from "../lib/site";

const groups = [
  {
    category: "Automation",
    number: "01",
    title: (
      <>
        Make work
        <br />
        flow better.
      </>
    ),
    text: "Connect your people, processes, and applications. Put the repetitive work on a better path.",
    icon: "workflow",
    range: "01—03",
  },
  {
    category: "AI engineering",
    number: "02",
    title: (
      <>
        Build intelligence
        <br />
        into your business.
      </>
    ),
    text: "Create agents and knowledge systems designed around the way your organisation works.",
    icon: "agent",
    range: "04—07",
  },
  {
    category: "Infrastructure",
    number: "03",
    title: (
      <>
        Run AI on
        <br />
        your terms.
      </>
    ),
    text: "Take control of model access, inference, performance, and the cost of operating at scale.",
    icon: "server",
    range: "08—10",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-grid-background" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              AI ENGINEERING & INFRASTRUCTURE
            </p>
            <h1 id="hero-heading">
              Intelligence.
              <br />
              Engineered
              <br />
              <span>for impact.</span>
            </h1>
            <p className="hero-description">
              We build the agents, automation, and infrastructure that turn AI
              into a working part of your business.
            </p>
            <div className="button-row">
              <Link href="/contact" className="button">
                Build with AIMS
                <Icon name="diagonal" />
              </Link>
              <Link href="/services" className="button button-outline">
                Explore our capabilities
                <Icon name="arrow" />
              </Link>
            </div>
            <p className="hero-note">
              <span />
              Singapore based. Built for the real world.
            </p>
          </div>
          <IntelligenceVisual />
        </div>
        <div className="container hero-bottom">
          <span className="mono">
            FROM THE FIRST WORKFLOW TO THE FULL AI STACK
          </span>
          <a href="#services" className="scroll-cue">
            Discover what’s possible <span>↓</span>
          </a>
        </div>
      </section>

      <section className="foundation-strip" aria-label="Technology foundations">
        <div className="container foundation-inner">
          <p>
            Open standards.
            <br />
            <strong>Connected possibilities.</strong>
          </p>
          <div>
            {[
              "APIs & MCP",
              "Agent orchestration",
              "Knowledge & RAG",
              "Model infrastructure",
            ].map((label, index) => (
              <span key={label}>
                <span className="foundation-mark">
                  {["↗", "⌘", "◈", "⊞"][index]}
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="services">
        <SectionHeading
          eyebrow="Connected capabilities"
          title={
            <>
              The whole AI stack.
              <br />
              <span className="muted-heading">One engineering partner.</span>
            </>
          }
          text="From the workflow your team repeats every day to the infrastructure behind your next product. We connect the pieces that make AI useful."
        >
          <Link href="/services" className="text-link">
            Explore all 10 capabilities
            <Icon name="arrow" />
          </Link>
        </SectionHeading>
        <div className="capability-groups">
          {groups.map((group) => (
            <article
              className={`capability-group capability-group-${group.number}`}
              key={group.category}
            >
              <div className="capability-group-top">
                <span className="mono">
                  {group.number} / {group.category}
                </span>
                <Icon name={group.icon} />
              </div>
              <h3>{group.title}</h3>
              <p>{group.text}</p>
              <div className="capability-links">
                {services
                  .filter((service) => service.category === group.category)
                  .map((service) => (
                    <Link key={service.slug} href={`/services/${service.slug}`}>
                      <span className="mono">{service.number}</span>
                      {service.shortTitle}
                      <Icon name="diagonal" />
                    </Link>
                  ))}
              </div>
              <div className="capability-bottom mono">
                CAPABILITIES {group.range}
                <span>↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-section" id="use-cases">
        <div className="container">
          <SectionHeading
            eyebrow="Intelligence in practice"
            title={
              <>
                Built around the work.
                <br />
                <span className="muted-heading">Connected to the outcome.</span>
              </>
            }
            text="See how the right combination of tools, models, and human judgement can move a real business process forward."
          >
            <Link href="/solutions" className="text-link">
              Explore solutions
              <Icon name="arrow" />
            </Link>
          </SectionHeading>
          <SolutionExplorer />
        </div>
      </section>

      <section
        className="principles-strip container"
        aria-label="Our engineering principles"
      >
        {[
          {
            icon: "connect",
            title: "Your stack, connected.",
            text: "Work with the systems and data you already have.",
          },
          {
            icon: "shield",
            title: "Control, built in.",
            text: "Clear permissions, human approvals, and useful visibility.",
          },
          {
            icon: "code",
            title: "A clear handover.",
            text: "Documented systems your team can understand and operate.",
          },
        ].map((item) => (
          <div key={item.title}>
            <Icon name={item.icon} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <ProcessSection />

      <section className="model-access-section">
        <div className="container model-access-grid">
          <div>
            <p className="eyebrow">
              <span />
              Frontier model access
            </p>
            <h2>
              The right intelligence.
              <br />
              <span className="accent">The right terms.</span>
            </h2>
            <p>
              From capable everyday models to frontier reasoning. Find an access
              arrangement that fits your applications, expected usage, and
              operating requirements.
            </p>
            <div className="model-access-points">
              <span>
                <Icon name="check" />
                Workload-led model selection
              </span>
              <span>
                <Icon name="check" />
                Volume-based enquiries
              </span>
              <span>
                <Icon name="check" />
                Integration and usage planning
              </span>
            </div>
            <Link href="/services/frontier-model-access" className="button">
              Explore model access
              <Icon name="diagonal" />
            </Link>
            <p className="fine-print">
              Available models, regions, and commercial terms are confirmed
              during quotation.
            </p>
          </div>
          <div className="model-stack">
            <div className="model-stack-heading">
              <Icon name="models" />
              <span className="mono">MATCH THE MODEL TO THE WORK</span>
            </div>
            {[
              {
                title: "Reasoning",
                text: "Complex analysis & multi-step problems",
                icon: "agent",
              },
              {
                title: "Coding",
                text: "Development & engineering workflows",
                icon: "code",
              },
              {
                title: "Multimodal",
                text: "Text, images & richer context",
                icon: "environment",
              },
              {
                title: "Embeddings",
                text: "Retrieval, search & knowledge",
                icon: "knowledge",
              },
            ].map((model, index) => (
              <div className="model-stack-row" key={model.title}>
                <span className="mono">0{index + 1}</span>
                <Icon name={model.icon} />
                <div>
                  <strong>{model.title}</strong>
                  <span>{model.text}</span>
                </div>
                <Icon name="plus" />
              </div>
            ))}
            <div className="model-stack-footer">
              <span className="status-dot" />
              Access by enquiry. Scoped to your business.
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="insights">
        <SectionHeading
          eyebrow="A clearer perspective"
          title={
            <>
              Make your next AI decision
              <br />
              <span className="muted-heading">an informed one.</span>
            </>
          }
        >
          <Link href="/insights" className="text-link">
            Read our insights
            <Icon name="arrow" />
          </Link>
        </SectionHeading>
        <div className="insight-grid">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
      <FaqSection faqs={homeFaqs} />
      <ProjectCta />
    </>
  );
}
