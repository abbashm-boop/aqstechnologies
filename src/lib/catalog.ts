import { siteConfig } from "@/config/site";

export type Partner = (typeof siteConfig.partners)[number];
export type ProductCategory = (typeof siteConfig.productCategories)[number];
export type ProductItem = ProductCategory["links"][number];

export function getPartner(slug?: string | null) {
  if (!slug) return null;
  return siteConfig.partners.find((partner) => partner.slug === slug) ?? null;
}

export function getCategory(slug?: string | null) {
  if (!slug) return null;
  return siteConfig.productCategories.find((category) => category.slug === slug) ?? null;
}

export function getProduct(categorySlug?: string | null, productSlug?: string | null) {
  const category = getCategory(categorySlug);
  if (!category || !productSlug) return null;
  const product = category.links.find((item) => item.slug === productSlug) ?? null;
  return product ? { category, product } : null;
}

export function filterCategories({
  q = "",
  brand,
}: {
  q?: string;
  brand?: string;
}) {
  const partner = getPartner(brand);
  const query = q.trim().toLowerCase();

  return siteConfig.productCategories
    .filter((category) => {
      if (!partner) return true;
      return (partner.categorySlugs as readonly string[]).includes(category.slug);
    })
    .map((category) => {
      const titleMatch = category.title.toLowerCase().includes(query);
      const links = query
        ? category.links.filter(
            (item) =>
              titleMatch ||
              item.label.toLowerCase().includes(query) ||
              item.spec.toLowerCase().includes(query),
          )
        : category.links;
      return { ...category, links };
    })
    .filter((category) => category.links.length > 0);
}
