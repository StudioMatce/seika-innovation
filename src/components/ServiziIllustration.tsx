// ILLUSTRAZIONE: usata nella pagina /servizi a fianco dei 3 blocchi servizio.
// Duplica MobileIllustration del Manifesto (è la stessa illustrazione del design system,
// solo riusata in un contesto diverso). Se modifichi qui, valuta se aggiornare anche
// Manifesto.tsx per mantenere coerenza visiva tra le due sezioni.

import type { CSSProperties, ReactNode } from "react";

// Pill = etichetta arrotondata. Stesso pattern del Manifesto, 5 varianti di colore.
// I border sono 1.5px per uniformità con le altre linee del sito.
type PillTone =
  | "outline-dark"
  | "outline-dark-dashed"
  | "fill-green"
  | "fill-dark"
  | "fill-light";

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

// Wrapper per posizionare elementi ruotati (ellissi o frecce SVG) dentro un bounding box assoluto.
// La rotazione avviene attorno al centro del box.
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

// IllustrazioneDesktop — duplicata da Manifesto.MobileIllustration.
// Canvas naturale 515×1532px, da usare absolute a sinistra dei 3 blocchi servizio.
export function IllustrazioneDesktop() {
  return (
    <div className="relative" style={{ width: 515, height: 1532 }}>
      {/* Ellisse top — orientata diagonalmente in alto (vicino al blocco 01) */}
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
      {/* Ellisse media — al centro (vicino al blocco 02) */}
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
      {/* Ellisse bottom — verticale (vicino al blocco 03) */}
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
      {/* Freccia 1 — connette ellisse media → ellisse bottom, flipped Y */}
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

      {/* Pill "Analisi dati" — outline-dark, accanto all'ellisse top */}
      <Pill tone="outline-dark" className="absolute" style={{ left: 188.75, top: 64 }}>
        Analisi dati
      </Pill>

      {/* Pill "reportistica" — outline-dark-dashed */}
      <Pill tone="outline-dark-dashed" className="absolute" style={{ left: 178.71, top: 327 }}>
        reportistica
      </Pill>

      {/* Pill "processi" — fill-green, accanto all'ellisse media */}
      <Pill tone="fill-green" className="absolute" style={{ left: 0, top: 609 }}>
        processi
      </Pill>

      {/* Pill "Ai" — fill-dark, sopra l'ellisse bottom */}
      <Pill tone="fill-dark" className="absolute" style={{ left: 241.96, top: 1430 }}>
        Ai
      </Pill>

      {/* Dot piccolo 19px — tra ellisse media e bottom */}
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

// ============================================================================
// VERSIONI MOBILE — 3 illustrazioni indipendenti, ognuna ricostruita con
// SVG inline (ellisse + linee tratteggiate + frecce) + Pill HTML overlay.
// Approccio identico all'Hero: cerchi e linee primitive, niente immagini.
// Coordinate dai nodi Figma 358:5498 / 358:5510 / 358:5514.
// ============================================================================

// Punta-freccia riutilizzabile: triangolo pieno dark per le frecce tratteggiate
function ArrowHead({ x, y, rotate = 0 }: { x: number; y: number; rotate?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <path d="M 0 0 L -7 -4 L -7 4 Z" fill="#1C2D28" />
    </g>
  );
}

// Mobile 01 — Analisi dati: ellisse diagonale + pill outline + freccia stretta che scende
// Pattern responsive: wrapper con aspect-ratio + scale dinamico (come Manifesto/blocco 02/03).
export function IllustrazioneMobile01() {
  return (
    <div
      className="relative mx-auto w-full max-w-[285px] overflow-hidden"
      style={{ aspectRatio: "285 / 290" }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: 285,
          height: 290,
          transform: "scale(clamp(0, calc((100vw - 60px) / 285px), 1))",
        }}
      >
        <svg
          viewBox="0 0 285 290"
          fill="none"
          className="absolute inset-0 block h-full w-full"
        >
          {/* Ellisse outline dark — ruotata -35deg attorno al suo centro.
              Centro (123, 98), rx 102, ry 47.5 (corrisponde a 204×95 ruotata) */}
          <g transform="rotate(-35 123 98)">
            <ellipse cx="123" cy="98" rx="102" ry="47.5" stroke="#1C2D28" strokeWidth="1.5" />
          </g>
          {/* Freccia tratteggiata — esce dal centro-destra dell'ellisse e curva verso il basso.
              La curvatura è marcata: il punto di controllo è ben a destra del segmento iniziale.
              Group14 nel Figma: inner 50×177, rotazione 14.85deg. */}
          <path
            d="M 130 110 Q 200 180 150 280"
            stroke="#1C2D28"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            fill="none"
            className="line-flow-slow"
          />
          <ArrowHead x={150} y={280} rotate={110} />
        </svg>
        {/* Pill "Analisi dati" — sovrapposta in alto a sinistra dell'ellisse */}
        <Pill tone="outline-dark" className="absolute" style={{ left: 0, top: 64 }}>
          Analisi dati
        </Pill>
      </div>
    </div>
  );
}

// Mobile 02 — Processi: ellisse orizzontale + pill verde a sinistra + sotto dot e freccia
// Pattern responsive (come Manifesto): wrapper con aspect-ratio + scale dinamico al viewport
// per evitare overflow su mobile dove 445px supera la larghezza disponibile.
export function IllustrazioneMobile02() {
  return (
    <div
      className="relative mx-auto w-full max-w-[445px] overflow-hidden"
      style={{ aspectRatio: "445 / 600" }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: 445,
          height: 600,
          transform: "scale(clamp(0, calc((100vw - 60px) / 445px), 1))",
        }}
      >
      <svg
        viewBox="0 0 445 600"
        fill="none"
        className="absolute inset-0 block h-full w-full"
      >
        {/* Ellisse outline dark — inclinata +35deg (estremità sx in alto, dx in basso, come da Figma).
            Inclinazione più marcata: bounding box orizzontale ~340px → ben dentro il canvas 445px. */}
        <g transform="rotate(35 220 180)">
          <ellipse cx="220" cy="180" rx="200" ry="80" stroke="#1C2D28" strokeWidth="1.5" />
        </g>
        {/* Freccia tratteggiata in basso — ARCO panciuto a sinistra, più accentuato.
            Inizio (150, 290) vicino al bordo basso dell'ellisse.
            Punto di controllo (80, 420) molto a sinistra del segmento → curva pronunciata. */}
        <path
          d="M 150 290 Q 80 420 210 580"
          stroke="#1C2D28"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          fill="none"
          className="line-flow-slow"
        />
        <ArrowHead x={210} y={580} rotate={54} />
        {/* Dot 19px sulla curva, circa al t=0.5 della nuova Bézier (calcolato: 130, 427).
            Stroke sk-light di 3px = "alone" che maschera la freccia tratteggiata sotto. */}
        <circle cx="130" cy="427" r="9.5" fill="#1C2D28" stroke="#ECEFE5" strokeWidth="3" />
      </svg>
      {/* Pill "processi" — fill green, all'altezza del centro-sinistra dell'ellisse */}
      <Pill tone="fill-green" className="absolute" style={{ left: 0, top: 155 }}>
        processi
      </Pill>
      </div>
    </div>
  );
}

