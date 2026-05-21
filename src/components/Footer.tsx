// SEZIONE: Footer — bg dark con watermark "K" sullo sfondo + contenuto legal/contatti/social
// Desktop: logo top, riga unica con info + policies, divider, copyright + social
// Mobile: stesso ordine ma con policies su riga separata

import Container from "./Container";

// Icona social inlinata come componente React: in questo modo `currentColor` nel
// path SVG eredita dal `color` CSS, e possiamo colorarla a sk-white invece del
// nero default che si avrebbe con <img src="...svg">
function IconLinkedin() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      role="img"
      aria-label="LinkedIn"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.1117 0H0.885937C0.396094 0 0 0.386719 0 0.864844V11.1328C0 11.6109 0.396094 12 0.885937 12H11.1117C11.6016 12 12 11.6109 12 11.1352V0.864844C12 0.386719 11.6016 0 11.1117 0ZM3.56016 10.2258H1.77891V4.49766H3.56016V10.2258ZM2.66953 3.71719C2.09766 3.71719 1.63594 3.25547 1.63594 2.68594C1.63594 2.11641 2.09766 1.65469 2.66953 1.65469C3.23906 1.65469 3.70078 2.11641 3.70078 2.68594C3.70078 3.25312 3.23906 3.71719 2.66953 3.71719ZM10.2258 10.2258H8.44687V7.44141C8.44687 6.77813 8.43516 5.92266 7.52109 5.92266C6.59531 5.92266 6.45469 6.64688 6.45469 7.39453V10.2258H4.67813V4.49766H6.38437V5.28047H6.40781C6.64453 4.83047 7.22578 4.35469 8.09063 4.35469C9.89297 4.35469 10.2258 5.54063 10.2258 7.08281V10.2258Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-sk-dark text-sk-white">
      {/* Watermark "K" sullo sfondo — fill super-dark al 100% appare leggermente
          più chiaro del bg dark, simulando il "fondo leggero" del Figma.
          Pointer-events-none così non blocca interazioni con il contenuto sopra. */}
      <img
        src="/footer-watermark.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[140px] left-1/2 size-[300px] max-w-none -translate-x-1/2 opacity-60 lg:-bottom-[260px] lg:size-[567px]"
      />

      <Container className="relative py-[48px]">
        {/* Logo */}
        <img
          src="/logo-large.svg"
          alt="Seika Innovation"
          width={256}
          height={48}
          className="block h-[48px] w-[256px]"
        />

        {/* Info principali — struttura allineata al menu hamburger:
            - Nome + tagline (block 1)
            - 2 colonne affiancate: telefono+email | P IVA+indirizzo (block 2) */}
        <div className="mt-[80px] flex flex-col gap-[24px] text-[14px] text-sk-white lg:mt-[110px] lg:flex-row lg:items-start lg:justify-between lg:gap-[48px]">
          {/* Nome + tagline */}
          <div>
            <p className="font-semibold leading-normal">Seika Innovation Srl</p>
            <p className="font-light leading-normal">
              Rendere visibile l&apos;efficienza operativa
            </p>
          </div>

          {/* Le 2 colonne info + policies sul desktop */}
          <div className="flex items-start gap-[24px] font-light lg:gap-[48px]">
            {/* Col 1: contatti */}
            <div className="leading-normal">
              <p>+39 320 092 4583</p>
              <p>info@seikainnovation.com</p>
            </div>
            {/* Col 2: P IVA + indirizzo (3 righe accorpate come in HeaderMobile) */}
            <div className="leading-normal">
              <p>P IVA 05519420268</p>
              <p>Corso Vittorio Emanuele II, 11</p>
              <p>31015 Conegliano (TV) Italia</p>
            </div>
            {/* Col 3 (solo desktop): policies inline */}
            <div className="hidden flex-col leading-normal lg:flex">
              <a href="/cookie-policy" className="hover:text-sk-green">
                Cookie Policy
              </a>
              <a href="/privacy-policy" className="hover:text-sk-green">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Mobile-only: policies su riga separata, allineate a destra */}
          <div className="flex justify-end gap-[12px] text-[14px] font-light lowercase lg:hidden">
            <a href="/cookie-policy" className="hover:text-sk-green">
              Cookie Policy
            </a>
            <a href="/privacy-policy" className="hover:text-sk-green">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Copyright + social — mt assorbe lo spazio che prima era occupato da divider + gap */}
        <div className="mt-[60px] flex items-start justify-between">
          <p className="text-[14px] font-light lowercase leading-normal text-sk-white">
            © 2026 Seika Innovation SRL - All rights reserved
          </p>
          <a
            href="https://www.linkedin.com/company/seika-innovation"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sk-white transition-opacity hover:opacity-70"
          >
            <IconLinkedin />
          </a>
        </div>
      </Container>
    </footer>
  );
}
