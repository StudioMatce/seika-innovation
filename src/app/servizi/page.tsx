// PAGINA: /servizi — pagina dedicata ai servizi Seika Innovation.
// Header, Cta e Footer sono riusati dalla homepage (componenti già esistenti).

import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import ServiziHero from "@/components/ServiziHero";
import ServiziLista from "@/components/ServiziLista";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Servizi — Seika Innovation",
  description:
    "Analisi dati, ottimizzazione dei processi e intelligenza artificiale per migliorare le performance operative aziendali.",
};

export default function ServiziPage() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <ServiziHero />
      <ServiziLista />
      <Cta />
      <Footer />
    </>
  );
}
