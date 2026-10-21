# AIMS website

The public website for A.I. Management Services: agentic AI transformation, business automation, custom agents, and hardware, based in Singapore. Built with Next.js App Router, React, TypeScript, and CSS. The warm white, teal, coral, and yellow visual system uses local assets and system fonts, with no external font or UI-library dependency.

## Development and checks

Use Node.js 22.18 or newer and install the versions recorded in the lockfile:

```bash
npm ci
npm run dev
```

```bash
npm test
npm run typecheck
npm run build
npm start
```

`typecheck` generates Next.js route types before checking TypeScript. The Node tests cover enquiry validation, email escaping, catalogue search, agent and hardware enquiry prefills, original service URLs, and links between content pages. The GitHub quality workflow runs these tests and the production build, including Next.js type checking, on pull requests and updates to `main`. Browser verification should cover mobile navigation, all catalogue filters, hardware comparison (up to three selections), the illustrative homepage workflow, solution tabs (including arrow-key navigation), FAQ disclosures, and contact success, failure, and retry behaviour. Mock contact delivery during browser checks to avoid sending real enquiries.

## Content and routes

- `/`: agentic transformation, three service paths, an interactive illustrative agent workflow, sample agents, hardware, delivery approach, guides, and FAQs.
- `/services`: searchable catalogue of fifteen services, with category filters.
- `/services/[slug]`: dedicated pages with deliverables, illustrative workflows, success measures, FAQs, and related capabilities.
- `/solutions`: interactive examples for operations, customer experience, and engineering.
- `/agents` and `/agents/[slug]`: twelve sample agents for admin, HR, accounts, development, project management, design, video, sales, support, research, procurement, and marketing. Each detail page explains tasks, example steps, tools, review points, and relevant services.
- `/hardware` and `/hardware/[slug]`: nine GPU, system, and CPU platform sourcing options with search, filtering, and comparison. Sales are quote-based; listings do not represent live inventory or fixed specifications.
- `/platforms`: practical examples for Make, n8n, Zapier, Power Automate, Microsoft 365 Copilot, Copilot Studio, Dify, Flowise, LangGraph, and UiPath.
- `/about`: company principles, founders, and Singapore location.
- `/contact`: project enquiry form. `?service=<service-slug>` selects a capability, `?agent=<agent-slug>` selects an agent and prepares an editable brief, and `?hardware=<slug>[,<slug>,<slug>]` carries up to three hardware selections into a quote enquiry. Only recognised catalogue values are used.
- `/insights` and `/insights/[slug]`: practical guides to a first business agent, local hardware planning, RAG and fine-tuning, MCP, and LLM caching.
- `/privacy`: the website's enquiry and analytics privacy notice.

Service content lives in `lib/services.ts`; agents in `lib/agents.ts`; hardware in `lib/hardware.ts`; platforms in `lib/platforms.ts`; guides in `lib/insights.ts`; workflow examples in `lib/solutions.ts`. Company details, the shared metadata helper, homepage FAQs, and delivery stages live in `lib/site.ts`. The shared visual system is in `app/globals.css` and `app/transformation.css`.

Service, agent, hardware, and guide pages are generated from these content files. Main content renders on the server; navigation, filtering, workflow examples, comparisons, and the enquiry form use client components. Keep examples labelled as illustrative unless they are replaced with verified client work. Model wholesale and hardware sourcing are enquiry-led: specifications, availability, rates, access arrangements, eligibility, and terms are confirmed in the quotation. H20e enquiries require the supplier’s exact part number; Vera is categorised as a CPU platform. This website does not provide a self-service hardware checkout, credit store, or model API.

## Search and sharing

Pages have their own titles, descriptions, and canonical URLs. Structured data describes the organisation, catalogues, individual services, visible FAQs, breadcrumbs, and articles. Agent pages describe development services; hardware pages describe sourcing and installation, without fabricated product prices, ratings, or stock claims. The sitemap includes all public content routes; API routes are excluded from crawling. Update sitemap modification dates when publishing material content changes, and article dates when editing guides.

The sharing image is `public/social-card.png` (1200 × 630), with an editable source in `public/social-card.svg`. `public/favicon.svg` and `public/apple-touch-icon.png` provide site icons. The existing Google Analytics measurement ID is retained in `app/layout.tsx`. `components/site-analytics.tsx` mounts Vercel Web Analytics using `@vercel/analytics/next`; its `beforeSend` callback removes query strings and fragments from page URLs. Form field values are not sent as analytics events. Enable Web Analytics for the project in Vercel to receive production data; local previews do not establish production collection.

## Contact form and deployment

The existing Brevo SMTP integration is retained. Configure these server-side variables in Vercel or the hosting environment:

- `BREVO_SMTP_HOST`: SMTP host; defaults to `smtp-relay.brevo.com`.
- `BREVO_SMTP_PORT`: SMTP port; defaults to `587` (`465` uses implicit TLS).
- `BREVO_SMTP_USER`: SMTP login.
- `BREVO_SMTP_KEY`: SMTP key.
- `CONTACT_TO`: receiving inbox; defaults to `enquiries@aims-sg.com`.
- `CONTACT_FROM`: verified sender identity; defaults to `AIMS Website <no-reply@aims-sg.com>`.

The API validates required fields, types, lengths, and email format; escapes HTML content; suppresses honeypot submissions; and uses bounded SMTP timeouts. The form retains entered details after an error and provides a direct email alternative. Missing email configuration returns a service-unavailable response. Enquiry delivery requires valid SMTP settings and a verified sender.

Secrets belong in the deployment environment, never in committed files or client components. `.env.example` documents the variable names.
