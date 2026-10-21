export type ServiceCategory =
  | "Automation"
  | "AI engineering"
  | "Infrastructure";

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  icon:
    | "workflow"
    | "chat"
    | "connect"
    | "knowledge"
    | "agent"
    | "environment"
    | "code"
    | "gateway"
    | "server"
    | "models";
  summary: string;
  description: string;
  headline: string;
  introduction: string;
  tags: string[];
  searchTerms?: string[];
  deliverables: { title: string; text: string }[];
  example: { title: string; text: string; steps: string[] };
  measures: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "workflow-automation",
    title: "AI Workflow Automation & Process Optimisation",
    shortTitle: "Workflow automation",
    category: "Automation",
    icon: "workflow",
    summary:
      "Turn repetitive work into connected, dependable processes that give your team time back.",
    description:
      "AI workflow automation and process optimisation in Singapore. Connect your systems, reduce manual handoffs, and build measurable business workflows with AIMS.",
    headline: "Give your people their time back.",
    introduction:
      "The best automation starts with understanding the work. We map how information moves through your business, remove avoidable steps, and build workflows that combine deterministic rules with AI where judgement or unstructured data is involved.",
    tags: ["Make & n8n", "Zapier & Power Automate", "Human approvals"],
    searchTerms: [
      "Make",
      "n8n",
      "Zapier",
      "Power Automate",
      "UiPath",
      "CRM",
      "invoice",
      "HR",
      "accounts",
    ],
    deliverables: [
      {
        title: "Process discovery & prioritisation",
        text: "Map the current workflow, identify repetitive handoffs, and establish a baseline for time, error rates, and operating cost.",
      },
      {
        title: "Connected workflows",
        text: "Build with Make, n8n, Zapier, Power Automate, or UiPath where appropriate. Connect CRM, finance, documents, and internal applications through supported APIs, connectors, and webhooks.",
      },
      {
        title: "AI document & decision support",
        text: "Extract and classify information, draft responses, and route exceptions. Keep sensitive or consequential decisions behind an approval step.",
      },
      {
        title: "Resilience & operational visibility",
        text: "Build retries, duplicate protection, exception queues, and audit trails so your team can see what ran and recover when a dependency fails.",
      },
    ],
    example: {
      title: "From incoming invoice to approval-ready record.",
      text: "An illustrative finance workflow extracts invoice details, checks them against purchasing records, and prepares an approval. Exceptions go to a person with the relevant context attached.",
      steps: [
        "Receive invoice",
        "Extract & validate",
        "Route for approval",
        "Update finance system",
      ],
    },
    measures: [
      "Time spent per transaction",
      "Exception and rework rates",
      "Successful end-to-end completions",
      "Cost per completed workflow",
    ],
    faqs: [
      {
        question: "Does every workflow need an AI agent?",
        answer:
          "No. Predictable tasks often work best with conventional automation. We introduce AI when the task involves language, variable documents, or decisions that cannot be expressed cleanly as fixed rules.",
      },
      {
        question: "Can people still approve important actions?",
        answer:
          "Yes. Approval gates can sit before payments, record changes, outbound messages, or other consequential actions. The workflow should make the context and proposed action clear to the reviewer.",
      },
      {
        question: "How do you choose what to automate first?",
        answer:
          "We look at frequency, effort, error cost, integration complexity, and operational risk. An initial workflow should have a clear owner, accessible data, and a measurable outcome.",
      },
    ],
    related: ["ai-copilots", "api-mcp-integration", "agentic-environments"],
  },
  {
    number: "02",
    slug: "ai-copilots",
    title: "AI Copilots & Tool-Using Chatbots",
    shortTitle: "Copilots & AI assistants",
    category: "Automation",
    icon: "chat",
    summary:
      "Give customers and teams an assistant that can find answers and take useful, controlled actions.",
    description:
      "Build AI copilots and chatbots with API and MCP tool calling. AIMS connects business knowledge, approved actions, and human handover in one assistant.",
    headline: "An assistant that can move work forward.",
    introduction:
      "A useful copilot needs more than a chat window. We connect conversational interfaces to your knowledge and approved tools, so people can get grounded answers, check information, and complete tasks without jumping between applications.",
    tags: ["Copilot Studio & Dify", "API & MCP tools", "Grounded answers"],
    searchTerms: [
      "Copilot Studio",
      "Dify",
      "Flowise",
      "admin",
      "HR",
      "sales",
      "support",
      "research",
      "sample agents",
    ],
    deliverables: [
      {
        title: "Conversation & experience design",
        text: "Define the assistant’s responsibilities, channels, tone, and boundaries. Design useful clarification, escalation, and human handover flows.",
      },
      {
        title: "Knowledge-connected answers",
        text: "Retrieve relevant information from approved sources, respect user access, and return citations so people can inspect the underlying evidence.",
      },
      {
        title: "Controlled tool calling",
        text: "Connect APIs and MCP tools to check status, create records, or prepare actions. Validate arguments and enforce permissions in the application layer.",
      },
      {
        title: "Evaluation & feedback",
        text: "Test answer quality, tool selection, unsafe requests, and handover behaviour against representative conversations before rollout.",
      },
    ],
    example: {
      title: "Customer service with the context to act.",
      text: "An illustrative support copilot verifies access, checks an order through an API, retrieves the relevant policy, and prepares the next action. Refunds or exceptions follow your approval policy.",
      steps: [
        "Understand request",
        "Retrieve policy",
        "Call approved tool",
        "Resolve or hand over",
      ],
    },
    measures: [
      "Answer quality and citation coverage",
      "Correct tool execution",
      "Task completion and escalation rates",
      "Latency and cost per conversation",
    ],
    faqs: [
      {
        question: "What is the difference between a chatbot and a copilot?",
        answer:
          "A chatbot is a conversational interface. A copilot usually adds context, retrieval, and tools to support a specific workflow. The useful distinction is what it is authorised and able to do, rather than its name.",
      },
      {
        question: "Can the assistant use both APIs and MCP?",
        answer:
          "Yes. Direct API integrations and MCP tools can coexist. We choose the interface based on the target systems, authentication requirements, and client support.",
      },
      {
        question: "How do you prevent unauthorised actions?",
        answer:
          "Tool permissions, user identity, argument validation, and approval rules are enforced outside the model. We also test prompt injection scenarios and keep an audit trail of consequential actions.",
      },
    ],
    related: [
      "rag-model-fine-tuning",
      "api-mcp-integration",
      "agent-harness-engineering",
    ],
  },
  {
    number: "03",
    slug: "api-mcp-integration",
    title: "API Development & MCP Integration",
    shortTitle: "API & MCP integration",
    category: "Automation",
    icon: "connect",
    summary:
      "Make your existing software accessible to agents through well-designed APIs and MCP servers.",
    description:
      "API development and Model Context Protocol integration. AIMS builds authenticated APIs and MCP servers that connect business systems to AI applications.",
    headline: "Make your systems ready for agents.",
    introduction:
      "Your applications already hold the data and actions your agents need. We build or extend their integration layer with documented APIs and Model Context Protocol (MCP) servers, giving AI applications a structured way to discover and use approved capabilities.",
    tags: ["API development", "MCP servers", "Access control"],
    deliverables: [
      {
        title: "API design & modernisation",
        text: "Expose useful business operations through versioned endpoints with clear schemas, pagination, errors, and integration documentation.",
      },
      {
        title: "MCP server implementation",
        text: "Design narrowly scoped tools and resources with descriptions and input schemas that supported AI clients can discover and understand.",
      },
      {
        title: "Identity & authorisation",
        text: "Integrate suitable authentication, user-scoped access, credential handling, and audit logging. Preserve the source system’s permissions.",
      },
      {
        title: "Compatibility & lifecycle",
        text: "Validate against the intended clients and transports, document configuration, and plan for versioning, limits, and changes to upstream systems.",
      },
    ],
    example: {
      title: "An internal platform becomes an approved agent tool.",
      text: "An illustrative MCP server exposes a catalogue search and a draft purchase-request tool. Agents can retrieve current information, while submission remains subject to the same approval rules as the application.",
      steps: [
        "Existing application",
        "Authenticated API",
        "Scoped MCP tools",
        "AI client",
      ],
    },
    measures: [
      "Integration and schema conformance",
      "Permission-boundary coverage",
      "Tool reliability and latency",
      "Client compatibility",
    ],
    faqs: [
      {
        question: "Does MCP replace our APIs?",
        answer:
          "Usually not. An MCP server often wraps existing APIs and presents selected capabilities as tools or resources for AI clients. The API remains the underlying business interface.",
      },
      {
        question: "Can you add an API to a legacy system?",
        answer:
          "Often, depending on the interfaces, data access, and vendor constraints available. Discovery establishes what can be exposed safely and whether a supported adapter or application change is needed.",
      },
      {
        question: "Will every AI client work with our MCP server?",
        answer:
          "Compatibility depends on the client’s supported protocol version, transport, and authentication. We test the clients in your agreed scope and document any limitations.",
      },
    ],
    related: [
      "ai-copilots",
      "agent-harness-engineering",
      "workflow-automation",
    ],
  },
  {
    number: "04",
    slug: "rag-model-fine-tuning",
    title: "Model Training, Fine-Tuning & RAG",
    shortTitle: "Training, fine-tuning & RAG",
    category: "AI engineering",
    icon: "knowledge",
    summary:
      "Connect AI to your knowledge and adapt model behaviour with the right data and evaluation.",
    description:
      "RAG development, model fine-tuning, and training pipelines. AIMS helps teams ground AI in business knowledge and evaluate model quality and behaviour.",
    headline: "Your knowledge. The right intelligence.",
    introduction:
      "Better AI begins with the right approach to data. We build retrieval-augmented generation (RAG) for current, permission-aware knowledge, fine-tune models for consistent task behaviour, and scope custom training when the data, compute, and business case justify it.",
    tags: ["Retrieval pipelines", "Fine-tuning", "Model evaluation"],
    deliverables: [
      {
        title: "Data readiness & evaluation",
        text: "Review source quality, usage rights, sensitive data, and coverage. Build a representative evaluation set before choosing how to adapt the model.",
      },
      {
        title: "Retrieval-augmented generation",
        text: "Implement ingestion, parsing, chunking, hybrid retrieval, reranking, citations, and document-level access controls around your knowledge sources.",
      },
      {
        title: "Fine-tuning & training pipelines",
        text: "Prepare datasets, run supervised adaptation or parameter-efficient fine-tuning where supported, and track datasets, experiments, and model versions.",
      },
      {
        title: "Quality & lifecycle management",
        text: "Compare with a baseline, test held-out examples, monitor retrieval freshness, and define how data and model changes are released.",
      },
    ],
    example: {
      title: "A knowledge assistant grounded in your operating procedures.",
      text: "An illustrative internal assistant retrieves current procedures and cites the relevant sections. Access follows the user’s permissions, and missing evidence leads to clarification or escalation.",
      steps: [
        "Approved documents",
        "Index & retrieve",
        "Generate with evidence",
        "Evaluate & refresh",
      ],
    },
    measures: [
      "Retrieval relevance and coverage",
      "Grounded answer quality",
      "Performance on held-out tasks",
      "Freshness, latency, and cost",
    ],
    faqs: [
      {
        question: "Should we choose RAG or fine-tuning?",
        answer:
          "Use RAG when answers need current or private knowledge with traceable sources. Consider fine-tuning for stable behaviours, formats, or specialised tasks. They can work together, and both should be compared against a simpler baseline.",
      },
      {
        question:
          "Does fine-tuning make a model memorise our knowledge reliably?",
        answer:
          "No. Fine-tuning is not a dependable substitute for a searchable source of truth. Retrieval is usually more suitable for facts that change or need citations and access controls.",
      },
      {
        question: "Do you train foundation models from scratch?",
        answer:
          "Custom training can be scoped, but training a foundation model from scratch requires substantial data, compute, and ongoing research. We first assess whether retrieval, prompting, or adapting an existing model can meet the requirement.",
      },
    ],
    related: ["ai-copilots", "private-ai-inference", "llm-gateway-caching"],
  },
  {
    number: "05",
    slug: "agent-harness-engineering",
    title: "Agent Harness Engineering",
    shortTitle: "Agent harness engineering",
    category: "AI engineering",
    icon: "agent",
    summary:
      "Build the execution layer that gives agents tools, state, controls, and a dependable way to finish work.",
    description:
      "Agent harness engineering for production AI. AIMS builds orchestration, state, tool execution, evaluations, approvals, and recovery around language models.",
    headline: "Give your agents a reliable way to work.",
    introduction:
      "The model is one component of an agent. The harness is the application around it: the execution loop, tools, state, context, policies, and recovery behaviour. We engineer that layer around the task so an agent can make useful progress within clear boundaries.",
    tags: ["Orchestration", "State & memory", "Evaluations & controls"],
    deliverables: [
      {
        title: "Execution & orchestration",
        text: "Design task decomposition, tool execution, checkpoints, and stopping conditions. Use a single agent or multiple agents according to the workload.",
      },
      {
        title: "Context & state management",
        text: "Manage task state, session history, retrieval, and context budgets. Decide what persists, for how long, and under whose access.",
      },
      {
        title: "Policy & recovery",
        text: "Enforce permissions, execution budgets, sandboxing, and human approvals. Handle tool failures and retries without repeating consequential actions.",
      },
      {
        title: "Tracing & evaluation",
        text: "Capture useful execution traces and build task-level evaluations for completion, correctness, cost, and failure recovery.",
      },
    ],
    example: {
      title: "A research task with a traceable path to completion.",
      text: "An illustrative agent searches approved sources, assembles evidence, drafts a structured brief, and checks the output. A reviewer approves the final deliverable before distribution.",
      steps: [
        "Define task",
        "Retrieve & use tools",
        "Validate result",
        "Request approval",
      ],
    },
    measures: [
      "Task completion and correctness",
      "Recovery from tool failures",
      "Budget and permission adherence",
      "Human review effort",
    ],
    faqs: [
      {
        question: "What is an agent harness?",
        answer:
          "It is the software that surrounds a model and manages how an agent works: tools, context, state, execution, approvals, and evaluation. It turns model outputs into a controlled application workflow.",
      },
      {
        question: "Do we need a multi-agent system?",
        answer:
          "Not necessarily. Multiple agents can help with clearly separated tasks, but add coordination cost and failure modes. We start with the simplest architecture that meets the requirements.",
      },
      {
        question: "Can you use our preferred agent framework?",
        answer:
          "Yes, subject to its suitability and operational constraints. We can extend an existing framework or build a focused harness, with clear interfaces and documentation for your team.",
      },
    ],
    related: [
      "agentic-environments",
      "api-mcp-integration",
      "llm-gateway-caching",
    ],
  },
  {
    number: "06",
    slug: "agentic-environments",
    title: "Agentic Environments & Automation",
    shortTitle: "Agentic environments",
    category: "AI engineering",
    icon: "environment",
    summary:
      "Create controlled environments where agents can use tools, respond to events, and collaborate with people.",
    description:
      "Set up agentic environments and automation with AIMS. Connect runtimes, tools, event triggers, permissions, and monitoring for operational AI agents.",
    headline: "A working environment for your digital workforce.",
    introduction:
      "Agents need a place to run, the right tools, and clear rules for operating. We establish the environment around your agents: identities, isolated runtimes, approved integrations, schedules, event triggers, and a clear route back to a person when needed.",
    tags: ["Agent runtimes", "Event-driven automation", "Operational controls"],
    deliverables: [
      {
        title: "Runtime & workspace setup",
        text: "Configure isolated execution environments, workspace persistence, resource limits, and lifecycle management for the tasks your agents perform.",
      },
      {
        title: "Tools, identity & credentials",
        text: "Connect approved tools and MCP servers. Provision scoped identities and manage credentials without placing secrets in prompts or shared memory.",
      },
      {
        title: "Schedules & event triggers",
        text: "Connect scheduled jobs, queues, and application events to the agent workflow, with concurrency limits, deduplication, and cancellation.",
      },
      {
        title: "Operations & handover",
        text: "Set up activity visibility, review queues, incident procedures, and operator documentation so your team can supervise the environment.",
      },
    ],
    example: {
      title: "An operations agent that prepares the next day’s work.",
      text: "An illustrative scheduled agent checks approved business systems, identifies incomplete requests, and drafts a prioritised work queue. Team members review proposed changes before execution.",
      steps: [
        "Scheduled trigger",
        "Scoped workspace",
        "Review & prepare",
        "Human handover",
      ],
    },
    measures: [
      "Scheduled task completion",
      "Resource and concurrency limits",
      "Auditability of agent actions",
      "Operator intervention and recovery",
    ],
    faqs: [
      {
        question: "How is an environment different from an agent harness?",
        answer:
          "The harness manages how an agent reasons and executes a task. The environment supplies the runtime, identities, tools, storage, and operational systems in which that harness runs.",
      },
      {
        question: "Can agents run on a schedule or react to events?",
        answer:
          "Yes. We can use schedules, webhooks, queues, or other supported triggers. The design includes duplicate handling and limits so repeated events do not cause unintended actions.",
      },
      {
        question: "Can we pause or disable an agent?",
        answer:
          "Operational controls should include pausing new work, cancelling where supported, and revoking tool access. We define these controls and their limits as part of the environment design.",
      },
    ],
    related: [
      "agent-harness-engineering",
      "workflow-automation",
      "coding-agents-cicd",
    ],
  },
  {
    number: "07",
    slug: "coding-agents-cicd",
    title: "Coding Agent Harnesses & CI/CD",
    shortTitle: "Coding agents & CI/CD",
    category: "AI engineering",
    icon: "code",
    summary:
      "Connect AI-assisted development to the checks, reviews, and delivery pipelines your software needs.",
    description:
      "Coding agent setup and CI/CD engineering. AIMS builds development harnesses, isolated workspaces, automated checks, review gates, and deployment workflows.",
    headline: "Move from generated code to dependable delivery.",
    introduction:
      "AI can accelerate implementation, but shipping software still requires context, verification, and review. We set up coding-agent harnesses and delivery pipelines so AI-assisted changes follow the same engineering discipline as the rest of your codebase.",
    tags: ["Coding agent setup", "Quality gates", "CI/CD pipelines"],
    searchTerms: ["cicd", "continuous integration", "continuous delivery"],
    deliverables: [
      {
        title: "Repository & agent context",
        text: "Define repository instructions, task boundaries, tool access, and development environments so coding agents can work with the right context.",
      },
      {
        title: "Isolated development workflows",
        text: "Configure controlled workspaces, dependency setup, test execution, and source-control workflows that keep changes reviewable.",
      },
      {
        title: "Continuous integration",
        text: "Build relevant lint, type, test, build, dependency, and security checks. Set required gates to suit your stack and risk profile.",
      },
      {
        title: "Delivery & release controls",
        text: "Connect preview environments, approvals, secret management, deployments, and rollback procedures, with clear ownership of release decisions.",
      },
    ],
    example: {
      title: "From a scoped issue to a reviewed release.",
      text: "An illustrative coding workflow creates a proposed change in an isolated environment, runs automated checks, and opens it for human review. Deployment follows the team’s existing release policy.",
      steps: [
        "Scoped issue",
        "Agent implementation",
        "CI & review",
        "Approved deployment",
      ],
    },
    measures: [
      "Change lead time",
      "Review and rework effort",
      "Build reliability and test coverage",
      "Release and rollback outcomes",
    ],
    faqs: [
      {
        question: "Will coding agents deploy directly to production?",
        answer:
          "Only if that is explicitly part of your approved workflow. We recommend review and release gates appropriate to the application, with tightly scoped credentials and a documented rollback process.",
      },
      {
        question: "Can you improve an existing CI/CD setup?",
        answer:
          "Yes. We can audit the current pipeline, identify missing or slow checks, add preview environments, and integrate AI-assisted development into the established release process.",
      },
      {
        question: "What stacks do you support?",
        answer:
          "We scope support around your repository, languages, build system, hosting, and delivery tools. An initial technical review identifies the integrations and validation required.",
      },
    ],
    related: [
      "agentic-environments",
      "agent-harness-engineering",
      "api-mcp-integration",
    ],
  },
  {
    number: "08",
    slug: "llm-gateway-caching",
    title: "LLM Gateways, Caching & Token Management",
    shortTitle: "LLM gateways & caching",
    category: "Infrastructure",
    icon: "gateway",
    summary:
      "Bring model routing, cache strategy, usage budgets, and cost visibility into one operational layer.",
    description:
      "LLM proxy and gateway setup with prompt caching, semantic caching, model routing, token budgets, and usage monitoring. Build a more efficient AI stack with AIMS.",
    headline: "Put performance and spend under control.",
    introduction:
      "As AI usage grows, scattered provider calls become difficult to manage. We build an LLM gateway or proxy layer for routing, authentication, quotas, and visibility, and select caching strategies that fit your workloads and data boundaries.",
    tags: ["Model routing", "Cache strategy", "Token & cost controls"],
    searchTerms: [
      "LLM proxy",
      "KV cache",
      "semantic caching",
      "prompt caching",
      "token budgets",
    ],
    deliverables: [
      {
        title: "Gateway & provider routing",
        text: "Configure supported provider interfaces, authentication, request limits, and routing policies. Test fallbacks for feature compatibility and regional constraints.",
      },
      {
        title: "Prompt & inference-cache optimisation",
        text: "Structure reusable prompt prefixes for provider caching. For self-hosted inference, evaluate engine-level KV and prefix caching against memory and throughput constraints.",
      },
      {
        title: "Semantic response caching",
        text: "Reuse sufficiently similar responses only where appropriate, with tenant and permission boundaries, expiry, invalidation, and quality checks.",
      },
      {
        title: "Usage governance & observability",
        text: "Track tokens and cost by application or team, set budgets and quotas, and monitor latency, errors, cache hits, and effective savings.",
      },
    ],
    example: {
      title: "Shared model access with a clear cost owner.",
      text: "An illustrative gateway routes requests from several internal assistants, applies team-level budgets, and reuses eligible prompt prefixes. Dynamic or sensitive responses bypass semantic caching unless explicitly allowed.",
      steps: [
        "Application request",
        "Policy & cache check",
        "Route to model",
        "Meter & observe",
      ],
    },
    measures: [
      "End-to-end latency",
      "Effective cache savings",
      "Cost per completed task",
      "Budget, quota, and error rates",
    ],
    faqs: [
      {
        question:
          "Are KV caching, prompt caching, and semantic caching the same?",
        answer:
          "No. KV caching reuses attention computation inside an inference engine. Provider prompt caching can reuse eligible shared prefixes under provider rules. Semantic caching reuses responses for similar requests and needs separate relevance, permission, and freshness controls.",
      },
      {
        question: "Can a proxy enable KV caching for every model API?",
        answer:
          "No. A proxy cannot control a provider’s internal KV cache. It can route requests and help use supported prompt-cache features. Engine-level cache settings are available only when the serving engine exposes them, such as in suitable self-hosted deployments.",
      },
      {
        question: "Will caching always lower our costs?",
        answer:
          "No. The outcome depends on repetition, cache write and read pricing, expiry, storage, and invalidation overhead. We measure the effective cost per task and answer quality against an uncached baseline.",
      },
    ],
    related: [
      "private-ai-inference",
      "frontier-model-access",
      "agent-harness-engineering",
    ],
  },
  {
    number: "09",
    slug: "private-ai-inference",
    title: "Private AI Inference & Monitoring",
    shortTitle: "Private inference & monitoring",
    category: "Infrastructure",
    icon: "server",
    summary:
      "Deploy and operate models on infrastructure that fits your privacy, performance, and control requirements.",
    description:
      "Local and private AI inference setup, model serving, and monitoring. AIMS scopes on-premise, private-cloud, and hybrid deployments for business workloads.",
    headline: "Your models. Your operating environment.",
    introduction:
      "Some workloads need greater control over where data goes and how models run. We assess the model, hardware, and operating requirements together, then build local, private-cloud, or hybrid inference with the monitoring your team needs to operate it.",
    tags: ["Local & private cloud", "Model serving", "Inference observability"],
    searchTerms: [
      "on-premise",
      "GPU",
      "self-hosted",
      "monitoring",
      "vLLM",
      "Ollama",
      "NVIDIA NIM",
      "local inference",
    ],
    deliverables: [
      {
        title: "Model & hardware assessment",
        text: "Compare model quality, licensing, memory requirements, quantisation options, and expected concurrency against your real workload.",
      },
      {
        title: "Inference deployment",
        text: "Set up suitable serving engines, model loading, API endpoints, access controls, and deployment configuration on the agreed infrastructure.",
      },
      {
        title: "Performance & capacity",
        text: "Measure time to first token, throughput, queueing, and memory use. Tune batching, context limits, and caching where supported.",
      },
      {
        title: "Monitoring & operating procedures",
        text: "Monitor GPU and service health, request errors, usage, and quality signals. Document updates, capacity planning, recovery, and data flows.",
      },
    ],
    example: {
      title: "Internal document assistance on private infrastructure.",
      text: "An illustrative deployment serves a suitable open-weight model beside an internal retrieval system. The design reviews ingestion, telemetry, backups, and tool calls as well as the inference endpoint.",
      steps: [
        "Internal application",
        "Private retrieval",
        "Local model endpoint",
        "Monitor & maintain",
      ],
    },
    measures: [
      "Task quality at the selected model size",
      "Time to first token and throughput",
      "GPU utilisation and memory headroom",
      "Total operating cost and recovery",
    ],
    faqs: [
      {
        question:
          "Does local inference guarantee that data never leaves our network?",
        answer:
          "Not by itself. Retrieval, tools, telemetry, updates, and backups may involve external services. We map these flows and design the deployment around the data boundary you require.",
      },
      {
        question: "Is private inference cheaper than a model API?",
        answer:
          "It depends on utilisation, hardware, model size, operational effort, and the quality you need. We compare total operating cost and performance using representative workloads.",
      },
      {
        question: "Can we combine local models and hosted providers?",
        answer:
          "Yes. A hybrid architecture can route suitable tasks locally and use hosted models where permitted. The routing policy should enforce data sensitivity, region, and feature requirements.",
      },
    ],
    related: [
      "llm-gateway-caching",
      "rag-model-fine-tuning",
      "frontier-model-access",
    ],
  },
  {
    number: "10",
    slug: "frontier-model-access",
    title: "Frontier Model Access & Wholesale",
    shortTitle: "Frontier model wholesale",
    category: "Infrastructure",
    icon: "models",
    summary:
      "Find the right model access and volume-based commercial arrangement for your AI workloads.",
    description:
      "Explore frontier model API access and wholesale enquiries with AIMS. Compare workload fit, expected usage, provider terms, and volume-based quotations.",
    headline: "Frontier intelligence. Considered access.",
    introduction:
      "Choosing model access is both an engineering and a commercial decision. Our enquiry-led model access service helps you define the capabilities, usage, regions, and support you need, then scope suitable access options and volume-based pricing.",
    tags: ["Model sourcing", "Volume enquiries", "Workload fit"],
    deliverables: [
      {
        title: "Workload & model requirements",
        text: "Define your reasoning, coding, multimodal, or embedding workloads, including context length, latency, throughput, and evaluation requirements.",
      },
      {
        title: "Access & commercial scoping",
        text: "Review expected usage, available providers, applicable terms, billing arrangements, and whether direct or managed access is appropriate.",
      },
      {
        title: "Integration planning",
        text: "Plan API compatibility, credentials, usage attribution, and gateway integration. Confirm any differences in tools, modalities, or model features.",
      },
      {
        title: "Usage & capacity review",
        text: "Establish usage reporting and revisit your model mix, capacity, and commercial arrangements as demand changes.",
      },
    ],
    example: {
      title: "A model access plan built around actual usage.",
      text: "An illustrative product team separates high-volume classification from complex reasoning. It evaluates suitable model options for each workload and requests a quotation based on expected demand and region.",
      steps: [
        "Describe workloads",
        "Estimate demand",
        "Review available options",
        "Agree access & terms",
      ],
    },
    measures: [
      "Model quality for the intended tasks",
      "Effective cost at forecast usage",
      "Latency and capacity requirements",
      "Commercial and regional fit",
    ],
    faqs: [
      {
        question: "Can I buy credits directly on this website?",
        answer:
          "Access is currently handled by enquiry. Send us your workload, expected usage, preferred models, and region, and we can discuss available options and a quotation.",
      },
      {
        question: "Which models and wholesale rates are available?",
        answer:
          "Available providers, models, regions, usage commitments, and commercial terms are confirmed in your quotation. Share your preferred models and estimated demand so we can scope suitable options.",
      },
      {
        question: "Does model access include implementation?",
        answer:
          "Model access and engineering services are scoped separately. We can include gateway setup, application integration, evaluation, or usage monitoring in a wider engagement if required.",
      },
    ],
    related: [
      "llm-gateway-caching",
      "private-ai-inference",
      "rag-model-fine-tuning",
    ],
  },
  {
    number: "11",
    slug: "ai-transformation-strategy",
    title: "Agentic AI Transformation & Adoption",
    shortTitle: "AI strategy & adoption",
    category: "AI engineering",
    icon: "agent",
    summary:
      "Find a useful first AI project, build a practical roadmap, and bring your people along.",
    description:
      "Agentic AI transformation consulting in Singapore. AIMS maps workflows, prioritises AI opportunities, plans pilots, and supports staff training and adoption.",
    headline: "Your next chapter starts with the right first step.",
    introduction:
      "Agentic transformation connects people, processes, and systems so AI can move work forward with clear responsibilities. We begin with the work your team does today, identify useful opportunities, and turn them into a scoped pilot and a practical adoption plan.",
    tags: ["AI readiness", "Pilot roadmap", "Staff training"],
    searchTerms: [
      "consulting",
      "assessment",
      "SME",
      "enterprise",
      "change management",
      "agentic transformation",
    ],
    deliverables: [
      {
        title: "Workflow & readiness assessment",
        text: "Map repetitive work, data access, system constraints, and the people who own each process.",
      },
      {
        title: "Prioritised opportunity map",
        text: "Compare candidate use cases by value, feasibility, operating cost, and review requirements.",
      },
      {
        title: "Pilot scope & success measures",
        text: "Choose a first workflow, agree acceptance criteria, and define the tools, permissions, and human handoffs.",
      },
      {
        title: "Training & adoption plan",
        text: "Run role-based workshops and prepare guidance, ownership, and feedback routes for the teams using the system.",
      },
    ],
    example: {
      title: "From a long AI wish list to one useful pilot.",
      text: "An illustrative SME assessment identifies invoice handling as a frequent bottleneck. The team starts with extraction and approval preparation, then reviews the evidence before expanding automation.",
      steps: [
        "Map the current work",
        "Rank the opportunities",
        "Agree a focused pilot",
        "Train, measure & iterate",
      ],
    },
    measures: [
      "Clear process and data ownership",
      "Pilot acceptance against agreed criteria",
      "Team adoption and feedback",
      "Time and cost per completed workflow",
    ],
    faqs: [
      {
        question: "Do we need an AI strategy before starting?",
        answer:
          "You need a clear problem, an owner, and a way to judge success. We can start with a focused assessment and grow the roadmap as your team learns.",
      },
      {
        question: "Can you train non-technical teams?",
        answer:
          "Yes. Training is scoped around each role’s tasks, supported tools, review responsibilities, and practical examples from the agreed implementation.",
      },
      {
        question: "Will every process become autonomous?",
        answer:
          "No. We choose ordinary automation, AI assistance, or an agent according to the task. People retain responsibility for consequential decisions and exceptions.",
      },
    ],
    related: [
      "workflow-automation",
      "microsoft-copilot",
      "agent-harness-engineering",
    ],
  },
  {
    number: "12",
    slug: "microsoft-copilot",
    title: "Microsoft Copilot, Copilot Studio & Power Automate",
    shortTitle: "Microsoft Copilot & automation",
    category: "Automation",
    icon: "chat",
    summary:
      "Make Microsoft AI useful across your everyday work, company knowledge, and business processes.",
    description:
      "Microsoft 365 Copilot adoption, Copilot Studio agents, and Power Automate workflows in Singapore. AIMS connects Teams, SharePoint, and your business systems.",
    headline: "Bring intelligence into the tools your team knows.",
    introduction:
      "We help teams adopt Microsoft 365 Copilot, build custom agents in Copilot Studio, and connect approved actions through Power Automate. The implementation starts with your tenant, licences, data permissions, and the work you want to improve.",
    tags: ["Microsoft 365 Copilot", "Copilot Studio", "Power Automate"],
    searchTerms: [
      "Teams",
      "SharePoint",
      "Outlook",
      "HR",
      "approvals",
      "Microsoft",
    ],
    deliverables: [
      {
        title: "Readiness & licence review",
        text: "Review the relevant Microsoft services, access model, available connectors, and licensing prerequisites.",
      },
      {
        title: "Knowledge-connected agents",
        text: "Build scoped Copilot Studio experiences with approved sources, useful answers, and a clear escalation route.",
      },
      {
        title: "Business workflow integration",
        text: "Connect supported actions and approvals across Teams, SharePoint, Outlook, and the business systems in scope.",
      },
      {
        title: "Adoption & operating guidance",
        text: "Prepare role-based examples, training, evaluation scenarios, and ownership for ongoing updates.",
      },
    ],
    example: {
      title: "A helpful HR assistant, right inside Teams.",
      text: "An illustrative Copilot Studio agent retrieves current policy guidance from approved SharePoint content and prepares onboarding requests through Power Automate for HR and IT approval.",
      steps: [
        "Ask in Teams",
        "Find approved policy",
        "Prepare a request",
        "Route for human approval",
      ],
    },
    measures: [
      "Grounded answer quality",
      "Correct permissions and escalations",
      "Workflow completion",
      "Staff adoption and feedback",
    ],
    faqs: [
      {
        question: "Is Microsoft 365 Copilot the same as Copilot Studio?",
        answer:
          "Microsoft 365 Copilot supports productivity in eligible Microsoft 365 experiences. Copilot Studio is used to create and manage custom agents. We help choose the right combination for your use case.",
      },
      {
        question: "Are Microsoft licences included?",
        answer:
          "Licences, capacity, premium connectors, and implementation are confirmed separately in the scope and quotation. We review your existing entitlement before recommending changes.",
      },
      {
        question: "Can an agent use confidential documents?",
        answer:
          "Only within an agreed access design. We review source permissions, identities, connector behaviour, and representative access scenarios before deployment.",
      },
    ],
    related: [
      "ai-copilots",
      "workflow-automation",
      "ai-transformation-strategy",
    ],
  },
  {
    number: "13",
    slug: "gpu-hardware-services",
    title: "GPU Hardware Sourcing, Installation & Local AI",
    shortTitle: "GPU hardware & installation",
    category: "Infrastructure",
    icon: "server",
    summary:
      "Source the right NVIDIA hardware and turn it into a working local inference environment.",
    description:
      "NVIDIA GPU sourcing and sales, server installation, and local AI inference configuration in Singapore. AIMS scopes hardware, deployment, monitoring, and support.",
    headline: "From the right hardware to AI that runs.",
    introduction:
      "A useful private AI deployment needs more than a GPU. We connect hardware sizing and sourcing to site readiness, installation, serving software, access controls, and operational handover. Hardware sales and services are quoted against a confirmed configuration and supplier availability.",
    tags: ["NVIDIA sourcing", "Onsite installation", "Local inference"],
    searchTerms: [
      "H20",
      "H20e",
      "H100",
      "H200",
      "B200",
      "B300",
      "GB300",
      "Vera",
      "Rubin",
      "GPU sales",
      "vLLM",
      "Ollama",
      "NIM",
    ],
    deliverables: [
      {
        title: "Workload sizing & sourcing",
        text: "Assess model size, context, concurrency, and budget. Confirm the exact hardware configuration, supplier terms, and delivery prerequisites.",
      },
      {
        title: "Installation & site readiness",
        text: "Scope workstation or server installation, networking, storage, rack space, power, and cooling requirements.",
      },
      {
        title: "Local inference configuration",
        text: "Configure supported drivers, CUDA, containers, and a suitable engine such as vLLM, Ollama, or NVIDIA NIM. Review model licences and access controls.",
      },
      {
        title: "Commissioning & support",
        text: "Validate representative workloads, document the operating limits, and hand over monitoring, update, and recovery procedures.",
      },
    ],
    example: {
      title: "A private knowledge assistant on your own hardware.",
      text: "An illustrative deployment sizes a local system for an internal model and retrieval workload, installs the agreed hardware, and connects an authenticated inference service to the business application.",
      steps: [
        "Size & source",
        "Prepare & install",
        "Configure inference",
        "Validate & hand over",
      ],
    },
    measures: [
      "Performance on the agreed workload",
      "GPU memory and capacity headroom",
      "Access control and recovery checks",
      "Operating cost and support readiness",
    ],
    faqs: [
      {
        question: "Can we buy NVIDIA GPUs through AIMS?",
        answer:
          "We handle sourcing and sales enquiries for NVIDIA GPU and system configurations. The exact part number, condition, warranty, availability, destination eligibility, and delivery terms are confirmed in a quotation.",
      },
      {
        question: "Do you install and configure hardware at our site?",
        answer:
          "Onsite installation and local inference configuration can be included in the scope. We confirm location, site readiness, access, power, cooling, and the work required before scheduling.",
      },
      {
        question: "Do you supply Vera and Rubin?",
        answer:
          "We accept Vera CPU and Rubin platform enquiries and confirm eligible supplier offerings and delivery windows before quoting. A catalogue entry does not imply current stock or a confirmed allocation.",
      },
    ],
    related: [
      "private-ai-inference",
      "llm-gateway-caching",
      "data-cloud-foundations",
    ],
  },
  {
    number: "14",
    slug: "creative-ai-workflows",
    title: "AI Design, Video & Content Workflows",
    shortTitle: "Creative & content AI",
    category: "Automation",
    icon: "environment",
    summary:
      "Give designers, marketers, and video teams more time for the creative work that matters.",
    description:
      "AI-assisted design, video, and marketing workflows in Singapore. AIMS connects briefs, creative tools, draft assets, captions, approvals, and content operations.",
    headline: "More creative possibility. A clearer process.",
    introduction:
      "We build workflows that support creative people from brief to reviewed output. Connect approved brand guidance, asset libraries, supported creative tools, and a visible review process. Each integration is scoped to the capabilities available in your licences and tools.",
    tags: ["Designer agents", "Video workflows", "Brand review"],
    searchTerms: [
      "videographer",
      "designer",
      "marketing",
      "Figma",
      "Canva",
      "Adobe Firefly",
      "Premiere Pro",
      "Runway",
      "DaVinci Resolve",
    ],
    deliverables: [
      {
        title: "Brief & asset organisation",
        text: "Collect requirements, references, formats, and approved brand material into a consistent starting point.",
      },
      {
        title: "Creative drafting workflows",
        text: "Prepare concepts, copy, storyboard directions, and asset variations using supported tools and agreed source material.",
      },
      {
        title: "Video preparation & repurposing",
        text: "Connect transcription, caption drafts, time-coded edit notes, and channel-specific version planning.",
      },
      {
        title: "Review & delivery",
        text: "Route drafts to designers or editors and organise approved outputs with their usage and version information.",
      },
    ],
    example: {
      title: "One approved story. Several useful formats.",
      text: "An illustrative campaign workflow turns an approved interview into a transcript, short-form edit suggestions, caption drafts, and social copy for the creative team to review.",
      steps: [
        "Collect approved material",
        "Prepare creative drafts",
        "Review & refine",
        "Package approved versions",
      ],
    },
    measures: [
      "Time to first reviewed draft",
      "Revision effort",
      "Brand and caption correction rates",
      "Completeness of the asset handover",
    ],
    faqs: [
      {
        question: "Does an AI videographer replace filming or editing?",
        answer:
          "The agent supports planning, footage organisation, transcription, edit notes, and version preparation. Filming and final creative decisions remain with your production team.",
      },
      {
        question: "Can you connect our current creative tools?",
        answer:
          "We check the APIs, automation features, file formats, and licences your tools support. Where a direct integration is unavailable, we scope a clear file-based or human handoff.",
      },
      {
        question: "Who checks rights and final output?",
        answer:
          "Your designated creative owner reviews brand consistency, claims, source rights, likeness permissions, accessibility, and the final material before publication.",
      },
    ],
    related: [
      "workflow-automation",
      "ai-copilots",
      "ai-transformation-strategy",
    ],
  },
  {
    number: "15",
    slug: "data-cloud-foundations",
    title: "Data Integration, Cloud & AI Foundations",
    shortTitle: "Data & cloud foundations",
    category: "Infrastructure",
    icon: "connect",
    summary:
      "Give your agents reliable data and an infrastructure foundation that fits your business.",
    description:
      "Data integration and cloud AI foundations in Singapore. AIMS connects business data, analytics, access controls, and cloud or hybrid infrastructure for AI workloads.",
    headline: "Useful AI starts with connected foundations.",
    introduction:
      "Agents depend on the quality and accessibility of the systems behind them. We connect business data, plan cloud or hybrid deployment, and establish the access, monitoring, and ownership needed to operate an AI application.",
    tags: ["Data integration", "Cloud & hybrid", "Operational visibility"],
    searchTerms: [
      "AWS",
      "Azure",
      "Google Cloud",
      "analytics",
      "Power BI",
      "data pipelines",
      "data engineering",
    ],
    deliverables: [
      {
        title: "Data & integration assessment",
        text: "Map source systems, data quality, update frequency, access rights, and the context each AI workflow needs.",
      },
      {
        title: "Pipelines & knowledge preparation",
        text: "Build scoped ingestion, transformation, and retrieval preparation with clear ownership and failure handling.",
      },
      {
        title: "Cloud & hybrid architecture",
        text: "Select suitable services in your AWS, Azure, Google Cloud, or private environment, based on workload and operational requirements.",
      },
      {
        title: "Analytics & operating visibility",
        text: "Connect agreed business and service measures to reporting, monitoring, budgets, and an operational handover.",
      },
    ],
    example: {
      title: "Connect scattered records to a useful operations view.",
      text: "An illustrative project combines approved CRM and operations data into a maintained reporting view that also supplies context to an internal assistant.",
      steps: [
        "Map sources & access",
        "Prepare reliable data",
        "Connect reporting & AI",
        "Monitor freshness & failures",
      ],
    },
    measures: [
      "Data freshness and quality",
      "Integration completion and error rates",
      "Access-policy checks",
      "Visibility of operating cost",
    ],
    faqs: [
      {
        question: "Must we move everything to the cloud?",
        answer:
          "No. We work with cloud, private, and hybrid architectures according to your data requirements, existing systems, and operating capacity.",
      },
      {
        question: "Can this include business reporting?",
        answer:
          "Yes. Reporting can be scoped around agreed data sources and measures, including tools such as Power BI where suitable.",
      },
      {
        question: "Do you provide ongoing management?",
        answer:
          "Monitoring, maintenance, and ongoing support can be scoped with clear ownership, coverage, and response arrangements in the service agreement.",
      },
    ],
    related: [
      "api-mcp-integration",
      "rag-model-fine-tuning",
      "private-ai-inference",
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Automation",
  "AI engineering",
  "Infrastructure",
];
export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
