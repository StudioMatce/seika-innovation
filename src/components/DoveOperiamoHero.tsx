// SEZIONE: DoveOperiamoHero — hero della pagina /dove-operiamo
// bg dark, layout 2 colonne desktop (testo a sinistra, illustrazione griglia a destra),
// 1 colonna mobile (illustrazione sopra, testo sotto).
// L'illustrazione è la "vecchia ScatterChart" recuperata da Prioritizzazione.tsx.

import Container from "./Container";
import Dots from "./Dots";
import { ScatterChartOld } from "./Prioritizzazione";

export default function DoveOperiamoHero() {
  return (
    <section className="relative bg-sk-dark overflow-hidden flex flex-col min-h-[calc(100dvh-100px)]">
      <Dots pattern="hero" bg="dark" />

      <Container className="relative flex-1 flex flex-col justify-end">
        <div className="flex flex-col gap-[48px] py-[60px] sm:py-[80px] lg:flex-row lg:items-center lg:gap-[48px] lg:pb-[182px] lg:pt-[100px]">
          {/* Illustrazione griglia — mobile: sopra il testo (full width, proporzioni naturali);
              desktop: a destra, aspect ratio più verticale (~3/2) per dare più altezza. */}
          <div className="order-1 w-full lg:order-2 lg:w-1/2">
            <div className="aspect-[717/276] w-full lg:aspect-[3/2]">
              <ScatterChartOld />
            </div>
          </div>

          {/* Testo + CTA — mobile: sotto l'illustrazione; desktop: a sinistra */}
          <div className="order-2 flex flex-col items-start gap-[32px] sm:gap-[48px] lg:order-1 lg:w-1/2">
            <div className="flex flex-col gap-[24px]">
              <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
                Dove operiamo
              </p>
              <h1 className="text-[48px] font-normal leading-[48px] text-sk-light">
                Consulenza per l&apos;efficienza operativa nel Nord Italia
              </h1>
              <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-white">
                Interveniamo in presenza e da remoto in oltre 20 province tra Veneto, Lombardia,
                Emilia-Romagna e Trentino.
              </p>
            </div>

            {/* CTA outline — stesso pattern dell'Hero della home */}
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
