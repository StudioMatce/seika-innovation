// SEZIONE: Prioritizzazione — bg dark
// Desktop: intro + 2 colonne (card info a sinistra + grafico scatter a destra)
// Mobile: intro + grafico sopra + card sotto

import Container from "./Container";
import Dots from "./Dots";

// ============================================================================
// VERSIONE VECCHIA del grafico (preservata su richiesta utente — non chiamata).
// Conservata in caso serva tornare al design precedente.
// ============================================================================
// Esportato così TypeScript non lo segnala come unused, anche se non è renderizzato
export function ScatterChartOld() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      {/* SVG griglia con preserveAspectRatio="none" si stira al container.
          vectorEffect="non-scaling-stroke" mantiene strokeWidth e dasharray in pixel CSS
          uniformi, indipendentemente dallo stretching del viewBox — così il tratteggio
          è coerente con i cerchi outline (entrambi "6 4" reali). */}
      <svg viewBox="0 0 717 276" fill="none" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <line x1="0" y1="92" x2="717" y2="92" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="184" x2="717" y2="184" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={i}
            x1={i * 71.7}
            y1="0"
            x2={i * 71.7}
            y2="276"
            stroke={i % 2 === 0 ? "#00A77D" : "#ECEFE5"}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "49%", top: "87%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "23%", top: "43%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "59%", top: "19%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "76%", top: "56%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "82%", top: "38%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "8%", top: "50%" }} />
      <div className="absolute" style={{ left: "31%", top: "58%", transform: "translate(-50%, -50%)" }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" fill="#1C2D28" />
          <circle cx="22" cy="22" r="17" fill="#1C2D28" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <div className="absolute" style={{ left: "70%", top: "26%", transform: "translate(-50%, -50%)" }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" fill="#1C2D28" />
          <circle cx="22" cy="22" r="17" fill="#1C2D28" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}

// ============================================================================
// NUOVO grafico scatter — versione DESKTOP
// Layout: griglia dashed 3×9 con crocera centrale verde + 4 frecce verdi sugli
// estremi degli assi + 3 marker dashed numerati (1/2/3) verdi + 7 dot piccoli.
// viewBox 714×276 con preserveAspectRatio="none" così lo SVG si stira
// proporzionalmente all'altezza della card info accanto.
// ============================================================================
function ScatterChartDesktop() {
  const verticals = [71.7, 143.4, 215.1, 286.8, 358.5, 430.2, 501.9, 573.6, 645.3];

  // Marker numerati: posizione in % (per scalare con container) + size in px (fissa, così restano cerchi)
  const markers = [
    { x: 17.58, y: 19.75, size: 53, label: "1" },
    { x: 34.07, y: 29.47, size: 42.5, label: "2" },
    { x: 59.3, y: 69.44, size: 34.8, label: "3" },
  ];

  // Dot piccoli: posizione %, size 10px fissa
  const dots: Array<{ x: number; y: number; color: "green" | "light" }> = [
    { x: 54.34, y: 89.13, color: "green" },
    { x: 26.61, y: 71.74, color: "green" },
    { x: 60.08, y: 21.74, color: "green" },
    { x: 76.75, y: 58.33, color: "green" },
    { x: 83.05, y: 40.94, color: "light" },
    { x: 45.24, y: 63.77, color: "light" },
    { x: 12.61, y: 52.54, color: "light" },
  ];

  return (
    // Trick: l'SVG con preserveAspectRatio="none" si stira per fillare il container,
    // ma contiene SOLO le linee (con vectorEffect="non-scaling-stroke" per spessori
    // uniformi). Cerchi/frecce sono renderizzati FUORI dall'SVG come elementi HTML
    // con dimensioni fisse in px e posizione %, così restano cerchi perfetti.
    <div className="relative h-full w-full" aria-hidden="true">
      <svg
        viewBox="0 0 714 276"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* Linee orizzontali: top/bottom verdi, centrale bianca */}
        <line x1="0" y1="65.16" x2="714" y2="65.16" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="144.16" x2="714" y2="144.16" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="223.16" x2="714" y2="223.16" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />

        {/* Linee verticali: centrale bianca, altre verdi */}
        {verticals.map((x) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x}
            y2="276"
            stroke={x === 358.5 ? "#ECEFE5" : "#00A77D"}
            strokeWidth="1.5"
            strokeDasharray="6 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Frecce: SVG indipendenti 12×12 per non distorcere */}
      {/* Top */}
      <svg className="absolute -translate-x-1/2" style={{ left: "50.21%", top: 0, width: 12, height: 12 }} viewBox="0 0 12 12">
        <polygon points="6,0 0,10 12,10" fill="#ECEFE5" />
      </svg>
      {/* Bottom */}
      <svg className="absolute -translate-x-1/2" style={{ left: "50.21%", bottom: 0, width: 12, height: 12 }} viewBox="0 0 12 12">
        <polygon points="6,12 0,2 12,2" fill="#ECEFE5" />
      </svg>
      {/* Left */}
      <svg className="absolute -translate-y-1/2" style={{ left: 0, top: "52.17%", width: 12, height: 12 }} viewBox="0 0 12 12">
        <polygon points="0,6 10,0 10,12" fill="#ECEFE5" />
      </svg>
      {/* Right */}
      <svg className="absolute -translate-y-1/2" style={{ right: 0, top: "52.17%", width: 12, height: 12 }} viewBox="0 0 12 12">
        <polygon points="12,6 2,0 2,12" fill="#ECEFE5" />
      </svg>

      {/* Dot piccoli: HTML div con size fissa → restano cerchi */}
      {dots.map((d, i) => (
        <div
          key={i}
          className={`absolute size-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
            d.color === "green" ? "bg-sk-green" : "bg-sk-light"
          }`}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
        />
      ))}

      {/* Marker numerati: SVG indipendenti con viewBox = size → cerchi perfetti */}
      {markers.map((m) => (
        <svg
          key={m.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${m.x}%`, top: `${m.y}%`, width: m.size, height: m.size }}
          viewBox={`0 0 ${m.size} ${m.size}`}
        >
          <circle
            cx={m.size / 2}
            cy={m.size / 2}
            r={m.size / 2 - 1}
            fill="#1C2D28"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <text
            x={m.size / 2}
            y={m.size / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#00A77D"
            fontSize="16"
            style={{ fontFamily: "var(--font-aptos, sans-serif)" }}
          >
            {m.label}
          </text>
        </svg>
      ))}
    </div>
  );
}

// ============================================================================
// NUOVO grafico scatter — versione MOBILE
// Griglia più semplice: 2 linee orizzontali + 11 verticali, 6 dot, 2 marker
// dashed senza numero. Stessa estetica del desktop ma minimalista.
// ============================================================================
function ScatterChartMobile() {
  // viewBox 515×199. Stessa struttura del desktop (3 orizzontali, 9 verticali,
  // 4 frecce, 3 marker numerati, dot), solo viewBox più piccolo.

  // 9 verticali equidistanti tra 10% e 90% (esclusi i bordi)
  const verticals = [10, 20, 30, 40, 50, 60, 70, 80, 90];

  // 3 marker numerati: posizione % + size in px (fissa per cerchi perfetti)
  const markers = [
    { x: 17.51, y: 19.67, size: 38, label: "1" },
    { x: 33.92, y: 29.36, size: 30.5, label: "2" },
    { x: 59.06, y: 69.18, size: 25.1, label: "3" },
  ];

  // 7 dot piccoli da Figma
  const dots: Array<{ x: number; y: number; color: "green" | "light" }> = [
    { x: 53.49, y: 87.02, color: "green" },
    { x: 25.8, y: 69.72, color: "green" },
    { x: 59.17, y: 19.91, color: "green" },
    { x: 75.83, y: 56.36, color: "green" },
    { x: 82.08, y: 39.04, color: "light" },
    { x: 44.35, y: 61.78, color: "light" },
    { x: 11.85, y: 50.59, color: "light" },
  ];

  return (
    <div className="relative w-full" style={{ aspectRatio: "515 / 199" }} aria-hidden="true">
      <svg
        viewBox="0 0 515 199"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* 3 orizzontali: top/bottom verdi, centrale bianca */}
        <line x1="0" y1="46.8" x2="515" y2="46.8" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="103.55" x2="515" y2="103.55" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />
        <line x1="0" y1="160.29" x2="515" y2="160.29" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" vectorEffect="non-scaling-stroke" />

        {/* 9 verticali: centrale (50%) bianca, altre verdi */}
        {verticals.map((pct) => {
          const x = (pct * 515) / 100;
          return (
            <line
              key={pct}
              x1={x}
              y1="0"
              x2={x}
              y2="199"
              stroke={pct === 50 ? "#ECEFE5" : "#00A77D"}
              strokeWidth="1.5"
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>

      {/* 4 frecce bianche agli estremi degli assi centrali (SVG indipendenti
          per non distorcere). Dimensione fissa 10×10. */}
      <svg className="absolute -translate-x-1/2" style={{ left: "50%", top: 0, width: 10, height: 10 }} viewBox="0 0 12 12">
        <polygon points="6,0 0,10 12,10" fill="#ECEFE5" />
      </svg>
      <svg className="absolute -translate-x-1/2" style={{ left: "50%", bottom: 0, width: 10, height: 10 }} viewBox="0 0 12 12">
        <polygon points="6,12 0,2 12,2" fill="#ECEFE5" />
      </svg>
      <svg className="absolute -translate-y-1/2" style={{ left: 0, top: "50%", width: 10, height: 10 }} viewBox="0 0 12 12">
        <polygon points="0,6 10,0 10,12" fill="#ECEFE5" />
      </svg>
      <svg className="absolute -translate-y-1/2" style={{ right: 0, top: "50%", width: 10, height: 10 }} viewBox="0 0 12 12">
        <polygon points="12,6 2,0 2,12" fill="#ECEFE5" />
      </svg>

      {/* Dot piccoli (7px fissi → restano cerchi) */}
      {dots.map((d, i) => (
        <div
          key={i}
          className={`absolute size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
            d.color === "green" ? "bg-sk-green" : "bg-sk-light"
          }`}
          style={{ left: `${d.x}%`, top: `${d.y}%` }}
        />
      ))}

      {/* 3 marker numerati: SVG indipendenti con viewBox = size → cerchi perfetti */}
      {markers.map((m) => (
        <svg
          key={m.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${m.x}%`, top: `${m.y}%`, width: m.size, height: m.size }}
          viewBox={`0 0 ${m.size} ${m.size}`}
        >
          <circle
            cx={m.size / 2}
            cy={m.size / 2}
            r={m.size / 2 - 1}
            fill="#1C2D28"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <text
            x={m.size / 2}
            y={m.size / 2}
            textAnchor="middle"
            dominantBaseline="central"
            fill="#00A77D"
            fontSize="14"
            style={{ fontFamily: "var(--font-aptos, sans-serif)" }}
          >
            {m.label}
          </text>
        </svg>
      ))}
    </div>
  );
}

