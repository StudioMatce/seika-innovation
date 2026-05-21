// SEZIONE: TrevisoApproccio — pagina /dove-operiamo/treviso
// bg dark. Top: intro (label + heading + body).
// Bottom: 3 stat cards (Clienti / Formazione / Efficienza) — numeri grandi verdi,
// label uppercase, titolo, descrizione. Separatori linee continue + tratteggiate.

import Container from "./Container";
import Dots from "./Dots";

// I 3 stat cards — testi presi dal Figma
const stats = [
  {
    label: "Clienti",
    number: "55 +",
    title: "Aziende affiancate",
    description: "Manifatturiero, healthcare, logistica, finanza, retail. Da 1M a 5B+ di fatturato.",
  },
  {
    label: "Formazione",
    number: "30 +",
    title: "Percorsi formazione AI",
    description: "Copilot 365, Power Automate, Power BI. Training pratico, non teorico.",
  },
  {
    label: "Efficienza",
    number: "80-90 %",
    title: "Attività non a valore eliminate",
    description: "Attese, passaggi manuali, rilavorazioni. Eliminate con AI nei workflow.",
  },
];

export default function TrevisoApproccio() {
  return (
    <section className="relative bg-sk-super-dark">
      <Dots pattern="risultati" bg="super-dark" />

      <Container className="relative py-[120px]">
        {/* Intro */}
        <div className="flex flex-col gap-[42px] lg:max-w-[744px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            Approccio
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-light">
            Un approccio strutturato adattato al contesto trevigiano
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-white">
            Osservazione e analisi dei processi, individuazione delle inefficienze, soluzioni mirate
            a risultati concreti e misurabili.
          </p>
        </div>

        {/* 3 stat cards — SEMPRE 3 colonne affiancate (mobile + desktop), come da Figma.
            Solo gap e font-size si riducono su mobile. */}
        <div className="mt-[96px] flex gap-[24px] lg:gap-[48px]">
          {stats.map((stat) => (
            <article key={stat.label} className="flex flex-1 flex-col gap-[24px]">
              {/* Linea continua verde sopra */}
              <div className="h-[1.5px] w-full bg-sk-green" />

              {/* Label uppercase light */}
              <p className="text-[12px] sm:text-[14px] font-normal uppercase leading-normal tracking-[1.2px] sm:tracking-[1.4px] text-sk-light">
                {stat.label}
              </p>

              {/* Numero grande verde — più piccolo su mobile per stare nella card stretta */}
              <p className="text-[36px] sm:text-[48px] lg:text-[64px] font-normal leading-none text-sk-green">
                {stat.number}
              </p>

              {/* Titolo */}
              <h3 className="text-[18px] sm:text-[20px] lg:text-[24px] font-normal leading-normal text-sk-light">
                {stat.title}
              </h3>

              {/* Linea tratteggiata light */}
              <svg className="block h-[2px] w-full" preserveAspectRatio="none" aria-hidden="true">
                <line
                  x1="0"
                  y1="1"
                  x2="100%"
                  y2="1"
                  stroke="#ECEFE5"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {/* Body descrizione */}
              <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light">
                {stat.description}
              </p>

              {/* Linea continua light sotto */}
              <div className="h-[1.5px] w-full bg-sk-green" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
