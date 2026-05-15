"use client";

// SEZIONE: Header Mobile — visibile solo sotto lg
// Stato chiuso: barra 100px con logo + icona menu (cerchio +)
// Stato aperto: overlay full-screen con voci 32px, CTA, info footer

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useHideOnScroll } from "@/lib/use-hide-on-scroll";

const navLinks = [
  { label: "SERVIZI", href: "#servizi" },
  { label: "SEIKA INNOVATION", href: "#seika-innovation" },
  { label: "METODO", href: "#metodo" },
  { label: "RISULTATI", href: "#risultati" },
  { label: "DOVE OPERIAMO", href: "#dove-operiamo" },
];

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const hidden = useHideOnScroll();

  const close = useCallback(() => setIsOpen(false), []);

  // Quando il menu è aperto, l'header rimane sempre visibile
  // (il body scroll è bloccato, ma per sicurezza forzo visible)
  const isHidden = hidden && !isOpen;

  // Blocca lo scroll del body quando il menu è aperto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC chiude il menu
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, close]);

  return (
    <header className="lg:hidden sticky top-0 z-50">
      {/* Barra header — si nasconde scrollando giù, riappare scrollando su */}
      <div
        className={`flex h-[100px] items-center justify-center bg-sk-dark transition-transform duration-300 ease-in-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="w-full max-w-[515px] px-[30px] flex items-center justify-between">
          <Link href="/" aria-label="Seika Innovation — Home" className="shrink-0">
            <img src="/logo.svg" alt="Seika Innovation" width={160} height={30} />
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            className="shrink-0 w-[44px] h-[44px] text-sk-light transition-colors duration-200"
          >
            {isOpen ? (
              /* Icona X (chiudi) */
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <circle cx="22" cy="22" r="21.25" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M15.6362 15.636L28.3642 28.364" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M28.3638 15.636L15.6358 28.364" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ) : (
              /* Icona + (menu) — cerchio verde, linee light */
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
                <circle cx="22" cy="22" r="21.25" stroke="#00A77D" strokeWidth="1.5"/>
                <path d="M13 22H31" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M22 13L22 31" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Overlay menu — fade in/out 200ms */}
      <div
        className={`fixed inset-0 top-[100px] z-40 bg-sk-dark flex flex-col transition-opacity duration-200 ease-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Nav — cresce e spinge il footer in basso */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[515px] px-[30px] pt-[32px] sm:pt-[48px]">
            <nav className="flex flex-col gap-[32px] sm:gap-[48px] items-start">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="text-[24px] sm:text-[32px] font-normal leading-none uppercase tracking-[2.4px] sm:tracking-[3.2px] text-sk-white transition-colors duration-200 hover:text-sk-green focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </a>
              ))}

              {/* CTA CONTATTI */}
              <a
                href="#contatti"
                onClick={close}
                className="flex items-center justify-center rounded-[33px] border-[1.5px] border-sk-green px-[32px] py-[12px] text-[24px] sm:text-[32px] font-normal leading-none uppercase tracking-[2.4px] sm:tracking-[3.2px] text-sk-white transition-all duration-200 hover:bg-sk-green hover:text-sk-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                CONTATTI
              </a>
            </nav>
          </div>
        </div>

        {/* Footer info — ancorato in basso */}
        <div className="shrink-0 mx-auto w-full max-w-[515px] px-[30px] pb-[24px] sm:pb-[40px]">
          <div className="flex flex-col gap-[16px] text-[12px] leading-[18px] text-sk-white font-light">
            {/* 1 — Nome e payoff */}
            <div>
              <p className="font-semibold">Seika Innovation Srl</p>
              <p>Rendere visibile l&apos;efficienza operativa</p>
            </div>
            {/* 2 + 3 — Contatti e dati affiancati */}
            <div className="flex gap-[24px]">
              <div>
                <p>+39 320 092 4583</p>
                <p>info@seikainnovation.com</p>
              </div>
              <div>
                <p>P IVA 05519420268</p>
                <p>Corso Vittorio Emanuele II, 11</p>
                <p>31015 Conegliano (TV)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
