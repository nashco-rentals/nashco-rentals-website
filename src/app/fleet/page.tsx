import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { fleet } from "@/content/fleet";

export const metadata: Metadata = {
  title: "Fleet",
  description:
    "NASHCO Rentals fleet — late-model excavators, articulated dump trucks, and Dockzilla mobile loading docks. Serving Texas and surrounding states.",
};

export default function FleetPage() {
  return (
    <PageShell
      eyebrow="The Fleet"
      title={
        <>
          <span className="text-brushed">Late-model iron,</span>
          <br />
          <span className="text-steel-100">production-ready.</span>
        </>
      }
      intro={
        <p>
          Every asset is maintained to a documented schedule. Specs below are
          nominal — request a capability sheet for any project-specific
          configuration or attachment.
        </p>
      }
    >
      <div className="grid gap-6 md:grid-cols-2">
        {fleet.map((asset) => (
          <article
            key={asset.slug}
            className="flex flex-col overflow-hidden rounded-sm border border-white/10 bg-ink-800/40"
          >
            <div className="relative aspect-[16/10] bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="absolute left-4 top-4 flex items-center gap-2 rounded-sm border border-cobalt-500/40 bg-ink-900/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cobalt-400">
                {asset.qty > 1 ? `${asset.qty} units` : asset.qty === 1 ? "1 unit" : "Sub-rental"}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-steel-500">
                Photo pending
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cobalt-400">
                {asset.year} · {asset.make}
              </div>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-steel-100">
                {asset.model}
              </h2>
              <p className="mt-2 text-sm text-steel-400">{asset.class}</p>
              <p className="mt-4 text-sm leading-relaxed text-steel-300">{asset.headline}</p>

              <dl className="mt-5 grid gap-2 text-xs">
                {asset.specs.map((s) => (
                  <div key={s.label} className="flex justify-between gap-4 border-b border-white/5 pb-2">
                    <dt className="text-steel-400">{s.label}</dt>
                    <dd className="text-right text-steel-200">{s.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {asset.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-sm border border-white/8 bg-ink-900/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-steel-300"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
