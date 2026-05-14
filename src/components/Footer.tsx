import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-cobalt-500/15 bg-cream-100">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-300">
            24/7 bare rental dispatch for Texas megaprojects. Owned fleet plus
            sub-rent network — one PO, single point of contact. Based in{" "}
            {site.headquarters.city}, {site.headquarters.state}.
          </p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cobalt-500">Company</div>
          <ul className="mt-4 space-y-2 text-sm text-cream-300">
            <li><Link href="/capabilities" className="hover:text-cobalt-500">Capabilities</Link></li>
            <li><Link href="/projects" className="hover:text-cobalt-500">Projects</Link></li>
            <li><Link href="/about" className="hover:text-cobalt-500">About</Link></li>
            <li><Link href="/contact" className="hover:text-cobalt-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cobalt-500">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-cream-300">
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-cobalt-500">
                {site.contact.email}
              </a>
            </li>
            <li>
              <a href={site.contact.phoneHref} className="hover:text-cobalt-500">
                {site.contact.phone}
              </a>
            </li>
            <li className="text-cream-300">
              {site.headquarters.city}, {site.headquarters.state}
            </li>
          </ul>
        </div>
      </Container>

      <div className="h-px bg-cobalt-500/15" />

      <Container className="flex flex-col items-start gap-2 py-6 text-xs text-cream-300 md:flex-row md:items-center md:justify-between">
        <div>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</div>
        <div>Texas DBA · Fully insured · Equal opportunity vendor</div>
      </Container>
    </footer>
  );
}
