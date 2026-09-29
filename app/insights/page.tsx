import { Breadcrumbs, ProjectCta } from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { InsightCard } from "../../components/insight-card";
import { insights } from "../../lib/insights";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "Practical AI Engineering Insights",
  "Practical guides to RAG, model fine-tuning, MCP integration, and LLM caching. Understand the engineering decisions behind useful business AI with AIMS.",
  "/insights",
);

export default function InsightsPage() {
  return (
    <>
      <section className="container page-intro">
        <Breadcrumbs items={[{ name: "Insights" }]} />
        <p className="eyebrow">
          <span />
          Field notes from the AI stack
        </p>
        <h1>
          Less mystery.
          <br />
          <span className="accent">Better decisions.</span>
        </h1>
        <p className="page-lead">
          Clear explanations of the choices behind useful AI systems. For the
          people building them, buying them, and making them work.
        </p>
      </section>
      <section className="container section insight-index">
        <h2 className="sr-only">Practical AI guides</h2>
        <div className="insight-grid">
          {insights.map((insight) => (
            <InsightCard key={insight.slug} insight={insight} />
          ))}
        </div>
      </section>
      <ProjectCta
        title={
          <>
            Turn a better understanding
            <br />
            into a better system.
          </>
        }
        text="Let’s connect the concepts to your business, your data, and the way your team works."
      />
      <BreadcrumbSchema items={[{ name: "Insights", path: "/insights" }]} />
    </>
  );
}
