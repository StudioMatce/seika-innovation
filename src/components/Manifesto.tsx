// SEZIONE: Manifesto — bg light, dichiarazione filosofia Seika + illustrazione "storia in 3 stadi"
// Top: testo (eyebrow + h2 + body + CTA verde)
// Bottom: illustrazione 3 stadi: ellisse-human → ellisse-intelligence → ellisse-AI/innovation
// Desktop: tutto visibile con titoli/descrizioni sotto ogni stadio
// Mobile: solo illustrazione scalata, niente testi sotto (Figma)

import type { CSSProperties, ReactNode } from "react";
import Container from "./Container";
import Dots from "./Dots";

// Pill = etichetta arrotondata. 5 varianti di colore presenti nel design
type PillTone =
  | "outline-dark" // human: bg light, border dark solid, text dark
  | "outline-dark-dashed" // data: bg light, border dark dashed, text dark
  | "fill-green" // intelligence: bg verde, text light
  | "fill-dark" // innovation: bg dark, text light
  | "fill-light"; // Ai: bg light, border light, text dark

// Tutti i border a 1.5px per uniformità visiva (i border solid e dashed devono
// avere lo stesso spessore percepito — a 1px su CSS la dashed risulta troppo
// fitta rispetto al pattern SVG del resto del progetto)
const pillClasses: Record<PillTone, string> = {
  "outline-dark": "bg-sk-light border-[1.5px] border-sk-dark text-sk-dark",
  "outline-dark-dashed": "bg-sk-light border-[1.5px] border-dashed border-sk-dark text-sk-dark",
  "fill-green": "bg-sk-green border-[1.5px] border-sk-green text-sk-light",
  "fill-dark": "bg-sk-dark border-[1.5px] border-sk-dark text-sk-light",
  "fill-light": "bg-sk-light border-[1.5px] border-sk-light text-sk-dark",
};

