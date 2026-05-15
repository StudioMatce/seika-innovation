// SEZIONE: FAQ — bg light, lista di 6 domande/risposte
// Layout 3 colonne (numero | domanda | risposta) identico mobile/desktop,
// cambiano solo dimensioni testo (14px mobile → 24px desktop su numero+domanda)
// e larghezza colonna domanda (147px → 263px)

import Container from "./Container";
import Dots from "./Dots";

type FaqItem = {
  n: string; // "01", "02"...
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    n: "01",
    question: "Come si capisce se un'azienda ha margini di efficienza nascosti?",
    answer:
      "Ogni organizzazione li ha. La questione non è se esistono, ma dove si concentrano e quanto valgono. L'assessment operativo li quantifica. In diversi casi sono emersi potenziali di recupero a sei cifre già nella prima fase di analisi.",
  },
  {
    n: "02",
    question: "Quanto tempo per i primi risultati?",
    answer:
      "Le Quick Win sono operative in settimane. Il framework classifica ogni intervento in tre fasce: Quick Win (0-3 mesi), Progetto (3-6 mesi), Trasformazione (6+ mesi). Si agisce subito sulle prime mentre si costruiscono le seconde.",
  },
  {
    n: "03",
    question: "In quali settori?",
    answer:
      "Manifatturiero, logistica, costruzioni, healthcare, pharma, servizi finanziari, arredo navale, retail. 55+ aziende in 18 mesi, da 1M a oltre 5 miliardi di fatturato.",
  },
  {
    n: "04",
    question: "Cosa differenzia Seika Innovation?",
    answer:
      "Tre cose. Si parte dal processo, mai dalla tecnologia. Tutto viene misurato: ogni intervento ha KPI definiti prima di partire. E Seika Innovation è una boutique: pochi progetti alla volta, profondità analitica, team senior dedicato.",
  },
  {
    n: "05",
    question: "Come funziona l'assessment?",
    answer:
      "Quattro fasi. Analisi (focus group, raccolta dati). Mappatura (process mining, AS-IS vs TO-BE). Identificazione GAP (colli di bottiglia, sprechi, strumenti inadeguati). Prioritizzazione (matrice impatto/effort, scoring oggettivo, roadmap).",
  },
  {
    n: "06",
    question: "Esistono incentivi?",
    answer:
      "Sì. Piano Transizione 5.0 e bandi regionali coprono investimenti in innovazione e digitalizzazione. Seika Innovation supporta l'identificazione delle opportunità e la preparazione della documentazione.",
  },
];

function FaqRow({ n, question, answer }: FaqItem) {
  return (
    <div className="flex flex-col gap-[24px]">
      {/* Gap e larghezza domanda ridotti su mobile per dare più spazio alla risposta.
          Su lg torniamo ai valori del design Figma (gap-48, domanda 263px). */}
      <div className="flex items-start gap-[16px] lg:gap-[48px]">
        {/* Numero */}
        <p className="whitespace-nowrap text-[14px] font-normal leading-[normal] tracking-[0.28px] text-sk-dark lg:text-[24px] lg:tracking-[0.48px]">
          {n}
        </p>
        {/* Domanda */}
        <p className="w-[110px] shrink-0 text-[14px] font-normal leading-[normal] tracking-[0.28px] text-sk-green lg:w-[263px] lg:text-[24px] lg:tracking-[0.48px]">
          {question}
        </p>
        {/* Risposta */}
        <p className="flex-1 text-[14px] font-normal leading-[normal] tracking-[0.28px] text-sk-dark">
          {answer}
        </p>
      </div>
      {/* Divisore */}
      <div className="h-px w-full bg-sk-dark/20" />
    </div>
  );
}

export default function Faq() {
  return (
    <section className="relative bg-sk-light">
      <Dots pattern="faq" bg="light" />
      <Container className="relative py-[120px]">
        {/* Testo intro */}
        <div className="flex flex-col gap-[42px] lg:max-w-[679px]">
          <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
            FAQ
          </p>
          <h2 className="text-[48px] font-normal leading-[48px] text-sk-dark">
            Un metodo strutturato per migliorare l&apos;efficienza operativa.
          </h2>
        </div>

        {/* Lista 6 FAQ */}
        <div className="mt-[96px] flex flex-col gap-[48px]">
          {faqs.map((item) => (
            <FaqRow key={item.n} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
