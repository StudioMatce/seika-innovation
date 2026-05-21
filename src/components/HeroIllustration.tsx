// ILLUSTRAZIONE: Hero — i tre pilastri Seika (analisi dati, ottimizzazione, AI)
// Ricostruzione fedele del frame Figma 389:5963 (canvas nativo 562×565).
// Animata: cerchi tratteggiati ruotano (stroke-dashoffset) e i 3 dots orbitano lungo
// ellisse / Analisi dati / Ottimizzazione tramite <animateMotion>.
// Per l'AI si riusa OperationOrb (stesso componente di Operation in CtaIllustration).

import OperationOrb from "./OperationOrb";

interface HeroIllustrationProps {
  className?: string;
  /** Suffisso per rendere unici gli id SVG e i nomi delle animazioni quando il componente
   *  è renderizzato più volte nella stessa pagina (es. mobile + desktop). Necessario
   *  perché radialGradient/path sono referenziati via url(#id) e duplicati nello stesso
   *  documento rompono la risoluzione. */
  idScope?: string;
}

// Token colore — costanti perché Tailwind non funziona sugli attributi SVG
const BG = "#1C2D28";          // sk-dark — fill dei cerchi outline e stroke "alone" sui dots/Ottimizzazione
const LIGHT = "#ECEFE5";       // sk-light
const GREEN = "#00A77D";       // sk-green
const SUPER_DARK = "#131F1B";  // sk-super-dark

