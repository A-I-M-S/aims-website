import type { Metadata } from "next";
import Script from "next/script";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { JsonLd } from "../components/json-ld";
import { SiteAnalytics } from "../components/site-analytics";
import { SITE_URL, SITE_NAME, CONTACT_EMAIL, founders } from "../lib/site";
import { services } from "../lib/services";
import "./globals.css";
import "./transformation.css";

const title = "Agentic AI, Automation & GPU Hardware | AIMS Singapore";
const description =
  "Put AI to work with AIMS Singapore. Custom AI agents, Make and n8n automation, Microsoft Copilot, NVIDIA GPU sourcing, and local inference installation.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | AIMS" },
  description,
  applicationName: "AIMS",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
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
    title,
    description,
    images: ["/social-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", apple: "/apple-touch-icon.png" },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-SG">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="site-main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "ProfessionalService"],
                "@id": `${SITE_URL}/#organization`,
                name: SITE_NAME,
                alternateName: "AIMS",
                url: SITE_URL,
                logo: `${SITE_URL}/aims-logo-transparent.png`,
                image: `${SITE_URL}/social-card.png`,
                description,
                email: CONTACT_EMAIL,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "29 Carpenter Street",
                  addressLocality: "Singapore",
                  postalCode: "059923",
                  addressCountry: "SG",
                },
                areaServed: [
                  { "@type": "Country", name: "Singapore" },
                  { "@type": "Place", name: "Asia-Pacific" },
                ],
                sameAs: [
                  "https://www.facebook.com/profile.php?id=61589876739695",
                ],
                founder: founders.map((founder) => ({
                  "@type": "Person",
                  name: founder.name,
                  sameAs: founder.url,
                })),
                knowsAbout: [
                  "AI engineering",
                  "Workflow automation",
                  "AI agents",
                  "Model Context Protocol",
                  "Retrieval-augmented generation",
                  "LLM infrastructure",
                  "Agentic AI transformation",
                  "Microsoft Copilot and Copilot Studio",
                  "NVIDIA GPU sourcing and installation",
                  "Local AI inference",
                ],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Agentic AI, Automation & Hardware Services",
                  itemListElement: services.map((service) => ({
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      "@id": `${SITE_URL}/services/${service.slug}#service`,
                      name: service.title,
                      url: `${SITE_URL}/services/${service.slug}`,
                      description: service.summary,
                    },
                  })),
                },
              },
              {
                "@type": "WebSite",
                "@id": `${SITE_URL}/#website`,
                url: SITE_URL,
                name: SITE_NAME,
                publisher: { "@id": `${SITE_URL}/#organization` },
                inLanguage: "en-SG",
              },
            ],
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WK45QC02XS"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WK45QC02XS');`}</Script>
        <SiteAnalytics />
      </body>
    </html>
  );
}
