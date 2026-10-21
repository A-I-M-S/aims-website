import { AgentExplorer } from "../../components/agent-explorer";
import { BreadcrumbSchema, JsonLd } from "../../components/json-ld";
import { Breadcrumbs, FaqSection, ProjectCta } from "../../components/sections";
import { agents } from "../../lib/agents";
import { pageMetadata, SITE_URL } from "../../lib/site";

export const metadata = pageMetadata(
  "AI Agents for Admin, HR, Accounts & Creative Teams",
  "Explore custom AI agents for admin, HR, accounts, development, project management, design, and video. Built by AIMS around your workflows in Singapore.",
  "/agents",
);

export default function AgentsPage() {
  return (
    <>
      <section className="container page-intro catalogue-intro">
        <Breadcrumbs items={[{ name: "AI agents" }]} />
        <p className="eyebrow">
          <span />
          GOOD PEOPLE. GREAT AI TEAMMATES.
        </p>
        <h1>
          AI agents for your team.
          <br />
          <span className="accent">Possibility for everyone.</span>
        </h1>
        <p className="page-lead">
          An extra hand for the admin. A head start for the designer. A clearer
          day for the project manager. Explore {agents.length} sample agents we
          can create around the way your business works.
        </p>
        <p className="intro-note">
          Illustrative solutions, tailored to your tools, permissions, and
          review process.
        </p>
      </section>
      <section
        className="container catalogue-section"
        aria-label="Sample AI agent catalogue"
      >
        <AgentExplorer agents={agents} />
      </section>
      <FaqSection
        path="/agents"
        faqs={[
          {
            question: "Are these ready-made agents I can use immediately?",
            answer:
              "These are examples of agents AIMS can build and configure for your business. We agree the scope, connect your authorised tools and data, evaluate the workflow, and train the people using it before launch.",
          },
          {
            question: "Can several agents work together?",
            answer:
              "Yes. For example, an admin agent can prepare a request for an accounts or project agent. We design shared context, permissions, handoffs, and review points so each role has a clear responsibility.",
          },
          {
            question: "Can I choose the tools and where an agent runs?",
            answer:
              "We work with supported platforms such as n8n, Make, Copilot Studio, Dify, Flowise, and custom agent frameworks. Cloud, private, and hybrid options depend on model capabilities, integrations, licences, and operating requirements.",
          },
          {
            question: "What happens when an agent is unsure?",
            answer:
              "The workflow should surface uncertainty, retain useful context, and send the request to a person. We agree the review gates, escalation conditions, and evaluation examples during implementation.",
          },
        ]}
      />
      <ProjectCta
        title={
          <>
            Your role. Your workflow.
            <br />
            Your kind of agent.
          </>
        }
        text="Start with the task you wish you had more help with. We’ll explore what an agent could do, which tools it needs, and how your team stays in control."
        label="Let’s design your agent"
      />
      <BreadcrumbSchema items={[{ name: "AI agents", path: "/agents" }]} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Sample AI agents AIMS can build",
          itemListElement: agents.map((agent, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: agent.name,
            url: `${SITE_URL}/agents/${agent.slug}`,
          })),
        }}
      />
    </>
  );
}
