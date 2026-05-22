// SEZIONE: CTA finale — bg white, prompt all'azione "Richiedi un assessment"
// Desktop: testo a sx (564px) + illustrazione a dx (466×423)
// Mobile: illustrazione sopra (515×468), testo sotto
// Note: la h2 è in sk-green (insolita rispetto alle altre sezioni che usano sk-dark/sk-light)
//
// heading e body sono parametrizzabili (default = testi homepage). Le pagine specifiche
// (es. /dove-operiamo/treviso) possono passare i propri testi localizzati.

import type { ReactNode } from "react";
import Container from "./Container";
import CtaIllustration from "./CtaIllustration";
import Dots from "./Dots";

interface CtaProps {
  /** Heading h2 — default: testo homepage */
  heading?: ReactNode;
  /** Body sotto al heading — default: testo homepage */
  body?: ReactNode;
}

export default function Cta({ heading, body }: CtaProps) {
  return (
    <section id="contatti" className="relative bg-sk-white">
      <Dots pattern="cta" bg="white" />
      <Container className="relative py-[120px]">
        <div className="flex flex-col items-start gap-[96px] lg:flex-row lg:items-center lg:gap-[24px]">
          {/* Illustrazione — SVG inline (riusabile), su mobile sopra / desktop a destra */}
          <div className="order-1 w-full lg:order-2 lg:w-[564px] lg:flex lg:justify-end">
            <CtaIllustration className="block h-auto w-full lg:w-[466px]" />
          </div>

          {/* Testo */}
          <div className="order-2 flex flex-col items-start gap-[42px] lg:order-1 lg:w-[564px] lg:gap-[48px]">
            <div className="flex flex-col gap-[24px]">
              <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-dark">
                Seika Innovation
              </p>
              <h2 className="text-[48px] font-normal leading-[48px] text-sk-green">
                {heading ?? "Quanta efficienza sta aspettando di essere scoperta nella tua azienda?"}
              </h2>
            </div>
            <p className="text-[16px] font-normal leading-[normal] tracking-[0.32px] text-sk-dark">
              {body ?? (
                <>
                  L&apos;assessment operativo misura il potenziale nascosto e definisce come
                  sbloccarlo. 60+ aziende lo hanno già fatto.
                </>
              )}
            </p>
            {/* CTA button — stesso stile usato in Manifesto */}
            <a
              href="mailto:info@seikainnovation.com"
              className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-full border-[1.5px] border-sk-green bg-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-light transition-colors duration-200 hover:border-sk-super-dark hover:bg-sk-super-dark"
            >
              Richiedi un assessment operativo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