export default function Prioritizzazione() {
  return (
    <section className="relative bg-sk-dark">
      <Dots pattern="prioritizzazione" bg="dark" />
      <Container className="relative py-[120px]">
        {/* Intro */}
        <div className="flex flex-col gap-[24px] lg:gap-[24px]">
          <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-green leading-normal">
            Prioritizzazione
          </p>
          <h2 className="text-[48px] leading-[48px] font-normal text-sk-light lg:w-[775px]">
            Prioritizzare gli interventi sulla base di criteri oggettivi.
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-light lg:w-[775px]">
            Scoring strutturato su impatto sul business, tempo di implementazione, costo, complessità operativa e change management.
          </p>
        </div>

        {/* Contenuto */}
        <div className="mt-[96px] flex flex-col-reverse lg:flex-row lg:items-stretch gap-[82px] lg:gap-[106px]">
          {/* Card info */}
          <div className="flex flex-col gap-[24px] lg:w-[305px] lg:shrink-0">
            <div className="h-[1.5px] w-full bg-sk-light" />
            <h3 className="text-[24px] font-normal leading-normal text-sk-green">
              Modello di valutazione
            </h3>
            <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light">
              La prioritizzazione si basa su una combinazione di fattori operativi e strategici, tra cui:
            </p>
            <svg className="w-full h-[2px]" preserveAspectRatio="none" aria-hidden="true">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>
            <ul className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light list-disc pl-[21px] flex flex-col gap-[2px]">
              <li>Impatto sul business</li>
              <li>tempo di implementazione</li>
              <li>costo</li>
              <li>complessità operativa</li>
              <li>change management</li>
            </ul>
            <div className="h-[1.5px] w-full bg-sk-light" />
          </div>

          {/* Grafico — variante diversa per mobile/desktop. Su lg:items-stretch
              il wrapper riceve l'altezza della card, quindi h-full sull'inner
              così il chart fillа verticalmente. */}
          <div className="flex-1 flex items-stretch">
            <div className="hidden h-full w-full lg:block">
              <ScatterChartDesktop />
            </div>
            <div className="block w-full lg:hidden">
              <ScatterChartMobile />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
