import type { Metadata } from "next";
import { Syne, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Preloader } from "@/components/Preloader";
import { Cursor } from "@/components/Cursor";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["italic", "normal"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tolotra Nomenjanahary — Développeur Full Stack",
  description:
    "Portfolio de Tolotra Nomenjanahary, étudiant à l'EMIT Fianarantsoa, développeur web full-stack disponible pour un stage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Without JavaScript the intro animations would stay paused — show everything. */}
        <noscript>
          <style>{`.char,.fade-up,.reveal{animation:none!important;opacity:1!important;transform:none!important;filter:none!important}#preloader{display:none!important}`}</style>
        </noscript>
      </head>
      <body
        className={`${syne.variable} ${instrument.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Preloader />
          <Cursor />
          <Header />
          <main id="top">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
