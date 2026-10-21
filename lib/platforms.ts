export type Platform = {
  slug: string;
  name: string;
  mark: string;
  category: "Workflow automation" | "Microsoft AI" | "Agent building";
  colour: "teal" | "coral" | "yellow" | "violet";
  description: string;
  example: string;
  bestFor: string;
  service: string;
};

export const platforms: Platform[] = [
  {
    slug: "make",
    name: "Make",
    mark: "M",
    category: "Workflow automation",
    colour: "violet",
    description:
      "Visual workflows that connect apps, transform data, and handle multi-step business processes.",
    example:
      "Turn a website enquiry into a CRM record, prepare a tailored reply, and notify the account owner.",
    bestFor: "Visual integrations across business apps",
    service: "workflow-automation",
  },
  {
    slug: "n8n",
    name: "n8n",
    mark: "n8n",
    category: "Workflow automation",
    colour: "coral",
    description:
      "Flexible workflow orchestration with custom logic, AI steps, and self-hosting options.",
    example:
      "Read supplier invoices, check purchasing records, and send discrepancies to an approval queue.",
    bestFor: "Custom logic and controlled hosting",
    service: "workflow-automation",
  },
  {
    slug: "zapier",
    name: "Zapier",
    mark: "Z",
    category: "Workflow automation",
    colour: "yellow",
    description:
      "Connect supported applications around events and actions your team already understands.",
    example:
      "Capture a new booking, prepare onboarding tasks, and keep your CRM and team notifications aligned.",
    bestFor: "Everyday SaaS handoffs",
    service: "workflow-automation",
  },
  {
    slug: "power-automate",
    name: "Power Automate",
    mark: "PA",
    category: "Workflow automation",
    colour: "teal",
    description:
      "Automate cloud and desktop processes with Microsoft connectors, approvals, and supported AI capabilities.",
    example:
      "Extract document details, route a Teams approval, and update a SharePoint list or finance system.",
    bestFor: "Microsoft workflows and approvals",
    service: "microsoft-copilot",
  },
  {
    slug: "microsoft-365-copilot",
    name: "Microsoft 365 Copilot",
    mark: "C",
    category: "Microsoft AI",
    colour: "violet",
    description:
      "Help teams use Copilot effectively across eligible Microsoft 365 experiences, with appropriate access and adoption guidance.",
    example:
      "Prepare a meeting brief, summarise an approved document, and draft an update using work context.",
    bestFor: "Everyday productivity and staff adoption",
    service: "microsoft-copilot",
  },
  {
    slug: "copilot-studio",
    name: "Copilot Studio",
    mark: "CS",
    category: "Microsoft AI",
    colour: "coral",
    description:
      "Build business agents connected to approved knowledge and actions within your Microsoft environment.",
    example:
      "Create an HR assistant in Teams that cites policies and routes onboarding requests for approval.",
    bestFor: "Custom agents for Microsoft environments",
    service: "microsoft-copilot",
  },
  {
    slug: "dify",
    name: "Dify",
    mark: "D",
    category: "Agent building",
    colour: "teal",
    description:
      "Build knowledge-connected AI applications and workflows with configurable models and integrations.",
    example:
      "Create an internal knowledge assistant with source-backed answers and an escalation route.",
    bestFor: "RAG applications and AI workflows",
    service: "ai-copilots",
  },
  {
    slug: "flowise",
    name: "Flowise",
    mark: "F",
    category: "Agent building",
    colour: "yellow",
    description:
      "Prototype and assemble AI workflows visually, then scope the controls needed for production use.",
    example:
      "Test a product-support assistant against approved documents before connecting it to your helpdesk.",
    bestFor: "Visual AI prototyping",
    service: "rag-model-fine-tuning",
  },
  {
    slug: "langgraph",
    name: "LangGraph",
    mark: "LG",
    category: "Agent building",
    colour: "violet",
    description:
      "Engineer stateful agent workflows with explicit steps, persistence, and human review points.",
    example:
      "Coordinate research, drafting, and review agents that produce a single evidence-backed project brief.",
    bestFor: "Custom, stateful agent systems",
    service: "agent-harness-engineering",
  },
  {
    slug: "uipath",
    name: "UiPath",
    mark: "Ui",
    category: "Workflow automation",
    colour: "coral",
    description:
      "Connect supported desktop and business processes where APIs alone do not cover the work.",
    example:
      "Prepare records for a legacy application and send uncertain fields to an operator before submission.",
    bestFor: "Desktop automation and legacy systems",
    service: "workflow-automation",
  },
];
