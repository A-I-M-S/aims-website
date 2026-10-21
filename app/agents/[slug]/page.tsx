import Link from "next/link";
import { notFound } from "next/navigation";
import { AgentCard } from "../../../components/agent-card";
import { Icon } from "../../../components/icon";
import { BreadcrumbSchema, JsonLd } from "../../../components/json-ld";
import {
  Breadcrumbs,
  ProjectCta,
  SectionHeading,
  ServiceCard,
} from "../../../components/sections";
import { agents, getAgent } from "../../../lib/agents";
import { services } from "../../../lib/services";
import { pageMetadata, SITE_URL } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}
export async function generateMetadata({ params }: Props) {
  const agent = getAgent((await params).slug);
  if (!agent) notFound();
  return pageMetadata(
    `${agent.name} Development in Singapore`,
    `Explore an AI ${agent.name.toLowerCase()} for your business. ${agent.tagline} AIMS connects your tools, workflows, and human review.`,
    `/agents/${agent.slug}`,
  );
}

export default async function AgentPage({ params }: Props) {
  const agent = getAgent((await params).slug);
  if (!agent) notFound();
  const enquiry = `/contact?agent=${agent.slug}`;
  const related = agents
    .filter(
      (item) => item.category === agent.category && item.slug !== agent.slug,
    )
    .slice(0, 3);
  return (
    <>
      <section className="container page-intro">
        <Breadcrumbs
          items={[{ name: "AI agents", href: "/agents" }, { name: agent.name }]}
        />
        <div className="agent-detail-hero">
          <div>
            <p className="eyebrow">
              <span />
              {agent.category} / SAMPLE AGENT
            </p>
            <h1>Your AI {agent.name.toLowerCase()}.</h1>
            <p className="agent-detail-tagline">{agent.tagline}</p>
            <p className="page-lead">{agent.description}</p>
            <div className="button-row">
              <Link href={enquiry} className="button">
                Build this agent with us <Icon name="diagonal" />
              </Link>
              <a href="#agent-workflow" className="text-link">
                See an example <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className={`agent-detail-portrait tone-${agent.colour}`}>
            <span className="card-kicker">A LITTLE HELP WITH THE EVERYDAY</span>
            <span className="agent-portrait-icon">
              <Icon name={agent.icon} />
            </span>
            <strong>{agent.name}</strong>
            <span>Built around your people.</span>
            <Icon name="sparkles" />
          </div>
        </div>
      </section>
      <section className="section container agent-responsibilities">
        <div>
          <p className="eyebrow">
            <span />
            WHAT WE CAN BUILD
          </p>
          <h2>
            A useful hand.
            <br />
            <span className="muted-heading">A clear responsibility.</span>
          </h2>
          <p className="section-description">
            This is a starting point for discovery. We tailor the agent to the
            work, systems, and responsibilities in your business.
          </p>
        </div>
        <ul className="responsibility-list">
          {agent.tasks.map((task, index) => (
            <li key={task}>
              <span>0{index + 1}</span>
              <p>{task}</p>
              <Icon name="check" />
            </li>
          ))}
        </ul>
      </section>
      <section className="agent-example-section" id="agent-workflow">
        <div className="container section">
          <SectionHeading
            eyebrow="A day in the life"
            title="From request to a useful result."
            text={agent.example}
          />
          <ol className="agent-example-steps">
            {agent.steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>
          <p className="intro-note">
            Illustrative workflow. Integration capabilities and scope are
            confirmed during discovery.
          </p>
        </div>
      </section>
      <section className="section container agent-operating-grid">
        <div>
          <p className="eyebrow">
            <span />
            CONNECTED TO YOUR WORLD
          </p>
          <h2>
            Familiar tools.
            <br />A helpful new teammate.
          </h2>
          <div className="agent-tool-list">
            {agent.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
          <p>
            We assess supported APIs, connectors, licences, and hosting options
            before choosing the implementation.
          </p>
          <Link href="/platforms" className="text-link">
            Explore our platforms <Icon name="arrow" />
          </Link>
        </div>
        <div className="human-review-card">
          <Icon name="shield" />
          <h3>Your people stay in control.</h3>
          <p>{agent.review}</p>
          <h4>What we can measure</h4>
          <ul>
            {agent.measures.map((measure) => (
              <li key={measure}>{measure}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section container related-section">
        <SectionHeading
          eyebrow="THE CAPABILITIES BEHIND THE AGENT"
          title="A connected approach."
        />
        <div className="related-grid">
          {services
            .filter((service) => agent.services.includes(service.slug))
            .map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
        </div>
      </section>
      {related.length > 0 && (
        <section className="section container">
          <SectionHeading
            eyebrow="A LITTLE MORE POSSIBILITY"
            title="Meet a few more teammates."
          />
          <div className="agent-grid">
            {related.map((item) => (
              <AgentCard agent={item} key={item.slug} />
            ))}
          </div>
        </section>
      )}
      <ProjectCta
        href={enquiry}
        title={
          <>
            Let’s make this agent
            <br />
            work for your team.
          </>
        }
        text="Tell us about the process, the people, and the tools involved. We’ll shape a practical scope and a useful first workflow."
        label={`Discuss the ${agent.name.toLowerCase()}`}
      />
      <BreadcrumbSchema
        items={[
          { name: "AI agents", path: "/agents" },
          { name: agent.name, path: `/agents/${agent.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/agents/${agent.slug}#service`,
          name: `${agent.name} development`,
          description: agent.description,
          serviceType: "Custom AI agent development",
          url: `${SITE_URL}/agents/${agent.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "Singapore" },
            { "@type": "Place", name: "Asia-Pacific" },
          ],
        }}
      />
    </>
  );
}
