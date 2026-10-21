import { ServiceExplorer } from "../../components/service-explorer";
import { Breadcrumbs, ProjectCta } from "../../components/sections";
import { BreadcrumbSchema, JsonLd } from "../../components/json-ld";
import { services } from "../../lib/services";
import { pageMetadata, SITE_URL } from "../../lib/site";

export const metadata = pageMetadata(
  "Agentic AI, Automation & Hardware Services Singapore",
  "Explore AIMS services for agentic transformation, Make and n8n automation, Microsoft Copilot, custom agents, NVIDIA hardware, and private AI in Singapore.",
  "/services",
);

export default function ServicesPage() {
  const previews = services.map(
    ({
      number,
      slug,
      shortTitle,
      title,
      summary,
      category,
      tags,
      icon,
      searchTerms,
    }) => ({
      number,
      slug,
      shortTitle,
      title,
      summary,
      category,
      tags,
      icon,
      searchTerms,
    }),
  );
  return (
    <>
      <section className="page-intro container">
        <Breadcrumbs items={[{ name: "Capabilities" }]} />
        <p className="eyebrow">
          <span />
          {services.length} capabilities. A connected whole.
        </p>
        <h1>
          Everything between
          <br />
          <span className="accent">an idea and impact.</span>
        </h1>
        <p className="page-lead">
          Start with a workflow, an AI teammate, or the infrastructure to run
          your next idea. Explore practical automation, agentic transformation,
          Microsoft AI, and hardware services built around your business.
        </p>
      </section>
      <section
        className="container section catalogue-section"
        aria-label="AI service catalogue"
      >
        <ServiceExplorer services={previews} />
      </section>
      <div className="container scope-note">
        <span className="mono">BUILT TO FIT</span>
        <p>
          Every engagement starts with your goals, existing systems, and
          constraints. Scope, delivery, and ongoing support are agreed before
          implementation.
        </p>
      </div>
      <ProjectCta
        title={
          <>
            Not sure where to start?
            <br />
            That’s a good place to begin.
          </>
        }
        text="Tell us where work slows down or what you want to make possible. We’ll help you identify the right first step."
      />
      <BreadcrumbSchema items={[{ name: "Capabilities", path: "/services" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AIMS AI capabilities",
          itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `${SITE_URL}/services/${service.slug}`,
          })),
        }}
      />
    </>
  );
}
