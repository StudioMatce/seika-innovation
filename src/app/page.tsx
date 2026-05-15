import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Hero from "@/components/Hero";
import ShowCase from "@/components/ShowCase";
import Servizi from "@/components/Servizi";
import SeikaInnovation from "@/components/SeikaInnovation";
import Metodo from "@/components/Metodo";
import Prioritizzazione from "@/components/Prioritizzazione";
import Risultati from "@/components/Risultati";
import CaseStudy from "@/components/CaseStudy";
import Manifesto from "@/components/Manifesto";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Hero />
      <ShowCase />
      <Servizi />
      <SeikaInnovation />
      <Metodo />
      <Prioritizzazione />
      <Risultati />
      <CaseStudy />
      <Manifesto />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}
