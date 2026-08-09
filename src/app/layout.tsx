import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | Nardus Soluções",
    default: "Manutenção de Refrigeração Comercial e Ar-condicionado em BH | Nardus Soluções",
  },
  description: "Conserto e manutenção de câmaras frias, refrigeradores comerciais e ar-condicionado em Belo Horizonte. Atendimento no mesmo dia, sem taxa de visita. Orçamento imediato via WhatsApp.",
  keywords: [
    "manutenção refrigeração comercial BH",
    "conserto câmara fria Belo Horizonte",
    "ar-condicionado comercial BH",
    "assistência técnica refrigeração BH",
    "empresa refrigeração Belo Horizonte",
    "manutenção câmara fria BH",
    "conserto refrigerador comercial BH",
  ],
  authors: [{ name: "Nardus Soluções" }],
  creator: "Nardus Soluções",
  metadataBase: new URL("https://lp-nardus.vercel.app"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo_nardus.png",
    apple: "/logo_nardus.png",
  },
  openGraph: {
    title: "Manutenção de Refrigeração Comercial e Ar-condicionado em BH | Nardus Soluções",
    description: "Conserto e manutenção de câmaras frias, refrigeradores comerciais e ar-condicionado em BH. Atendimento no mesmo dia, sem taxa de visita.",
    url: "https://lp-nardus.vercel.app",
    siteName: "Nardus Soluções",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manutenção de Refrigeração Comercial em BH | Nardus Soluções",
    description: "Conserto e manutenção de câmaras frias, refrigeradores e ar-condicionado em Belo Horizonte. Atendimento no mesmo dia.",
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
