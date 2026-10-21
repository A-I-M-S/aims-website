export type Hardware = {
  slug: string;
  name: string;
  family: string;
  category: "GPU accelerators" | "AI systems" | "CPU platforms";
  summary: string;
  fit: string;
  deployment: string;
  considerations: string[];
  scope: string[];
  note: string;
};

export const hardware: Hardware[] = [
  {
    slug: "nvidia-h20",
    name: "NVIDIA H20",
    family: "Hopper",
    category: "GPU accelerators",
    summary:
      "Discuss H20-class inference requirements and supplier-confirmed configurations for your deployment.",
    fit: "Inference workloads where an H20 configuration is available and appropriate for the deployment region.",
    deployment:
      "Compatible server configurations, subject to supplier and destination eligibility.",
    considerations: [
      "Exact accelerator variant and server compatibility",
      "Model memory requirements and concurrency",
      "Destination eligibility and supply terms",
    ],
    scope: [
      "Validate the requested part number and system bill of materials.",
      "Check the intended model, context lengths, and target throughput.",
      "Quote eligible supply, installation, and configuration separately.",
    ],
    note: "Looking for H20e? Include the supplier’s exact H20e part number in your enquiry so we can confirm the designation, configuration, and supply eligibility before quoting.",
  },
  {
    slug: "nvidia-h100",
    name: "NVIDIA H100",
    family: "Hopper",
    category: "GPU accelerators",
    summary:
      "Scope H100-based compute for model serving, development, and demanding AI workloads.",
    fit: "Production inference, model development, and workloads suited to Hopper-based acceleration.",
    deployment:
      "Server configurations selected around the required accelerator form factor.",
    considerations: [
      "PCIe or SXM system requirements",
      "GPU memory, interconnects, and workload fit",
      "Power, cooling, and support coverage",
    ],
    scope: [
      "Match the accelerator and server platform to your workload.",
      "Plan networking, storage, and the required software stack.",
      "Install, configure, and validate the agreed inference workload.",
    ],
    note: "Memory, form factor, condition, warranty, and delivery are confirmed for the exact quoted system.",
  },
  {
    slug: "nvidia-h200",
    name: "NVIDIA H200",
    family: "Hopper",
    category: "GPU accelerators",
    summary:
      "Evaluate H200 systems for memory-intensive inference and larger model-serving requirements.",
    fit: "Workloads where model size, context length, or concurrency makes GPU memory a key constraint.",
    deployment: "Compatible enterprise servers or integrated systems.",
    considerations: [
      "Model weights and KV-cache memory budget",
      "Supported server and accelerator configuration",
      "Throughput under representative request loads",
    ],
    scope: [
      "Estimate model and runtime memory requirements together.",
      "Select a supported system and networking configuration.",
      "Benchmark the agreed serving setup and document capacity limits.",
    ],
    note: "Capacity and performance depend on the quoted hardware, model, precision, context, and serving configuration.",
  },
  {
    slug: "nvidia-b200",
    name: "NVIDIA B200",
    family: "Blackwell",
    category: "GPU accelerators",
    summary:
      "Plan Blackwell-based acceleration as part of a compatible AI server deployment.",
    fit: "High-throughput inference and model workloads that benefit from a supported Blackwell stack.",
    deployment:
      "Integrated server platforms with matching power, cooling, and interconnects.",
    considerations: [
      "Server platform and software compatibility",
      "Cooling and facility requirements",
      "Model precision and serving-engine support",
    ],
    scope: [
      "Assess the workload against available system configurations.",
      "Coordinate sourcing and site readiness with the system supplier.",
      "Configure the model-serving stack and operational monitoring.",
    ],
    note: "B200 sourcing is scoped as a compatible system configuration; a standalone GPU is not assumed to fit an existing server.",
  },
  {
    slug: "nvidia-b300",
    name: "NVIDIA B300",
    family: "Blackwell Ultra",
    category: "GPU accelerators",
    summary:
      "Discuss Blackwell Ultra configurations for larger inference and AI infrastructure projects.",
    fit: "Demanding inference deployments with clear capacity, networking, and facility requirements.",
    deployment:
      "Supplier-confirmed server systems and supported integration options.",
    considerations: [
      "Exact system configuration and lead time",
      "Rack power, cooling, and networking",
      "Inference-engine and model compatibility",
    ],
    scope: [
      "Build a workload and capacity brief for supplier quotations.",
      "Confirm installation prerequisites and the support boundary.",
      "Commission the agreed system and validate the target workload.",
    ],
    note: "Specifications, availability, lead times, and commercial terms are confirmed with suppliers at quotation.",
  },
  {
    slug: "nvidia-gb300-systems",
    name: "NVIDIA GB300 systems",
    family: "Blackwell Ultra",
    category: "AI systems",
    summary:
      "Plan integrated Grace Blackwell Ultra infrastructure for projects that need a complete system approach.",
    fit: "Larger AI deployments where compute, interconnects, and the facility must be designed together.",
    deployment:
      "Integrated systems supplied and commissioned against an agreed bill of materials.",
    considerations: [
      "Rack and facility readiness",
      "Networking and storage architecture",
      "Installation responsibilities and support terms",
    ],
    scope: [
      "Assess capacity needs and the physical deployment environment.",
      "Coordinate supplier specifications, delivery, and installation planning.",
      "Define software configuration, acceptance checks, and handover.",
    ],
    note: "System scope and delivery depend on confirmed supplier options and site readiness. This is an enquiry, not a stock reservation.",
  },
  {
    slug: "nvidia-vera",
    name: "NVIDIA Vera CPU platforms",
    family: "Vera",
    category: "CPU platforms",
    summary:
      "Explore Vera-based CPU platform requirements as part of a compatible AI infrastructure design.",
    fit: "Platform planning for workloads and systems that support the Vera CPU architecture.",
    deployment:
      "Supplier-confirmed integrated platforms; compatibility assessed before quotation.",
    considerations: [
      "CPU architecture and application support",
      "Supported system and accelerator pairing",
      "Confirmed supplier specifications and availability",
    ],
    scope: [
      "Review the software and workload compatibility requirements.",
      "Confirm the relevant platform and supplier bill of materials.",
      "Scope deployment, configuration, and support responsibilities.",
    ],
    note: "Vera is a CPU platform, not a GPU. We confirm compatible systems and supply options before making a commercial offer.",
  },
  {
    slug: "nvidia-rubin",
    name: "NVIDIA Rubin platforms",
    family: "Rubin",
    category: "AI systems",
    summary:
      "Discuss Rubin-based GPU infrastructure and Vera Rubin system requirements for your capacity roadmap.",
    fit: "Infrastructure planning for organisations assessing Rubin-based AI platforms.",
    deployment:
      "Available supplier configurations, validated against the intended deployment window.",
    considerations: [
      "Confirmed platform specification and delivery window",
      "Facility, networking, and cooling requirements",
      "Model-serving software and migration compatibility",
    ],
    scope: [
      "Translate your capacity roadmap into a system requirements brief.",
      "Confirm supplier offerings, prerequisites, and commercial availability.",
      "Plan migration, acceptance checks, and operational handover.",
    ],
    note: "Roadmap and sourcing enquiries are welcome. Listed platforms do not imply current stock, a guaranteed delivery date, or confirmed allocation.",
  },
  {
    slug: "local-ai-workstations",
    name: "Local AI workstations",
    family: "RTX & professional GPUs",
    category: "AI systems",
    summary:
      "Start local inference with a workstation or compact server sized to your team’s actual models and usage.",
    fit: "Small teams, development, internal knowledge assistants, and pilot inference workloads.",
    deployment:
      "Workstation or small-server configurations using suitable NVIDIA RTX or professional GPUs.",
    considerations: [
      "Model size and available GPU memory",
      "Noise, power, cooling, and physical space",
      "Concurrent users and upgrade options",
    ],
    scope: [
      "Choose a practical model and size the GPU, RAM, and storage.",
      "Source and install the agreed system at your site.",
      "Configure Ollama or another suitable serving engine, access controls, and monitoring.",
    ],
    note: "We recommend an exact GPU and system configuration after assessing the model, workload, budget, and operating environment.",
  },
];

export const hardwareServices = [
  {
    icon: "search",
    title: "Size & source",
    text: "Map your models, users, budget, and site requirements. Compare supplier configurations and confirm the exact bill of materials.",
  },
  {
    icon: "server",
    title: "Supply & install",
    text: "Coordinate hardware supply, delivery, rack or workstation installation, networking, and power and cooling prerequisites.",
  },
  {
    icon: "code",
    title: "Configure local inference",
    text: "Set up supported drivers, CUDA, containers, and serving engines such as vLLM, Ollama, or NVIDIA NIM where suitable.",
  },
  {
    icon: "shield",
    title: "Validate & support",
    text: "Check the agreed workload, access controls, monitoring, and recovery procedures. Hand over documentation and scope ongoing support.",
  },
];

export function getHardware(slug: string) {
  return hardware.find((item) => item.slug === slug);
}
