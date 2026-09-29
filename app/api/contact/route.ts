import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, validateContact } from "../../../lib/contact";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Please submit a valid enquiry." },
      { status: 400 },
    );
  }

  const result = validateContact(body);
  if (!result.ok)
    return NextResponse.json({ error: result.error }, { status: 400 });
  if (result.spam) return NextResponse.json({ ok: true });
  const { name, email, company, interest, message } = result.data;
  const user = process.env.BREVO_SMTP_USER;
  const pass = process.env.BREVO_SMTP_KEY;
  if (!user || !pass)
    return NextResponse.json(
      {
        error:
          "Our enquiry form is temporarily unavailable. Please email enquiries@aims-sg.com.",
      },
      { status: 503 },
    );

  const port = Number(process.env.BREVO_SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.BREVO_SMTP_HOST || "smtp-relay.brevo.com",
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  });
  try {
    await transporter.sendMail({
      from: process.env.CONTACT_FROM || "AIMS Website <no-reply@aims-sg.com>",
      to: process.env.CONTACT_TO || "enquiries@aims-sg.com",
      replyTo: email,
      subject: `New AIMS enquiry from ${name}`,
      html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#101828"><h2>New AIMS website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p><p><strong>Interest:</strong> ${escapeHtml(interest || "General enquiry")}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p></div>`,
      text: [
        "New AIMS website enquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        `Interest: ${interest || "General enquiry"}`,
        "",
        message,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    console.error("AIMS contact email delivery failed.");
    return NextResponse.json(
      {
        error:
          "We couldn’t send your enquiry right now. Please try again or email enquiries@aims-sg.com.",
      },
      { status: 502 },
    );
  } finally {
    transporter.close();
  }
}
