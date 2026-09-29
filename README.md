# AIMS website

The public website for A.I. Management Services: AI engineering, automation, and infrastructure, based in Singapore. Built with Next.js App Router, React, TypeScript, and CSS. The site uses locally hosted artwork and images, with no external font or UI-library dependency.

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

`typecheck` generates Next.js route types before checking TypeScript. The Node tests cover enquiry validation, email escaping, complete service content, and links between guides, solutions, and service pages. The GitHub quality workflow runs these tests and the production build, including Next.js type checking, on pull requests and updates to `main`. Browser verification should cover the navigation, capability filters, workflow tabs (including arrow-key navigation), FAQ disclosures, and contact success, failure, and retry behaviour.

## Content and routes

- `/`: positioning, capabilities, example workflows, delivery approach, model access, guides, and FAQs.
- `/services`: searchable catalogue of ten services, with category filters.
- `/services/[slug]`: dedicated pages with deliverables, illustrative workflows, success measures, FAQs, and related capabilities.
- `/solutions`: interactive examples for operations, customer experience, and engineering.
- `/about`: company principles, founders, and Singapore location.
- `/contact`: project enquiry form. `?service=<service-slug>` selects the relevant capability.
- `/insights` and `/insights/[slug]`: practical guides to RAG and fine-tuning, MCP, and LLM caching.
- `/privacy`: the website's enquiry and analytics privacy notice.

Service content lives in `lib/services.ts`; guides in `lib/insights.ts`; workflow examples in `lib/solutions.ts`. Company details, the shared metadata helper, homepage FAQs, and delivery stages live in `lib/site.ts`. The shared visual system is in `app/globals.css`.

Service and guide pages are generated from these content files. Main content renders on the server; navigation, filtering, workflow tabs, and the enquiry form use small client components. Keep examples labelled as illustrative unless they are replaced with verified client work. Model wholesale is an enquiry-led service: models, rates, access arrangements, and terms are confirmed in the quotation. This website does not provide a self-service credit store or a model API.

## Search and sharing

Pages have their own titles, descriptions, and canonical URLs. Structured data describes the organisation, service catalogue, individual services, visible FAQs, breadcrumbs, and articles. The sitemap includes all public content routes; API routes are excluded from crawling. Update sitemap modification dates when publishing material content changes, and article dates when editing guides.

The sharing image is `public/social-card.png` (1200 × 630). `public/favicon.svg` and `public/apple-touch-icon.png` provide site icons. The existing Google Analytics measurement ID is retained in `app/layout.tsx`.

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
