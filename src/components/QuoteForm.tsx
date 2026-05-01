"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitQuote, type QuoteState } from "@/app/contact/actions";
import {
  BUNDLE_OPTION,
  singleEquipmentCategories,
  mobilizationTimelines,
} from "@/lib/quote-schema";

const initialState: QuoteState = { status: "idle" };

export function QuoteForm() {
  const [state, formAction] = useActionState(submitQuote, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-sm border border-cobalt-500/40 bg-cobalt-500/10 p-8">
        <div className="eyebrow">Capability brief received</div>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100">
          {state.message}
        </h3>
        <p className="mt-3 text-sm text-steel-300">
          If you don&apos;t hear back within four business hours, call dispatch
          directly.
        </p>
      </div>
    );
  }

  const err = (field: string) =>
    state.status === "error" ? state.fieldErrors?.[field]?.[0] : undefined;

  return (
    <form action={formAction} className="grid gap-6" noValidate>
      {/* Honeypot — visually hidden, bots fill it */}
      <div aria-hidden className="hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" required error={err("name")} />
        <Field label="Company" name="company" required error={err("company")} />
      </div>

      <Field
        label="Project name or location"
        name="projectName"
        placeholder="e.g., Stargate Phase 2 — Abilene, TX"
        required
        error={err("projectName")}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={err("phone")}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={err("email")}
        />
      </div>

      <fieldset className="grid gap-3">
        <legend className="text-sm font-semibold text-steel-100">
          Equipment categories needed
        </legend>

        {/* Bundle option — visually separated as the highest-priority lead path. */}
        <label
          className="flex cursor-pointer items-start gap-3 rounded-sm border border-cobalt-500/40 bg-cobalt-500/10 p-4 text-sm text-steel-100 transition has-[:checked]:border-cobalt-500 has-[:checked]:bg-cobalt-500/20"
        >
          <input
            type="checkbox"
            name="equipment"
            value={BUNDLE_OPTION}
            className="mt-0.5 h-4 w-4 accent-cobalt-500"
          />
          <span>
            <span className="block font-semibold">{BUNDLE_OPTION}</span>
            <span className="mt-1 block text-xs text-steel-300">
              Multiple categories on one PO — fastest dispatch path.
            </span>
          </span>
        </label>

        <div className="hairline my-3" />

        <div className="grid gap-2 sm:grid-cols-2">
          {singleEquipmentCategories.map((eq) => (
            <label
              key={eq}
              className="flex cursor-pointer items-start gap-3 rounded-sm border border-white/8 bg-ink-800/40 p-3 text-sm text-steel-200 transition hover:border-cobalt-500/40 has-[:checked]:border-cobalt-500 has-[:checked]:bg-cobalt-500/10"
            >
              <input
                type="checkbox"
                name="equipment"
                value={eq}
                className="mt-0.5 h-4 w-4 accent-cobalt-500"
              />
              <span>{eq}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <SelectField
        label="Mobilization timeline"
        name="mobilization"
        options={[...mobilizationTimelines]}
        placeholder="Select timeline"
        error={err("mobilization")}
      />

      <TextareaField
        label="Message (optional)"
        name="message"
        rows={5}
        placeholder="Site conditions, sequencing constraints, anything else we should know."
        error={err("message")}
      />

      {state.status === "error" && state.message && (
        <div className="rounded-sm border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-200">
          {state.message}
        </div>
      )}

      <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-steel-400">
          We respond within 4 hours during business hours, same day for active
          dispatch.
        </p>
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-brushed inline-flex h-12 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Request Capability Brief"}
    </button>
  );
}

/* ----- Fields ----- */

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
};

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  error,
}: FieldProps) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-steel-100">
        {label} {required && <span className="text-cobalt-400">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`mt-2 block w-full rounded-sm border bg-ink-800/60 px-4 py-3 text-sm text-steel-100 placeholder:text-steel-500 focus:outline-none focus:ring-2 focus:ring-cobalt-500/50 ${
          error ? "border-red-500/60" : "border-white/10 focus:border-cobalt-500"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-steel-100">
        {label} {required && <span className="text-cobalt-400">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={!!error}
        className={`mt-2 block w-full rounded-sm border bg-ink-800/60 px-4 py-3 text-sm text-steel-100 focus:outline-none focus:ring-2 focus:ring-cobalt-500/50 ${
          error ? "border-red-500/60" : "border-white/10 focus:border-cobalt-500"
        }`}
      >
        <option value="" disabled>
          {placeholder ?? "Select"}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </label>
  );
}

function TextareaField({
  label,
  name,
  rows = 4,
  required,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  rows?: number;
  required?: boolean;
  placeholder?: string;
  error?: string;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-steel-100">
        {label} {required && <span className="text-cobalt-400">*</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`mt-2 block w-full rounded-sm border bg-ink-800/60 px-4 py-3 text-sm text-steel-100 placeholder:text-steel-500 focus:outline-none focus:ring-2 focus:ring-cobalt-500/50 ${
          error ? "border-red-500/60" : "border-white/10 focus:border-cobalt-500"
        }`}
      />
      {error && <span className="mt-1 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
