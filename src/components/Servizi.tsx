// SEZIONE: Servizi — bg light, 3 card con illustrazioni decorative
// Desktop: intro + riga illustrazioni + 3 card in colonna (gap 48px)
// Mobile: intro + card stacked con illustrazione sopra ogni card (gap 82px)

import Container from "./Container";
import Dots from "./Dots";

const services = [
  {
    title: "Analisi Dati e Reportistica",
    description:
      "Dashboard operative, KPI e reportistica automatizzata per decisioni basate sui dati.",
    href: "#analisi-dati",
  },
  {
    title: "Ottimizzazione processi",
    description:
      "Mappatura, process mining e lean management per ridurre sprechi e tempi.",
    href: "#ottimizzazione",
  },
  {
    title: "Intelligenza artificiale",
    description:
      "Agenti AI, automazione documentale e formazione per integrare l'AI nei flussi di lavoro.",
    href: "#intelligenza-artificiale",
  },
];

// Illustrazioni decorative — coordinate esatte da Figma (viewBox 210×86)
// Spessore uniforme: 1.5px su tutti gli stroke (da DESIGN_SYSTEM.md)
// Tecnica: linea unica tratteggiata da cerchio a cerchio, elemento centrale sovrapposto
// con bordo colore sfondo (#ECEFE5) per mascherare la linea sotto
// Animazione: l'elemento centrale oscilla orizzontalmente (±6px, 2.5s)
function ServiceIllustration({ variant }: { variant: 0 | 1 | 2 }) {
  const bg = "#ECEFE5"; // colore sfondo sezione, usato come "alone" sul dot

  const floatAnim = (
    <animateTransform
      attributeName="transform"
      type="translate"
      values="-6,0;6,0;-6,0"
      dur="2.5s"
      repeatCount="indefinite"
    />
  );

  return (
    <svg
      width="210"
      height="86"
      viewBox="0 0 210 86"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      {variant === 0 && (
        <>
          {/* Cerchio medio dark */}
          <ellipse cx="34" cy="43" rx="22" ry="22" stroke="#1C2D28" strokeWidth="1.5" />
          {/* Linea unica tratteggiata tra i due cerchi esterni */}
          <line x1="62" y1="43" x2="130" y2="43" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Cerchio grande green */}
          <ellipse cx="167" cy="43" rx="31" ry="31" stroke="#00A77D" strokeWidth="1.5" />
          {/* Dot centrale animato con alone */}
          <g>
            {floatAnim}
            <circle cx="96" cy="43" r="13" fill={bg} />
            <circle cx="96" cy="43" r="9" fill="#1C2D28" />
          </g>
        </>
      )}
      {variant === 1 && (
        <>
          {/* Cerchio grande green */}
          <ellipse cx="43" cy="43" rx="31" ry="31" stroke="#00A77D" strokeWidth="1.5" />
          {/* Linea unica tratteggiata tra i due cerchi esterni */}
          <line x1="80" y1="43" x2="148" y2="43" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Cerchio medio dark */}
          <ellipse cx="176" cy="43" rx="22" ry="22" stroke="#1C2D28" strokeWidth="1.5" />
          {/* Dot centrale animato con alone */}
          <g>
            {floatAnim}
            <circle cx="114" cy="43" r="13" fill={bg} />
            <circle cx="114" cy="43" r="9" fill="#1C2D28" />
          </g>
        </>
      )}
      {variant === 2 && (
        <>
          {/* Dot sinistro */}
          <circle cx="21" cy="43" r="9" fill="#1C2D28" />
          {/* Linea unica tratteggiata tra i due dot esterni */}
          <line x1="36" y1="43" x2="174" y2="43" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="4 3" />
          {/* Dot destro */}
          <circle cx="189" cy="43" r="9" fill="#1C2D28" />
          {/* Cerchio grande green centrale animato con alone */}
          <g>
            {floatAnim}
            <circle cx="105" cy="43" r="35" fill={bg} />
            <ellipse cx="105" cy="43" rx="31" ry="31" stroke="#00A77D" strokeWidth="1.5" fill="none" />
          </g>
        </>
      )}
    </svg>
  );
}

export default function Servizi() {
  return (
    <section id="servizi" className="relative bg-sk-light">
      <Dots pattern="servizi" bg="light" />
      <Container className="relative py-[120px]">
        {/* Intro */}
        <div className="flex flex-col gap-[24px] lg:gap-[24px]">
          <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-green leading-normal">
            Servizi
          </p>
          <h2 className="text-[48px] leading-[48px] font-normal text-sk-dark lg:w-[540px]">
            Tre leve per sbloccare valore operativo.
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark lg:w-[530px]">
            Competenze analitiche, organizzative e tecnologiche integrate per individuare inefficienze e migliorare l&apos;operatività aziendale.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-[96px]">
          {/* Illustrazioni — desktop: riga unica sopra le card | mobile: dentro ogni card */}
          <div className="hidden lg:flex gap-[182px] mb-[36px]">
            <ServiceIllustration variant={0} />
            <ServiceIllustration variant={1} />
            <ServiceIllustration variant={2} />
          </div>

          {/* Card grid */}
          <div className="flex flex-col gap-[82px] lg:flex-row lg:gap-[48px]">
            {services.map((service, i) => (
              <div key={service.title} className="flex flex-1 flex-col gap-[24px]">
                {/* Illustrazione mobile — sopra ogni card */}
                <div className="lg:hidden">
                  <ServiceIllustration variant={i as 0 | 1 | 2} />
                </div>

                {/* Linea continua (separatore superiore) — 1.5px come da design system */}
                <div className="h-[1.5px] w-full bg-sk-dark" />

                {/* Titolo servizio */}
                <h3 className="text-[24px] font-normal leading-normal text-sk-green">
                  {service.title}
                </h3>

                {/* Descrizione */}
                <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-dark">
                  {service.description}
                </p>

                {/* Linea tratteggiata (separatore inferiore) — 1.5px, dash 8 gap 6 */}
                <svg className="w-full h-[2px]" preserveAspectRatio="none" aria-hidden="true">
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="6 4" />
                </svg>

                {/* Link */}
                <a
                  href={service.href}
                  className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-green underline transition-colors duration-200 hover:text-sk-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sk-green"
                >
                  Scopri di più
                </a>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
