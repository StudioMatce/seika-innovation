// SEZIONE: Footer — bg dark con watermark "K" sullo sfondo + contenuto legal/contatti/social
// Desktop: logo top, riga unica con info + policies, divider, copyright + social
// Mobile: stesso ordine ma con policies su riga separata

import Container from "./Container";

// Icone social inlinate come componenti React: in questo modo `currentColor` nel
// path SVG eredita dal `color` CSS, e possiamo colorarle a sk-white invece del
// nero default che si avrebbe con <img src="...svg">
function IconInstagram() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      role="img"
      aria-label="Instagram"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 1.08047C7.60313 1.08047 7.79297 1.0875 8.42344 1.11562C9.00938 1.14141 9.32578 1.23984 9.53672 1.32188C9.81563 1.42969 10.0172 1.56094 10.2258 1.76953C10.4367 1.98047 10.5656 2.17969 10.6734 2.45859C10.7555 2.66953 10.8539 2.98828 10.8797 3.57187C10.9078 4.20469 10.9148 4.39453 10.9148 5.99531C10.9148 7.59844 10.9078 7.78828 10.8797 8.41875C10.8539 9.00469 10.7555 9.32109 10.6734 9.53203C10.5656 9.81094 10.4344 10.0125 10.2258 10.2211C10.0148 10.432 9.81563 10.5609 9.53672 10.6688C9.32578 10.7508 9.00703 10.8492 8.42344 10.875C7.79063 10.9031 7.60078 10.9102 6 10.9102C4.39688 10.9102 4.20703 10.9031 3.57656 10.875C2.99063 10.8492 2.67422 10.7508 2.46328 10.6688C2.18438 10.5609 1.98281 10.4297 1.77422 10.2211C1.56328 10.0102 1.43438 9.81094 1.32656 9.53203C1.24453 9.32109 1.14609 9.00234 1.12031 8.41875C1.09219 7.78594 1.08516 7.59609 1.08516 5.99531C1.08516 4.39219 1.09219 4.20234 1.12031 3.57187C1.14609 2.98594 1.24453 2.66953 1.32656 2.45859C1.43438 2.17969 1.56563 1.97812 1.77422 1.76953C1.98516 1.55859 2.18438 1.42969 2.46328 1.32188C2.67422 1.23984 2.99297 1.14141 3.57656 1.11562C4.20703 1.0875 4.39688 1.08047 6 1.08047ZM6 0C4.37109 0 4.16719 0.00703125 3.52734 0.0351562C2.88984 0.0632813 2.45156 0.166406 2.07188 0.314062C1.67578 0.46875 1.34063 0.672656 1.00781 1.00781C0.672656 1.34062 0.46875 1.67578 0.314063 2.06953C0.166406 2.45156 0.0632813 2.8875 0.0351563 3.525C0.00703125 4.16719 0 4.37109 0 6C0 7.62891 0.00703125 7.83281 0.0351563 8.47266C0.0632813 9.11016 0.166406 9.54844 0.314063 9.92813C0.46875 10.3242 0.672656 10.6594 1.00781 10.9922C1.34063 11.325 1.67578 11.5312 2.06953 11.6836C2.45156 11.8313 2.8875 11.9344 3.525 11.9625C4.16484 11.9906 4.36875 11.9977 5.99766 11.9977C7.62656 11.9977 7.83047 11.9906 8.47031 11.9625C9.10781 11.9344 9.54609 11.8313 9.92578 11.6836C10.3195 11.5312 10.6547 11.325 10.9875 10.9922C11.3203 10.6594 11.5266 10.3242 11.6789 9.93047C11.8266 9.54844 11.9297 9.1125 11.9578 8.475C11.9859 7.83516 11.993 7.63125 11.993 6.00234C11.993 4.37344 11.9859 4.16953 11.9578 3.52969C11.9297 2.89219 11.8266 2.45391 11.6789 2.07422C11.5313 1.67578 11.3273 1.34062 10.9922 1.00781C10.6594 0.675 10.3242 0.46875 9.93047 0.316406C9.54844 0.16875 9.1125 0.065625 8.475 0.0375C7.83281 0.00703125 7.62891 0 6 0Z"
        fill="currentColor"
      />
      <path
        d="M6 2.91797C4.29844 2.91797 2.91797 4.29844 2.91797 6C2.91797 7.70156 4.29844 9.08203 6 9.08203C7.70156 9.08203 9.08203 7.70156 9.08203 6C9.08203 4.29844 7.70156 2.91797 6 2.91797ZM6 7.99922C4.89609 7.99922 4.00078 7.10391 4.00078 6C4.00078 4.89609 4.89609 4.00078 6 4.00078C7.10391 4.00078 7.99922 4.89609 7.99922 6C7.99922 7.10391 7.10391 7.99922 6 7.99922Z"
        fill="currentColor"
      />
      <circle cx="9.18047" cy="2.81953" r="0.72" fill="currentColor" />
    </svg>
  );
}

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
        className="pointer-events-none absolute -bottom-[80px] left-1/2 size-[300px] max-w-none -translate-x-1/2 opacity-60 lg:-bottom-[180px] lg:size-[567px]"
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

        {/* Divider */}
        <div className="mt-[36px] h-px w-full bg-sk-white/30" />

        {/* Copyright + social */}
        <div className="mt-[24px] flex items-start justify-between">
          <p className="text-[14px] font-light lowercase leading-normal text-sk-white">
            © 2026 Seika Innovation SRL - All rights reserved
          </p>
          <div className="flex items-center gap-[24px] text-sk-white">
            <a
              href="https://www.instagram.com/seikainnovation"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-70"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/seika-innovation"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-70"
            >
              <IconLinkedin />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
