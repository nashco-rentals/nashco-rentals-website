import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "./Container";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

type PageShellProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  showQuoteCta?: boolean;
};

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  showQuoteCta = true,
}: PageShellProps) {
  return (
    <>
      <Nav />
      <main className="flex-1 border-t border-white/5">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="eyebrow">{eyebrow}</div>
            <h1 className="mt-5 font-[family-name:var(--font-display)] text-[2.25rem] font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {intro && <div className="mt-6 text-lg text-steel-300">{intro}</div>}
          </div>
          {children && <div className="mt-16">{children}</div>}
          {showQuoteCta && (
            <div className="mt-20 rounded-sm border border-white/10 bg-ink-800/40 p-8 md:flex md:items-center md:justify-between md:p-10">
              <div>
                <div className="eyebrow">Next step</div>
                <div className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-steel-100">
                  Tell us the job. We&apos;ll tell you what&apos;s available.
                </div>
              </div>
              <Link
                href="/contact"
                className="btn-brushed mt-6 inline-flex h-11 items-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em] md:mt-0"
              >
                Request Quote
              </Link>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
