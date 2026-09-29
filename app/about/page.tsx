import Link from "next/link";
import {
  Breadcrumbs,
  ProjectCta,
  SectionHeading,
} from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { Icon } from "../../components/icon";
import { founders, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "About AIMS — AI Engineering in Singapore",
  "Meet AIMS, a Singapore-based AI engineering and infrastructure partner. We connect business understanding with practical automation, agents, and AI systems.",
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <section className="page-intro container">
        <Breadcrumbs items={[{ name: "Company" }]} />
        <p className="eyebrow">
          <span />
          A.I. Management Services
        </p>
        <h1>
          Practical by nature.
          <br />
          <span className="accent">Ambitious by design.</span>
        </h1>
        <p className="page-lead">
          We believe the value of AI shows up in the work it helps people do.
          AIMS brings business understanding and technical implementation
          together to make that value tangible.
        </p>
      </section>
      <section className="section container about-story" id="about">
        <div>
          <p className="eyebrow">
            <span />
            Why we exist
          </p>
          <h2>
            A bridge between
            <br />
            what’s possible
            <br />
            <span className="muted-heading">and what works.</span>
          </h2>
        </div>
        <div className="story-copy">
          <p className="large-copy">
            AI is becoming part of how organisations operate, build products,
            and serve people. Turning that possibility into something useful
            takes connected systems, thoughtful engineering, and a clear
            understanding of the business.
          </p>
          <p>
            AIMS was founded by three entrepreneurs from different business
            backgrounds with a shared belief: AI should be practical,
            accessible, and manageable. Our work connects that belief to
            implementation, from the first automated workflow to the
            infrastructure that supports a growing AI system.
          </p>
          <p>
            Based in Singapore, we work with business leaders, founders, and
            technical teams across Singapore and APAC, and welcome projects with
            a global reach.
          </p>
          <Link href="/services" className="text-link">
            Explore what we can build
            <Icon name="arrow" />
          </Link>
        </div>
      </section>
      <section className="about-principles">
        <div className="container">
          <SectionHeading
            eyebrow="How we think"
            title="Good systems start with good principles."
          />
          <div className="solution-foundations">
            {[
              {
                icon: "workflow",
                title: "Understand the work first.",
                text: "The business problem decides the architecture. Start with the process, the people, and the outcome that matters.",
              },
              {
                icon: "connect",
                title: "Make the pieces work together.",
                text: "Knowledge, tools, agents, and infrastructure create more value when they form a coherent system around your existing stack.",
              },
              {
                icon: "shield",
                title: "Design for the people operating it.",
                text: "Clear controls, useful documentation, and a thoughtful handover make a system easier to trust, maintain, and improve.",
              },
            ].map((item) => (
              <article key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container" id="founders">
        <SectionHeading
          eyebrow="The people behind AIMS"
          title={
            <>
              Different perspectives.
              <br />
              <span className="muted-heading">One shared direction.</span>
            </>
          }
          text="Our founders bring perspectives from business development, operations, and technology adoption."
        />
        <div className="founder-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <a
                href={founder.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${founder.name} on LinkedIn (opens in a new tab)`}
              >
                <div className="founder-photo">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    width="640"
                    height="640"
                    loading="lazy"
                  />
                  <span className="founder-link">
                    <Icon name="diagonal" />
                  </span>
                </div>
                <div className="founder-title">
                  <h3>{founder.name}</h3>
                  <span>Co-founder</span>
                </div>
              </a>
              <p className="founder-focus">{founder.focus}</p>
              <p>{founder.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container location-panel">
        <div>
          <p className="eyebrow">
            <span />
            Our point of origin
          </p>
          <h2>
            Singapore based.
            <br />
            Outward looking.
          </h2>
          <p>29 Carpenter Street, Singapore 059923</p>
          <Link href="/contact" className="text-link">
            Start a conversation
            <Icon name="arrow" />
          </Link>
        </div>
        <div className="location-graphic" aria-hidden="true">
          <div className="location-rings" />
          <span className="location-dot" />
          <strong>SG</strong>
          <span className="mono">
            1.35° N / 103.82° E<br />
            UTC +08:00
          </span>
        </div>
      </section>
      <ProjectCta />
      <BreadcrumbSchema items={[{ name: "Company", path: "/about" }]} />
    </>
  );
}
