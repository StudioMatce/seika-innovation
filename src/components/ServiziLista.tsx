// SEZIONE: Lista Servizi — bg light, blocchi servizio numerati
// Step A: per ora SOLO il servizio 01 (struttura completa).
// Step B: aggiungeremo 02 e 03 come oggetti nell'array `services`.
// Step C: aggiungeremo l'illustrazione decorativa (riusata da Manifesto, divisa in 3 su mobile).

import Container from "./Container";
import Dots from "./Dots";
import {
  IllustrazioneDesktop,
  IllustrazioneMobile01,
  IllustrazioneMobile02,
  IllustrazioneMobile03,
} from "./ServiziIllustration";

// Mapping: per ogni servizio quale illustrazione mobile mostrare.
// Ordine = ordine in cui sono dichiarati in `services` (01 → 02 → 03).
const mobileIllustrations = [
  IllustrazioneMobile01,
  IllustrazioneMobile02,
  IllustrazioneMobile03,
];

// Dati dei servizi — array per facilitare l'aggiunta degli altri 2 servizi
// Ogni servizio ha la stessa struttura, cambiano solo i contenuti
const services = [
  {
    number: "01",
    title: "Analisi dati e sistemi di reportistica",
    sectors: ["MANIFATTURIERO", "FINANZA", "HEALTHCARE"],
    description:
      "I dati aziendali sono spesso frammentati tra sistemi diversi. Li rendiamo accessibili, strutturati e utili alle decisioni.",
    bullets: [
      "Dashboard direzionali e operative",
      "KPI e monitoraggio performance",
      "Integrazione dati multi-sorgente",
      "Reportistica automatizzata",
      "Analisi predittiva e forecasting",
    ],
    href: "#analisi-dati",
  },
  {
    number: "02",
    title: "Ottimizzazione dei processi operativi",
    sectors: ["AUTOMOTIVE", "LOGISTICA"],
    description:
      "I processi aziendali accumulano complessità nel tempo. Individuiamo inefficienze e colli di bottiglia per semplificare e velocizzare i flussi operativi.",
    bullets: [
      "Mappatura AS-IS / TO-BE",
      "Process mining e analisi flussi",
      "Automazione workflow e approvazioni",
      "Riduzione sprechi e attività a non valore",
      "Lean management",
    ],
    href: "#ottimizzazione-processi",
  },
  {
    number: "03",
    title: "Intelligenza Artificiale per i processi aziendali",
    sectors: ["MANIFATTURIERO", "STEEL INDUSTRY", "RETAIL"],
    description:
      "Integriamo l'AI dove genera impatto reale: meno attività ripetitive, decisioni più rapide, efficienza misurabile.",
    bullets: [
      "Agenti AI e automazione intelligente",
      "Modelli predittivi (domanda, stockout, manutenzione)",
      "Integrazione AI in Microsoft 365 e Power Platform",
      "Formazione AI per team aziendali (30+ percorsi)",
      "Change management e adozione",
    ],
    href: "#intelligenza-artificiale",
  },
];

export default function ServiziLista() {
  return (
    <section className="relative bg-sk-light">
      <Dots pattern="servizi" bg="light" />
      <Container className="relative py-[120px]">
        {/* Wrapper relative per consentire l'illustrazione absolute a sinistra su desktop.
            Layout desktop: illustrazione absolute a sinistra + blocchi 565px allineati a destra (ml-auto).
            Layout mobile: solo blocchi in colonna full-width (illustrazione decorativa mobile in step 2). */}
        <div className="relative">
          {/* Illustrazione decorativa — solo desktop, absolute a sinistra.
              pointer-events-none così non blocca link/interazioni nei blocchi servizio. */}
          <div
            className="pointer-events-none absolute hidden lg:block"
            style={{ left: 0, top: 274 }}
            aria-hidden="true"
          >
            <IllustrazioneDesktop />
          </div>

          {/* Colonna blocchi servizio */}
          <div className="flex flex-col gap-[120px] lg:ml-auto lg:max-w-[565px]">
          {services.map((service, index) => {
            const MobileIllustration = mobileIllustrations[index];
            return (
            <article
              key={service.number}
              id={service.href.replace("#", "")}
              className="flex flex-col gap-[24px]"
            >
              {/* Illustrazione decorativa mobile — sopra il blocco. Hidden su lg
                  (su desktop c'è già l'illustrazione absolute a sinistra). */}
              {MobileIllustration ? (
                <div className="lg:hidden mb-[24px]">
                  <MobileIllustration />
                </div>
              ) : null}

              {/* Gruppo "Testo": Numero + Titolo + (Settori + Descrizione) — gap 42 tra i 3 */}
              <div className="flex flex-col gap-[42px]">
                {/* Numero — label style: SemiBold 14px tracking 1.4 uppercase green */}
                <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
                  {service.number}
                </p>

                {/* Titolo — heading style: 48px regular dark */}
                <h2 className="text-[48px] font-normal leading-[48px] text-sk-dark">
                  {service.title}
                </h2>

                {/* Settori + Descrizione — gap 24 */}
                <div className="flex flex-col gap-[24px]">
                  {/* Tag pill settori — border green, dark text, radius 30, padding 24x6, 12px uppercase */}
                  <ul className="flex flex-wrap gap-[12px]" aria-label="Settori">
                    {service.sectors.map((sector) => (
                      <li
                        key={sector}
                        className="rounded-[30px] border border-sk-green px-[24px] py-[6px] text-[12px] font-normal uppercase leading-normal tracking-[1.2px] text-sk-dark"
                      >
                        {sector}
                      </li>
                    ))}
                  </ul>

                  {/* Descrizione — body 16px tracking 0.32 dark */}
                  <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Gruppo "Linea/bullet/linea" — gap 24 tra i 3 elementi */}
              <div className="flex flex-col gap-[24px]">
                {/* Linea continua — 1.5px sk-green */}
                <div className="h-[1.5px] w-full bg-sk-green" />

                {/* Lista bullet — small 14px tracking 0.28 dark, indent 21px */}
                <ul className="list-disc pl-[21px] text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-dark">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="mb-[2px] last:mb-0">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Linea tratteggiata — 1.5px sk-green, dasharray 6 4 */}
                <svg className="block h-[2px] w-full" preserveAspectRatio="none" aria-hidden="true">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#00A77D"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                </svg>
              </div>
            </article>
            );
          })}
          </div>
        </div>
      </Container>
    </section>
  );
}
