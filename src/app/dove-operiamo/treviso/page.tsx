// PAGINA: /dove-operiamo/treviso — pagina dedicata Local SEO per Treviso.
// In costruzione step by step: per ora Header + Hero. Altre sezioni arrivano dopo.

import type { Metadata } from "next";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import TrevisoHero from "@/components/TrevisoHero";
import TrevisoTerritorio from "@/components/TrevisoTerritorio";
import ServiziCards from "@/components/ServiziCards";
import TrevisoApproccio from "@/components/TrevisoApproccio";
import PresenzaTerritorio from "@/components/PresenzaTerritorio";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const title = "Consulenza efficienza operativa a Treviso";
const description =
  "Analisi dati, ottimizzazione processi e AI per aziende trevigiane. Sede a Conegliano, interventi in presenza e da remoto in tutta la provincia di Treviso.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/dove-operiamo/treviso" },
  openGraph: {
    title,
    description,
    url: "/dove-operiamo/treviso",
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

export default function TrevisoPage() {
  return (
    <>
      <Header />
      <HeaderMobile />
      <TrevisoHero />
      <TrevisoTerritorio />
      <ServiziCards />
      <TrevisoApproccio />
      <PresenzaTerritorio />
      <Cta
        heading="Richiedere un assessment operativo a Treviso"
        body={
          <>
            Oltre 20 province coperte con interventi adattati al tessuto industriale locale.
            Operiamo direttamente sul campo, affiancando le aziende nell&apos;analisi dei processi
            e nell&apos;implementazione di soluzioni per l&apos;efficienza operativa.
          </>
        }
      />
      <Footer />
    </>
  );
}
