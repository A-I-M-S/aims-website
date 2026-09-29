import type { Metadata } from "next";

export const SITE_URL = "https://aims-sg.com";
export const CONTACT_EMAIL = "enquiries@aims-sg.com";
export const SITE_NAME = "AIMS — A.I. Management Services";
export const ADDRESS = "29 Carpenter Street, Singapore 059923";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | AIMS`,
      description,
      url: path,
      type: "website",
      siteName: SITE_NAME,
      locale: "en_SG",
      images: [
        {
          url: "/social-card.png",
          width: 1200,
          height: 630,
          alt: "AIMS. Intelligence, engineered for impact.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AIMS`,
      description,
      images: ["/social-card.png"],
    },
  };
}

export const founders = [
  {
    name: "Kin",
    focus: "Business & ecosystem",
    description:
      "Long-term business development, ecosystem building, and future AI opportunities.",
    image: "/founders/kin.jpg",
    url: "https://www.linkedin.com/in/kinfams341534/",
  },
  {
    name: "Jay",
    focus: "Strategy & operations",
    description:
      "Operations, business strategy, and practical implementation of AI systems.",
    image: "/founders/jay.jpg",
    url: "https://www.linkedin.com/in/jay-koh/",
  },
  {
    name: "AC",
    focus: "Technology & solutions",
    description:
      "Technology adoption, AI solutions, and helping businesses transition into AI usage.",
    image: "/founders/ac.jpg",
    url: "https://www.linkedin.com/in/aloycwl/",
  },
];

export const deliverySteps = [
  {
    title: "Understand the work.",
    label: "Discover",
    text: "Map your workflows, systems, and constraints. Choose a valuable problem and establish what a better outcome looks like.",
    output: "Opportunity map + success criteria",
  },
  {
    title: "Prove the approach.",
    label: "Design",
    text: "Select the architecture and test the critical assumptions with your data. Agree on scope, ownership, and how progress will be measured.",
    output: "Architecture + evaluated prototype",
  },
  {
    title: "Build for reality.",
    label: "Engineer",
    text: "Connect your systems, implement the controls, and test the edge cases. Make reliability, permissions, and observability part of the build.",
    output: "Integrated system + validation",
  },
  {
    title: "Keep getting better.",
    label: "Operate",
    text: "Deploy with a clear handover. Use real usage, evaluation results, and cost visibility to guide the next iteration and ongoing support.",
    output: "Deployment + operational playbook",
  },
];

export const homeFaqs = [
  {
    question: "What does AIMS build?",
    answer:
      "AIMS designs and implements AI automation, tool-using copilots, API and Model Context Protocol integrations, retrieval-augmented generation, model fine-tuning, agent harnesses, and the infrastructure to run them. We also help teams set up coding agents, CI/CD, LLM gateways, private inference, and model access.",
  },
  {
    question: "Can you work with the systems we already use?",
    answer:
      "Yes. We start with your existing applications, data, infrastructure, and access controls. Depending on what those systems support, we connect through APIs, MCP servers, events, or other approved integrations. Discovery identifies any gaps before implementation.",
  },
  {
    question: "Do we need a technical team to get started?",
    answer:
      "No. We can begin with a business process and a clear objective. For teams with in-house engineers, we can work alongside them on architecture and implementation. Every engagement includes an agreed handover and documentation scope.",
  },
  {
    question: "Can AI run in our own infrastructure?",
    answer:
      "Yes, where the selected models and workloads support it. We scope on-premise, private-cloud, and hybrid inference around your data requirements, hardware, model licences, and operational capacity. Hosting location, external dependencies, and telemetry flows are considered together.",
  },
  {
    question: "How are projects and model access priced?",
    answer:
      "Implementation is quoted against an agreed scope, integrations, and support requirements. Model access is quoted separately based on the provider, expected usage, region, and applicable terms. We discuss delivery costs and ongoing operating costs before you commit.",
  },
  {
    question: "Where is AIMS based?",
    answer:
      "AIMS is based in Singapore, at 29 Carpenter Street, Singapore 059923. We work with businesses across Singapore and APAC, and welcome international enquiries.",
  },
];
