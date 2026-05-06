// SEZIONE: Hero — bg dark, testo + CTA a sinistra, placeholder illustrazione a destra
// Mobile: illustrazione sopra, testo sotto (1 colonna)

import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-sk-dark min-h-[calc(100dvh-100px)]">
      <Container className="flex flex-col justify-end min-h-[calc(100dvh-100px)] lg:flex-row lg:items-end lg:pb-[100px]">
        {/* Illustrazione placeholder — visibile su mobile in alto */}
        <div className="pt-[40px] lg:hidden">
          <div
            className="w-full h-[200px] sm:h-[336px] rounded-[12px] bg-sk-dark border border-white/10"
            aria-hidden="true"
          />
        </div>

        {/* Contenuto testo */}
        <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start py-[40px] sm:py-[60px] lg:py-0 lg:w-[506px]">
          {/* Label */}
          <div className="flex flex-col gap-[24px] items-start w-full">
            <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-sk-green leading-normal">
              Seika Innovation
            </p>

            {/* H1 — 48px su tutte le risoluzioni (come da design system) */}
            <h1 className="text-[48px] leading-[48px] font-normal text-sk-white">
              Efficienza operativa e AI per risultati misurabili.
            </h1>

            {/* Body */}
            <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-white">
              Aiutiamo organizzazioni complesse a misurare, prioritizzare e sbloccare il potenziale operativo nascosto. Con un metodo che parte dal processo, mai dalla tecnologia.
            </p>
          </div>

          {/* CTA outline — border 1.5px green, radius 33px */}
          <a
            href="#contatti"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[33px] border-[1.5px] border-sk-green px-[32px] py-[12px] text-[16px] font-normal leading-none text-sk-light transition-all duration-200 ease-in-out hover:bg-sk-green hover:text-sk-dark active:bg-sk-dark active:border-sk-dark active:text-sk-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Richiedi un assessment operativo
          </a>
        </div>

        {/* Placeholder illustrazione desktop — a destra */}
        <div className="hidden lg:flex flex-1 items-end justify-end pl-[48px]">
          <div
            className="w-[466px] h-[423px] rounded-[12px] bg-sk-dark border border-white/10"
            aria-hidden="true"
          />
        </div>
      </Container>
    </section>
  );
}
