import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { industries } from "@/content/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "NASHCO Rentals supports EV/Gigafactory, LNG, data center, site development, and municipal/DOT work across Texas.",
};

export default function IndustriesPage() {
  return (
    <PageShell
      eyebrow="Industries served"
      title={
        <>
          <span className="text-brushed">Built for the projects</span>
          <br />
          <span className="text-steel-100">that can&apos;t afford to wait.</span>
        </>
      }
      intro={
        <p>
          We support Tier-1 GCs and industrial end-users on the infrastructure
          defining Texas&apos; next decade.
        </p>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {industries.map((ind, i) => (
          <div
            key={ind.slug}
            className="flex h-full flex-col rounded-sm border border-white/10 bg-ink-800/40 p-8 transition hover:border-cobalt-500/40"
          >
            <div className="font-[family-name:var(--font-display)] text-sm font-semibold text-cobalt-400">
              0{i + 1}
            </div>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold text-steel-100">
              {ind.name}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-steel-300">{ind.blurb}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
