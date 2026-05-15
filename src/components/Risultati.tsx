// SEZIONE: Risultati — bg super-dark con 3 metriche chiave + immagini "Union"
// Desktop: righe alternate (testo-immagine, immagine-testo, testo-immagine)
// Mobile: stacked (immagine sopra, card sotto) per tutte e 3 le righe

import type { CSSProperties } from "react";
import Container from "./Container";
import Dots from "./Dots";

type Metric = {
  eyebrow: string; // es. "LEAD TIME"
  value: string; // es. "55 +"
  label: string; // es. "Aziende affiancate"
  description: string; // testo finale, supporta \n
  image: string;
  imageAlt: string;
  imageNaturalWidth: number;
  imageNaturalHeight: number;
  imageDesktopWidth: number; // larghezza visiva su desktop
  imageMobileWidth: number; // larghezza visiva su mobile
  imageFirstOnDesktop: boolean; // se true, immagine a sinistra su desktop
};

const metrics: Metric[] = [
  {
    eyebrow: "LEAD TIME",
    value: "55 +",
    label: "Aziende affiancate",
    description:
      "Manifatturiero, healthcare, logistica, finanza, retail.\nDa 1M a 5B+ di fatturato.",
    image: "/images/Risultati_01.png",
    imageAlt: "Persone al lavoro in un ufficio moderno",
    imageNaturalWidth: 1037,
    imageNaturalHeight: 568,
    imageDesktopWidth: 518,
    imageMobileWidth: 257,
    imageFirstOnDesktop: false,
  },
  {
    eyebrow: "FORMAZIONE",
    value: "30 +",
    label: "Percorsi formazione AI",
    description:
      "Copilot 365, Power Automate, Power BI.\nTraining pratico, non teorico.",
    image: "/images/Risultati_02.png",
    imageAlt: "Operatore in un impianto manifatturiero",
    imageNaturalWidth: 954,
    imageNaturalHeight: 568,
    imageDesktopWidth: 477,
    imageMobileWidth: 257,
    imageFirstOnDesktop: true,
  },
  {
    eyebrow: "EFFICIENZA",
    value: "80-90 %",
    label: "Attività non a valore eliminate",
    description: "Attese, passaggi manuali e rilavorazioni eliminati con AI.",
    image: "/images/Risultati_03.png",
    imageAlt: "Team di lavoro in un ambiente operativo",
    imageNaturalWidth: 589,
    imageNaturalHeight: 534,
    imageDesktopWidth: 294,
    imageMobileWidth: 182,
    imageFirstOnDesktop: false,
  },
];

// Card singola con linee solide sopra/sotto e tratteggiata in mezzo
function MetricCard({
  eyebrow,
  value,
  label,
  description,
}: Pick<Metric, "eyebrow" | "value" | "label" | "description">) {
  return (
    <div className="flex w-full flex-col gap-[24px]">
      <div className="h-px w-full bg-sk-green" />
      <p className="text-[14px] uppercase leading-normal tracking-[1.4px] text-sk-light">
        {eyebrow}
      </p>
      <p className="whitespace-nowrap text-[48px] font-normal leading-normal text-sk-green">
        {value}
      </p>
      <p className="text-[24px] leading-normal tracking-[0.48px] text-sk-light">
        {label}
      </p>
      {/* Linea tratteggiata — SVG per controllare il pattern dashArray */}
      <svg
        className="h-px w-full"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line
          x1="0"
          y1="0.5"
          x2="100%"
          y2="0.5"
          stroke="#ECEFE5"
          strokeWidth="1"
          strokeDasharray="6 4"
        />
      </svg>
      <p className="whitespace-pre-line text-[14px] leading-normal tracking-[0.28px] text-sk-light">
        {description}
      </p>
      <div className="h-px w-full bg-sk-green" />
    </div>
  );
}

export default function Risultati() {
  return (
    <section className="relative bg-sk-super-dark">
      <Dots pattern="risultati" bg="super-dark" />
      <Container className="relative py-[120px] lg:py-[100px]">
        {/* Intro */}
        <div className="flex flex-col gap-[42px] lg:max-w-[744px] lg:gap-[24px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            Risultati
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-light">
            Risultati misurabili
            <br />
            nei progetti con le aziende.
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-light">
            Gli interventi sviluppati in contesti aziendali hanno l&apos;obiettivo di generare
            miglioramenti misurabili nei processi operativi e nelle attività quotidiane.
          </p>
        </div>

        {/* 3 righe metriche */}
        <div className="mt-[96px] flex flex-col gap-[96px] lg:mt-[210px] lg:gap-[210px]">
          {metrics.map((m) => {
            // CSS var per controllare width immagine in modo responsive
            const imgStyle = {
              "--w-mobile": `${m.imageMobileWidth}px`,
              "--w-desktop": `${m.imageDesktopWidth}px`,
            } as CSSProperties;

            return (
              <div
                key={m.eyebrow}
                className={`flex flex-col items-start gap-[48px] lg:items-center lg:justify-between lg:gap-0 ${
                  m.imageFirstOnDesktop ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className="w-[var(--w-mobile)] shrink-0 lg:w-[var(--w-desktop)]"
                  style={imgStyle}
                >
                  <img
                    src={m.image}
                    alt={m.imageAlt}
                    width={m.imageNaturalWidth}
                    height={m.imageNaturalHeight}
                    className="block h-auto w-full"
                  />
                </div>
                <div className="w-full lg:w-[460px] lg:shrink-0">
                  <MetricCard
                    eyebrow={m.eyebrow}
                    value={m.value}
                    label={m.label}
                    description={m.description}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
