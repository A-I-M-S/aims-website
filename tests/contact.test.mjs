import assert from "node:assert/strict";
import test from "node:test";
import { escapeHtml, validateContact } from "../lib/contact.ts";

const enquiry = {
  name: "Alex Tan",
  email: "alex@example.com",
  company: "Example",
  interest: "API & MCP integration",
  message: "We would like to connect our internal tools to an assistant.",
  website: "",
};

test("a complete enquiry keeps its selected capability and trims accidental whitespace", () => {
  const result = validateContact({
    ...enquiry,
    name: "  Alex Tan  ",
    email: " alex@example.com ",
  });
  assert.equal(result.ok, true);
  assert.equal(result.spam, false);
  assert.equal(result.data.name, "Alex Tan");
  assert.equal(result.data.email, "alex@example.com");
  assert.equal(result.data.interest, "API & MCP integration");
});

test("optional fields may be omitted without losing the enquiry", () => {
  const result = validateContact({
    name: enquiry.name,
    email: enquiry.email,
    message: enquiry.message,
  });
  assert.equal(result.ok, true);
  assert.equal(result.data.company, "");
  assert.equal(result.data.interest, "");
});

test("malformed payloads and object-valued fields are rejected", () => {
  for (const body of [
    null,
    [],
    "text",
    23,
    { ...enquiry, email: { address: enquiry.email } },
    { ...enquiry, message: ["text"] },
  ]) {
    assert.equal(validateContact(body).ok, false);
  }
});

test("required fields cannot be blank or whitespace", () => {
  for (const field of ["name", "email", "message"])
    assert.equal(validateContact({ ...enquiry, [field]: "   " }).ok, false);
});

test("invalid email addresses and header-injection attempts are rejected", () => {
  for (const email of [
    "not-an-email",
    "alex@",
    "@example.com",
    "alex@exa mple.com",
    "alex@example.com\r\nBcc: other@example.com",
  ])
    assert.equal(validateContact({ ...enquiry, email }).ok, false);
  assert.equal(
    validateContact({ ...enquiry, name: "Alex\r\nBcc: other@example.com" }).ok,
    false,
  );
});

test("message and field limits are enforced before email delivery", () => {
  assert.equal(
    validateContact({ ...enquiry, message: "a".repeat(5000) }).ok,
    true,
  );
  for (const [field, length] of [
    ["name", 101],
    ["email", 255],
    ["company", 161],
    ["interest", 161],
    ["message", 5001],
  ])
    assert.equal(
      validateContact({ ...enquiry, [field]: "a".repeat(length) }).ok,
      false,
    );
});

test("the honeypot identifies automated submissions for silent suppression", () => {
  const result = validateContact({
    ...enquiry,
    website: "https://spam.example",
  });
  assert.equal(result.ok, true);
  assert.equal(result.spam, true);
});

test("enquiry content is escaped before inclusion in an HTML email", () => {
  assert.equal(
    escapeHtml('<a href="bad">O\'Brien & Co</a>'),
    "&lt;a href=&quot;bad&quot;&gt;O&#039;Brien &amp; Co&lt;/a&gt;",
  );
});
