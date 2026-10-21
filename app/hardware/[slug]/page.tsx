import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "../../../components/icon";
import { BreadcrumbSchema, JsonLd } from "../../../components/json-ld";
import {
  Breadcrumbs,
  ProjectCta,
  SectionHeading,
} from "../../../components/sections";
import { getHardware, hardware, hardwareServices } from "../../../lib/hardware";
import { pageMetadata, SITE_URL } from "../../../lib/site";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return hardware.map((item) => ({ slug: item.slug }));
}
export async function generateMetadata({ params }: Props) {
  const item = getHardware((await params).slug);
  if (!item) notFound();
  return pageMetadata(
    `${item.name} Sourcing & Installation`,
    `Discuss ${item.name} with AIMS Singapore. Workload sizing, supplier quotations, installation, local inference configuration, and support.`,
    `/hardware/${item.slug}`,
  );
}

export default async function HardwareDetailPage({ params }: Props) {
  const item = getHardware((await params).slug);
  if (!item) notFound();
  const enquiry = `/contact?hardware=${item.slug}`;
  return (
    <>
      <section className="container page-intro">
        <Breadcrumbs
          items={[{ name: "Hardware", href: "/hardware" }, { name: item.name }]}
        />
        <div className="hardware-detail-hero">
          <div>
            <p className="eyebrow">
              <span />
              {item.category} / {item.family}
            </p>
            <h1>{item.name}.</h1>
            <p className="page-lead">{item.summary}</p>
            <div className="button-row">
              <Link href={enquiry} className="button">
                Request a configuration & quote <Icon name="diagonal" />
              </Link>
              <Link href="/hardware#hardware-catalogue" className="text-link">
                Compare hardware <Icon name="arrow" />
              </Link>
            </div>
            <p className="intro-note">
              Configuration, availability, and commercial terms confirmed by
              quotation.
            </p>
          </div>
          <div className="hardware-detail-chip" aria-hidden="true">
            <span className="card-kicker">{item.family}</span>
            <div className="chip-mini">
              <Icon
                name={
                  item.category === "CPU platforms" ? "environment" : "server"
                }
              />
            </div>
            <span>{item.category}</span>
          </div>
        </div>
      </section>
      <section className="section container hardware-fit-grid">
        <div>
          <p className="eyebrow">
            <span />
            START WITH THE WORKLOAD
          </p>
          <h2>
            The right fit
            <br />
            <span className="muted-heading">starts with the details.</span>
          </h2>
          <p className="section-description">{item.fit}</p>
          <div className="deployment-note">
            <strong>Deployment approach</strong>
            <p>{item.deployment}</p>
          </div>
        </div>
        <div className="hardware-considerations">
          <h3>What we assess with you</h3>
          <ul>
            {item.considerations.map((point) => (
              <li key={point}>
                <Icon name="check" />
                {point}
              </li>
            ))}
          </ul>
          <p>{item.note}</p>
        </div>
      </section>
      <section className="agent-example-section">
        <div className="container section">
          <SectionHeading
            eyebrow="FROM REQUIREMENT TO RUNNING SYSTEM"
            title="A clear scope, from the start."
          />
          <ol className="hardware-scope-list">
            {item.scope.map((point, index) => (
              <li key={point}>
                <span className="step-number">0{index + 1}</span>
                <p>{point}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="THE SERVICES AROUND YOUR HARDWARE"
          title="More than the compute."
        />
        <div className="hardware-service-grid">
          {hardwareServices.map((service) => (
            <article key={service.title}>
              <span className="service-stage">
                <Icon name={service.icon} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <ProjectCta
        href={enquiry}
        title={<>Let’s size the possibilities.</>}
        text="Share your models, expected usage, budget, location, and target deployment window. We’ll confirm the right configuration and sourcing options."
        label="Discuss this hardware"
      />
      <BreadcrumbSchema
        items={[
          { name: "Hardware", path: "/hardware" },
          { name: item.name, path: `/hardware/${item.slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${SITE_URL}/hardware/${item.slug}#service`,
          name: `${item.name} sourcing and installation`,
          description: item.summary,
          url: `${SITE_URL}/hardware/${item.slug}`,
          serviceType: "AI hardware sourcing, installation, and configuration",
          provider: { "@id": `${SITE_URL}/#organization` },
          areaServed: { "@type": "Country", name: "Singapore" },
        }}
      />
    </>
  );
}
