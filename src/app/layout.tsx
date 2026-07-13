import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Iluminarias Bambú | Lámparas artesanales de bambú",
  description:
    "Lámparas artesanales de bambú natural, hechas a mano por Amauris Alcantara. Diseños únicos de bambú y cuerda de yute para iluminar tu hogar, terraza o negocio.",
  keywords: [
    "lámparas de bambú",
    "iluminación artesanal",
    "lámparas artesanales República Dominicana",
    "Iluminarias Bambú",
    "decoración rústica",
  ],
  openGraph: {
    title: "Iluminarias Bambú | Lámparas artesanales de bambú",
    description:
      "Diseños únicos de lámparas de bambú natural hechas a mano. Ilumina tus espacios con calidez y estilo artesanal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sand-50 text-wood-900">
        {children}
      </body>
    </html>
  );
}
