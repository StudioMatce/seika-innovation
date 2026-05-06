import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import Hero from "@/components/Hero";
import ShowCase from "@/components/ShowCase";
import Servizi from "@/components/Servizi";

export default function Home() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Hero />
      <ShowCase />
      <Servizi />
    </>
  );
}
