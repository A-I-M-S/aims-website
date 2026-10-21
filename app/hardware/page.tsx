import Link from "next/link";
import { HardwareExplorer } from "../../components/hardware-explorer";
import { Icon } from "../../components/icon";
import { BreadcrumbSchema, JsonLd } from "../../components/json-ld";
import {
  Breadcrumbs,
  FaqSection,
  ProjectCta,
  SectionHeading,
} from "../../components/sections";
import { hardware, hardwareServices } from "../../lib/hardware";
import { pageMetadata, SITE_URL } from "../../lib/site";

export const metadata = pageMetadata(
  "NVIDIA GPU Sales & Local AI Hardware Singapore",
  "Source NVIDIA H20, H100, H200, B300, Vera, and Rubin systems with AIMS. GPU sales enquiries, onsite installation, and local inference configuration in Singapore.",
  "/hardware",
);

export default function HardwarePage() {
  return (
    <>
      <section className="container page-intro catalogue-intro">
        <Breadcrumbs items={[{ name: "Hardware & private AI" }]} />
        <p className="eyebrow">
          <span />
          SOURCE IT. INSTALL IT. PUT IT TO WORK.
        </p>
        <h1>
          AI hardware.
          <br />
          <span className="accent">Real-world possibilities.</span>
        </h1>
        <p className="page-lead">
          From a local inference workstation to NVIDIA enterprise systems. We
          connect hardware sourcing and sales with onsite installation,
          configuration, and the support to run your AI.
        </p>
        <div className="button-row">
          <a className="button" href="#hardware-catalogue">
            Explore the catalogue <Icon name="arrow" />
          </a>
          <Link
            className="text-link"
            href="/contact?service=gpu-hardware-services"
          >
            Help me size a system <Icon name="diagonal" />
          </Link>
        </div>
      </section>
      <section className="hardware-service-band">
        <div className="container hardware-service-grid">
          {hardwareServices.map((service, index) => (
            <article key={service.title}>
              <span className="service-stage">
                <Icon name={service.icon} />
                <span>0{index + 1}</span>
              </span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section container" id="hardware-catalogue">
        <SectionHeading
          eyebrow="FIND YOUR COMPUTE"
          title={
            <>
              The hardware behind
              <br />
              <span className="muted-heading">your next chapter.</span>
            </>
          }
          text="Explore NVIDIA GPUs, integrated AI systems, and CPU platforms. Compare the deployment needs and ask us for a configuration that fits your workload."
        />
        <div className="catalogue-notice">
          <Icon name="package" />
          <p>
            <strong>Every configuration starts with a conversation.</strong>{" "}
            Exact specifications, condition, availability, warranty, lead times,
            and supply eligibility are confirmed in your quote.
          </p>
        </div>
        <HardwareExplorer hardware={hardware} />
      </section>
      <FaqSection
        path="/hardware"
        faqs={[
          {
            question: "Do you sell hardware or only provide installation?",
            answer:
              "We handle hardware sourcing and sales enquiries as well as installation, configuration, and support. These can be scoped together or separately. Each quote confirms the supplier configuration, condition, warranty, and delivery terms.",
          },
          {
            question: "Can you help with H20e, Vera, and Rubin enquiries?",
            answer:
              "Yes. For H20e, send the supplier’s exact part number so we can verify the designation and specifications. Vera refers to a CPU platform; Rubin enquiries concern GPU and integrated system options. All supply and delivery details require supplier confirmation.",
          },
          {
            question: "What do you need to recommend a GPU?",
            answer:
              "Share the models you want to run, expected concurrent users, context lengths, latency or throughput goals, budget, and site constraints. We assess model weights, runtime memory, power, cooling, and operating effort together.",
          },
          {
            question: "What does local inference installation include?",
            answer:
              "The agreed scope can cover hardware installation, supported drivers and CUDA, containers, a serving engine such as vLLM, Ollama, or NVIDIA NIM, model access controls, monitoring, workload checks, and operational documentation.",
          },
          {
            question: "Does local inference keep all data onsite?",
            answer:
              "We review the complete data flow, including retrieval, telemetry, backups, model downloads, and tool calls. Running a model locally does not by itself make every connected service local.",
          },
        ]}
      />
      <ProjectCta
        href="/contact?service=gpu-hardware-services"
        title={
          <>
            A small first step.
            <br />
            Or your next AI rack.
          </>
        }
        text="Tell us what you want to run. We’ll help scope the hardware, the installation, and the operating plan."
        label="Request a hardware quote"
      />
      <BreadcrumbSchema
        items={[{ name: "Hardware & private AI", path: "/hardware" }]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AIMS AI hardware sourcing catalogue",
          itemListElement: hardware.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            url: `${SITE_URL}/hardware/${item.slug}`,
          })),
        }}
      />
    </>
  );
}
