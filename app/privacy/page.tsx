import { Breadcrumbs } from "../../components/sections";
import { BreadcrumbSchema } from "../../components/json-ld";
import { CONTACT_EMAIL, pageMetadata } from "../../lib/site";

export const metadata = pageMetadata(
  "Website Privacy Notice",
  "How the AIMS website handles enquiry details and website analytics, and how to contact us about your information.",
  "/privacy",
);

export default function PrivacyPage() {
  return (
    <>
      <section className="container page-intro privacy-intro">
        <Breadcrumbs items={[{ name: "Privacy notice" }]} />
        <p className="eyebrow">
          <span />
          Your information
        </p>
        <h1>Website privacy notice.</h1>
        <p className="page-lead">
          This notice explains how information is handled when you use this
          website or send AIMS an enquiry.
        </p>
        <p className="mono">Updated 29 September 2026</p>
      </section>
      <div className="container legal-copy">
        <section>
          <h2>Information you send us</h2>
          <p>
            Our contact form collects your name, email address, optional company
            name, selected area of interest, and message. We use this
            information to respond, understand your requirements, and discuss a
            potential engagement. Please avoid including passwords, API keys, or
            confidential customer information in an enquiry.
          </p>
        </section>
        <section>
          <h2>How enquiries are delivered</h2>
          <p>
            The website sends enquiries to the AIMS team through our configured
            Brevo email service. Your details are included in that email.
            Website hosting and email service providers process information as
            part of delivering those services; their processing locations may be
            outside Singapore.
          </p>
        </section>
        <section>
          <h2>Website analytics</h2>
          <p>
            This website uses Google Analytics to understand website usage,
            including page views and technical information about browsers and
            devices. Google Analytics may use cookies and similar technologies.
            Contact form field values are not included in analytics events
            implemented by this website.
          </p>
          <p>
            You can manage cookies and tracking through your browser settings
            and privacy tools. Google provides information about its processing
            in its{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              privacy policy (opens in a new tab)
            </a>
            .
          </p>
        </section>
        <section>
          <h2>External links</h2>
          <p>
            Links to LinkedIn, Facebook, Google Maps, and other external
            websites take you to services with their own privacy practices. This
            notice describes the AIMS website.
          </p>
        </section>
        <section>
          <h2>Questions about your information</h2>
          <p>
            To ask about information you have sent us, request a correction or
            deletion, or raise a privacy concern, contact{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need
            to verify your identity and clarify your request before acting.
          </p>
        </section>
      </div>
      <BreadcrumbSchema
        items={[{ name: "Privacy notice", path: "/privacy" }]}
      />
    </>
  );
}
