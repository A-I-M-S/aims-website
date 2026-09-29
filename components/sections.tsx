import Link from "next/link";
import { Icon } from "./icon";
import { JsonLd } from "./json-ld";
import { SITE_URL, deliverySteps } from "../lib/site";
import type { Service } from "../lib/services";

export function SectionHeading({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {text && <p className="section-description">{text}</p>}
      </div>
      {children}
    </div>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="service-card" href={`/services/${service.slug}`}>
      <div className="service-card-top">
        <span className="service-icon">
          <Icon name={service.icon} />
        </span>
        <span className="mono">
          {service.number} / {service.category}
        </span>
        <Icon name="diagonal" className="card-arrow" />
      </div>
      <h3>{service.shortTitle}</h3>
      <p>{service.summary}</p>
      <div className="tag-list">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </Link>
  );
}

export function FaqSection({
  faqs,
  path = "/",
  title = "Good questions. Clear answers.",
}: {
  faqs: { question: string; answer: string }[];
  path?: string;
  title?: string;
}) {
  return (
    <section
      className="section faq-section container"
      aria-labelledby="faq-heading"
    >
      <div>
        <p className="eyebrow">
          <span />A little more clarity
        </p>
        <h2 id="faq-heading">{title}</h2>
        <p>Have something more specific in mind?</p>
        <Link className="text-link" href="/contact">
          Talk it through with us <Icon name="arrow" />
        </Link>
      </div>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>
              {faq.question}
              <span className="faq-toggle">
                <Icon name="plus" />
              </span>
            </summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${SITE_URL}${path}#faq`,
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
    </section>
  );
}

export function ProjectCta({
  title = (
    <>
      Your next advantage
      <br />
      starts here.
    </>
  ),
  text = "Bring us a workflow, a challenge, or an ambitious idea. Let’s find the right way to build it.",
  href = "/contact",
  label = "Let’s build something",
}: {
  title?: React.ReactNode;
  text?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="project-cta">
      <div className="container project-cta-inner">
        <div>
          <p className="eyebrow">
            <span />
            From ambition to action
          </p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <Link className="button button-dark" href={href}>
          {label}
          <Icon name="diagonal" />
        </Link>
        <div className="cta-lines" aria-hidden="true" />
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section container" id="approach">
      <SectionHeading
        eyebrow="The way we work"
        title={
          <>
            Ambitious thinking.
            <br />
            <span className="muted-heading">Disciplined delivery.</span>
          </>
        }
        text="A clear path from the first conversation to a system your team can depend on."
      />
      <div className="process-grid">
        {deliverySteps.map((step, index) => (
          <article key={step.label} className="process-step">
            <div className="process-top">
              <span className="process-number">0{index + 1}</span>
              <span className="mono">{step.label}</span>
              <Icon name="arrow" />
            </div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="process-output">
              <span>What you leave with</span>
              {step.output}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((item) => (
        <span key={item.name}>
          <Icon name="chevron" />
          {item.href ? (
            <Link href={item.href}>{item.name}</Link>
          ) : (
            <span aria-current="page">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
