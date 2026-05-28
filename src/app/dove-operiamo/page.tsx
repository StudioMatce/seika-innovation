// PAGINA: /dove-operiamo — pagina dedicata alla presenza territoriale di Seika.
// In costruzione step by step: per ora solo header + hero. Le altre sezioni arrivano dopo.

import type { Metadata } from "next";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import DoveOperiamoHero from "@/components/DoveOperiamoHero";
import PresenzaTerritorio from "@/components/PresenzaTerritorio";
import ServiziCards from "@/components/ServiziCards";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const title = "Dove operiamo";
const description =
  "Consulenza per l'efficienza operativa nel Nord Italia. Interveniamo in oltre 20 province tra Veneto, Lombardia, Emilia-Romagna e Trentino.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dove-operiamo" },
  openGraph: {
    title,
    description,
    url: "/dove-operiamo",
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

export default function DoveOperiamoPage() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <DoveOperiamoHero />
      <PresenzaTerritorio />
      <ServiziCards />
      <Cta />
      <Footer />
    </>
  );
}
