"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { Icon } from "./icon";

export function ContactForm({
  interests,
  initialInterest = "Let’s explore the possibilities",
}: {
  interests: string[];
  initialInterest?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const request = useRef<AbortController | null>(null);
  const success = useRef<HTMLHeadingElement>(null);
  const errorSummary = useRef<HTMLParagraphElement>(null);

  useEffect(() => () => request.current?.abort(), []);
  useEffect(() => {
    if (status === "sent") success.current?.focus();
    if (status === "error") errorSummary.current?.focus();
  }, [status]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const payload = Object.fromEntries(
      new FormData(event.currentTarget).entries(),
    );
    const form = event.currentTarget;
    const controller = new AbortController();
    request.current = controller;
    setStatus("sending");
    setError("");
    const timeout = window.setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || data.ok !== true)
        throw new Error(
          typeof data.error === "string"
            ? data.error
            : "We couldn’t send your enquiry. Please try again or email us directly.",
        );
      form.reset();
      setStatus("sent");
    } catch (failure) {
      setError(
        failure instanceof Error &&
          failure.name !== "AbortError" &&
          failure.name !== "TypeError"
          ? failure.message
          : "We couldn’t reach our enquiry service. Your details are still here; please try again or email us directly.",
      );
      setStatus("error");
    } finally {
      window.clearTimeout(timeout);
      request.current = null;
    }
  }

  if (status === "sent")
    return (
      <div className="contact-success">
        <span className="success-icon">
          <Icon name="check" />
        </span>
        <p className="eyebrow">A good place to start</p>
        <h2 ref={success} tabIndex={-1}>
          Your enquiry is on its way.
        </h2>
        <p>
          Thank you for getting in touch. The AIMS team will review your message
          and follow up by email to discuss the next step.
        </p>
        <button
          type="button"
          className="button button-outline"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry <Icon name="arrow" />
        </button>
        <Link href="/insights" className="text-link">
          Explore our practical guides
          <Icon name="diagonal" />
        </Link>
      </div>
    );

  return (
    <form
      className="contact-form"
      method="post"
      action="/api/contact"
      onSubmit={submit}
      aria-busy={status === "sending"}
    >
      <div className="form-heading">
        <span className="mono">YOUR NEXT CHAPTER / START HERE</span>
        <p>Tell us what you have in mind.</p>
      </div>
      <div className="form-grid">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input
            name="name"
            autoComplete="name"
            placeholder="Alex Tan"
            required
            maxLength={100}
          />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            name="email"
            autoComplete="email"
            type="email"
            placeholder="alex@company.com"
            required
            maxLength={254}
          />
        </label>
        <label className="full-width">
          Company <span className="optional">optional</span>
          <input
            name="company"
            autoComplete="organization"
            placeholder="Your company or project"
            maxLength={160}
          />
        </label>
        <label className="full-width">
          What can we help with?
          <select name="interest" defaultValue={initialInterest}>
            <option>Let’s explore the possibilities</option>
            {interests.map((interest) => (
              <option key={interest}>{interest}</option>
            ))}
          </select>
        </label>
        <label className="full-width">
          A little about your project <span aria-hidden="true">*</span>
          <textarea
            name="message"
            placeholder="What would you like to build or improve? Tell us about your goals, current systems, and any timelines you have in mind."
            rows={5}
            required
            maxLength={5000}
            aria-describedby="message-help"
          />
          <span id="message-help" className="field-help">
            Please leave out passwords, API keys, and confidential customer
            data.
          </span>
        </label>
        <div className="form-trap" aria-hidden="true">
          <label>
            Website
            <input name="website" autoComplete="off" tabIndex={-1} />
          </label>
        </div>
      </div>
      <p className="form-privacy">
        We’ll use your details to respond to this enquiry. Read our{" "}
        <Link href="/privacy">privacy notice</Link>. Fields marked * are
        required.
      </p>
      <noscript>
        <p className="form-error">
          Please enable JavaScript to use this form, or email{" "}
          <a href="mailto:enquiries@aims-sg.com">enquiries@aims-sg.com</a>.
        </p>
      </noscript>
      <button
        type="submit"
        className="button form-submit"
        disabled={status === "sending"}
      >
        {status === "sending"
          ? "Sending your enquiry…"
          : "Let’s start a conversation"}
        <Icon name="diagonal" />
      </button>
      <div aria-live="polite">
        {status === "sending" && (
          <p className="form-status">
            Sending securely. This may take a moment.
          </p>
        )}
      </div>
      {status === "error" && (
        <p className="form-error" role="alert" ref={errorSummary} tabIndex={-1}>
          {error}{" "}
          <a href="mailto:enquiries@aims-sg.com">enquiries@aims-sg.com</a>
        </p>
      )}
    </form>
  );
}
