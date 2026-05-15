// SEZIONE: Case Study — bg dark con 4 card di progetti
// Desktop: 4 colonne con stagger verticale (pt 0/100/200/300) per effetto cascata
// Mobile: 1 colonna stacked, ogni card ha immagine a sinistra + testo a destra

import type { CSSProperties } from "react";
import Container from "./Container";
import ProgressBar from "./ProgressBar";
import Dots from "./Dots";

type CaseStudyItem = {
  image: string;
  imageAlt: string;
  tag: string;
  title: string;
  description: string;
  percentage: string;
  /** Valore di riempimento della barra animata (0–100) */
  fillPercent: number;
  barLabel: string;
};

const items: CaseStudyItem[] = [
  {
    image: "/images/casestudy1.png",
    imageAlt: "Operai in un impianto manifatturiero",
    tag: "Manufacturing",
    title: "Comunicazione fornitori",
    description:
      "1.100 fornitori, 250 commesse.\nEmail manuali sostituite con automazione intelligente.",
    percentage: "83%",
    fillPercent: 83,
    barLabel: "Ritardi consegne",
  },
  {
    image: "/images/casestudy2.png",
    imageAlt: "Linea di produzione automotive",
    tag: "Automotive",
    title: "Ciclo approvativo",
    description:
      "Process mining su 1.298 casi. Ridisegno e automazione del flusso approvativo.",
    percentage: "-73%",
    fillPercent: 73,
    barLabel: "Tempo medio (da 4 a 1 giorno)",
  },
  {
    image: "/images/casestudy3.png",
    imageAlt: "Magazzino siderurgico",
    tag: "Steel Industry",
    title: "Logistica",
    description:
      "Risparmio equivalente a 2 Full Time Equivalent nel processamento dei dati a disposizione per l’assegnazione dei viaggi",
    percentage: "30%",
    fillPercent: 30,
    barLabel: "Ritardi",
  },
  {
    image: "/images/casestudy4.png",
    imageAlt: "Ufficio pianificazione e forecast",
    tag: "Pianificazione",
    title: "Forecast e magazzino",
    description:
      "80M€ di fatturato, stockout ricorrenti. Modelli predittivi per la domanda.",
    percentage: "4 Set.",
    fillPercent: 50,
    barLabel: "Settimane di anticipo sugli stockout",
  },
];

// Bracket = linea orizzontale + 2 tick verticali agli estremi
// Posizionati assolutamente perché width/height in px sicuro su tutti i breakpoint
function BracketTop() {
  return (
    <div className="relative h-[9.5px] w-full" aria-hidden="true">
      <div className="absolute left-0 top-0 h-full w-px bg-sk-white" />
      <div className="absolute left-0 top-0 h-px w-full bg-sk-white" />
      <div className="absolute right-0 top-0 h-full w-px bg-sk-white" />
    </div>
  );
}

function BracketBottom() {
  return (
    <div className="relative h-[9.5px] w-full" aria-hidden="true">
      <div className="absolute bottom-0 left-0 h-full w-px bg-sk-white" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-sk-white" />
      <div className="absolute bottom-0 right-0 h-full w-px bg-sk-white" />
    </div>
  );
}

type CardProps = CaseStudyItem & { desktopOffsetPx: number };

function Card({
  image,
  imageAlt,
  tag,
  title,
  description,
  percentage,
  fillPercent,
  barLabel,
  desktopOffsetPx,
}: CardProps) {
  // CSS var per il padding-top desktop staggered (cascata)
  const style = { "--offset": `${desktopOffsetPx}px` } as CSSProperties;

  return (
    <article
      style={style}
      className="flex flex-col gap-[24px] lg:flex-1 lg:pt-[var(--offset)]"
    >
      <BracketTop />

      {/*
        Trucco "display: contents" su desktop:
        - mobile: wrapper agisce da flex row (immagine a sinistra, testo a destra)
        - desktop (lg:contents): il wrapper sparisce dal layout → immagine, tag, title, desc
          diventano figli diretti della card e si dispongono uno sotto l'altro con gap-24
      */}
      <div className="flex items-start gap-[24px] lg:contents">
        <img
          src={image}
          alt={imageAlt}
          width={276}
          height={246}
          className="block h-[123px] w-[138px] shrink-0"
        />
        <div className="flex flex-1 flex-col gap-[24px] lg:contents">
          <div className="inline-flex w-fit items-center justify-center rounded-full border border-sk-green px-[24px] py-[6px]">
            <span className="whitespace-nowrap text-[12px] uppercase leading-normal tracking-[1.2px] text-sk-light">
              {tag}
            </span>
          </div>
          <h3 className="text-[24px] font-normal leading-normal tracking-[0.48px] text-sk-light">
            {title}
          </h3>
          <p className="whitespace-pre-line text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light">
            {description}
          </p>
        </div>
      </div>

      {/* Blocco progress: percentuale + barra + label */}
      <div className="flex flex-col gap-[12px] pt-[20px]">
        <p className="whitespace-nowrap text-[32px] font-normal leading-normal text-sk-green">
          {percentage}
        </p>
        <ProgressBar fill={fillPercent} height={10} dashColor="light" />
        <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light">
          {barLabel}
        </p>
      </div>

      <BracketBottom />
    </article>
  );
}

export default function CaseStudy() {
  return (
    <section className="relative bg-sk-dark">
      <Dots pattern="casestudy" bg="dark" />
      <Container className="relative py-[120px] lg:py-[100px]">
        {/* Intro */}
        <div className="flex flex-col gap-[42px] lg:max-w-[736px] lg:gap-[24px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            Case study
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-light">
            Storie di efficienza ritrovata.
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-light">
            I progetti vengono sviluppati in settori caratterizzati da processi articolati e
            dinamiche operative complesse. Ogni intervento è progettato sulla base delle
            specificità dell&apos;organizzazione, con l&apos;obiettivo di generare miglioramenti
            misurabili duraturi.
          </p>
        </div>

        {/* 4 card: stacked su mobile, 4 colonne staggered su desktop */}
        <div className="mt-[96px] flex flex-col gap-[82px] lg:flex-row lg:items-stretch lg:gap-[48px]">
          {items.map((item, i) => (
            <Card key={item.tag} {...item} desktopOffsetPx={i * 100} />
          ))}
        </div>
      </Container>
    </section>
  );
}
