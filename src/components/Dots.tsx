// SEZIONE: Dots — pattern decorativo di cerchi verdi/light sparsi sullo sfondo
// Replica i pattern Figma con CSS: inner colorato + ring sk-super-dark di 10px
// (su bg dark il ring sparisce, su bg light forma un alone scuro)
//
// Uso:
//   <section className="relative ..."> // il section deve avere position: relative
//     <Dots pattern="risultati" />     // pattern preset
//     <Container>...</Container>       // contenuto
//   </section>
//
// O con posizioni custom:
//   <Dots dots={[{ x: "10%", y: "20%", color: "green" }]} />

export type DotColor = "green" | "light";

export interface Dot {
  /** Posizione X (es. "12%" o "120px") — riferita al centro del dot */
  x: string;
  /** Posizione Y */
  y: string;
  /** Colore interno. Default "green" */
  color?: DotColor;
}

// Pattern preset per ogni sezione — posizioni scelte per riempire la zona
// senza coprire il contenuto principale. Mix di green/light per varietà.
const patterns = {
  risultati: [
    { x: "7.7%", y: "18.4%", color: "green" },
    { x: "1.5%", y: "73.7%", color: "green" },
    { x: "72.3%", y: "1.2%", color: "light" },
    { x: "65.1%", y: "59.6%", color: "light" },
    { x: "5.1%", y: "62.7%", color: "green" },
    { x: "45.3%", y: "92.0%", color: "light" },
    { x: "19.6%", y: "98.8%", color: "green" },
    { x: "88.2%", y: "22.6%", color: "green" },
    { x: "98.5%", y: "77.9%", color: "green" },
    { x: "35%", y: "32%", color: "green" },
    { x: "58%", y: "28%", color: "light" },
    { x: "42%", y: "55%", color: "green" },
    { x: "55%", y: "78%", color: "light" },
    { x: "30%", y: "82%", color: "green" },
  ],
  casestudy: [
    { x: "10%", y: "8%", color: "green" },
    { x: "88%", y: "12%", color: "light" },
    { x: "62%", y: "5%", color: "green" },
    { x: "25%", y: "22%", color: "light" },
    { x: "50%", y: "32%", color: "green" },
    { x: "92%", y: "45%", color: "green" },
    { x: "4%", y: "38%", color: "green" },
    { x: "15%", y: "55%", color: "light" },
    { x: "72%", y: "70%", color: "green" },
    { x: "40%", y: "80%", color: "light" },
    { x: "8%", y: "88%", color: "green" },
    { x: "95%", y: "90%", color: "green" },
    { x: "65%", y: "45%", color: "light" },
  ],
  manifesto: [
    { x: "12%", y: "10%", color: "green" },
    { x: "75%", y: "8%", color: "light" },
    { x: "88%", y: "28%", color: "green" },
    { x: "5%", y: "32%", color: "light" },
    { x: "30%", y: "42%", color: "green" },
    { x: "65%", y: "55%", color: "green" },
    { x: "95%", y: "65%", color: "light" },
    { x: "8%", y: "72%", color: "green" },
    { x: "45%", y: "80%", color: "green" },
    { x: "85%", y: "88%", color: "green" },
    { x: "25%", y: "92%", color: "light" },
  ],
  faq: [
    { x: "8%", y: "5%", color: "green" },
    { x: "75%", y: "12%", color: "light" },
    { x: "55%", y: "28%", color: "green" },
    { x: "95%", y: "35%", color: "green" },
    { x: "15%", y: "42%", color: "green" },
    { x: "38%", y: "55%", color: "light" },
    { x: "88%", y: "58%", color: "green" },
    { x: "5%", y: "68%", color: "green" },
    { x: "62%", y: "78%", color: "light" },
    { x: "28%", y: "88%", color: "green" },
    { x: "95%", y: "90%", color: "green" },
    { x: "50%", y: "95%", color: "green" },
  ],
  cta: [
    { x: "10%", y: "12%", color: "light" },
    { x: "90%", y: "8%", color: "green" },
    { x: "45%", y: "22%", color: "green" },
    { x: "5%", y: "55%", color: "green" },
    { x: "75%", y: "65%", color: "green" },
    { x: "95%", y: "82%", color: "green" },
    { x: "25%", y: "88%", color: "light" },
    { x: "60%", y: "92%", color: "green" },
  ],
  hero: [
    { x: "8%", y: "15%", color: "green" },
    { x: "82%", y: "10%", color: "light" },
    { x: "45%", y: "25%", color: "green" },
    { x: "92%", y: "35%", color: "green" },
    { x: "12%", y: "48%", color: "light" },
    { x: "65%", y: "60%", color: "green" },
    { x: "30%", y: "72%", color: "green" },
    { x: "88%", y: "78%", color: "light" },
    { x: "5%", y: "85%", color: "green" },
    { x: "55%", y: "92%", color: "green" },
  ],
  showcase: [
    { x: "12%", y: "20%", color: "green" },
    { x: "75%", y: "15%", color: "light" },
    { x: "40%", y: "35%", color: "green" },
    { x: "92%", y: "55%", color: "green" },
    { x: "20%", y: "65%", color: "light" },
    { x: "60%", y: "80%", color: "green" },
    { x: "5%", y: "90%", color: "green" },
    { x: "85%", y: "92%", color: "green" },
  ],
  servizi: [
    { x: "10%", y: "8%", color: "green" },
    { x: "78%", y: "12%", color: "light" },
    { x: "50%", y: "22%", color: "green" },
    { x: "92%", y: "30%", color: "green" },
    { x: "20%", y: "40%", color: "light" },
    { x: "65%", y: "48%", color: "green" },
    { x: "5%", y: "60%", color: "green" },
    { x: "40%", y: "68%", color: "green" },
    { x: "88%", y: "75%", color: "light" },
    { x: "25%", y: "85%", color: "green" },
    { x: "70%", y: "92%", color: "green" },
    { x: "95%", y: "95%", color: "green" },
  ],
  "seika-innovation": [
    { x: "8%", y: "10%", color: "green" },
    { x: "85%", y: "18%", color: "light" },
    { x: "50%", y: "30%", color: "green" },
    { x: "15%", y: "45%", color: "light" },
    { x: "92%", y: "55%", color: "green" },
    { x: "35%", y: "65%", color: "green" },
    { x: "70%", y: "78%", color: "green" },
    { x: "5%", y: "85%", color: "green" },
    { x: "55%", y: "92%", color: "light" },
    { x: "88%", y: "95%", color: "green" },
  ],
  metodo: [
    { x: "10%", y: "8%", color: "green" },
    { x: "75%", y: "15%", color: "light" },
    { x: "92%", y: "25%", color: "green" },
    { x: "30%", y: "32%", color: "green" },
    { x: "55%", y: "45%", color: "green" },
    { x: "5%", y: "52%", color: "light" },
    { x: "85%", y: "62%", color: "green" },
    { x: "40%", y: "70%", color: "light" },
    { x: "15%", y: "82%", color: "green" },
    { x: "70%", y: "88%", color: "green" },
    { x: "95%", y: "95%", color: "green" },
  ],
  prioritizzazione: [
    { x: "8%", y: "12%", color: "green" },
    { x: "78%", y: "8%", color: "light" },
    { x: "45%", y: "25%", color: "green" },
    { x: "92%", y: "38%", color: "green" },
    { x: "15%", y: "48%", color: "light" },
    { x: "60%", y: "58%", color: "green" },
    { x: "35%", y: "72%", color: "green" },
    { x: "88%", y: "80%", color: "light" },
    { x: "5%", y: "88%", color: "green" },
    { x: "55%", y: "95%", color: "green" },
  ],
} satisfies Record<string, Dot[]>;

