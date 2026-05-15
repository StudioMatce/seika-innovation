// SEZIONE: Seika Innovation (Chi siamo) — bg white
// Illustrazione cerchi sovrapposti in alto, testo con heading green, foto blob in basso
// Desktop: testo 2 colonne body | Mobile: 1 colonna, illustrazione scalata

import Container from "./Container";
import Dots from "./Dots";

// Illustrazione cerchi — coordinate esatte da Figma (Group 3, node 315:4729)
// viewBox largo 1594×310, overflow hidden dal container
// Tutti gli stroke a 1.5px (regola globale)
function CirclesIllustration() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="-71 0 1310 310"
        fill="none"
        className="w-[200%] ml-[-50%] lg:w-full lg:ml-0"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Animazione CSS inline per le linee tratteggiate che scorrono */}
        <style>{`
          .line-flow { animation: dash-flow 8s linear infinite; }
          .line-flow-green { animation: dash-flow 6s linear infinite; }
          @keyframes dash-flow { to { stroke-dashoffset: -40; } }
          .cluster-c1 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 0s; }
          .cluster-c2 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 0.3s; }
          .cluster-c3 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 0.6s; }
          .cluster-c4 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 0.9s; }
          .cluster-c5 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 1.2s; }
          .cluster-c6 { animation: cdrift 5s ease-in-out infinite alternate; animation-delay: 1.5s; }
          .green-travel { animation: green-move 10s ease-in-out infinite alternate; }
          @keyframes cdrift { from { transform: translateX(0); } to { transform: translateX(30px); } }
          @keyframes green-move { from { transform: translateX(0); } to { transform: translateX(420px); } }
          @media (prefers-reduced-motion: reduce) {
            .line-flow, .line-flow-green, .cluster-c1, .cluster-c2, .cluster-c3, .cluster-c4, .cluster-c5, .cluster-c6, .green-travel { animation: none; }
          }
        `}</style>

        {/* Cerchio grande dark sinistra (Ellipse 27) */}
        <ellipse cx="-71" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" />

        {/* Cluster di cerchi sovrapposti — drift consequenziale con delay sfalsato */}
        <ellipse cx="169" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" className="cluster-c1" />
        <ellipse cx="215" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" className="cluster-c2" />
        <ellipse cx="261" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" className="cluster-c3" />
        <ellipse cx="307" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" className="cluster-c4" />
        <ellipse cx="353" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" className="cluster-c5" />
        <ellipse cx="399" cy="167" rx="143" ry="143" stroke="#ECEFE5" strokeWidth="1.5" className="cluster-c6" />

        {/* Linea tratteggiata sinistra — trattini che scorrono */}
        <line x1="-71" y1="167" x2="280" y2="167" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="6 4" className="line-flow" />

        {/* Linea tratteggiata centro — trattini che scorrono */}
        <line x1="280" y1="167" x2="633" y2="167" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="6 4" className="line-flow" />
        <path d="M633 167 L626 163 L626 171 Z" fill="#1C2D28" />

        {/* Cerchio grande green — viaggia da centro (639) a destra (1237) */}
        <ellipse cx="639" cy="167" rx="143" ry="143" stroke="#00A77D" strokeWidth="1.5" className="green-travel" />

        {/* Linea tratteggiata verde destra — trattini che scorrono */}
        <line x1="810" y1="167" x2="1059" y2="167" stroke="#00A77D" strokeWidth="1.5" strokeDasharray="6 4" className="line-flow-green" />
        <path d="M1059 167 L1052 163 L1052 171 Z" fill="#00A77D" />

        {/* Cerchio dark destra */}
        <ellipse cx="1237" cy="167" rx="143" ry="143" stroke="#1C2D28" strokeWidth="1.5" />

        {/* Glow verde */}
        <defs>
          <radialGradient id="green-glow">
            <stop offset="0%" stopColor="#00A77D" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#00A77D" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="1290" cy="150" r="80" fill="url(#green-glow)" />
      </svg>
    </div>
  );
}

export default function SeikaInnovation() {
  return (
    <section id="seika-innovation" className="relative bg-sk-white overflow-hidden">
      <Dots pattern="seika-innovation" bg="white" />
      {/* Illustrazione cerchi — fuori dal Container, occupa tutta la larghezza */}
      <div className="pt-[120px]">
        <CirclesIllustration />
      </div>

      <Container>
        <div className="flex flex-col gap-[96px] pb-[120px] pt-[96px]">

          {/* Testo */}
          <div className="flex flex-col gap-[48px]">
            {/* Label + Heading */}
            <div className="flex flex-col gap-[24px]">
              <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-dark leading-normal">
                SEIKA INNOVATION
              </p>
              <h2 className="text-[48px] leading-[48px] font-normal text-sk-green">
                Comprendere i processi prima di intervenire.
              </h2>
            </div>

            {/* Body — 2 colonne desktop, 1 colonna mobile */}
            <div className="flex flex-col lg:flex-row gap-[24px] text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark">
              <p className="lg:flex-1">
                Ogni progetto parte dall&apos;osservazione sul campo per individuare inefficienze e opportunità di miglioramento invisibili dall&apos;interno. Solo dopo l&apos;analisi viene definito l&apos;intervento.
              </p>
              <p className="lg:flex-1">
                Per questo ogni progetto prende avvio da una fase di osservazione e analisi sul campo, finalizzata a individuare inefficienze e opportunità di miglioramento spesso difficili da identificare dall&apos;interno. Solo dopo questa fase viene definito l&apos;intervento.
              </p>
            </div>
          </div>

          {/* Foto blob — allineata a destra su desktop */}
          <div className="flex justify-end">
            <img
              src="/images/SeikaInnovation.png"
              alt="Team Seika Innovation al lavoro in un ambiente operativo"
              width={721}
              height={379}
              className="w-full lg:w-[721px] h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
