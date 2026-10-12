import type { Metadata } from "next";

import { CatalogHero } from "@/components/products/catalog-hero";
import { ProductCards } from "@/components/products/product-cards";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/ui/container";
import { filterCategories, getPartner } from "@/lib/catalog";
import { collectionJsonLd, pageMetadata } from "@/lib/seo";

type ProductSearch = {
  q?: string;
  brand?: string;
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<ProductSearch>;
}): Promise<Metadata> {
  const { q = "", brand } = await searchParams;
  const partner = getPartner(brand);
  if (partner) {
    return pageMetadata({
      title: `${partner.name} Products`,
      description: `Browse genuine ${partner.name} ${partner.description.replace(/\.$/, "").toLowerCase()} supplied by AQS Technologies from Dubai to projects across the UAE and GCC.`,
      path: `/products?brand=${partner.slug}`,
      image: partner.logo,
      keywords: [partner.name, `${partner.name} Dubai`, `${partner.name} UAE`, partner.aboutLine],
    });
  }
  if (q.trim()) {
    return pageMetadata({
      title: `Search results for “${q.trim()}”`,
      description: `Products matching “${q.trim()}” in HID access control, TREND AV, KAYBE cabling and racks.`,
      path: `/products?q=${encodeURIComponent(q.trim())}`,
      index: false,
    });
  }
  return pageMetadata({
    title: "Products",
    description:
      "Explore HID access control, TREND audio video, KAYBE LAN and fiber cables, plus server and networking racks. Genuine supply from Dubai for UAE workplaces.",
    path: "/products",
    keywords: [
      "HID products UAE",
      "TREND AV products",
      "KAYBE cables",
      "server racks Dubai",
      "access control catalog",
    ],
  });
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<ProductSearch>;
}) {
  const { q = "", brand } = await searchParams;
  const query = q.trim();
  const partner = getPartner(brand);
  const categories = filterCategories({ q: query, brand });
  const count = categories.reduce((total, category) => total + category.links.length, 0);

  const firstImage =
    categories[0]?.image ?? partner?.logo ?? "/images/category-access-control-hid.png";

  const jsonLd = collectionJsonLd({
    name: partner ? `${partner.name} Products` : query ? `Search: ${query}` : "Technology Products",
    description: partner
      ? partner.description
      : "HID, TREND and KAYBE products supplied by AQS Technologies in Dubai.",
    path: partner ? `/products?brand=${partner.slug}` : "/products",
    items: categories.flatMap((category) =>
      category.links.map((item) => ({ name: item.label, path: item.href })),
    ),
  });

  return (
    <>
      <JsonLd data={jsonLd} />
      <CatalogHero
        eyebrow={partner ? "Partner Products" : query ? "Search" : "Product Catalog"}
        title={
          partner
            ? `${partner.name} Products`
            : query
              ? `Search results for “${query}”`
              : "Technology Products"
        }
        description={
          partner
            ? `${partner.description} Showing ${count} related product${count === 1 ? "" : "s"}.`
            : query
              ? `${count} matching products.`
              : "High-quality technology products from global brands, supplied and distributed across the UAE and region."
        }
        image={partner ? partner.logo : firstImage}
        imageAlt={partner?.name ?? "AQS products"}
        logo={partner?.logo ?? "/brand/logo.png"}
        logoAlt={partner?.name ?? "AQS Technologies"}
        quoteTitle={
          partner
            ? `Need ${partner.name} products?`
            : query
              ? "Need help finding a product?"
              : "Need a quote?"
        }
        quoteText="Share your specification and our team will help with availability, pricing, and genuine supply."
        crumbs={[
          { href: "/products", label: "Products" },
          ...(partner ? [{ href: partner.href, label: partner.name }] : []),
        ]}
      />
      <Container className="space-y-20 py-12">
        {categories.length === 0 ? (
          <p className="text-center text-sm text-aqs-muted">
            {partner
              ? `No ${partner.name} products found.`
              : "No products matched your search. Try a different keyword."}
          </p>
        ) : (
          categories.map((category) => (
            <section key={category.title} id={category.slug} className="scroll-mt-32">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-aqs-navy">
                  {category.title}
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-aqs-muted">
                  {category.blurb}
                </p>
              </div>
              <div className="mt-10">
                <ProductCards items={category.links} />
              </div>
            </section>
          ))
        )}
      </Container>
    </>
  );
}
