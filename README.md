# AIMS Website

Futuristic public website for A.I. Management Services, built with Next.js and a Resend-powered contact form.

## Local development

```bash
npm install
npm run dev
```

## Vercel environment variables

Set these in Vercel before deploying the contact form:

- `RESEND_API_KEY` — Resend API key
- `CONTACT_TO` — inbox that receives website enquiries, e.g. `enquiries@aims-sg.com`
- `CONTACT_FROM` — sender identity, e.g. `AIMS Website <hello@yourdomain.com>` after verifying your domain in Resend. Until then, use `AIMS Website <onboarding@resend.dev>`.

The API key is intentionally not committed to GitHub.
