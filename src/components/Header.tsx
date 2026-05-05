"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { label: "Servizi", href: "#servizi" },
  { label: "Seika Innovation", href: "#seika-innovation" },
  { label: "Metodo", href: "#metodo" },
  { label: "Risultati", href: "#risultati" },
  { label: "Dove operiamo", href: "#dove-operiamo" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1c2d28]">
      <div className="mx-auto flex h-[100px] max-w-[1128px] items-center justify-between px-6 xl:px-0">
        {/* Logo */}
        <Link href="/" className="shrink-0" aria-label="Seika Innovation — Home">
          <Logo />
        </Link>

        {/* Nav desktop — valori esatti da Figma */}
        <nav className="hidden items-center gap-[48px] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-center text-[14px] font-normal leading-none uppercase tracking-[1.4px] text-white transition-colors duration-200 hover:text-[#00a77d]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            className="flex items-center justify-center whitespace-nowrap rounded-[30px] border border-solid border-[#00a77d] px-[32px] py-[12px] text-center text-[14px] font-normal leading-none uppercase tracking-[1.4px] text-white transition-colors duration-200 hover:bg-[#00a77d]/10"
          >
            Contatti
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          <span
            className={`h-[1.5px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-[1.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#1c2d28] transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[18px] uppercase tracking-[1.4px] text-white transition-colors duration-200 hover:text-[#00a77d]"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contatti"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-full border border-[#00a77d] px-8 py-3 text-[18px] uppercase tracking-[1.4px] text-white transition-colors duration-200 hover:bg-[#00a77d]/10"
          >
            Contatti
          </a>
        </nav>
      </div>
    </header>
  );
}
