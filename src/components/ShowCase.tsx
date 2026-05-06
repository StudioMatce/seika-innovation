// SEZIONE: ShowCase — 3 metriche con numero verde, barra progresso e descrizione
// Desktop: 3 colonne | Mobile: stacked con gap 82px
// Bg: super-dark (#131F1B)

import Container from "./Container";
import ProgressBar from "./ProgressBar";

const metrics = [
  { value: "35%", label: "Riduzione del lead time produttivo", fill: 35 },
  { value: "30 +", label: "Percorsi di formazione AI in azienda", fill: 50 },
  { value: "200 +", label: "Processi analizzati\ne mappati", fill: 100 },
];

export default function ShowCase() {
  return (
    <section className="bg-sk-super-dark">
      <Container className="py-[100px]">
        <div className="flex flex-col gap-[82px] lg:flex-row lg:gap-[48px]">
          {metrics.map((metric) => (
            <div key={metric.value} className="flex flex-1 flex-col gap-[24px]">
              {/* Numero */}
              <p className="text-[48px] font-normal leading-none text-sk-green">
                {metric.value}
              </p>

              {/* Barra progresso — pattern grafico ricorrente */}
              <ProgressBar fill={metric.fill} dashColor="light" />

              {/* Descrizione */}
              <p className="text-[24px] font-normal leading-normal tracking-[0.48px] text-sk-light whitespace-pre-line">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
