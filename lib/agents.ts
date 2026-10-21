export type AgentCategory =
  | "Operations"
  | "People & finance"
  | "Product & creative"
  | "Customer growth";

export type Agent = {
  slug: string;
  name: string;
  category: AgentCategory;
  icon: string;
  colour: "blue" | "coral" | "yellow" | "violet";
  tagline: string;
  description: string;
  tasks: string[];
  tools: string[];
  example: string;
  steps: { title: string; detail: string }[];
  review: string;
  measures: string[];
  services: string[];
};

export const agents: Agent[] = [
  {
    slug: "admin-agent",
    name: "Admin agent",
    category: "Operations",
    icon: "calendar",
    colour: "blue",
    tagline: "A little less admin. A lot more headspace.",
    description:
      "Turn a busy inbox into organised requests, prepared replies, and coordinated calendars. An admin agent connects the small tasks that keep your business moving.",
    tasks: [
      "Classify incoming emails and route requests to the right owner.",
      "Prepare meeting agendas, notes, and follow-up tasks.",
      "Suggest available meeting times and keep records up to date.",
    ],
    tools: ["Microsoft 365", "Google Workspace", "n8n", "Make"],
    example:
      "A customer emails to arrange a project meeting. The agent identifies the project, checks approved calendars, drafts a reply with available times, and prepares the agenda.",
    steps: [
      {
        title: "Read the request",
        detail:
          "Identify the customer, project, and meeting purpose from an authorised inbox.",
      },
      {
        title: "Find the context",
        detail: "Check calendar availability and the relevant CRM record.",
      },
      {
        title: "Prepare the next step",
        detail: "Draft a reply and agenda for your review.",
      },
      {
        title: "Close the loop",
        detail:
          "After approval, send the invitation and create the follow-up tasks.",
      },
    ],
    review:
      "Your team approves external replies, calendar commitments, and changes to sensitive records.",
    measures: [
      "Time spent on scheduling",
      "Requests reaching the correct owner",
      "Follow-ups completed on time",
    ],
    services: ["workflow-automation", "ai-copilots", "api-mcp-integration"],
  },
  {
    slug: "hr-agent",
    name: "HR agent",
    category: "People & finance",
    icon: "people",
    colour: "coral",
    tagline: "Make every first day a good one.",
    description:
      "Help employees find policy answers and help HR coordinate onboarding, document collection, and routine requests, with access scoped to each employee’s role.",
    tasks: [
      "Answer policy questions with links to approved HR documents.",
      "Prepare onboarding checklists and remind the right people about outstanding tasks.",
      "Collect leave or training requests and route them for approval.",
    ],
    tools: [
      "Copilot Studio",
      "SharePoint",
      "Microsoft Teams",
      "Power Automate",
    ],
    example:
      "An approved new-hire record starts a coordinated onboarding workflow. HR, IT, and the hiring manager receive the tasks relevant to them, while the new employee receives a reviewed welcome pack.",
    steps: [
      {
        title: "Receive an approved hire",
        detail:
          "Use the confirmed start date, role, and manager from your HR system.",
      },
      {
        title: "Build the checklist",
        detail:
          "Prepare role-specific documents, equipment requests, and introductions.",
      },
      {
        title: "Coordinate the people",
        detail:
          "Route access and document requests to HR, IT, and the manager.",
      },
      {
        title: "Track readiness",
        detail:
          "Surface outstanding tasks and produce a first-day readiness summary.",
      },
    ],
    review:
      "People make hiring, pay, performance, and employment decisions. HR approves employee communications and access requests.",
    measures: [
      "Onboarding tasks ready before day one",
      "Time to find a policy answer",
      "Requests escalated with complete context",
    ],
    services: [
      "microsoft-copilot",
      "rag-model-fine-tuning",
      "workflow-automation",
    ],
  },
  {
    slug: "accounts-agent",
    name: "Accounts agent",
    category: "People & finance",
    icon: "receipt",
    colour: "yellow",
    tagline: "From paperwork to approval-ready.",
    description:
      "Give your finance team a head start on invoice processing, reconciliation, and payment follow-ups. Connect documents to accounting records and make exceptions easy to review.",
    tasks: [
      "Extract invoice fields and check for missing details or duplicates.",
      "Compare invoices with purchase orders and flag mismatches.",
      "Prepare reconciliation summaries and draft payment reminders.",
    ],
    tools: ["Xero", "QuickBooks", "Power Automate", "Make"],
    example:
      "A supplier invoice arrives by email. The agent extracts its details, checks the purchase order and duplicate records, and prepares a draft accounting entry with the source document attached.",
    steps: [
      {
        title: "Capture the invoice",
        detail: "Read the document and retain a link to the original.",
      },
      {
        title: "Check the details",
        detail:
          "Match supplier, amounts, and purchase order; flag uncertain fields.",
      },
      {
        title: "Prepare for approval",
        detail: "Create a draft entry and route discrepancies to finance.",
      },
      {
        title: "Record the outcome",
        detail:
          "After approval, update the accounting system and keep an audit trail.",
      },
    ],
    review:
      "Finance approves accounting entries, tax treatment, supplier changes, payment reminders, and every payment release.",
    measures: [
      "Invoice handling time",
      "Duplicate and mismatch detection",
      "Drafts accepted without correction",
    ],
    services: [
      "workflow-automation",
      "api-mcp-integration",
      "agent-harness-engineering",
    ],
  },
  {
    slug: "developer-agent",
    name: "Developer agent",
    category: "Product & creative",
    icon: "code",
    colour: "violet",
    tagline: "A capable teammate for your next build.",
    description:
      "Turn scoped engineering tasks into reviewable code changes. Give an agent repository context, a controlled workspace, and your team’s testing and review requirements.",
    tasks: [
      "Investigate bugs and propose changes with supporting context.",
      "Implement scoped features, tests, and documentation updates.",
      "Prepare pull requests and explain changes for a human reviewer.",
    ],
    tools: ["GitHub Copilot", "GitHub", "GitLab", "LangGraph"],
    example:
      "A developer assigns a reproducible bug. The agent inspects relevant code, proposes a fix in an isolated workspace, runs available checks, and prepares a pull request for review.",
    steps: [
      {
        title: "Understand the ticket",
        detail:
          "Gather requirements, repository guidance, and reproduction steps.",
      },
      {
        title: "Implement a change",
        detail: "Work in an isolated branch with scoped tool access.",
      },
      {
        title: "Validate the result",
        detail: "Run the agreed checks and report failures or coverage gaps.",
      },
      {
        title: "Request review",
        detail:
          "Prepare a change description and hand over for merge and release.",
      },
    ],
    review:
      "Your engineers review code, approve merges, and control production releases and access to credentials.",
    measures: [
      "Lead time for scoped tasks",
      "Review rework",
      "Checks passing before review",
    ],
    services: [
      "coding-agents-cicd",
      "agent-harness-engineering",
      "agentic-environments",
    ],
  },
  {
    slug: "project-manager-agent",
    name: "Project manager agent",
    category: "Operations",
    icon: "board",
    colour: "blue",
    tagline: "Keep the moving parts moving together.",
    description:
      "Connect meeting notes, delivery boards, and project updates. Help project managers see blockers, prepare status reports, and follow up on actions without chasing every system.",
    tasks: [
      "Turn meeting notes into proposed actions, owners, and due dates.",
      "Summarise progress and identify overdue dependencies.",
      "Draft stakeholder updates from the current project record.",
    ],
    tools: ["Jira", "Asana", "Microsoft Teams", "n8n"],
    example:
      "After a weekly delivery meeting, the agent compares agreed actions with the project board, proposes updates, and prepares a status summary with source links for the project manager.",
    steps: [
      {
        title: "Gather the update",
        detail: "Read approved meeting notes and current project records.",
      },
      {
        title: "Connect the dependencies",
        detail: "Identify proposed actions, missing owners, and blockers.",
      },
      {
        title: "Review the plan",
        detail: "Ask the project manager to confirm scope, owners, and dates.",
      },
      {
        title: "Keep everyone aligned",
        detail:
          "Apply approved board updates and prepare the stakeholder summary.",
      },
    ],
    review:
      "The project manager approves scope, budgets, deadlines, task assignments, and external status updates.",
    measures: [
      "Time to prepare project updates",
      "Actions with a clear owner",
      "Overdue dependencies surfaced",
    ],
    services: ["workflow-automation", "ai-copilots", "api-mcp-integration"],
  },
  {
    slug: "designer-agent",
    name: "Designer agent",
    category: "Product & creative",
    icon: "palette",
    colour: "coral",
    tagline: "More room for your next good idea.",
    description:
      "Support designers from brief to first concept. Organise references, explore visual directions, and prepare asset variations around your brand guidelines and review process.",
    tasks: [
      "Translate a brief into a creative checklist and moodboard direction.",
      "Prepare draft layouts, campaign copy, and visual variations.",
      "Check asset dimensions and package approved designs for handover.",
    ],
    tools: ["Figma", "Canva", "Adobe Firefly", "Make"],
    example:
      "A new campaign needs social and presentation assets. The agent organises the brief, proposes concepts using approved brand references, and prepares variations for the designer to refine.",
    steps: [
      {
        title: "Understand the brief",
        detail: "Collect the audience, message, formats, and brand references.",
      },
      {
        title: "Explore directions",
        detail: "Prepare concepts and draft copy for a creative review.",
      },
      {
        title: "Refine with a designer",
        detail: "Turn the selected direction into draft format variations.",
      },
      {
        title: "Prepare the handover",
        detail: "Organise approved exports, dimensions, and usage notes.",
      },
    ],
    review:
      "A designer approves creative direction, asset rights, accessibility, brand consistency, and publication.",
    measures: [
      "Time to the first reviewed concept",
      "Revision rounds",
      "Asset handover completeness",
    ],
    services: ["creative-ai-workflows", "workflow-automation", "ai-copilots"],
  },
  {
    slug: "videographer-agent",
    name: "Videographer agent",
    category: "Product & creative",
    icon: "video",
    colour: "yellow",
    tagline: "From the first brief to the final frame.",
    description:
      "Help video teams plan shoots, organise footage, and prepare scripts, captions, and edit notes. Combine creative tools with a workflow that keeps the producer in control.",
    tasks: [
      "Draft scripts, storyboards, interview prompts, and shot lists.",
      "Transcribe supplied footage and suggest clips or rough-cut sequences.",
      "Prepare caption drafts and plans for different channels and aspect ratios.",
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Runway", "Make"],
    example:
      "A team provides approved interview footage for a product story. The agent prepares a transcript, identifies candidate quotes, and proposes a short-form edit plan with captions for the editor.",
    steps: [
      {
        title: "Plan the story",
        detail: "Turn the approved brief into a script outline and shot list.",
      },
      {
        title: "Organise the footage",
        detail: "Transcribe and tag supplied media using supported tools.",
      },
      {
        title: "Prepare the edit",
        detail: "Suggest time-coded clips, captions, and version requirements.",
      },
      {
        title: "Review the final cut",
        detail:
          "An editor checks timing, claims, rights, and the final exports.",
      },
    ],
    review:
      "A producer or editor approves likeness and music rights, factual claims, final edits, and distribution. Filming remains a production task.",
    measures: [
      "Time to prepare transcripts and edit notes",
      "Caption correction rate",
      "Version preparation time",
    ],
    services: [
      "creative-ai-workflows",
      "workflow-automation",
      "private-ai-inference",
    ],
  },
  {
    slug: "sales-agent",
    name: "Sales agent",
    category: "Customer growth",
    icon: "growth",
    colour: "violet",
    tagline: "Give every good lead a thoughtful next step.",
    description:
      "Organise incoming leads, prepare account context, and help sales teams respond with relevant next steps. Connect enquiry forms, CRM records, and approved outreach workflows.",
    tasks: [
      "Capture enquiries and check for duplicate CRM records.",
      "Summarise stated needs and route leads using agreed criteria.",
      "Prepare follow-up drafts and meeting briefs for account owners.",
    ],
    tools: ["HubSpot", "Salesforce", "Zapier", "Make"],
    example:
      "A prospect asks about a private AI deployment. The agent captures the enquiry, summarises the stated workload and timeline, and prepares a relevant discovery email for the account owner.",
    steps: [
      {
        title: "Capture the enquiry",
        detail:
          "Record consented contact information and the stated requirements.",
      },
      {
        title: "Prepare context",
        detail:
          "Check existing account history and classify the requested service.",
      },
      {
        title: "Agree the response",
        detail: "Draft a relevant follow-up for the salesperson to review.",
      },
      {
        title: "Track the next step",
        detail: "Update the CRM and schedule an approved reminder.",
      },
    ],
    review:
      "Sales approves outreach, quotations, commercial commitments, and any changes to lead qualification rules.",
    measures: [
      "Time to prepare a lead response",
      "CRM record completeness",
      "Follow-up completion",
    ],
    services: ["workflow-automation", "ai-copilots", "api-mcp-integration"],
  },
  {
    slug: "support-agent",
    name: "Customer support agent",
    category: "Customer growth",
    icon: "chat",
    colour: "blue",
    tagline: "Helpful answers. A smoother handover.",
    description:
      "Connect customer questions to approved product knowledge and live order information. Handle routine requests within clear permissions and hand over complex cases with context.",
    tasks: [
      "Answer common questions with references to approved information.",
      "Check order or ticket status through authorised integrations.",
      "Prepare a case summary and route exceptions to your support team.",
    ],
    tools: ["Zendesk", "Freshdesk", "Copilot Studio", "Dify"],
    example:
      "A customer asks about a delayed delivery. The agent verifies the permitted account context, checks order status, explains the available information, and escalates an exception with its findings attached.",
    steps: [
      {
        title: "Understand the request",
        detail:
          "Identify the question and check the user’s permitted account context.",
      },
      {
        title: "Find a grounded answer",
        detail: "Retrieve approved policy and relevant order details.",
      },
      {
        title: "Offer the next step",
        detail: "Explain the answer or prepare a permitted action.",
      },
      {
        title: "Hand over when needed",
        detail: "Attach the conversation and evidence to a support ticket.",
      },
    ],
    review:
      "Your team sets escalation rules and approves refunds, account changes, and exceptions outside the agent’s permissions.",
    measures: [
      "Grounded answer quality",
      "Correct escalation rate",
      "Time spent preparing handovers",
    ],
    services: ["ai-copilots", "rag-model-fine-tuning", "api-mcp-integration"],
  },
  {
    slug: "research-agent",
    name: "Research & knowledge agent",
    category: "Operations",
    icon: "knowledge",
    colour: "violet",
    tagline: "Find the useful answer in all that information.",
    description:
      "Help teams search approved documents, compare sources, and prepare evidence-backed briefs. Keep source references visible and distinguish what is known from what needs checking.",
    tasks: [
      "Search internal knowledge with the user’s access permissions.",
      "Summarise long documents and compare stated requirements.",
      "Prepare research briefs with citations and open questions.",
    ],
    tools: ["SharePoint", "Google Drive", "Dify", "Flowise"],
    example:
      "A team needs to compare several supplier proposals. The agent extracts relevant commitments, links each point to its source, and prepares a comparison for a human decision-maker.",
    steps: [
      {
        title: "Define the question",
        detail: "Agree the research scope and permitted sources.",
      },
      {
        title: "Retrieve the evidence",
        detail: "Search documents while respecting access and freshness.",
      },
      {
        title: "Prepare a brief",
        detail: "Summarise findings with source references and uncertainties.",
      },
      {
        title: "Review the conclusions",
        detail: "A domain expert checks the evidence before acting.",
      },
    ],
    review:
      "A subject-matter expert validates conclusions and source suitability before business decisions or publication.",
    measures: [
      "Source citation accuracy",
      "Time to find relevant information",
      "Questions correctly left unresolved",
    ],
    services: ["rag-model-fine-tuning", "ai-copilots", "private-ai-inference"],
  },
  {
    slug: "procurement-agent",
    name: "Procurement agent",
    category: "People & finance",
    icon: "package",
    colour: "yellow",
    tagline: "Bring the right details to the buying decision.",
    description:
      "Prepare sourcing requests, organise supplier responses, and compare quotations against agreed requirements. Make missing specifications and commercial differences easier to spot.",
    tasks: [
      "Turn approved requirements into a draft request for quotation.",
      "Compare supplier quotes, lead times, and warranty terms.",
      "Prepare purchase-request packs and track order milestones.",
    ],
    tools: ["Microsoft 365", "Google Sheets", "n8n", "ERP APIs"],
    example:
      "Your team is sourcing inference servers. The agent organises supplier quotes around GPU configuration, delivery, installation, and warranty, then flags missing details for procurement review.",
    steps: [
      {
        title: "Capture the requirements",
        detail:
          "Use the approved specifications, budget range, and delivery needs.",
      },
      {
        title: "Organise quotations",
        detail: "Extract supplier-stated configurations and commercial terms.",
      },
      {
        title: "Compare the gaps",
        detail: "Highlight differences and prepare clarification questions.",
      },
      {
        title: "Prepare the approval",
        detail: "Package the evidence for procurement and budget owners.",
      },
    ],
    review:
      "Procurement approves suppliers, sends requests, negotiates terms, and authorises purchase orders and payments.",
    measures: [
      "Time to compare quotations",
      "Missing specifications identified",
      "Purchase-request completeness",
    ],
    services: ["workflow-automation", "ai-copilots", "api-mcp-integration"],
  },
  {
    slug: "marketing-agent",
    name: "Marketing agent",
    category: "Customer growth",
    icon: "sparkles",
    colour: "coral",
    tagline: "Keep the ideas flowing and the brand consistent.",
    description:
      "Connect campaign planning, content drafts, and performance reporting. Help marketers turn approved material into useful channel variations and a consistent publishing plan.",
    tasks: [
      "Prepare content calendars and drafts from an approved campaign brief.",
      "Repurpose approved articles into email and social copy.",
      "Summarise campaign data and propose questions for the next experiment.",
    ],
    tools: ["HubSpot", "Canva", "Buffer", "Make"],
    example:
      "An approved webinar becomes a draft email, social posts, and a follow-up sequence. The agent keeps source links and channel requirements together for the marketer’s review.",
    steps: [
      {
        title: "Start with approved material",
        detail: "Collect the campaign objective, audience, and source assets.",
      },
      {
        title: "Prepare channel drafts",
        detail: "Adapt messages to each format and your brand guidance.",
      },
      {
        title: "Review and schedule",
        detail: "Route copy and creative to the designated approvers.",
      },
      {
        title: "Learn from the campaign",
        detail: "Summarise available metrics without inventing attribution.",
      },
    ],
    review:
      "Marketing approves claims, audience targeting, budgets, and every item before it is published or scheduled.",
    measures: [
      "Time to prepare a campaign pack",
      "Brand review corrections",
      "Publishing plan completeness",
    ],
    services: ["creative-ai-workflows", "workflow-automation", "ai-copilots"],
  },
];

export function getAgent(slug: string) {
  return agents.find((agent) => agent.slug === slug);
}