function Pill({
  tone,
  children,
  className = "",
  style,
}: {
  tone: PillTone;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      style={style}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-[20px] py-[6px] text-[18px] tracking-[0.36px] ${pillClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

// Illustrazione desktop — 3 stadi distribuiti con flex justify-between (come Figma)
// Canvas fisso 1128px, frecce assolute sul canvas, pill assolute relative alle colonne
function Illustration() {
  return (
    <div className="relative mx-auto" style={{ width: 1128 }}>
      {/* Riga con i 3 stadi distribuiti */}
      <div className="flex w-full items-start justify-between">
        {/* STAGE 1 — relative per pill "data" assoluta */}
        <div className="relative flex flex-col items-center gap-[48px] pt-[350px]">
          <div className="relative">
            <img
              src="/images/manifesto-vector-1.svg"
              alt=""
              className="block"
              style={{ width: 251.947, height: 117.66 }}
            />
            <Pill
              tone="outline-dark"
              className="absolute"
              style={{ left: 74, top: 101 }}
            >
              human
            </Pill>
          </div>
          <div className="hidden flex-col items-center gap-[6px] text-center lg:flex">
            <h3 className="w-[168px] text-[24px] font-normal leading-[normal] text-sk-green">
              L&apos;inefficienza invisibile
            </h3>
            <p className="w-[252px] text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
              Le inefficienze più costose diventano abitudini operative. Nessuno le vede, nessuno
              le misura.
            </p>
          </div>
          {/* Pill "data" — sopra l'ellisse, relative alla colonna */}
          <Pill
            tone="outline-dark-dashed"
            className="absolute"
            style={{ left: 134, top: 202 }}
          >
            data
          </Pill>
        </div>

        {/* STAGE 2 */}
        <div className="flex flex-col items-center gap-[48px]">
          <div className="relative">
            <img
              src="/images/manifesto-vector-2.svg"
              alt=""
              className="block"
              style={{ width: 170.907, height: 306.762 }}
            />
            {/* Centrata orizzontalmente sull'ellisse: il rendering del testo
                in browser è più largo che in Figma, quindi uso translate(-50%)
                invece del left fisso 64.76px del design */}
            <Pill
              tone="fill-green"
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: 244 }}
            >
              intelligence
            </Pill>
          </div>
          <div className="hidden flex-col items-center gap-[6px] text-center lg:flex">
            <h3 className="w-[248px] text-[24px] font-normal leading-[normal] text-sk-green">
              La complessità
              <br />
              cresce nel tempo
            </h3>
            <p className="w-[309px] text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
              Decisioni su dati incompleti generano complessità difficili da individuare
              dall&apos;interno.
            </p>
          </div>
        </div>

        {/* STAGE 3 — relative per pill innovation/Ai/dot */}
        <div
          className="relative flex flex-col items-center gap-[48px] pt-[350px]"
          style={{ width: 412.469 }}
        >
          <img
            src="/images/manifesto-vector-3.svg"
            alt=""
            className="block"
            style={{ width: 412.469, height: 209.068 }}
          />
          <div className="hidden flex-col items-center gap-[6px] text-center lg:flex">
            <h3 className="w-[225px] text-[24px] font-normal leading-[normal] text-sk-green">
              Rendere visibile
              <br />
              ciò che conta
            </h3>
            <p className="w-[304px] text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
              Analizziamo processi e dati per trasformare inefficienze nascoste in miglioramenti
              misurabili.
            </p>
          </div>

          {/* Pill innovation, dot, Ai — tutti relative alla colonna stage 3 */}
          <Pill
            tone="fill-dark"
            className="absolute"
            style={{ left: 143.47, top: 536 }}
          >
            innovation
          </Pill>
          <img
            src="/images/manifesto-dot.svg"
            alt=""
            className="absolute"
            style={{ left: 52.47, top: 186, width: 19, height: 19 }}
          />
          <Pill
            tone="fill-light"
            className="absolute"
            style={{ left: 87.47, top: 162 }}
          >
            Ai
          </Pill>
        </div>
      </div>

      {/* Frecce decorative — assolute sul canvas 1128, dimensioni native dal viewBox SVG */}
      <img
        src="/images/manifesto-freccia-1.svg"
        alt=""
        className="pointer-events-none absolute"
        style={{ left: 128, top: 173, width: 211.532, height: 221.998 }}
      />
      <img
        src="/images/manifesto-freccia-2.svg"
        alt=""
        className="pointer-events-none absolute"
        style={{ left: 487, top: 120, width: 462.229, height: 330.463 }}
      />
    </div>
  );
}

// Wrapper riutilizzabile: posiziona un elemento (ellisse o freccia) ruotato di Xdeg
// all'interno di un bounding box assoluto. La rotazione avviene attorno al centro.
function RotatedItem({
  left,
  top,
  boxWidth,
  boxHeight,
  innerWidth,
  innerHeight,
  rotate,
  flipY = false,
  src,
}: {
  left: number;
  top: number;
  boxWidth: number;
  boxHeight: number;
  innerWidth: number;
  innerHeight: number;
  rotate: number;
  flipY?: boolean;
  src: string;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left, top, width: boxWidth, height: boxHeight }}
    >
      <div
        style={{
          width: innerWidth,
          height: innerHeight,
          transform: `rotate(${rotate}deg)${flipY ? " scaleY(-1)" : ""}`,
        }}
      >
        <img src={src} alt="" className="block h-full w-full" />
      </div>
    </div>
  );
}

// Illustrazione mobile — vertical stack di 3 ellissi ruotate + 2 frecce + 4 pill + 2 dot
// Canvas naturale 515×1532px (l'ellisse bottom a top:1226 + height:306 estende fino a 1532).
// Si scala via transform nel wrapper esterno.
function MobileIllustration() {
  return (
    <div className="relative" style={{ width: 515, height: 1532 }}>
      {/* Ellisse top — orientata diagonalmente in alto */}
      <RotatedItem
        src="/images/manifesto-vector-1.svg"
        left={160.63}
        top={0}
        boxWidth={274.573}
        boxHeight={241.96}
        innerWidth={252.61}
        innerHeight={117.817}
        rotate={-35.34}
      />
      {/* Ellisse media — al centro */}
      <RotatedItem
        src="/images/manifesto-vector-3.svg"
        left={3.01}
        top={454}
        boxWidth={443.572}
        boxHeight={437.044}
        innerWidth={413.314}
        innerHeight={209.469}
        rotate={43.94}
      />
      {/* Ellisse bottom — verticale */}
      <RotatedItem
        src="/images/manifesto-vector-2.svg"
        left={53.21}
        top={1226}
        boxWidth={352.242}
        boxHeight={306.067}
        innerWidth={171.092}
        innerHeight={307.646}
        rotate={58.38}
      />

      {/* Freccia 2 — connette ellisse top → ellisse media */}
      <RotatedItem
        src="/images/manifesto-freccia-2.svg"
        left={19.08}
        top={116}
        boxWidth={495.924}
        boxHeight={544.789}
        innerWidth={446.878}
        innerHeight={320.169}
        rotate={61.31}
      />
      {/* Freccia 1 — connette ellisse media → ellisse bottom, flipped */}
      <RotatedItem
        src="/images/manifesto-freccia-1.svg"
        left={24.1}
        top={903}
        boxWidth={307.374}
        boxHeight={306.632}
        innerWidth={211.98}
        innerHeight={222.408}
        rotate={43.06}
        flipY
      />

      {/* Pill "Analisi dati" — solid border dark */}
      <Pill
        tone="outline-dark"
        className="absolute"
        style={{ left: 188.75, top: 64 }}
      >
        Analisi dati
      </Pill>

      {/* Pill "reportistica" — dashed border dark */}
      <Pill
        tone="outline-dark-dashed"
        className="absolute"
        style={{ left: 178.71, top: 327 }}
      >
        reportistica
      </Pill>

      {/* Pill "processi" — fill green */}
      <Pill
        tone="fill-green"
        className="absolute"
        style={{ left: 0, top: 609 }}
      >
        processi
      </Pill>

      {/* Pill "Ai" — fill dark */}
      <Pill
        tone="fill-dark"
        className="absolute"
        style={{ left: 241.96, top: 1430 }}
      >
        Ai
      </Pill>

      {/* Dot piccolo 19px */}
      <img
        src="/images/manifesto-dot.svg"
        alt=""
        className="absolute"
        style={{ left: 124.49, top: 1040, width: 19.075, height: 19 }}
      />
      {/* Dot più grande 35px (Ellipse180) */}
      <img
        src="/images/manifesto-dot-2.png"
        alt=""
        className="absolute"
        style={{ left: 428.69, top: 379, width: 35.139, height: 35 }}
      />
    </div>
  );
}

