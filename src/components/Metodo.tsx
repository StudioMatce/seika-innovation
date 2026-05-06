// SEZIONE: Metodo Seika — bg light, 5 step con illustrazione ellissi concentriche
// Desktop: 2 colonne (step + illustrazione con mini-foto) + numeri laterali
// Mobile: 1 colonna, foto circolare 97px sopra ogni step, no illustrazione

import Container from "./Container";

const steps = [
  {
    number: "01",
    title: "Osservazione",
    description: "Osservazione diretta dei flussi di lavoro e raccolta dati sulle dinamiche operative reali.",
    image: "/images/Ellipse 204.png",
  },
  {
    number: "02",
    title: "Diagnosi",
    description: "Mappatura dei processi AS-IS, process mining e quantificazione delle inefficienze.",
    image: "/images/Ellipse 205.png",
  },
  {
    number: "03",
    title: "Prioritizzazione",
    description: "Framework impatto/sforzo per definire la roadmap: Quick Win (0–3 mesi), Progetto (3–6 mesi), Trasformazione (6+ mesi).",
    image: "/images/Ellipse 206.png",
  },
  {
    number: "04",
    title: "Implementazione",
    description: "Soluzioni integrate nei flussi esistenti. KPI monitorati dal giorno uno. Risultati in settimane.",
    image: "/images/Ellipse 207.png",
  },
  {
    number: "05",
    title: "Consolidamento",
    description: "Formazione pratica e mentoring ai team interni. Il miglioramento continua anche senza di noi.",
    image: "/images/Ellipse 208.png",
  },
];

// Illustrazione desktop: 5 ellissi concentriche (dal più piccolo al più grande)
// + 5 mini-foto circolari sparse + glow verde in basso
function EllipseIllustration() {
  // Posizioni mini-foto dal Figma (relative al frame 352×554)
  const photos = [
    { src: "/images/Ellipse 204.png", x: 0, y: 291, size: 62 },
    { src: "/images/Ellipse 205.png", x: 238, y: 221, size: 61 },
    { src: "/images/Ellipse 206.png", x: 82, y: 151, size: 62 },
    { src: "/images/Ellipse 207.png", x: 126, y: 45, size: 62 },
    { src: "/images/Ellipse 208.png", x: 208, y: 345, size: 61 },
  ];

  return (
    <div className="shrink-0 w-[352px] relative" aria-hidden="true">
      <svg viewBox="0 0 352 554" fill="none" className="w-full h-full" style={{ overflow: "visible" }}>
        <ellipse cx="176" cy="277" rx="176" ry="277" stroke="#1C2D28" strokeWidth="1.5" />
        {/* Seconda ellisse — tratteggiata con dot sulla linea */}
        <ellipse cx="176" cy="309" rx="155" ry="244" stroke="#1C2D28" strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="280" cy="180" r="4" fill="#1C2D28" />
        <ellipse cx="176" cy="345" rx="132" ry="209" stroke="#1C2D28" strokeWidth="1.5" />
        <ellipse cx="176" cy="383" rx="108" ry="171" stroke="#1C2D28" strokeWidth="1.5" />
        <ellipse cx="176" cy="421" rx="84" ry="133" stroke="#1C2D28" strokeWidth="1.5" />

        {/* Cerchio verde con blur + cerchio tratteggiato light sovrapposto */}
        <defs>
          <filter id="metodo-blur" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="15" />
          </filter>
        </defs>
        <circle cx="176" cy="505" r="50" fill="#00A77D" filter="url(#metodo-blur)" />
        <circle cx="176" cy="505" r="40" fill="none" stroke="#ECEFE5" strokeWidth="1.5" strokeDasharray="6 4" />
      </svg>

      {/* Mini-foto circolari — posizioni in % per adattarsi all'altezza */}
      {[
        { src: "/images/Ellipse 204.png", top: "52%", left: "0%" },
        { src: "/images/Ellipse 205.png", top: "40%", left: "68%" },
        { src: "/images/Ellipse 206.png", top: "27%", left: "23%" },
        { src: "/images/Ellipse 207.png", top: "8%", left: "36%" },
        { src: "/images/Ellipse 208.png", top: "62%", left: "59%" },
      ].map((photo, i) => (
        <img
          key={i}
          src={photo.src}
          alt=""
          className="absolute w-[61px] h-[61px] rounded-full object-cover"
          style={{ top: photo.top, left: photo.left }}
        />
      ))}
    </div>
  );
}

export default function Metodo() {
  return (
    <section id="metodo" className="bg-sk-light">
      <Container className="py-[120px]">
        {/* Intro */}
        <div className="flex flex-col gap-[42px]">
          <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-green leading-normal">
            Metodo Seika
          </p>
          <h2 className="text-[48px] leading-[48px] font-normal text-sk-dark lg:w-[679px]">
            Prima capire. Poi intervenire.
          </h2>
          <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark lg:w-[829px]">
            Un metodo strutturato in cinque fasi per migliorare l&apos;efficienza operativa delle aziende.
          </p>
        </div>

        {/* Contenuto — desktop: 2 colonne + numeri | mobile: 1 colonna con foto */}
        <div className="mt-[96px] flex gap-[87px] items-stretch">
          {/* Colonna step */}
          <div className="flex flex-col gap-[74px] lg:gap-[32px] flex-1 lg:max-w-[535px]">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-[24px]">
                {/* Foto circolare — solo mobile */}
                <div className="lg:hidden px-[42px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    width={97}
                    height={97}
                    className="rounded-full object-cover w-[97px] h-[97px]"
                  />
                </div>

                {/* Numero + testo */}
                <div className="flex gap-[24px] items-start">
                  <span className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-dark pt-[9px] shrink-0">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-[12px]">
                    <h3 className="text-[24px] font-normal leading-normal text-sk-green">
                      {step.title}
                    </h3>
                    <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Illustrazione ellissi — solo desktop, si estende per tutta l'altezza */}
          <div className="hidden lg:flex">
            <EllipseIllustration />
          </div>

          {/* Numeri laterali 01–05 — solo desktop */}
          <div className="hidden lg:flex flex-col justify-between h-[554px] text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-green shrink-0">
            {steps.map((step) => (
              <span key={step.number}>{step.number}</span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
