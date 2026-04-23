import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { services } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bare rental, operated rental, sub-rentals, civil support, and project logistics for Tier-1 contractors and industrial builders.",
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="What we deliver"
      title={
        <>
          <span className="text-brushed">Rentals, operated iron,</span>
          <br />
          <span className="text-steel-100">and civil support.</span>
        </>
      }
      intro={
        <p>
          One phone call. One invoice. Scoped the way your project needs — from
          a single excavator on a two-week job to multi-asset mobilization on
          an 18-month program.
        </p>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((s, i) => (
          <div
            key={s.name}
            className="rounded-sm border border-white/10 bg-ink-800/40 p-8 transition hover:border-cobalt-500/40"
          >
            <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
              0{i + 1}
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100">
              {s.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-steel-300">{s.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
