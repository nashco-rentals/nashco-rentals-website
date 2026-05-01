import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { capabilities, compliance } from "@/content/site";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Site lighting, civil iron, site support, and full-package bare rental for Texas industrial construction. 24/7 dispatch from a Texas-based operator.",
};

export default function CapabilitiesPage() {
  return (
    <PageShell
      eyebrow="What we deliver"
      title={
        <>
          <span className="text-brushed">Capability-led.</span>
          <br />
          <span className="text-steel-100">Single PO. Full site coverage.</span>
        </>
      }
      intro={
        <p>
          Owned fleet for the categories we run every day. Sub-rent network for
          the rest of the package — one invoice, one dispatch contact, one
          billing cycle for the entire site.
        </p>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {capabilities.map((c, i) => (
          <article
            key={c.slug}
            id={c.slug}
            className="rounded-sm border border-white/10 bg-ink-800/40 p-8 transition hover:border-cobalt-500/40"
          >
            <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
              0{i + 1}
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100">
              {c.name}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-steel-300">
              {c.detail}
            </p>
          </article>
        ))}
      </div>

      <section
        id="compliance"
        className="mt-16 rounded-sm border border-white/10 bg-ink-800/40 p-8 md:p-10"
      >
        <div className="eyebrow">Compliance &amp; onboarding</div>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-steel-100 sm:text-3xl">
          Prequal-ready for enterprise procurement.
        </h2>
        <ul className="mt-8 grid gap-4 text-sm text-steel-200 md:grid-cols-2">
          {compliance.map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt-500"
              />
              <span className="leading-relaxed">{line}</span>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