// Mobile 03 — Ai: ellisse verticale + pill dark sotto-centro + dot tratteggiato a destra
export function IllustrazioneMobile03() {
  return (
    <div
      className="relative mx-auto w-full max-w-[396px] overflow-hidden"
      style={{ aspectRatio: "396 / 306" }}
      aria-hidden="true"
    >
      <div
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width: 396,
          height: 306,
          transform: "scale(clamp(0, calc((100vw - 60px) / 396px), 1))",
        }}
      >
        <svg
          viewBox="0 0 396 306"
          fill="none"
          className="absolute inset-0 block h-full w-full"
        >
          {/* Ellisse outline dark — alta e stretta, asse maggiore diagonale.
              rx=80 ry=180 (più allungata), rotation 42° (asse va da alto-destra a basso-sinistra).
              Coordinate calcolate per match dei vertici dell'asse maggiore col Figma:
              top-destra (290, 15) e bottom-sinistra (50, 280). */}
          <g transform="rotate(42 170 148)">
            <ellipse cx="170" cy="148" rx="80" ry="180" stroke="#1C2D28" strokeWidth="1.5" />
          </g>
          {/* Dot tratteggiato 35px a destra dell'ellisse — outline dashed, non pieno */}
          <circle
            cx="362"
            cy="120"
            r="17"
            stroke="#1C2D28"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            fill="none"
          />
        </svg>
        {/* Pill "Ai" — fill dark, sotto-centro dell'ellisse */}
        <Pill tone="fill-dark" className="absolute" style={{ left: 188, top: 204 }}>
          Ai
        </Pill>
      </div>
    </div>
  );
}
