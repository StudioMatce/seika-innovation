// SEZIONE: PresenzaTerritorio — bg light
// Top: layout 2 colonne (testo+CTA a sinistra, foto blob a destra) → mobile stacked
// Bottom: lista 20 città distribuite in 4 colonne (desktop) / 2 colonne (mobile)

import Container from "./Container";
import Dots from "./Dots";

// 20 città dove Seika opera, raggruppate in 4 colonne da 5 ciascuna come da Figma.
// Le righe sono allineate orizzontalmente: stessa riga ha la stessa indicizzazione su tutte le col.
const cityColumns = [
  ["Belluno", "Bergamo", "Bologna", "Brescia", "Cremona"],
  ["Ferrara", "Mantova", "Milano", "Modena", "Padova"],
  ["Parma", "Piacenza", "Pordenone", "Rovigo", "Trento"],
  ["Treviso", "Udine", "Venezia", "Verona", "Vicenza"],
];

export default function PresenzaTerritorio() {
  return (
    <section className="relative bg-sk-light">
      <Dots pattern="showcase" bg="light" />

      <Container className="relative py-[120px]">
        {/* Blocco 1: testo + foto (2 colonne desktop, stack mobile) */}
        <div className="flex flex-col gap-[48px] lg:flex-row lg:items-start lg:gap-[96px]">
          {/* Testo + CTA */}
          <div className="flex flex-col items-start gap-[48px] lg:flex-1">
            <div className="flex flex-col gap-[24px]">
              <h2 className="text-[48px] font-normal leading-[48px] text-sk-dark">
                Presenza sul territorio
              </h2>
              <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-dark">
                Oltre 20 province coperte con interventi adattati al tessuto industriale locale.
                Operiamo direttamente sul campo, affiancando le aziende nel ridisegno dei processi
                e nell&apos;implementazione di soluzioni per l&apos;efficienza operativa.
              </p>
            </div>

            {/* CTA outline green */}
            <a
              href="#contatti"
              className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-[33px] border-[1.5px] border-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-dark transition-all duration-200 ease-in-out hover:bg-sk-green hover:text-sk-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sk-green"
            >
              Richiedi un assessment operativo
            </a>
          </div>

          {/* Foto blob — 2 foto già composte in un'unica immagine Terrirorio.png */}
          <div className="lg:flex-1">
            <img
              src="/images/Terrirorio.png"
              alt="Operatori Seika Innovation al lavoro in ambienti produttivi del Nord Italia"
              width={500}
              height={244}
              className="block h-auto w-full"
            />
          </div>
        </div>

        {/* Blocco 2: lista 20 città — 4 colonne desktop, 2 colonne mobile.
            Uso CSS grid con grid-template-columns responsive. */}
        <div className="mt-[96px] grid grid-cols-2 gap-x-[24px] gap-y-[12px] lg:mt-[120px] lg:grid-cols-4 lg:gap-x-[48px]">
          {cityColumns.map((col, colIndex) => (
            <ul key={colIndex} className="flex flex-col gap-[12px]">
              {col.map((city) => (
                <li
                  key={city}
                  className="relative w-fit text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-green transition-colors duration-200 hover:text-sk-super-dark after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-full after:origin-left after:scale-x-0 after:bg-sk-super-dark after:transition-transform after:duration-300 after:ease-out after:content-[''] hover:after:scale-x-100"
                >
                  {city}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </Container>
    </section>
  );
}
