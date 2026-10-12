import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { CANONICAL_SITE_URL } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${CANONICAL_SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${CANONICAL_SITE_URL}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${CANONICAL_SITE_URL}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${CANONICAL_SITE_URL}/partners`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${CANONICAL_SITE_URL}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${CANONICAL_SITE_URL}/blogs`, lastModified, changeFrequency: "weekly", priority: 0.4 },
  ];

  const categoryRoutes = siteConfig.productCategories.map((category) => ({
    url: `${CANONICAL_SITE_URL}${category.href}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const productRoutes = siteConfig.productCategories.flatMap((category) =>
    category.links.map((item) => ({
      url: `${CANONICAL_SITE_URL}${item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
