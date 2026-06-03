import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-WK45QC02XS";
const SITE_URL = "https://aims-sg.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AIMS — AI Management & Business Transformation Consulting in Singapore",
    template: "%s | AIMS",
  },
  description:
    "AIMS is a Singapore-based AI management and consulting company helping businesses, entrepreneurs, and professionals discover, implement, and manage practical AI solutions, automation, and AI agents with confidence.",
  keywords: [
    "AI consulting Singapore",
    "AI business transformation",
    "AI management services",
    "AI automation Singapore",
    "AI agents for business",
    "AI integration consultant",
    "AI strategy",
    "AI training Singapore",
    "business automation",
    "AIMS",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "AIMS — A.I. Management Services",
    title: "AIMS — AI Management & Business Transformation Consulting in Singapore",
    description:
      "Helping businesses and individuals use AI with confidence. Practical AI consulting, automation, and AI agent solutions based in Singapore.",
    locale: "en_SG",
    images: [
      {
        url: "/aims-logo-cropped.png",
        width: 1200,
        height: 630,
        alt: "AIMS — A.I. Management Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIMS — AI Management & Business Transformation Consulting in Singapore",
    description:
      "Helping businesses and individuals use AI with confidence. Practical AI consulting, automation, and AI agent solutions based in Singapore.",
    images: ["/aims-logo-cropped.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${SITE_URL}/#organization`,
      name: "AIMS — A.I. Management Services",
      alternateName: "AIMS",
      url: SITE_URL,
      logo: `${SITE_URL}/aims-logo-cropped.png`,
      image: `${SITE_URL}/aims-logo-cropped.png`,
      description:
        "AIMS is a Singapore-based AI management and consulting company that helps businesses, entrepreneurs, professionals, and individuals discover, implement, and manage practical AI solutions, automation, and AI agents.",
      email: "enquiries@aims-sg.com",
      foundingDate: "2026",
      areaServed: { "@type": "Country", name: "Singapore" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "29 Carpenter Street",
        addressLocality: "Singapore",
        postalCode: "059923",
        addressCountry: "SG",
      },
      sameAs: ["https://www.facebook.com/profile.php?id=61589876739695"],
      knowsAbout: [
        "Artificial Intelligence",
        "AI Consulting",
        "AI Automation",
        "AI Agents",
        "Business Transformation",
        "Workflow Automation",
        "AI Strategy",
        "AI Training",
      ],
      founder: [
        { "@type": "Person", name: "Kin", sameAs: "https://www.linkedin.com/in/kinfams341534/" },
        { "@type": "Person", name: "Jay", sameAs: "https://www.linkedin.com/in/jay-koh/" },
        { "@type": "Person", name: "AC", sameAs: "https://www.linkedin.com/in/aloycwl/" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Consultation", description: "Helping clients understand the AI landscape and identify the right tools, workflows, and opportunities." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Setup & Integration", description: "Setting up AI tools, automation systems, AI agents, and AI-powered workflows." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agent Solutions", description: "AI-powered agents for customer support, operations, content creation, and workflow automation." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Education & Training", description: "Practical AI learning sessions for businesses, teams, and individuals." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Business Incubation", description: "Support across AI business planning, strategy, positioning, and growth." } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & Content", description: "Reduce repetitive tasks and strengthen content, marketing, and operations with AI." } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "AIMS — A.I. Management Services",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-SG",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What does AIMS do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIMS is an AI management and consulting company that helps businesses and individuals discover, choose, implement, and manage practical AI solutions — including AI strategy, tool selection, automation, and AI agents — without needing to become technology experts.",
          },
        },
        {
          "@type": "Question",
          name: "Where is AIMS located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIMS is based at 29 Carpenter Street, Singapore 059923, and serves businesses and individuals across Singapore.",
          },
        },
        {
          "@type": "Question",
          name: "What AI services does AIMS offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIMS offers AI consultation, AI setup and integration, AI agent solutions, AI education and training, AI business incubation, and AI automation and content services.",
          },
        },
        {
          "@type": "Question",
          name: "Who is AIMS for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AIMS works with businesses, entrepreneurs, professionals, small teams, one-person operations, and individuals who want to adopt AI in a practical, manageable way.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact AIMS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach AIMS by email at enquiries@aims-sg.com or through the contact form on the AIMS website.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
