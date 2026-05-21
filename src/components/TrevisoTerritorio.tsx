// SEZIONE: TrevisoTerritorio — pagina /dove-operiamo/treviso
// bg light. Top: intro Treviso (label, heading, body, CTA).
// Bottom: stessa illustrazione del Manifesto (3 stage human→intelligence→innovation/Ai)
// ma con titoli e descrizioni localizzati Treviso.

import Container from "./Container";
import Dots from "./Dots";
import {
  Illustration,
  MobileIllustration,
  MobileTitles,
  type ManifestoStage,
} from "./Manifesto";

// Testi specifici Treviso per i 3 stage dell'illustrazione Manifesto.
// I titoli sono identici al Manifesto della home (sono concetti del design system),
// ma le descrizioni sono localizzate per il territorio trevigiano.
const trevisoStages: ManifestoStage[] = [
  {
    title: "L'inefficienza invisibile",
    description: "Le inefficienze più costose diventano abitudini. Nessuno le vede.",
  },
  {
    title: (
      <>
        La complessità
        <br aria-hidden="true" />
        cresce nel tempo
      </>
    ),
    description: "Decisioni su dati incompleti accumulano complessità invisibile.",
  },
  {
    title: (
      <>
        Rendere visibile
        <br aria-hidden="true" />
        ciò che conta
      </>
    ),
    description:
      "Processi e dati analizzati per creare miglioramenti concreti nelle aziende del territorio trevigiano.",
  },
];

export default function TrevisoTerritorio() {
  return (
    <section className="relative bg-sk-light">
      <Dots pattern="manifesto" bg="light" />

      <Container className="relative py-[120px]">
        {/* Intro: label, heading, body, CTA — testi Treviso */}
        <div className="flex flex-col gap-[42px] lg:max-w-[744px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            Territorio
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-dark">
            Supporto operativo per aziende a Treviso
          </h2>
          <p className="text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
            Interventi per aziende della provincia di Treviso: distretti del mobile (Livenza,
            Quartier del Piave), meccanica, agroalimentare e servizi. Soluzioni su misura per
            migliorare efficienza operativa e capacità decisionale.
          </p>
          <a
            href="#contatti"
            className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-sk-green bg-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-light transition-colors duration-200 hover:bg-sk-super-dark hover:border-sk-super-dark"
          >
            Richiedi un assessment operativo
          </a>
        </div>

        {/* MOBILE: illustrazione verticale stacked + titoli sotto (stesso pattern Manifesto) */}
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
          <div className="mt-[48px]">
            <MobileTitles stages={trevisoStages} />
          </div>
        </div>

        {/* DESKTOP: illustrazione orizzontale con 3 stadi + titoli inline */}
        <div className="mt-[96px] hidden lg:block">
          <Illustration stages={trevisoStages} />
        </div>
      </Container>
    </section>
  );
}
