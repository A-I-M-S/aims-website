import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { runInNewContext } from "node:vm";
import test from "node:test";
import * as contact from "../lib/contact.ts";

const require = createRequire(import.meta.url);
const ts = require("typescript");
const compiled = ts.transpileModule(
  readFileSync(new URL("../app/api/contact/route.ts", import.meta.url), "utf8"),
  {
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.CommonJS,
      esModuleInterop: true,
    },
  },
).outputText;

const valid = {
  name: "Alex Tan",
  email: "alex@example.com",
  interest: "API & MCP integration",
  message: "Please help us connect our internal systems.",
};

function fixture({ configured = true, failDelivery = false, env = {} } = {}) {
  const messages = [];
  const configurations = [];
  const logs = [];
  let closed = 0;
  const exports = {};
  runInNewContext(compiled, {
    exports,
    process: {
      env: {
        ...(configured
          ? { BREVO_SMTP_USER: "test-user", BREVO_SMTP_KEY: "test-key" }
          : {}),
        ...env,
      },
    },
    console: { error: (...args) => logs.push(args.join(" ")) },
    require: (name) => {
      // Only the JSON response primitive is needed from Next in this route.
      if (name === "next/server") return { NextResponse: Response };
      if (name === "../../../lib/contact") return contact;
      if (name === "nodemailer")
        return {
          createTransport: (configuration) => {
            configurations.push(configuration);
            return {
              sendMail: async (message) => {
                if (failDelivery)
                  throw new Error("private SMTP failure detail");
                messages.push(message);
              },
              close: () => closed++,
            };
          },
        };
      throw new Error(`Unexpected route dependency: ${name}`);
    },
  });
  const send = (body) =>
    exports.POST(
      new Request("http://localhost/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: typeof body === "string" ? body : JSON.stringify(body),
      }),
    );
  return {
    send,
    messages,
    configurations,
    logs,
    get closed() {
      return closed;
    },
  };
}

test("malformed JSON returns 400 without opening an email connection", async () => {
  const route = fixture();
  const response = await route.send("{");
  assert.equal(response.status, 400);
  assert.equal(route.configurations.length, 0);
});

test("invalid required fields return a useful error before email delivery", async () => {
  const route = fixture();
  const response = await route.send({ ...valid, email: "invalid" });
  assert.equal(response.status, 400);
  assert.match((await response.json()).error, /valid email/i);
  assert.equal(route.messages.length, 0);
});

test("missing SMTP credentials return 503 and a direct contact alternative", async () => {
  const route = fixture({ configured: false });
  const response = await route.send(valid);
  assert.equal(response.status, 503);
  assert.match((await response.json()).error, /enquiries@aims-sg\.com/);
  assert.equal(route.configurations.length, 0);
});

test("honeypot submissions are acknowledged without sending email", async () => {
  const route = fixture();
  const response = await route.send({
    ...valid,
    website: "https://spam.example",
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(route.configurations.length, 0);
});

test("successful enquiries preserve the reply address and escape untrusted email content", async () => {
  const route = fixture();
  const response = await route.send({
    ...valid,
    company: '<img src="x">',
    message: "First line\nSecond line & more",
  });
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(route.messages.length, 1);
  const message = route.messages[0];
  assert.equal(message.replyTo, valid.email);
  assert.equal(message.to, "enquiries@aims-sg.com");
  assert.match(message.html, /&lt;img src=&quot;x&quot;&gt;/);
  assert.match(message.html, /First line<br \/>Second line &amp; more/);
  assert.match(message.text, /Interest: API & MCP integration/);
  assert.equal(route.closed, 1);
});

test("SMTP delivery failures return 502, close the transport, and keep private details out of the response", async () => {
  const route = fixture({ failDelivery: true });
  const response = await route.send(valid);
  assert.equal(response.status, 502);
  assert.doesNotMatch(
    JSON.stringify(await response.json()),
    /private SMTP|test-key/,
  );
  assert.doesNotMatch(route.logs.join(" "), /private SMTP|test-key/);
  assert.equal(route.closed, 1);
});

test("oversized messages are rejected before configuring a transport", async () => {
  const route = fixture();
  const response = await route.send({ ...valid, message: "x".repeat(5001) });
  assert.equal(response.status, 400);
  assert.equal(route.configurations.length, 0);
});

test("the existing SMTP sender settings and implicit TLS option are honoured", async () => {
  const route = fixture({
    env: {
      BREVO_SMTP_PORT: "465",
      CONTACT_FROM: "AIMS <sender@example.com>",
      CONTACT_TO: "receiver@example.com",
    },
  });
  await route.send(valid);
  assert.equal(route.configurations[0].secure, true);
  assert.equal(route.configurations[0].port, 465);
  assert.equal(route.messages[0].from, "AIMS <sender@example.com>");
  assert.equal(route.messages[0].to, "receiver@example.com");
});
