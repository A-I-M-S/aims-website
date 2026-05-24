# AIMS Website

Futuristic public website for A.I. Management Services, built with Next.js and a Brevo-powered contact form.

## Local development

```bash
npm install
npm run dev
```

## Vercel environment variables

Set these in Vercel before deploying the contact form:

- `BREVO_SMTP_HOST` — Brevo SMTP server, usually `smtp-relay.brevo.com`
- `BREVO_SMTP_PORT` — Brevo SMTP port, usually `587`
- `BREVO_SMTP_USER` — Brevo SMTP login
- `BREVO_SMTP_KEY` — Brevo SMTP key
- `CONTACT_TO` — inbox that receives website enquiries, e.g. `enquiries@aims-sg.com`
- `CONTACT_FROM` — sender identity, e.g. `AIMS Website <no-reply@aims-sg.com>`

SMTP keys are intentionally not committed to GitHub.