export default function HeroIllustration({ className, idScope = "" }: HeroIllustrationProps) {
  // Helper per creare id univoci quando idScope è settato (necessario per le 2 istanze mobile/desktop)
  const scoped = (base: string) => (idScope ? `${base}-${idScope}` : base);

  const glowId = scoped("hero-ai-glow");
  const ellipsePathId = scoped("hero-ellipse-path");
  const analisiPathId = scoped("hero-analisi-path");
  const ottimizzazionePathId = scoped("hero-ottim-path");

  // Class name delle animazioni — anche queste scopate per evitare conflitti
  const spinAnalisi = scoped("hero-spin-analisi");
  const spinSatellite = scoped("hero-spin-satellite");
  const spinAi = scoped("hero-spin-ai");
  const kfCw = scoped("hero-spin-cw");
  const kfCcw = scoped("hero-spin-ccw");

  return (
    <svg
      viewBox="0 0 562 565"
      fill="none"
      role="img"
      aria-label="I tre pilastri Seika: analisi dati e reportistica, ottimizzazione processi aziendali, intelligenza artificiale"
      overflow="visible"
      className={className}
    >
      <defs>
        {/* Path nascosti — riferimenti per <animateMotion> dei dots orbitanti */}
        {/* Ellisse (uguale ai parametri della <ellipse> visibile sotto, scritta come arc path) */}
        <path
          id={ellipsePathId}
          d="M 95.94 470.50 A 263.77 134.51 -45.51 0 1 465.66 94.30 A 263.77 134.51 -45.51 0 1 95.94 470.50"
          fill="none"
        />
        {/* Cerchio Analisi dati r=84.5 — arc completo */}
        <path
          id={analisiPathId}
          d="M 128 155.5 A 84.5 84.5 0 1 1 297 155.5 A 84.5 84.5 0 1 1 128 155.5"
          fill="none"
        />
        {/* Cerchio Ottimizzazione r=76.5 — arc completo */}
        <path
          id={ottimizzazionePathId}
          d="M 17 438.31 A 76.5 76.5 0 1 1 170 438.31 A 76.5 76.5 0 1 1 17 438.31"
          fill="none"
        />
      </defs>

      {/* Animazioni inline — stroke-dashoffset fa "scorrere" i trattini simulando rotazione.
          Velocità diverse per evitare sincronia visiva tra i cerchi. */}
      <style>{`
        @keyframes ${kfCw}  { to { stroke-dashoffset: -100; } }
        @keyframes ${kfCcw} { to { stroke-dashoffset:  100; } }
        .${spinAnalisi}   { animation: ${kfCw}  18s linear infinite; }
        .${spinSatellite} { animation: ${kfCcw} 12s linear infinite; }
        .${spinAi}        { animation: ${kfCw}  10s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .${spinAnalisi}, .${spinSatellite}, .${spinAi} { animation: none; }
        }
      `}</style>

      {/* Ellisse light continua — "anello" diagonale che attraversa la scena */}
      <ellipse
        cx="280.8"
        cy="282.4"
        rx="263.77"
        ry="134.51"
        stroke={LIGHT}
        strokeWidth="1.5"
        transform="rotate(-45.51 280.8 282.4)"
      />

      {/* Dot bianco orbitante sull'ellisse — renderizzato prima dei cerchi così
          quando ci passa dietro viene coperto. stroke=BG crea l'"alone" che maschera
          la curva sotto al dot mentre orbita. */}
      <circle r="6.5" fill={LIGHT} stroke={BG} strokeWidth="5">
        <animateMotion dur="22s" repeatCount="indefinite">
          <mpath href={`#${ellipsePathId}`} />
        </animateMotion>
      </circle>

      {/* Cerchio "Ottimizzazione processi aziendali" — fill super-dark, stroke BG
          per creare un alone che lo separa visivamente dall'ellisse che ci passa sotto */}
      <circle
        cx="93.5"
        cy="438.31"
        r="76.5"
        fill={SUPER_DARK}
        stroke={BG}
        strokeWidth="5"
      />

      {/* Cerchio "Analisi dati e reportistica" — outline tratteggiato + rotazione CW */}
      <circle
        cx="212.5"
        cy="155.5"
        r="84.5"
        fill={BG}
        stroke={LIGHT}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className={spinAnalisi}
      />

      {/* Satellite 35px in basso-sx di Analisi dati — rotazione CCW */}
      <circle
        cx="131.5"
        cy="178.5"
        r="17.5"
        fill={BG}
        stroke={LIGHT}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className={spinSatellite}
      />

      {/* Satellite 35px a destra — rotazione CCW */}
      <circle
        cx="524.5"
        cy="225.5"
        r="17.5"
        stroke={LIGHT}
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className={spinSatellite}
      />

      {/* "Maschera" bg-color attorno all'AI — coperta dal glow verde dell'OperationOrb,
          serve a tagliare l'ellisse light che passa sotto. Raggio scelto vicino a dove
          il glow diventa invisibile (~150) così la discontinuità della curva è nascosta
          dalle sfumature più chiare del glow. */}
      <circle cx="380" cy="368" r="140" fill={BG} />

      {/* Orb "Intelligenza artificiale" — bordo dashato con rotazione CW.
          Stop di gradient adattati al contrasto basso verde-su-dark. */}
      <OperationOrb
        cx={380}
        cy={368}
        glowId={glowId}
        dashedClassName={spinAi}
        glowStops={[
          [0, 1],
          [19, 0.92],
          [33, 0.67],
          [48, 0.38],
          [62, 0.17],
          [77, 0.05],
          [100, 0],
        ]}
      />

      {/* Dot verde orbitante sul cerchio Analisi dati */}
      <circle r="6.5" fill={GREEN} stroke={BG} strokeWidth="5">
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath href={`#${analisiPathId}`} />
        </animateMotion>
      </circle>

      {/* Dot bianco orbitante sul cerchio Ottimizzazione */}
      <circle r="6.5" fill={LIGHT} stroke={BG} strokeWidth="5">
        <animateMotion dur="12s" repeatCount="indefinite">
          <mpath href={`#${ottimizzazionePathId}`} />
        </animateMotion>
      </circle>

      {/* Etichette al centro dei tre cerchi — Aptos Regular 12px, tracking 0.24 */}
      <g
        fill={LIGHT}
        fontFamily="var(--font-aptos, sans-serif)"
        fontSize="12"
        letterSpacing="0.24"
        textAnchor="middle"
      >
        <text x="212" y="153">
          <tspan x="212" dy="0">Analisi dati</tspan>
          <tspan x="212" dy="14">e reportistica</tspan>
        </text>
        <text x="93" y="435.81">
          <tspan x="93" dy="0">Ottimizzazione</tspan>
          <tspan x="93" dy="14">processi aziendali</tspan>
        </text>
        <text x="380.5" y="365">
          <tspan x="380.5" dy="0">Intelligenza</tspan>
          <tspan x="380.5" dy="14">artificiale</tspan>
        </text>
      </g>
    </svg>
  );
}
