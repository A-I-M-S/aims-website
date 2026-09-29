import Link from "next/link";
import { Icon } from "../../components/icon";
import { SolutionExplorer } from "../../components/solution-explorer";
import {
  Breadcrumbs,
  ProjectCta,
  SectionHeading,
} from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "AI Solutions for Business, Support & Engineering",
  "Explore practical AI solutions for business operations, customer experience, and engineering. Connect workflows, copilots, agents, and infrastructure with AIMS.",
  "/solutions",
);

export default function SolutionsPage() {
  return (
    <>
      <section className="container page-intro">
        <Breadcrumbs items={[{ name: "Solutions" }]} />
        <p className="eyebrow">
          <span />
          Business first. Intelligence throughout.
        </p>
        <h1>
          Start with the work.
          <br />
          <span className="accent">Build toward the outcome.</span>
        </h1>
        <p className="page-lead">
          Your goals decide the architecture. Explore how our capabilities come
          together around everyday operations, customer experiences, and
          engineering workflows.
        </p>
      </section>
      <section className="container solutions-page-explorer">
        <h2 className="sr-only">AI workflows in practice</h2>
        <SolutionExplorer />
      </section>
      <section className="section container">
        <SectionHeading
          eyebrow="Beyond the first use case"
          title={
            <>
              A foundation that grows
              <br />
              <span className="muted-heading">with your ambitions.</span>
            </>
          }
        />
        <div className="solution-foundations">
          {[
            {
              icon: "knowledge",
              title: "Make company knowledge useful.",
              text: "Connect policies, procedures, and product information to a permission-aware retrieval system. Give teams answers they can trace back to the source.",
              slug: "rag-model-fine-tuning",
              link: "Knowledge & RAG",
            },
            {
              icon: "server",
              title: "Operate on your terms.",
              text: "Choose hosted, private, or hybrid inference around data requirements and real workloads. Build monitoring and cost visibility into the deployment.",
              slug: "private-ai-inference",
              link: "Private AI infrastructure",
            },
            {
              icon: "gateway",
              title: "Bring usage under control.",
              text: "Connect applications to an LLM gateway for model routing, budgets, caching, and useful reporting. Give each workload a clear cost owner.",
              slug: "llm-gateway-caching",
              link: "LLM gateways & caching",
            },
          ].map((item) => (
            <article key={item.slug}>
              <Icon name={item.icon} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <Link href={`/services/${item.slug}`} className="text-link">
                {item.link}
                <Icon name="arrow" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <div className="container scope-note">
        <span className="mono">ARCHITECTURE FOLLOWS THE BUSINESS</span>
        <p>
          These workflows illustrate how capabilities can fit together. Your
          solution is scoped around your processes, data, permissions, and the
          outcomes you want to achieve.
        </p>
      </div>
      <ProjectCta
        title={
          <>
            What could work better
            <br />
            in your business?
          </>
        }
        text="Start with one process, one bottleneck, or one idea. We’ll help connect it to the right capabilities."
      />
      <BreadcrumbSchema items={[{ name: "Solutions", path: "/solutions" }]} />
    </>
  );
}