// Lista titoli + descrizioni stacked, mostrata sotto la mobile illustration
function MobileTitles() {
  const items = [
    {
      title: "L'inefficienza invisibile",
      description:
        "Le inefficienze più costose diventano abitudini operative. Nessuno le vede, nessuno le misura.",
    },
    {
      title: "La complessità cresce nel tempo",
      description:
        "Decisioni su dati incompleti generano complessità difficili da individuare dall'interno.",
    },
    {
      title: "Rendere visibile ciò che conta",
      description:
        "Analizziamo processi e dati per trasformare inefficienze nascoste in miglioramenti misurabili.",
    },
  ];
  return (
    <div className="flex flex-col gap-[48px]">
      {items.map((item) => (
        <div key={item.title} className="flex flex-col gap-[12px]">
          <h3 className="text-[24px] font-normal leading-[normal] text-sk-green">
            {item.title}
          </h3>
          <p className="text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Manifesto() {
  return (
    <section className="relative bg-sk-light">
      <Dots pattern="manifesto" bg="light" />
      <Container className="relative py-[120px]">
        {/* Testo intro */}
        <div className="flex flex-col gap-[42px] lg:max-w-[565px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            Manifesto
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-dark">
            Molte inefficienze esistono. Poche vengono misurate.
          </h2>
          <p className="text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
            Report manuali, approvazioni lente, documenti elaborati uno per uno. Non è un
            problema di competenze. È un problema di visibilità. Seika Innovation rende visibile
            ciò che conta.
          </p>
          {/* CTA */}
          <a
            href="#contatti"
            className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-sk-green bg-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-light transition-colors duration-200 hover:bg-sk-super-dark hover:border-sk-super-dark"
          >
            Richiedi un assessment operativo
          </a>
        </div>

        {/* MOBILE: illustrazione verticale stacked (515×1532 naturale).
            - max-w-[515px]: il wrapper non si stira oltre la dimensione naturale del design
            - clamp(0, ..., 1): lo scale si ferma a 1 quando viewport ≥ 575px, evitando overflow
            - aspect-ratio 515/1532: il wrapper assume l'altezza giusta in modo proporzionale */}
        <div className="mt-[96px] lg:hidden">
          <div
            className="relative mx-auto w-full max-w-[515px] overflow-hidden"
            style={{ aspectRatio: "515 / 1532" }}
          >
            <div
              className="absolute left-0 top-0 origin-top-left"
              style={{
                width: 515,
                height: 1532,
                transform: "scale(clamp(0, calc((100vw - 60px) / 515px), 1))",
              }}
            >
              <MobileIllustration />
            </div>
          </div>
          {/* Titoli sotto l'illustrazione */}
          <div className="mt-[48px]">
            <MobileTitles />
          </div>
        </div>

        {/* DESKTOP: illustrazione orizzontale con 3 stadi + titoli inline */}
        <div className="mt-[96px] hidden lg:block">
          <Illustration />
        </div>
      </Container>
    </section>
  );
}
