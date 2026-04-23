"use server";

import { Resend } from "resend";
import { quoteSchema, type QuoteParsed } from "@/lib/quote-schema";

export type QuoteState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

const RECIPIENT = process.env.QUOTE_RECIPIENT ?? "heath@rentnashco.com";
const FROM = process.env.RESEND_FROM ?? "NASHCO Website <onboarding@resend.dev>";

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const raw = {
    company: formData.get("company"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    equipment: formData.getAll("equipment"),
    siteLocation: formData.get("siteLocation"),
    startDate: formData.get("startDate"),
    duration: formData.get("duration"),
    scope: formData.get("scope"),
    website: formData.get("website"),
  };

  const parsed = quoteSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  // Honeypot tripped — silently treat as success to avoid tipping off bots.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return { status: "success", message: "Thanks. We'll be in touch shortly." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const payload = buildEmailPayload(parsed.data);

  if (!apiKey) {
    // Dev fallback — log the submission so it isn't lost while Resend is unconfigured.
    console.warn(
      "[quote] RESEND_API_KEY not set. Submission logged but not emailed.\n",
      JSON.stringify(parsed.data, null, 2),
    );
    return {
      status: "success",
      message: "Received. (Dev mode: email delivery is not configured yet.)",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [RECIPIENT],
      replyTo: parsed.data.email,
      subject: `New quote request — ${parsed.data.company} — ${parsed.data.projectType}`,
      text: payload.text,
      html: payload.html,
    });

    if (error) {
      console.error("[quote] Resend error:", error);
      return {
        status: "error",
        message: "We couldn't send your request just now. Try again or email us directly.",
      };
    }

    return {
      status: "success",
      message: "Received. We'll respond within one business day — usually faster.",
    };
  } catch (err) {
    console.error("[quote] Unexpected error:", err);
    return {
      status: "error",
      message: "We couldn't send your request just now. Try again or email us directly.",
    };
  }
}

function buildEmailPayload(q: QuoteParsed) {
  const lines = [
    `Company: ${q.company}`,
    `Contact: ${q.name}`,
    `Email: ${q.email}`,
    `Phone: ${q.phone}`,
    ``,
    `Project type: ${q.projectType}`,
    `Site location: ${q.siteLocation}`,
    `Start date: ${q.startDate || "—"}`,
    `Duration: ${q.duration || "—"}`,
    ``,
    `Equipment:`,
    ...(q.equipment.length ? q.equipment.map((e) => `  • ${e}`) : ["  (none specified)"]),
    ``,
    `Scope / notes:`,
    q.scope,
  ];
  const text = lines.join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;color:#0a0d14;line-height:1.55">
      <h2 style="margin:0 0 12px;font-size:18px">New quote request — ${escapeHtml(q.company)}</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tbody>
          ${row("Contact", q.name)}
          ${row("Email", `<a href="mailto:${escapeHtml(q.email)}">${escapeHtml(q.email)}</a>`)}
          ${row("Phone", `<a href="tel:${escapeHtml(q.phone)}">${escapeHtml(q.phone)}</a>`)}
          ${row("Project type", q.projectType)}
          ${row("Site location", q.siteLocation)}
          ${row("Start date", q.startDate || "—")}
          ${row("Duration", q.duration || "—")}
          ${row(
            "Equipment",
            q.equipment.length
              ? `<ul style="margin:0;padding-left:18px">${q.equipment
                  .map((e) => `<li>${escapeHtml(e)}</li>`)
                  .join("")}</ul>`
              : "(none specified)",
          )}
        </tbody>
      </table>
      <h3 style="margin:20px 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#4b5563">Scope / notes</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(q.scope)}</p>
    </div>
  `.trim();

  return { text, html };
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:4px 16px 4px 0;color:#4b5563;white-space:nowrap;vertical-align:top">${escapeHtml(label)}</td>
    <td style="padding:4px 0;vertical-align:top">${value}</td>
  </tr>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
