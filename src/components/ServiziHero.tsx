// SEZIONE: Servizi Hero — bg dark, hero della pagina /servizi
// Struttura: illustrazione cerchi in alto (full-width, esce dal Container come in SeikaInnovation)
// + testo in basso a sinistra (label SERVIZI, heading, body, CTA outline)

import Container from "./Container";
import Dots from "./Dots";

// Illustrazione cerchi — DUPLICATA da SeikaInnovation.tsx con colori invertiti per bg dark.
// La struttura è identica (stessi cerchi, stesse posizioni, stesse animazioni).
// L'unica differenza sono i colori degli stroke:
// - cerchi cluster: dark → light (per essere visibili su bg dark)
// - cerchi che svaniscono: light → green (per restare leggibili)
// - linee tratteggiate dark → light
// - cerchio green centrale, glow e freccia verde: invariati
function CirclesIllustrationDark() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="-71 0 1310 310"
        fill="none"
        className="w-[200%] ml-[-50%] lg:w-full lg:ml-0 max-h-[160px] sm:max-h-[180px] lg:max-h-none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Animazione CSS inline — identica a SeikaInnovation */}
        <style>{`
          .servizi-line-flow { animation: dash-flow-srv 8s linear infinite; }
          .servizi-line-flow-green { animation: dash-flow-srv 6s linear infinite; }
          @keyframes dash-flow-srv { to { stroke-dashoffset: -40; } }
          .servizi-cluster-c1 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 0s; }
          .servizi-cluster-c2 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 0.3s; }
          .servizi-cluster-c3 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 0.6s; }
          .servizi-cluster-c4 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 0.9s; }
          .servizi-cluster-c5 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 1.2s; }
          .servizi-cluster-c6 { animation: cdrift-srv 5s ease-in-out infinite alternate; animation-delay: 1.5s; }
          .servizi-green-travel { animation: green-move-srv 10s ease-in-out infinite alternate; }
          @keyframes cdrift-srv { from { transform: translateX(0); } to { transform: translateX(30px); } }
          @keyframes green-move-srv { from { transform: translateX(0); } to { transform: translateX(420px); } }
          @media (prefers-reduced-motion: reduce) {
            .servizi-line-flow, .servizi-line-flow-green,
            .servizi-cluster-c1, .servizi-cluster-c2, .servizi-cluster-c3,
            .servizi-cluster-c4, .servizi-cluster-c5, .servizi-cluster-c6,
            .servizi-green-travel { animation: none; }
          }
        `}</style>

        {/* Cerchio grande light sinistra (tagliato dal viewport) */}
        <ellipse cx="-71" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

        {/* Cluster di cerchi sovrapposti — i primi 4 sono light, gli ultimi 2 svaniscono in green */}
        <ellipse cx="169" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c1" />
        <ellipse cx="215" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c2" />
        <ellipse cx="261" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c3" />
        <ellipse cx="307" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c4" />
        <ellipse cx="353" cy="167" rx="143" ry="143" stroke="#00A77D" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c5" />
        <ellipse cx="399" cy="167" rx="143" ry="143" stroke="#00A77D" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-cluster-c6" />

        {/* Linea tratteggiata sinistra — light */}
        <line x1="-71" y1="167" x2="280" y2="167" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="6 4" className="servizi-line-flow" />

        {/* Linea tratteggiata centro + freccia — light */}
        <line x1="280" y1="167" x2="633" y2="167" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="6 4" className="servizi-line-flow" />
        <path d="M633 167 L626 163 L626 171 Z" fill="#ECEFE5" />

        {/* Cerchio grande green — viaggia da centro a destra */}
        <ellipse cx="639" cy="167" rx="143" ry="143" stroke="#00A77D" strokeWidth="1.5" vectorEffect="non-scaling-stroke" className="servizi-green-travel" />

        {/* Linea tratteggiata verde destra — invariata */}
        <line x1="810" y1="167" x2="1059" y2="167" stroke="#00A77D" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="6 4" className="servizi-line-flow-green" />
        <path d="M1059 167 L1052 163 L1052 171 Z" fill="#00A77D" />

        {/* Cerchio light destra (era dark in SeikaInnovation) */}
        <ellipse cx="1237" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />

        {/* Glow verde — invariato */}
        <defs>
          <radialGradient id="green-glow-servizi">
            <stop offset="0%" stopColor="#00A77D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A77D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="1290" cy="150" r="80" fill="url(#green-glow-servizi)" />
      </svg>
    </div>
  );
}

export default function ServiziHero() {
  return (
    <section className="relative bg-sk-dark overflow-hidden flex flex-col min-h-[calc(100dvh-100px)]">
      <Dots pattern="hero" bg="dark" />
      {/* Illustrazione cerchi — fuori dal Container, occupa tutta la larghezza.
          Su mobile pt ridotto per portare l'illustrazione più in alto e lasciare
          più aria tra cerchi e testo. */}
      <div className="pt-[20px] sm:pt-[40px] lg:pt-[80px]">
        <CirclesIllustrationDark />
      </div>

      {/* flex-1 + justify-end: il blocco testo viene spinto in fondo alla viewport,
          come nella Hero della homepage. pb riduce lo stacco dal fondo schermo. */}
      <Container className="flex-1 flex flex-col justify-end">
        {/* Layout: mobile in colonna (heading sopra, body+CTA sotto),
            desktop in riga (2 colonne affiancate) allineate in basso così
            heading e CTA finiscono sulla stessa baseline */}
        <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:flex-row lg:items-end lg:gap-[48px] pb-[60px] sm:pb-[80px] lg:pb-[100px]">
          {/* Colonna sinistra: Heading */}
          <div className="lg:flex-1">
            <h1 className="text-[48px] font-normal leading-[48px] text-sk-light">
              Competenze integrate per l&apos;efficienza operativa aziendale
            </h1>
          </div>

          {/* Colonna destra: Body + CTA */}
          <div className="flex flex-col items-start gap-[24px] lg:flex-1">
            <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-white">
              Analisi dati, ottimizzazione dei processi e intelligenza artificiale per individuare
              inefficienze e migliorare le performance operative in modo concreto e misurabile.
            </p>

            {/* CTA outline — pattern già usato nell'Hero della homepage */}
            <a
              href="mailto:info@seikainnovation.com"
              className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-[33px] border-[1.5px] border-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-light transition-all duration-200 ease-in-out hover:bg-sk-green hover:text-sk-dark active:bg-sk-dark active:border-sk-dark active:text-sk-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Richiedi un assessment operativo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
