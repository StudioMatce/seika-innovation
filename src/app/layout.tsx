import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Seika Innovation — Efficienza operativa e AI",
  description:
    "Analisi dati, ottimizzazione dei processi e intelligenza artificiale per migliorare performance, controllo e capacità decisionale della tua azienda.",
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
