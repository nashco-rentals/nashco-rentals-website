"use server";

import { Resend } from "resend";
import {
  quoteSchema,
  isBundleSubmission,
  type QuoteParsed,
} from "@/lib/quote-schema";

export type QuoteState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

// Primary recipient = branded business address.
// Backup = Heath's personal Gmail so leads aren't lost if domain mail breaks.
const PRIMARY_RECIPIENT = process.env.QUOTE_RECIPIENT ?? "heath@rentnashco.com";
const BACKUP_RECIPIENT = process.env.QUOTE_BACKUP_RECIPIENT ?? "heathnash83@gmail.com";
const FROM = process.env.RESEND_FROM ?? "NASHCO Website <onboarding@resend.dev>";

export async function submitQuote(
  _prev: QuoteState,
  formData: FormData,
): Promise<QuoteState> {
  const raw = {
    name: formData.get("name"),
    company: formData.get("company"),
    projectName: formData.get("projectName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    equipment: formData.getAll("equipment"),
    mobilization: formData.get("mobilization") || undefined,
    message: formData.get("message"),
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

  if (parsed.data.website && parsed.data.website.length > 0) {
    return { status: "success", message: "Thanks. We'll be in touch shortly." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const payload = buildEmailPayload(parsed.data);
  const isBundle = isBundleSubmission(parsed.data.equipment);
  const tag = isBundle ? "[BUNDLE]" : "[SINGLE]";
  const subject = `${tag} Capability brief — ${parsed.data.company} — ${parsed.data.projectName}`;

  if (!apiKey) {
    console.warn(
      "[quote] RESEND_API_KEY not set. Submission logged but not emailed.\n",
      JSON.stringify({ subject, ...parsed.data }, null, 2),
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
      to: [PRIMARY_RECIPIENT],
      cc: [BACKUP_RECIPIENT],
      replyTo: parsed.data.email,
      subject,
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
      message:
        "Received. We respond within 4 hours during business hours, same day for active dispatch.",
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
    `Contact: ${q.name}`,
    `Company: ${q.company}`,
    `Project: ${q.projectName}`,
    `Email: ${q.email}`,
    `Phone: ${q.phone || "—"}`,
    `Mobilization: ${q.mobilization ?? "—"}`,
    ``,
    `Equipment categories:`,
    ...(q.equipment.length ? q.equipment.map((e) => `  • ${e}`) : ["  (none specified)"]),
    ``,
    `Message:`,
    q.message || "(none)",
  ];
  const text = lines.join("\n");

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;color:#0a0d14;line-height:1.55">
      <h2 style="margin:0 0 12px;font-size:18px">Capability brief — ${escapeHtml(q.company)}</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tbody>
          ${row("Contact", escapeHtml(q.name))}
          ${row("Company", escapeHtml(q.company))}
          ${row("Project", escapeHtml(q.projectName))}
          ${row("Email", `<a href="mailto:${escapeHtml(q.email)}">${escapeHtml(q.email)}</a>`)}
          ${row("Phone", q.phone ? `<a href="tel:${escapeHtml(q.phone)}">${escapeHtml(q.phone)}</a>` : "—")}
          ${row("Mobilization", escapeHtml(q.mobilization ?? "—"))}
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
      <h3 style="margin:20px 0 6px;font-size:14px;text-transform:uppercase;letter-spacing:.1em;color:#4b5563">Message</h3>
      <p style="white-space:pre-wrap;margin:0">${escapeHtml(q.message || "(none)")}</p>
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
