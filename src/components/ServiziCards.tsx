// SEZIONE: ServiziCards — bg dark, 3 card servizi con foto blob.
// Diversa dalla sezione Servizi della homepage (che usa illustrazioni SVG decorative).
// Qui le card usano foto reali ovali (Analisi.png, Processi.png, Intelligenza.png).
// Ogni card linka alla pagina /servizi con anchor specifico (stesso slug di ServiziLista).

import Link from "next/link";
import Container from "./Container";
import Dots from "./Dots";

const cards = [
  {
    image: "/images/Analisi.png",
    title: "Analisi dati",
    description:
      "Dashboard operative, KPI e reportistica automatizzata per decisioni basate sui dati.",
    href: "/servizi#analisi-dati",
  },
  {
    image: "/images/Processi.png",
    title: "Processi",
    description:
      "Mappatura, process mining e lean management per ridurre sprechi e tempi.",
    href: "/servizi#ottimizzazione-processi",
  },
  {
    image: "/images/Intelligenza.png",
    title: "Intelligenza artificiale",
    description:
      "Agenti AI, automazione documentale e formazione per integrare l'AI nei flussi di lavoro.",
    href: "/servizi#intelligenza-artificiale",
  },
];

export default function ServiziCards() {
  return (
    <section className="relative bg-sk-dark">
      <Dots pattern="showcase" bg="dark" />

      <Container className="relative py-[120px]">
        {/* Label SERVIZI */}
        <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
          Servizi
        </p>

        {/* Grid 3 card — desktop 3 colonne, mobile stack verticale */}
        <div className="mt-[48px] flex flex-col gap-[82px] lg:mt-[96px] lg:flex-row lg:gap-[48px]">
          {cards.map((card) => (
            <article key={card.title} className="flex flex-col gap-[24px] lg:flex-1">
              {/* Foto blob ovale (PNG già con maschera) — dimensione dimezzata */}
              <img
                src={card.image}
                alt={`Illustrazione: ${card.title}`}
                className="block h-auto w-full max-w-[140px]"
              />

              {/* Linea continua verde — separatore tra foto e titolo */}
              <div className="h-[1.5px] w-full bg-sk-green" />

              {/* Titolo + descrizione + link */}
              <div className="flex flex-col gap-[24px]">
                <h3 className="text-[24px] font-normal leading-normal text-sk-light">
                  {card.title}
                </h3>
                <p className="text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-white">
                  {card.description}
                </p>

                {/* Linea separatore tratteggiata verde sotto la descrizione */}
                <svg className="block h-[2px] w-full" preserveAspectRatio="none" aria-hidden="true">
                  <line
                    x1="0"
                    y1="1"
                    x2="100%"
                    y2="1"
                    stroke="#00A77D"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                {/* Link "Scopri di più" verde, underline + hover light.
                    Punta a /servizi#<slug> per portare al servizio specifico nella pagina dedicata. */}
                <Link
                  href={card.href}
                  className="w-fit text-[14px] font-normal leading-normal tracking-[0.28px] text-sk-green underline transition-colors duration-200 hover:text-sk-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sk-green"
                >
                  Scopri di più
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
