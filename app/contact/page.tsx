import { ContactForm } from "../../components/contact-form";
import { Breadcrumbs } from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { Icon } from "../../components/icon";
import { services } from "../../lib/services";
import { agents } from "../../lib/agents";
import { hardware } from "../../lib/hardware";
import { getEnquiryContext } from "../../lib/enquiry";
import { CONTACT_EMAIL, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "Discuss an AI Project or Request a GPU Quote",
  "Talk to AIMS Singapore about AI agents, workflow automation, Microsoft Copilot, NVIDIA hardware, and local inference. Share your goals and request a quote.",
  "/contact",
);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{
    service?: string | string[];
    agent?: string | string[];
    hardware?: string | string[];
  }>;
}) {
  const context = getEnquiryContext(await searchParams, {
    services,
    agents,
    hardware,
  });
  return (
    <>
      <section className="container contact-page">
        <Breadcrumbs items={[{ name: "Contact" }]} />
        <div className="contact-grid">
          <div className="contact-intro">
            <p className="eyebrow">
              <span />
              The next step is a conversation
            </p>
            <h1>
              A big idea.
              <br />
              A little possibility.
              <br />
              <span className="accent">Let’s talk.</span>
            </h1>
            <p className="page-lead">
              An agent for your team, a workflow that could work better, or
              hardware for your next AI deployment. Tell us what you have in
              mind.
            </p>
            <div className="contact-details">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Icon name="mail" />
                <div>
                  <span>Email us directly</span>
                  <strong>{CONTACT_EMAIL}</strong>
                </div>
                <Icon name="diagonal" />
              </a>
              <a
                href="https://maps.google.com/?q=29%20Carpenter%20Street%20Singapore%20059923"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="pin" />
                <div>
                  <span>Based in Singapore</span>
                  <strong>
                    29 Carpenter Street
                    <br />
                    Singapore 059923
                  </strong>
                </div>
                <Icon name="diagonal" />
                <span className="sr-only">Map opens in a new tab</span>
              </a>
            </div>
            <div className="next-steps">
              <p className="mono">WHAT HAPPENS NEXT</p>
              <ol>
                <li>We review your goals and requirements.</li>
                <li>We arrange a conversation to understand the detail.</li>
                <li>We propose a scope and approach that fits.</li>
              </ol>
            </div>
          </div>
          <ContactForm
            key={`${context.interest}:${context.message}`}
            interests={[
              ...services.map((item) => item.shortTitle),
              ...agents.map((agent) => `${agent.name} development`),
            ]}
            initialInterest={context.interest}
            initialMessage={context.message}
          />
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />
    </>
  );
}
