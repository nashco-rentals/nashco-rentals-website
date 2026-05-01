import { z } from "zod";

export const projectTypes = [
  "EV / Gigafactory",
  "LNG / Energy Infrastructure",
  "Data Center",
  "Semiconductor Fab",
  "Power Generation",
  "Site Development",
  "Municipal / DOT",
  "Other",
] as const;

// Bundle option is intentionally first and visually separated in the form.
// Selecting it routes the lead through the high-margin sub-rent dispatch path
// and prefixes the email subject with [BUNDLE] for inbox triage.
export const BUNDLE_OPTION = "Sub-rent package (multiple categories)" as const;

export const singleEquipmentCategories = [
  "Light Towers",
  "Civil Iron",
  "Site Support",
  "Aerial / Manlifts",
  "Storage / Trailers",
  "Climate / Power",
  "Fence / Ground Support",
  "Other",
] as const;

export const equipmentCategories = [
  BUNDLE_OPTION,
  ...singleEquipmentCategories,
] as const;

export const mobilizationTimelines = [
  "Immediate",
  "30 days",
  "60 days",
  "90+ days",
] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  company: z.string().trim().min(1, "Company name is required").max(200),
  projectName: z.string().trim().min(2, "Project name or location is required").max(200),
  phone: z.string().trim().max(40).optional().default(""),
  email: z.string().trim().email("Valid email required").max(200),
  equipment: z
    .array(z.enum(equipmentCategories))
    .max(equipmentCategories.length)
    .default([]),
  mobilization: z.enum(mobilizationTimelines).optional(),
  message: z.string().trim().max(5000).optional().default(""),
  // Honeypot — real submissions leave this empty.
  website: z.string().max(0).optional().default(""),
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type QuoteParsed = z.output<typeof quoteSchema>;

export function isBundleSubmission(equipment: readonly string[]): boolean {
  return equipment.includes(BUNDLE_OPTION);
}
