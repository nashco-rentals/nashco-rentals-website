"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/content/site";



const navLinks = [
  { href: "/capabilities", label: "Capabilities" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeDrawer = () => setOpen(false);

  // Lock body scroll while drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink-950/80 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label={`${site.shortName} home`}
          className="flex items-center"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition ${
                  active ? "text-steel-100" : "text-steel-300 hover:text-steel-100"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.contact.phoneHref}
            className="hidden text-sm font-semibold text-steel-200 transition hover:text-steel-100 lg:inline-flex"
          >
            {site.contact.phone}
          </a>
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-sm border border-cobalt-500/40 bg-cobalt-500/10 px-4 text-sm font-semibold text-cobalt-400 transition hover:bg-cobalt-500/20 hover:text-steel-100 sm:inline-flex"
          >
            Capability Brief
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-ink-800/60 text-steel-200 transition hover:border-cobalt-500/40 hover:text-steel-100 md:hidden"
          >
            <HamburgerIcon open={open} />
          </button>
        </div>
      </Container>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} border-t border-white/5 bg-ink-950`}
      >
        <Container className="py-6">
          <nav className="grid gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeDrawer}
                  className={`flex items-center justify-between rounded-sm px-4 py-3 text-base font-semibold transition ${
                    active
                      ? "bg-cobalt-500/10 text-steel-100"
                      : "text-steel-200 hover:bg-ink-800/60 hover:text-steel-100"
                  }`}
                >
                  <span>{l.label}</span>
                  <span aria-hidden className="text-cobalt-400">&rarr;</span>
                </Link>
              );
            })}
          </nav>
          <div className="hairline my-6" />
          <div className="grid gap-3">
            <Link
              href="/contact"
              onClick={closeDrawer}
              className="btn-brushed inline-flex h-12 items-center justify-center rounded-sm px-6 text-sm font-bold uppercase tracking-[0.14em]"
            >
              Request a Capability Brief
            </Link>
            <a
              href={site.contact.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/10 bg-ink-800/60 px-6 text-sm font-semibold text-steel-200"
            >
              Call {site.contact.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden>
      <path
        d={open ? "M2 2 L16 10" : "M1 1 H17"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d={open ? "M2 10 L16 2" : "M1 6 H17"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d={open ? "" : "M1 11 H17"}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
