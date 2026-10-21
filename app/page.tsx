import Link from "next/link";
import { AgentWorkflow } from "../components/agent-workflow";
import { AgentCard } from "../components/agent-card";
import { Icon } from "../components/icon";
import { SolutionExplorer } from "../components/solution-explorer";
import {
  FaqSection,
  ProcessSection,
  ProjectCta,
  SectionHeading,
} from "../components/sections";
import { InsightCard } from "../components/insight-card";
import { agents } from "../lib/agents";
import { insights } from "../lib/insights";
import { homeFaqs } from "../lib/site";

const paths = [
  {
    number: "01",
    colour: "blue",
    icon: "workflow",
    label: "AI & AUTOMATION",
    title: "Make the everyday extraordinary.",
    description:
      "Connect your tools, clear the repetitive work, and give your team time to move forward.",
    links: [
      { label: "Workflow automation", href: "/services/workflow-automation" },
      {
        label: "Microsoft Copilot & agents",
        href: "/services/microsoft-copilot",
      },
      {
        label: "AI strategy & team adoption",
        href: "/services/ai-transformation-strategy",
      },
    ],
  },
  {
    number: "02",
    colour: "coral",
    icon: "agent",
    label: "YOUR AGENTIC TEAM",
    title: "Good people. Great AI teammates.",
    description:
      "Purpose-built agents for the roles and responsibilities that make your business yours.",
    links: [
      { label: "Explore sample agents", href: "/agents" },
      { label: "Custom agents & copilots", href: "/services/ai-copilots" },
      {
        label: "Knowledge, RAG & integrations",
        href: "/services/rag-model-fine-tuning",
      },
    ],
  },
  {
    number: "03",
    colour: "yellow",
    icon: "server",
    label: "HARDWARE & PRIVATE AI",
    title: "Big intelligence. On your terms.",
    description:
      "From a local AI workstation to enterprise GPU systems. Source it, install it, put it to work.",
    links: [
      { label: "NVIDIA hardware catalogue", href: "/hardware" },
      {
        label: "Local inference & monitoring",
        href: "/services/private-ai-inference",
      },
      {
        label: "Data & cloud foundations",
        href: "/services/data-cloud-foundations",
      },
    ],
  },
];

