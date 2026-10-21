import type { Agent } from "./agents";
import type { Hardware } from "./hardware";
import type { Service } from "./services";

type EnquiryParams = {
  service?: string | string[];
  agent?: string | string[];
  hardware?: string | string[];
};
type Catalogues = {
  services: Service[];
  agents: Agent[];
  hardware: Hardware[];
};

export function getEnquiryContext(
  params: EnquiryParams,
  catalogues: Catalogues,
) {
  const service =
    typeof params.service === "string"
      ? catalogues.services.find((item) => item.slug === params.service)
      : undefined;
  const agent =
    typeof params.agent === "string"
      ? catalogues.agents.find((item) => item.slug === params.agent)
      : undefined;
  const requested =
    typeof params.hardware === "string"
      ? [...new Set(params.hardware.split(","))].slice(0, 3)
      : [];
  const hardware = requested.flatMap((slug) => {
    const item = catalogues.hardware.find(
      (candidate) => candidate.slug === slug,
    );
    return item ? [item] : [];
  });
  if (hardware.length) {
    return {
      interest: catalogues.services.find(
        (item) => item.slug === "gpu-hardware-services",
      )?.shortTitle,
      message: `I’d like to discuss ${hardware.map((item) => item.name).join(", ")}.\n\nModels / workload:\nConcurrent users:\nBudget range:\nInstallation location:\nTarget deployment date:`,
    };
  }
  if (agent) {
    return {
      interest: `${agent.name} development`,
      message: `I’d like to explore the ${agent.name.toLowerCase()} for our team.\n\nThe process we want to improve:\nTools we use today:\nWho will use and review the agent’s work:\nOur target timeline:`,
    };
  }
  return { interest: service?.shortTitle, message: "" };
}
