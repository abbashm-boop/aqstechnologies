import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  organizationJsonLd,
} from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "AQS Technologies | HID, AV, Networking and Racks Supplier in Dubai",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Dubai-based supplier of genuine HID access control, TREND meeting-room AV, KAYBE cabling and racks. We help workplaces across the UAE and GCC specify, source and receive the right products.",
  keywords: DEFAULT_KEYWORDS,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Technology",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: true, email: true, address: true },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: {
    canonical: "/",
    languages: { "en-AE": "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "/",
    siteName: siteConfig.name,
    title: "AQS Technologies | Technology Supplier in Dubai, UAE",
    description:
      "Genuine HID readers and credentials, TREND displays and conferencing, KAYBE cables and racks, supplied from Dubai.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1280,
        height: 720,
        alt: "AQS Technologies product brands and global supply",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AQS Technologies | Technology Supplier in Dubai, UAE",
    description:
      "HID access control, TREND AV, KAYBE networking and racks for UAE workplaces.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai",
    "geo.position": "25.2048;55.2708",
    ICBM: "25.2048, 55.2708",
    "og:locale:alternate": "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
