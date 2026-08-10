import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://nardusrefrigeracao.com.br"),
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
    url: "https://nardusrefrigeracao.com.br",
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
  verification: {
    google: "fziU6LqB5Gff_pTFQLcKuJyp2Vs8wUGmKpCNx0pdXr4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} h-full antialiased scroll-smooth`}>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-52S3T8VV');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col pt-0">
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-52S3T8VV"
            height="0" 
            width="0" 
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F0XDGENMZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-F0XDGENMZF');
          `}
        </Script>
        <LocalBusinessJsonLd />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