export default function Home() {
  return (
    <>
      <section className="transformation-hero" aria-labelledby="hero-heading">
        <div className="container transformation-hero-grid">
          <div className="transformation-hero-copy">
            <p className="hero-pill">
              <span className="status-dot" />
              AGENTIC TRANSFORMATION, MADE HUMAN
            </p>
            <h1 id="hero-heading">
              Put AI to work.
              <br />
              Make room for
              <br />
              <span className="hero-highlight">
                what’s next.
                <svg
                  viewBox="0 0 400 18"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4 13Q180-3 396 9" />
                </svg>
              </span>
            </h1>
            <p className="hero-description">
              AI agents, connected workflows, and private AI infrastructure.
              Built around your business. Designed to give your people more
              possibility.
            </p>
            <div className="button-row">
              <Link
                className="button"
                href="/contact?service=ai-transformation-strategy"
              >
                Let’s find your next step <Icon name="diagonal" />
              </Link>
              <Link href="/agents" className="hero-secondary">
                Meet your AI team <Icon name="arrow" />
              </Link>
            </div>
            <div className="hero-location">
              <Icon name="globe" />
              <span>Singapore based. Possibilities everywhere.</span>
            </div>
          </div>
          <AgentWorkflow />
        </div>
        <div className="container hero-promise">
          <span>
            <Icon name="check" />
            Your tools, connected
          </span>
          <span>
            <Icon name="check" />
            Your people, in control
          </span>
          <span>
            <Icon name="check" />
            From idea to everyday impact
          </span>
          <a href="#possibilities">
            Find your possibility <span>↓</span>
          </a>
        </div>
      </section>
      <section className="platform-ribbon" aria-label="Platforms we build with">
        <div className="container platform-ribbon-inner">
          <p>
            Familiar tools.
            <br />
            <strong>Fresh possibilities.</strong>
          </p>
          <div>
            {[
              { name: "Make", className: "make" },
              { name: "n8n", className: "n8n" },
              { name: "Zapier", className: "zapier" },
              { name: "Power Automate", className: "power" },
              { name: "Copilot Studio", className: "copilot" },
            ].map((tool) => (
              <Link
                href="/platforms"
                key={tool.name}
                className={`ribbon-tool ribbon-${tool.className}`}
              >
                <span aria-hidden="true">
                  {tool.name === "Make"
                    ? "▥"
                    : tool.name === "Zapier"
                      ? "✳"
                      : tool.name === "n8n"
                        ? "⌘"
                        : "◈"}
                </span>
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container" id="possibilities">
        <SectionHeading
          eyebrow="A connected world of possibilities"
          title={
            <>
              Your next advantage.
              <br />
              <span className="muted-heading">Let’s build it together.</span>
            </>
          }
          text="Start with the work you want to improve. We bring the strategy, software, and hardware together to make it happen."
        >
          <Link href="/services" className="text-link">
            Explore all services <Icon name="arrow" />
          </Link>
        </SectionHeading>
        <div className="path-grid">
          {paths.map((path) => (
            <article
              key={path.number}
              className={`path-card tone-${path.colour}`}
            >
              <div className="path-card-top">
                <span className="card-kicker">
                  {path.number} / {path.label}
                </span>
                <span className="path-icon">
                  <Icon name={path.icon} />
                </span>
              </div>
              <h3>{path.title}</h3>
              <p>{path.description}</p>
              <div className="path-links">
                {path.links.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                    <Icon name="diagonal" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="agent-preview-section">
        <div className="section container">
          <SectionHeading
            eyebrow="Meet the helping hands"
            title={
              <>
                A team full of possibility.
                <br />
                <span className="muted-heading">
                  Built for your kind of work.
                </span>
              </>
            }
            text="An organised admin. A helpful HR teammate. A creative head start. Explore sample agents we can tailor to your workflows and connect to your tools."
          >
            <Link href="/agents" className="text-link">
              Meet all {agents.length} sample agents <Icon name="arrow" />
            </Link>
          </SectionHeading>
          <div className="agent-grid">
            {agents
              .filter((agent) =>
                [
                  "admin-agent",
                  "hr-agent",
                  "accounts-agent",
                  "developer-agent",
                  "designer-agent",
                  "videographer-agent",
                ].includes(agent.slug),
              )
              .map((agent) => (
                <AgentCard agent={agent} key={agent.slug} />
              ))}
          </div>
          <div className="section-footnote">
            <Icon name="sparkles" />
            <p>
              Plus project management, sales, support, procurement, research,
              and marketing. These are example solutions we can build around
              your business.
            </p>
            <Link href="/agents">
              Find your agent <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section container" id="use-cases">
        <SectionHeading
          eyebrow="From a little spark to a working system"
          title={
            <>
              What could a better
              <br />
              <span className="muted-heading">workday look like?</span>
            </>
          }
          text="See how agents, automation, and human judgement work together. Every workflow starts with a real business need."
        >
          <Link href="/solutions" className="text-link">
            Explore business solutions <Icon name="arrow" />
          </Link>
        </SectionHeading>
        <SolutionExplorer />
      </section>
      <section className="hardware-home-section">
        <div className="container hardware-home-grid">
          <div>
            <p className="eyebrow">
              <span />
              YOUR INFRASTRUCTURE. YOUR POSSIBILITIES.
            </p>
            <h2>
              Power your AI.
              <br />
              <span>Keep it close.</span>
            </h2>
            <p>
              Bring AI to your own environment. We source NVIDIA GPUs and
              systems, install the hardware, and configure local inference that
              fits your models, your people, and your space.
            </p>
            <div className="hardware-home-points">
              <span>
                <Icon name="check" />
                Sourcing & hardware sales
              </span>
              <span>
                <Icon name="check" />
                Onsite installation & configuration
              </span>
              <span>
                <Icon name="check" />
                Local inference & ongoing support
              </span>
            </div>
            <Link className="button" href="/hardware">
              Explore AI hardware <Icon name="diagonal" />
            </Link>
          </div>
          <div
            className="hardware-illustration"
            aria-label="NVIDIA hardware and private AI services"
          >
            <div className="hardware-illustration-top">
              <span className="card-kicker">YOUR PRIVATE AI STACK</span>
              <Icon name="server" />
            </div>
            <div className="rack-graphic" aria-hidden="true">
              {["COMPUTE", "MODELS", "YOUR WORK"].map((label, index) => (
                <div className="rack-unit" key={label}>
                  <span className="rack-dots">
                    <i />
                    <i />
                  </span>
                  <span className="rack-grille">
                    {Array.from({ length: 14 }, (_, i) => (
                      <i key={i} />
                    ))}
                  </span>
                  <span>{label}</span>
                  <span className={`rack-light rack-light-${index}`} />
                </div>
              ))}
            </div>
            <div className="hardware-family-list">
              <span>H20 / H100 / H200</span>
              <span>B200 / B300 / GB300</span>
              <span>Vera & Rubin platforms</span>
            </div>
            <p>
              From local workstations to enterprise systems.
              <br />
              Configuration and availability confirmed by quote.
            </p>
            <Link href="/services/gpu-hardware-services" className="text-link">
              From sourcing to support <Icon name="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <ProcessSection />
      <section className="industry-section">
        <div className="container">
          <SectionHeading
            eyebrow="Different teams. Shared possibility."
            title="Made for how you work."
            text="We start with your processes, people, and goals. Here are a few places the conversation can begin."
          />
          <div className="industry-grid">
            {[
              {
                title: "Professional services",
                text: "Meeting notes, project updates, document research, and client onboarding.",
                icon: "board",
                href: "/agents/project-manager-agent",
              },
              {
                title: "Retail & customer teams",
                text: "Product answers, order enquiries, CRM handoffs, and customer support.",
                icon: "chat",
                href: "/agents/support-agent",
              },
              {
                title: "Finance & operations",
                text: "Invoice preparation, supplier comparisons, approvals, and reconciliations.",
                icon: "receipt",
                href: "/agents/accounts-agent",
              },
              {
                title: "Creative & product teams",
                text: "Design briefs, video preparation, campaign drafts, and software delivery.",
                icon: "palette",
                href: "/services/creative-ai-workflows",
              },
            ].map((item) => (
              <Link href={item.href} key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>
                  Explore the possibilities <Icon name="arrow" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section container" id="insights">
        <SectionHeading
          eyebrow="A little clarity goes a long way"
          title={
            <>
              Good questions.
              <br />
              <span className="muted-heading">Fresh perspectives.</span>
            </>
          }
        >
          <Link href="/insights" className="text-link">
            All insights <Icon name="arrow" />
          </Link>
        </SectionHeading>
        <div className="insight-grid">
          {insights.slice(0, 3).map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
      <FaqSection faqs={homeFaqs} />
      <ProjectCta
        title={
          <>
            Your next chapter?
            <br />
            Let’s make it a bright one.
          </>
        }
        text="Bring us the repetitive task, the big idea, or the question you’re still figuring out. We’ll help you find a practical place to start."
        label="Let’s talk possibilities"
      />
    </>
  );
}
