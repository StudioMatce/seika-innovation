// SEZIONE: Prioritizzazione — bg dark
// Desktop: intro + 2 colonne (card info a sinistra + grafico scatter a destra)
// Mobile: intro + grafico sopra + card sotto

import Container from "./Container";

// Grafico scatter — griglia tratteggiata con dots sparsi
function ScatterChart() {
  return (
    <div className="relative w-full h-full" aria-hidden="true">
      {/* Griglia — SVG stretched per riempire tutta l'altezza */}
      <svg viewBox="0 0 717 276" fill="none" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Linee orizzontali — green */}
        <line x1="0" y1="92" x2="717" y2="92" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" />
        <line x1="0" y1="184" x2="717" y2="184" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" />

        {/* Linee verticali — alternate green e light */}
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
          />
        ))}
      </svg>

      {/* Dots e cerchi — posizionati in % per mantenere la forma circolare */}
      {/* Dots piccoli */}
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "49%", top: "87%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "23%", top: "43%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "59%", top: "19%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "76%", top: "56%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-green" style={{ left: "82%", top: "38%" }} />
      <div className="absolute w-[10px] h-[10px] rounded-full bg-sk-light" style={{ left: "8%", top: "50%" }} />

      {/* Cerchi grandi — SVG per rispettare strokeDasharray="6 4" */}
      <div className="absolute" style={{ left: "31%", top: "58%", transform: "translate(-50%, -50%)" }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" fill="#1C2D28" />
          <circle cx="22" cy="22" r="17" fill="#1C2D28" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" />
        </svg>
      </div>
      <div className="absolute" style={{ left: "70%", top: "26%", transform: "translate(-50%, -50%)" }}>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          <circle cx="22" cy="22" r="20" fill="#1C2D28" />
          <circle cx="22" cy="22" r="17" fill="#1C2D28" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" />
        </svg>
      </div>
    </div>
  );
}

export default function Prioritizzazione() {
  return (
    <section className="bg-sk-dark">
      <Container className="py-[120px]">
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
            {/* Linea continua superiore */}
            <div className="h-[1.5px] w-full bg-sk-light" />

            <h3 className="text-[24px] font-normal leading-normal text-sk-green">
              Modello di valutazione
            </h3>
            <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-light">
              La prioritizzazione si basa su una combinazione di fattori operativi e strategici, tra cui:
            </p>

            {/* Linea tratteggiata */}
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

            {/* Linea continua inferiore */}
            <div className="h-[1.5px] w-full bg-sk-light" />
          </div>

          {/* Grafico scatter — stessa altezza del box info */}
          <div className="flex-1 flex items-stretch">
            <ScatterChart />
          </div>
        </div>
      </Container>
    </section>
  );
}
