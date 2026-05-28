import type { Metadata } from "next";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// SEZIONE: Font Aptos — 3 pesi dal design system + Bold come riserva
const aptos = localFont({
  src: [
    {
      path: "../fonts/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
  display: "swap",
});

// metadataBase = base URL per risolvere path relativi in OG/Twitter/canonical.
// I file apple-icon.png / icon.png / opengraph-image.png in src/app/ vengono
// rilevati automaticamente da Next.js — non serve dichiararli qui.
const siteName = "Seika Innovation";
const defaultTitle = "Seika Innovation — Efficienza operativa e AI";
const defaultDescription =
  "Analisi dati, ottimizzazione dei processi e intelligenza artificiale per migliorare performance, controllo e capacità decisionale della tua azienda.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: "%s — Seika Innovation",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${aptos.variable} antialiased`}>
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}
