import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#1c2d28]">
      {/* Illustrazione decorativa — posizionata esattamente come da Figma */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/images/hero-illustration.png"
          alt=""
          width={1025}
          height={672}
          className="absolute top-[10.98%] left-[44.57%] w-[53.39%] h-[67.29%] max-w-none object-contain"
          priority
        />
      </div>

      {/* Contenuto — altezza e padding esatti da Figma */}
      <div className="relative mx-auto flex h-[500px] max-w-[1128px] items-end px-6 pb-[60px] pt-[200px] md:h-[749px] md:pb-[100px] md:pt-[350px] xl:px-0">
        <div className="flex flex-col gap-[48px] items-start w-full md:w-[1128px]">
          {/* Testi — larghezza 506px come da Figma */}
          <div className="flex flex-col gap-[24px] items-start w-full md:w-[506px]">
            <p className="text-[14px] font-semibold uppercase tracking-[1.4px] text-[#00a77d] leading-normal">
              Seika Innovation
            </p>
            <h1 className="text-[32px] leading-[1] font-normal text-white md:text-[48px] md:leading-[48px]">
              Efficienza operativa e
              <br />
              AI per risultati misurabili
            </h1>
            <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-white">
              Analisi dati, ottimizzazione dei processi e intelligenza
              artificiale per migliorare performance, controllo e capacità
              decisionale della tua azienda.
            </p>
          </div>

          {/* CTA — valori esatti da Figma: border 1.5px, px-32 py-12, radius 33px */}
          <a
            href="#contatti"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[33px] border-[1.5px] border-solid border-[#00a77d] px-[32px] py-[12px] text-center text-[16px] font-normal leading-none text-[#ecefe5] transition-all duration-300 hover:bg-[#00a77d] hover:text-[#1c2d28]"
          >
            Richiedi un assessment operativo
          </a>
        </div>
      </div>
    </section>
  );
}
