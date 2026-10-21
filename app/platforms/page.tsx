import { PlatformExplorer } from "../../components/platform-explorer";
import { BreadcrumbSchema, JsonLd } from "../../components/json-ld";
import { Breadcrumbs, ProjectCta } from "../../components/sections";
import { platforms } from "../../lib/platforms";
import { pageMetadata, SITE_URL } from "../../lib/site";

export const metadata = pageMetadata(
  "Make, n8n, Zapier & Microsoft AI Automation",
  "Explore Make, n8n, Zapier, Power Automate, Copilot, Copilot Studio, and custom agent tools. Practical automation examples from AIMS Singapore.",
  "/platforms",
);

export default function PlatformsPage() {
  return (
    <>
      <section className="container page-intro catalogue-intro">
        <Breadcrumbs items={[{ name: "Platforms" }]} />
        <p className="eyebrow">
          <span />
          FAMILIAR TOOLS. CONNECTED POSSIBILITIES.
        </p>
        <h1>
          Your stack.
          <br />
          <span className="accent">Working better together.</span>
        </h1>
        <p className="page-lead">
          Make, n8n, Zapier, Power Automate, Copilot, and beyond. We help you
          choose the right tools, connect them to your business, and turn a
          promising idea into a useful workflow.
        </p>
        <p className="intro-note">
          Platform choices depend on your requirements, available integrations,
          licences, and hosting needs.
        </p>
      </section>
      <section
        className="container catalogue-section"
        aria-label="Automation and agent platforms"
      >
        <PlatformExplorer platforms={platforms} />
      </section>
      <div className="container scope-note">
        <span className="mono">THE WORK DECIDES THE TOOL</span>
        <p>
          We assess connectors, permissions, hosting, and ongoing operating
          costs before choosing a platform. Subscriptions and usage charges are
          scoped separately from implementation.
        </p>
      </div>
      <ProjectCta
        title={
          <>
            Start with the workflow.
            <br />
            We’ll connect the right tools.
          </>
        }
        text="Tell us what your team uses today and where work slows down. We’ll help you choose a practical way forward."
        href="/contact?service=workflow-automation"
        label="Discuss your workflow"
      />
      <BreadcrumbSchema items={[{ name: "Platforms", path: "/platforms" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Automation and AI platforms AIMS can implement",
          itemListElement: platforms.map((platform, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: platform.name,
            url: `${SITE_URL}/platforms#${platform.slug}`,
          })),
        }}
      />
    </>
  );
}
