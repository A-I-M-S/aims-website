import { ContactForm } from "../../components/contact-form";
import { Breadcrumbs } from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { Icon } from "../../components/icon";
import { services, getService } from "../../lib/services";
import { CONTACT_EMAIL, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "Discuss Your AI Project",
  "Talk to AIMS about AI automation, agent engineering, infrastructure, and model access. Share your goals with our Singapore-based team to scope the next step.",
  "/contact",
);

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string | string[] }>;
}) {
  const selected = (await searchParams).service;
  const service =
    typeof selected === "string" ? getService(selected) : undefined;
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
              Big idea?
              <br />
              Everyday challenge?
              <br />
              <span className="accent">Let’s build.</span>
            </h1>
            <p className="page-lead">
              Tell us what you want to make possible. We’ll explore the right
              approach, the practical constraints, and a clear next step.
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
            interests={services.map((item) => item.shortTitle)}
            initialInterest={service?.shortTitle}
          />
        </div>
      </section>
      <BreadcrumbSchema items={[{ name: "Contact", path: "/contact" }]} />
    </>
  );
}