export type DotsPattern = keyof typeof patterns;

type DotsBg = "super-dark" | "dark" | "light" | "white";

interface DotsProps {
  /** Preset di posizioni — alternativa a `dots` */
  pattern?: DotsPattern;
  /** Posizioni custom — sovrascrive il pattern */
  dots?: Dot[];
  /** Classi opzionali sul wrapper (es. per z-index custom o aspect ratio) */
  className?: string;
  /** Colore di sfondo della sezione: il ring del dot prende lo stesso colore
   *  così è "invisibile" e si vede solo il punto colorato interno. Default super-dark. */
  bg?: DotsBg;
}

// Mappa bg → classe Tailwind per il border del dot
const borderClasses: Record<DotsBg, string> = {
  "super-dark": "border-sk-super-dark",
  dark: "border-sk-dark",
  light: "border-sk-light",
  white: "border-sk-white",
};

export default function Dots({
  pattern,
  dots,
  className = "",
  bg = "super-dark",
}: DotsProps) {
  const list = dots ?? (pattern ? patterns[pattern] : []);
  if (list.length === 0) return null;

  const borderClass = borderClasses[bg];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {list.map((d, i) => (
        // Outer: gestisce posizionamento (translate -50% per centrare il dot sul punto x,y)
        // Inner: applica l'animazione (transform conflict-free col translate dell'outer)
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: d.x, top: d.y }}
        >
          <span
            data-dot
            className={`block size-[15px] rounded-full border-[5px] ${borderClass} ${
              d.color === "light" ? "bg-sk-light" : "bg-sk-green"
            }`}
            style={{
              // Animazione lenta con delay diverso per ogni dot → movimento organico
              animation: `dot-float ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${(i * 0.35) % 2.1}s`,
            }}
          />
        </span>
      ))}
    </div>
  );
}
