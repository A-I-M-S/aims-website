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
          alt: "AIMS. Put AI to work. Make room for what’s next.",
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
    title: "Find the possibility.",
    label: "Discover",
    text: "Map your workflows, systems, and constraints. Choose a valuable problem and establish what a better outcome looks like.",
    output: "Opportunity map + success criteria",
  },
  {
    title: "Start with something useful.",
    label: "Design",
    text: "Select the architecture and test the critical assumptions with your data. Agree on scope, ownership, and how progress will be measured.",
    output: "Architecture + evaluated prototype",
  },
  {
    title: "Bring it to life.",
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
      "AIMS helps businesses with agentic AI transformation, workflow automation, custom agents, Microsoft Copilot, knowledge systems, and the infrastructure to run them. We also source NVIDIA hardware, install local inference systems, and train teams to use and operate their AI workflows.",
  },
  {
    question: "Can you work with the systems we already use?",
    answer:
      "Yes. We start with your applications, data, and access controls. Depending on the workflow, we can use Make, n8n, Zapier, Power Automate, Copilot Studio, or custom integrations. Discovery confirms supported connectors, APIs, licences, and any gaps before implementation.",
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
    question: "What kinds of agents can you create?",
    answer:
      "We can build agents for admin, HR, accounts, development, project management, design, video preparation, sales, support, research, procurement, and marketing. The sample-agent gallery shows illustrative tasks, tools, review points, and workflows we can tailor to your business.",
  },
  {
    question: "Can you supply and install AI hardware?",
    answer:
      "Yes. Hardware sourcing and sales, onsite installation, local inference configuration, monitoring, and support can be scoped together. Our catalogue includes NVIDIA GPU and system enquiries, with exact specifications, availability, warranty, and delivery confirmed by quotation.",
  },
  {
    question: "Where is AIMS based?",
    answer:
      "AIMS is based in Singapore, at 29 Carpenter Street, Singapore 059923. We work with businesses across Singapore and APAC, and welcome international enquiries.",
  },
];
