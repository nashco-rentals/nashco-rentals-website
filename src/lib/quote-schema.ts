import { z } from "zod";

export const projectTypes = [
  "EV / Gigafactory",
  "LNG / Energy Infrastructure",
  "Data Center",
  "Site Development",
  "Municipal / DOT",
  "Other",
] as const;

export const equipmentCategories = [
  "Excavator — 35-ton (Develon DX350)",
  "Excavator — Mini CAT",
  "Excavator — CAT 306 wheeled",
  "Articulated Dump Truck (John Deere 260E)",
  "Operator included",
  "Unsure / scope with NASHCO",
] as const;

export const quoteSchema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(200),
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email required").max(200),
  phone: z.string().trim().min(7, "Phone is required").max(40),
  projectType: z.enum(projectTypes),
  equipment: z.array(z.enum(equipmentCategories)).max(equipmentCategories.length).default([]),
  siteLocation: z.string().trim().min(2, "Site location is required").max(200),
  startDate: z.string().trim().max(60).optional().default(""),
  duration: z.string().trim().max(60).optional().default(""),
  scope: z.string().trim().min(10, "A few sentences of project scope helps us quote fast").max(5000),
  // Honeypot — real submissions leave this empty.
  website: z.string().max(0).optional().default(""),
});

export type QuoteInput = z.input<typeof quoteSchema>;
export type QuoteParsed = z.output<typeof quoteSchema>;
