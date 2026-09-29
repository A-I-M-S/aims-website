export const solutions = [
  {
    id: "operations",
    label: "Business operations",
    icon: "workflow",
    eyebrow: "Less manual work. More forward motion.",
    title: "Keep work moving across your business.",
    text: "Connect incoming requests, documents, and business systems into an accountable workflow. Let automation handle the handoffs while people focus on exceptions and decisions.",
    steps: [
      {
        label: "Incoming request",
        detail: "Email, form, or event",
        icon: "mail",
      },
      {
        label: "Understand & route",
        detail: "Extract, validate, classify",
        icon: "agent",
      },
      {
        label: "Review & approve",
        detail: "Your policy. Your control.",
        icon: "shield",
      },
      {
        label: "Update your systems",
        detail: "CRM, finance, operations",
        icon: "connect",
      },
    ],
    outcomes: [
      "Fewer manual handoffs",
      "Visible exception handling",
      "A traceable path from request to result",
    ],
    services: [
      "workflow-automation",
      "api-mcp-integration",
      "agentic-environments",
    ],
    measure: "Cycle time · rework · cost per completed task",
  },
  {
    id: "customer-experience",
    label: "Customer experience",
    icon: "chat",
    eyebrow: "Useful answers. Meaningful action.",
    title: "Give every conversation the right context.",
    text: "Build an assistant that understands your products, checks live information, and helps customers take the next step. Make escalation to your team a first-class part of the experience.",
    steps: [
      {
        label: "Customer question",
        detail: "Web chat or application",
        icon: "chat",
      },
      {
        label: "Retrieve context",
        detail: "Approved knowledge & policy",
        icon: "knowledge",
      },
      {
        label: "Use approved tools",
        detail: "Check status. Prepare action.",
        icon: "connect",
      },
      {
        label: "Resolve or hand over",
        detail: "With the context attached",
        icon: "check",
      },
    ],
    outcomes: [
      "Answers grounded in your knowledge",
      "Controlled actions through your tools",
      "A clearer handover to human support",
    ],
    services: ["ai-copilots", "rag-model-fine-tuning", "api-mcp-integration"],
    measure: "Answer quality · resolution · response latency",
  },
  {
    id: "engineering",
    label: "Product & engineering",
    icon: "code",
    eyebrow: "Faster iteration. Engineering discipline.",
    title: "Give your engineers a capable AI teammate.",
    text: "Connect coding agents to repository context, isolated workspaces, and delivery pipelines. Turn a scoped task into a reviewable change with the checks your team expects.",
    steps: [
      {
        label: "A scoped task",
        detail: "Requirements & repository context",
        icon: "code",
      },
      {
        label: "Agent workspace",
        detail: "Implement in an isolated runtime",
        icon: "environment",
      },
      {
        label: "Validate & review",
        detail: "Tests, checks, human judgement",
        icon: "shield",
      },
      {
        label: "Release with control",
        detail: "Your CI/CD and approval gates",
        icon: "workflow",
      },
    ],
    outcomes: [
      "More focused engineering time",
      "Reviewable changes with useful context",
      "A repeatable path through your quality gates",
    ],
    services: [
      "coding-agents-cicd",
      "agent-harness-engineering",
      "llm-gateway-caching",
    ],
    measure: "Lead time · rework · release reliability",
  },
];
