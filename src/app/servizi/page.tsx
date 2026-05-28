// PAGINA: /servizi — pagina dedicata ai servizi Seika Innovation.
// Header, Cta e Footer sono riusati dalla homepage (componenti già esistenti).

import type { Metadata } from "next";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import ServiziHero from "@/components/ServiziHero";
import ServiziLista from "@/components/ServiziLista";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const title = "Servizi";
const description =
  "Analisi dati, ottimizzazione dei processi e intelligenza artificiale per migliorare le performance operative aziendali.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/servizi" },
  openGraph: {
    title,
    description,
    url: "/servizi",
    type: "website",
    locale: "it_IT",
    siteName: "Seika Innovation",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
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
