import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { CANONICAL_SITE_URL } from "@/lib/site-url";

export const SITE_URL = CANONICAL_SITE_URL;
export const DEFAULT_OG_IMAGE = "/images/hero-global.jpg";

export const DEFAULT_KEYWORDS = [
  "AQS Technologies",
  "technology supplier Dubai",
  "technology distributor UAE",
  "HID access control Dubai",
  "HID Signo readers",
  "HID iCLASS",
  "HID Aero controller",
  "HID Vento cards",
  "iSecure IAM",
  "iSecure HRMS",
  "TREND interactive flat panel",
  "video conferencing display Dubai",
  "video wall UAE",
  "KAYBE LAN cables",
  "fiber optic cables Dubai",
  "server racks UAE",
  "networking cabinets",
  "access control UAE",
  "AV solutions Dubai",
  "GCC technology supply",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  keywords = DEFAULT_KEYWORDS,
  index = true,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  index?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);
  const fullTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title: title.includes(siteConfig.name) ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: "website",
      locale: "en_AE",
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.legalName,
    legalName: "AQS International Trading LLC",
    url: SITE_URL,
    logo: absoluteUrl("/brand/logo.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description:
      "Independent technology supplier in Dubai for HID access control, TREND audio video, KAYBE networking cables and racks across the UAE and GCC.",
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.emails[0],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.2048,
      longitude: 55.2708,
    },
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "AdministrativeArea", name: "GCC" },
    ],
    sameAs: [siteConfig.contact.linkedin],
    knowsAbout: [
      "HID access control",
      "Identity management",
      "Audio video collaboration",
      "Structured cabling",
      "Server and networking racks",
    ],
    makesOffer: siteConfig.productCategories.map((category) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: category.title,
        description: category.blurb,
        url: absoluteUrl(category.href),
      },
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: SITE_URL,
    inLanguage: "en-AE",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function productJsonLd({
  name,
  description,
  image,
  path,
  brand,
  category,
}: {
  name: string;
  description: string;
  image: string;
  path: string;
  brand?: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: absoluteUrl(image),
    url: absoluteUrl(path),
    brand: brand ? { "@type": "Brand", name: brand } : undefined,
    category,
    offers: {
      "@type": "Offer",
      url: absoluteUrl("/contact"),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dubai",
          addressCountry: "AE",
        },
      },
    },
  };
}

export function collectionJsonLd({
  name,
  description,
  path,
  items,
}: {
  name: string;
  description: string;
  path: string;
  items: { name: string; path: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    },
  };
}

export function productBrand(label: string, categorySlug: string) {
  if (label.startsWith("iSecure")) return "Security Shells Infotech";
  if (label.startsWith("HID")) return "HID";
  if (categorySlug === "audio-video") return "TREND";
  if (categorySlug === "networking" || categorySlug === "enclosures") return "KAYBE";
  return siteConfig.name;
}
