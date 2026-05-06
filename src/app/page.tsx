import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Hero from "@/components/Hero";
import ShowCase from "@/components/ShowCase";
import Servizi from "@/components/Servizi";
import SeikaInnovation from "@/components/SeikaInnovation";
import Metodo from "@/components/Metodo";
import Prioritizzazione from "@/components/Prioritizzazione";

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
    </>
  );
}
