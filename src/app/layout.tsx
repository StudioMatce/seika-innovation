import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/* Font Aptos — caricato localmente con i pesi usati nel design Figma */
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
    {
      path: "../fonts/Aptos-Bold.ttf",
      weight: "700",
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
    <html lang="it" className={`${aptos.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
