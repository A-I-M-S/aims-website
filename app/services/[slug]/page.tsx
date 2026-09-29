import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../../components/icon";
import {
  Breadcrumbs,
  FaqSection,
  ProjectCta,
  SectionHeading,
  ServiceCard,
} from "../../../components/sections";
import { BreadcrumbSchema, JsonLd } from "../../../components/json-ld";
import { getService, services } from "../../../lib/services";
import { pageMetadata, SITE_URL } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return pageMetadata(
    service.title,
    service.description,
    `/services/${service.slug}`,
  );
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const enquiry = `/contact?service=${service.slug}`;
  const related = services.filter((item) =>
    service.related.includes(item.slug),
  );
  return (
    <>
      <section className="container page-intro service-intro">
        <Breadcrumbs
          items={[
            { name: "Capabilities", href: "/services" },
            { name: service.shortTitle },
          ]}
        />
        <div className="service-hero-grid">
          <div>
            <p className="eyebrow">
              <span />
              {service.number} / {service.category}
            </p>
            <h1>{service.title}</h1>
            <p className="page-lead">{service.summary}</p>
            <div className="button-row">
              <Link href={enquiry} className="button">
                Discuss this capability
                <Icon name="diagonal" />
              </Link>
              <a href="#what-we-build" className="text-link">
                See what’s included
                <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="service-emblem" aria-hidden="true">
            <div className="emblem-ring" />
            <div className="emblem-ring ring-two" />
            <div className="emblem-core">
              <Icon name={service.icon} />
            </div>
            <span className="emblem-number">{service.number}</span>
            <div className="emblem-caption mono">
              AIMS / {service.category.toUpperCase()}
            </div>
          </div>
        </div>
      </section>
      <section className="section container service-overview">
        <div>
          <p className="eyebrow">
            <span />
            The opportunity
          </p>
          <h2>{service.headline}</h2>
        </div>
        <div>
          <p className="large-copy">{service.introduction}</p>
          <div className="tag-list">
            {service.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>
      <section className="section deliverables-section" id="what-we-build">
        <div className="container">
          <SectionHeading
            eyebrow="From scope to system"
            title="What we build with you."
            text="A focused implementation, shaped around your systems, data, and operating requirements."
          />
          <div className="deliverables-grid">
            {service.deliverables.map((item, index) => (
              <article key={item.title}>
                <span className="mono accent">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section container service-example">
        <div className="example-copy">
          <p className="eyebrow">
            <span />
            An example in practice
          </p>
          <h2>{service.example.title}</h2>
          <p>{service.example.text}</p>
          <p className="example-label mono">ILLUSTRATIVE USE CASE</p>
        </div>
        <div className="example-flow">
          {service.example.steps.map((step, index) => (
            <div key={step}>
              <span className="mono">0{index + 1}</span>
              <strong>{step}</strong>
              <Icon
                name={
                  index === service.example.steps.length - 1 ? "check" : "arrow"
                }
              />
            </div>
          ))}
        </div>
      </section>
      <section className="measure-section">
        <div className="container measure-grid">
          <div>
            <p className="eyebrow">
              <span />
              Define success early
            </p>
            <h2>
              Measure the work.
              <br />
              Improve the outcome.
            </h2>
            <p>
              We agree on relevant baselines and acceptance criteria before
              implementation. Depending on your scope, these may include:
            </p>
          </div>
          <ul>
            {service.measures.map((measure) => (
              <li key={measure}>
                <Icon name="check" />
                {measure}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FaqSection
        faqs={service.faqs}
        path={`/services/${service.slug}`}
        title="A closer look."
      />
      <section className="section related-section container">
        <SectionHeading
          eyebrow="Better, connected"
          title="Part of a bigger picture."
          text="Combine this capability with the right pieces of your AI stack."
        />
        <div className="related-grid">
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </section>
      <ProjectCta
        href={enquiry}
        label="Discuss your project"
        text="Bring us your requirements. We’ll help turn them into a clear scope and a practical path forward."
      />
      <BreadcrumbSchema
        items={[
          { name: "Capabilities", path: "/services" },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/services/${service.slug}#service`,
          name: service.title,
          description: service.description,
          serviceType: service.title,
          url: `${SITE_URL}/services/${service.slug}`,
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: [
            { "@type": "Country", name: "Singapore" },
            { "@type": "Place", name: "Asia-Pacific" },
          ],
          category: service.category,
        }}
      />
    </>
  );
}
