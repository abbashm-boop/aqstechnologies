import type { Metadata } from "next";

import { CatalogHero } from "@/components/products/catalog-hero";
import { ProductCards } from "@/components/products/product-cards";
import { Container } from "@/components/ui/container";
import { filterCategories, getPartner } from "@/lib/catalog";

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
    return {
      title: `${partner.name} Products`,
      description: partner.description,
    };
  }
  if (q.trim()) {
    return { title: `Search results for “${q.trim()}”` };
  }
  return { title: "Products" };
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
    categories[0]?.image ?? partner?.logo ?? "/images/category-hid.png";

  return (
    <>
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
        logoAlt={partner?.name ?? "AQS Technologies LLC"}
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
