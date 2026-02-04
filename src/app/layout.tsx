import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./smoothscroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://creditplan.it';
const siteName = 'AICondomini';
const defaultTitle = 'Finanziamenti per Condomini | Mediazione Creditizia | AICondomini';
const defaultDescription = 'Soluzioni finanziarie per condomini: ristrutturazioni, efficienza energetica e manutenzione straordinaria. Mediazione creditizia specializzata con delibere veloci e supporto completo.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "finanziamento condominio",
    "prestito condominio",
    "mediazione creditizia condominio",
    "ristrutturazione condominio",
    "efficienza energetica condominio",
    "cappotto termico finanziamento",
    "rifacimento facciata condominio",
    "installazione ascensore condominio",
    "fotovoltaico condominio",
    "eco bonus condominio",
    "superbonus condominio",
    "amministratore condominio finanziamento",
    "delibera condominio",
    "lavori straordinari condominio",
    "manutenzione straordinaria condominio",
    "creditplan condominio",
    "AICondomini",
    "finanziamento lavori condominiali",
    "prestito per lavori condominio",
    "società mediazione creditizia",
  ],
  authors: [{ name: "AICondomini - Creditplan Italia Network di Mediazione Creditizia" }],
  creator: "AICondomini",
  publisher: "AICondomini",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "AICondomini - Finanziamenti per Condomini",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}/og-image.jpg`],
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
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: "Mediazione Creditizia",
  classification: "Credit Brokerage Services",
  other: {
    'format-detection': 'telephone=yes',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'theme-color': '#2563eb',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://creditplan.it" />
        <link rel="preconnect" href="https://www.organismo-am.it" />
        <link rel="dns-prefetch" href="https://creditplan.it" />
        <link rel="dns-prefetch" href="https://www.organismo-am.it" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IT" />
        <meta name="geo.placename" content="Italia" />
        <meta name="language" content="Italian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
