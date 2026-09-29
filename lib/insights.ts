export type Insight = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  icon: string;
  date: string;
  takeaway: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    points?: string[];
  }[];
  relatedServices: string[];
};

export const insights: Insight[] = [
  {
    slug: "rag-vs-fine-tuning",
    category: "Knowledge & models",
    title: "RAG or fine-tuning? Start with the problem.",
    description:
      "Understand when to use retrieval-augmented generation, when to fine-tune a model, and how to evaluate both against your business requirements.",
    readTime: "5 min read",
    icon: "knowledge",
    date: "2026-09-29",
    takeaway:
      "Use retrieval to supply relevant knowledge. Use fine-tuning to adapt behaviour. Evaluate whether either is necessary before adding complexity.",
    sections: [
      {
        id: "start-with-a-baseline",
        title: "Start with a baseline you can measure.",
        paragraphs: [
          "A model giving a poor answer is a symptom, not a diagnosis. It may lack the right information, misunderstand the instructions, use the wrong tool, or struggle with the task itself. Those problems call for different interventions.",
          "Collect representative examples, decide what a good output looks like, and test a suitable model with clear instructions. Keep some examples separate for evaluation. This establishes whether the gap is knowledge, behaviour, or capability, and gives you a fair comparison for later changes.",
        ],
      },
      {
        id: "when-retrieval-helps",
        title: "Choose RAG when the answer depends on your knowledge.",
        paragraphs: [
          "Retrieval-augmented generation supplies relevant information to a model at request time. A retrieval pipeline finds useful passages from documents or records, and the model uses that context to form an answer. This is a natural fit for policies, product information, procedures, and other facts that change.",
          "The retrieval system is as important as the model. Parsing, chunking, search quality, reranking, and document freshness all affect the result. Access controls must apply before information enters the prompt; a model should never be the only barrier protecting a restricted document.",
        ],
        points: [
          "Start with authoritative, maintained sources.",
          "Check retrieval relevance separately from answer quality.",
          "Use citations so users can inspect the evidence.",
          "Define what happens when the source material does not contain an answer.",
        ],
      },
      {
        id: "when-fine-tuning-helps",
        title: "Choose fine-tuning when consistent behaviour is the gap.",
        paragraphs: [
          "Fine-tuning adapts an existing model using task-specific examples. It can help with specialised classification, consistent output formats, domain language, or repeated behaviours that remain difficult to achieve through prompting alone.",
          "It needs representative data, clear usage rights, and a meaningful held-out evaluation. Training success does not establish that the model generalises. Check difficult cases, uncommon inputs, and important failure modes, as well as the average score.",
          "Fine-tuning is not a reliable way to store a changing company knowledge base. It does not provide document-level access control, guaranteed recall, or automatic citations. Those requirements still need an application and data architecture.",
        ],
      },
      {
        id: "using-both",
        title: "Retrieval and fine-tuning can work together.",
        paragraphs: [
          "A retrieval system can supply current knowledge while an adapted model follows a specialised response format or workflow. But combining techniques also adds more things to evaluate and maintain.",
          "Introduce one change at a time where possible. If retrieval improves factual grounding but the output format is still inconsistent, first test structured output and clearer instructions. Fine-tuning becomes useful when it produces a measurable improvement that justifies its data and operating costs.",
        ],
      },
      {
        id: "practical-start",
        title: "A practical starting point for your business.",
        paragraphs: [
          "Begin with one valuable task, a small representative evaluation set, and a documented baseline. For an internal knowledge assistant, start by measuring whether the right documents are retrieved and whether the answer is supported by them. For a specialised classification task, measure performance on unseen examples.",
          "The decision should follow the evidence: quality, privacy, latency, cost, and maintenance effort. A simpler system that meets the requirement is easier to operate and improve.",
        ],
        points: [
          "Define the task and success criteria.",
          "Test prompting and retrieval before committing to training.",
          "Evaluate on examples the system has not been tuned against.",
          "Include data updates and operating costs in the decision.",
        ],
      },
    ],
    relatedServices: [
      "rag-model-fine-tuning",
      "ai-copilots",
      "private-ai-inference",
    ],
  },
  {
    slug: "mcp-for-business-systems",
    category: "Agents & integrations",
    title: "What is MCP, and does your business need it?",
    description:
      "A practical introduction to Model Context Protocol, how it relates to APIs, and what to consider when giving AI agents access to business systems.",
    readTime: "5 min read",
    icon: "connect",
    date: "2026-09-29",
    takeaway:
      "MCP gives compatible AI applications a common way to discover tools and context. Your systems still need clear interfaces, identities, and permission boundaries.",
    sections: [
      {
        id: "the-connection-problem",
        title: "An agent is only as useful as the systems it can reach.",
        paragraphs: [
          "An assistant may understand a request to check an order, but it still needs a reliable way to look up that order. Without a connected tool, it can only explain a process or ask someone else to complete it.",
          "Model Context Protocol, or MCP, standardises how compatible AI applications discover and interact with capabilities exposed by a server. A server can present tools for actions, resources for context, and prompts where supported. This reduces the need for a different custom connector for every client.",
        ],
      },
      {
        id: "apis-and-mcp",
        title: "MCP usually builds on your APIs.",
        paragraphs: [
          "An API exposes the operations and data of an application. An MCP server can wrap selected API operations and describe them as tools an AI client can discover. For example, a catalogue API might support tools to search products and check availability.",
          "That does not mean every endpoint should become a tool. A useful integration presents a small, intentional set of capabilities with clear names, descriptions, and input schemas. A focused tool such as ‘prepare purchase request’ can be easier to validate than a broad tool that accepts arbitrary instructions.",
        ],
      },
      {
        id: "useful-boundaries",
        title: "Design permissions around the user and the action.",
        paragraphs: [
          "A model choosing a tool is not the same as a user being authorised to run it. The integration must resolve identity, validate arguments, and apply permissions in the application layer. A user who cannot access a record in the source system should not gain access through an assistant.",
          "Separate read operations, draft creation, and consequential actions. A tool can prepare a change for approval without being allowed to submit it. Credentials belong in the integration’s controlled configuration, not in model prompts or shared conversation history.",
        ],
        points: [
          "Expose only the operations the workflow needs.",
          "Preserve user and tenant access boundaries.",
          "Make actions auditable and handle duplicate requests.",
          "Put approval gates before consequential changes.",
        ],
      },
      {
        id: "compatibility",
        title: "Check the clients you actually plan to use.",
        paragraphs: [
          "A protocol is not a promise that every client supports every feature. Transport, authentication, protocol version, and capability support vary. Validate the specific clients and deployment model in your scope.",
          "A local development tool and a shared remote service have different identity and operating requirements. Document supported clients, configuration, timeouts, rate limits, and error behaviour so the integration remains maintainable as the surrounding tools evolve.",
        ],
      },
      {
        id: "when-to-build",
        title: "Build an MCP interface when reuse is valuable.",
        paragraphs: [
          "MCP is useful when several compatible clients or agents need access to the same carefully scoped business capabilities. A direct API integration can still be the simplest choice for one application with a narrow, stable workflow.",
          "Start by identifying the real task, its source of truth, the required actions, and the identity under which they run. Then choose the integration interface. The goal is useful, controlled access to your systems, with a clear owner and a path for maintenance.",
        ],
      },
    ],
    relatedServices: [
      "api-mcp-integration",
      "ai-copilots",
      "agent-harness-engineering",
    ],
  },
  {
    slug: "llm-caching-explained",
    category: "AI infrastructure",
    title: "LLM caching: what actually gets reused?",
    description:
      "Understand KV caching, provider prompt caching, and semantic response caching, including where they operate and how to measure their real value.",
    readTime: "6 min read",
    icon: "gateway",
    date: "2026-09-29",
    takeaway:
      "Different caches reuse different things. Choose the layer you can control, isolate data correctly, and measure total cost and quality rather than cache-hit rate alone.",
    sections: [
      {
        id: "three-layers",
        title: "Three kinds of caching, three different jobs.",
        paragraphs: [
          "‘Add caching’ sounds like a single infrastructure decision. In a language-model system, it can mean reusing attention state inside an inference engine, reusing a shared prompt prefix through a provider, or reusing a completed answer for a similar request.",
          "These techniques have different eligibility rules, memory costs, privacy implications, and effects on quality. A gateway can coordinate some of them, but it cannot create a cache capability that the underlying model service does not expose.",
        ],
      },
      {
        id: "kv-cache",
        title: "KV caching reuses computation inside inference.",
        paragraphs: [
          "During generation, a transformer can retain the attention keys and values computed for earlier tokens. This avoids recomputing that state at every generation step. The cache belongs to the inference engine and consumes memory; long contexts and many concurrent requests can make that memory significant.",
          "Some serving engines also support reusing compatible prefix state across requests. Availability and isolation depend on the engine and configuration. In a self-hosted deployment, evaluate memory use, batching, concurrency, and time to first token together. An application proxy cannot inspect or control a hosted provider’s internal KV cache.",
        ],
      },
      {
        id: "prompt-cache",
        title: "Provider prompt caching reuses eligible prefixes.",
        paragraphs: [
          "A model provider may offer caching for repeated prompt prefixes. A stable block of instructions, tool definitions, or reference material can be a candidate, provided it meets the provider’s requirements. The request can still produce a new answer; the cached object is not simply the previous response.",
          "Eligibility, minimum prefix sizes, lifetimes, cache writes, and pricing vary. Keep stable content before per-request content where the provider’s format allows it. Avoid injecting a changing timestamp or request identifier into the reusable prefix unless it is necessary.",
          "Measure the effective input cost using actual cache reads and writes. A workload that rarely repeats within the cache lifetime may see little benefit, even if its prompts are long.",
        ],
      },
      {
        id: "semantic-cache",
        title: "Semantic caching reuses a response, so correctness matters.",
        paragraphs: [
          "A semantic cache looks for a prior request that is sufficiently similar and returns or adapts its stored response. It can avoid a new generation, but similarity is not the same as equivalence. Two questions can look alike and still require different answers because of user identity, date, permissions, or underlying data.",
          "Tenant and permission boundaries, model and policy versions, freshness, and invalidation are part of the cache key and retrieval policy. Dynamic account information and consequential actions often need to bypass this layer. A previous tool result must not be mistaken for permission to repeat the action.",
        ],
        points: [
          "Choose workloads where response reuse is appropriate.",
          "Partition by identity, tenant, permissions, and relevant context.",
          "Set expiry and invalidate when source information changes.",
          "Evaluate wrong-answer risk as well as saved requests.",
        ],
      },
      {
        id: "measure-the-result",
        title: "Optimise for the completed task.",
        paragraphs: [
          "A high hit rate is only useful if the responses remain correct and the total economics improve. Include cache writes and reads, storage, embeddings, routing overhead, and invalidation work in the calculation. Compare end-to-end latency and quality with a baseline.",
          "Begin with a representative workload and one cache strategy. Record cost per completed task, latency, answer quality, and where misses occur. This makes it easier to decide whether to tune a prefix, change a lifetime, narrow a semantic cache, or leave a workload uncached.",
        ],
      },
    ],
    relatedServices: [
      "llm-gateway-caching",
      "private-ai-inference",
      "frontier-model-access",
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
