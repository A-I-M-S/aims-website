export type ContactInput = {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  website: string;
};
type ContactResult =
  | { ok: true; data: ContactInput; spam: boolean }
  | { ok: false; error: string };
const limits: Record<keyof ContactInput, number> = {
  name: 100,
  email: 254,
  company: 160,
  interest: 160,
  message: 5000,
  website: 200,
};

export function validateContact(body: unknown): ContactResult {
  if (!body || typeof body !== "object" || Array.isArray(body))
    return { ok: false, error: "Please submit a valid enquiry." };
  const values = body as Record<string, unknown>;
  const data = {} as ContactInput;
  for (const field of Object.keys(limits) as (keyof ContactInput)[]) {
    const value = values[field] ?? "";
    if (typeof value !== "string")
      return { ok: false, error: "Please check the details in your enquiry." };
    data[field] = value.trim();
    if (data[field].length > limits[field])
      return {
        ok: false,
        error: `${field === "message" ? "Your message" : "One of the fields"} is too long. Please shorten it and try again.`,
      };
  }
  if (data.website) return { ok: true, data, spam: true };
  if (!data.name || !data.email || !data.message)
    return { ok: false, error: "Name, email, and message are required." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return { ok: false, error: "Please provide a valid email address." };
  if (/[\r\n]/.test(data.name))
    return { ok: false, error: "Please enter your name on one line." };
  return { ok: true, data, spam: false };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
