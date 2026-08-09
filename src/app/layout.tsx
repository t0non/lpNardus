import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nardus Soluções",
    default: "Nardus Soluções | Refrigeração e climatização B2B em BH",
  },
  description: "Instalação, manutenção e assistência técnica em ar-condicionado, câmaras frias e sistemas de refrigeração comercial em Belo Horizonte e região.",
  icons: {
    icon: "/logo_nardus.png",
    apple: "/logo_nardus.png",
  },
  openGraph: {
    title: "Nardus Soluções | Refrigeração e climatização B2B em BH",
    description: "Instalação, manutenção e assistência técnica em ar-condicionado, câmaras frias e sistemas de refrigeração comercial em Belo Horizonte e região.",
    url: "https://nardussolucoes.com.br",
    siteName: "Nardus Soluções",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col pt-0">
        <LocalBusinessJsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
