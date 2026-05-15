"use client";

// SEZIONE: Header Desktop — visibile solo da lg in su
// Altezza 100px, bg dark, logo + nav + CTA "CONTATTI"
// Si nasconde scrollando giù, riappare scrollando su (via useHideOnScroll)

import Link from "next/link";
import Container from "./Container";
import { useHideOnScroll } from "@/lib/use-hide-on-scroll";

const navLinks = [
  { label: "SERVIZI", href: "#servizi" },
  { label: "SEIKA INNOVATION", href: "#seika-innovation" },
  { label: "METODO", href: "#metodo" },
  { label: "RISULTATI", href: "#risultati" },
  { label: "DOVE OPERIAMO", href: "#dove-operiamo" },
];

export default function Header() {
  const hidden = useHideOnScroll();
  return (
    <header
      className={`sticky top-0 z-50 hidden h-[100px] bg-sk-dark transition-transform duration-300 ease-in-out lg:block ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <Container className="flex h-full items-center justify-between">
        {/* Logo 160×30 */}
        <Link href="/" aria-label="Seika Innovation — Home" className="shrink-0">
          <img src="/logo.svg" alt="Seika Innovation" width={160} height={30} />
        </Link>

        {/* Nav + CTA */}
        <nav className="flex items-center gap-[48px]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-normal leading-none uppercase tracking-[1.4px] text-sk-white whitespace-nowrap transition-colors duration-200 ease-in-out hover:text-sk-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </a>
          ))}

          {/* CTA nav-outline: border 1px green, radius 30px */}
          <a
            href="#contatti"
            className="flex items-center justify-center whitespace-nowrap rounded-[30px] border border-sk-green px-[32px] py-[12px] text-[14px] font-normal leading-none uppercase tracking-[1.4px] text-sk-white transition-all duration-200 ease-in-out hover:bg-sk-green hover:text-sk-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            CONTATTI
          </a>
        </nav>
      </Container>
    </header>
  );
}
