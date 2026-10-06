import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CatalogHero } from "@/components/products/catalog-hero";
import { ProductCards } from "@/components/products/product-cards";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { getProduct } from "@/lib/catalog";

export function generateStaticParams() {
  return siteConfig.productCategories.flatMap((category) =>
    category.links.map((item) => ({
      category: category.slug,
      product: item.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, product: productSlug } = await params;
  const match = getProduct(categorySlug, productSlug);
  if (!match) return { title: "Products" };
  return {
    title: match.product.label,
    description: `${match.product.spec}. ${match.category.blurb}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; product: string }>;
}) {
  const { category: categorySlug, product: productSlug } = await params;
  const match = getProduct(categorySlug, productSlug);
  if (!match) notFound();

  const { category, product } = match;
  const related = category.links.filter((item) => item.slug !== product.slug);

  return (
    <>
      <CatalogHero
        eyebrow={category.title}
        title={product.label}
        description={`${product.spec}. Genuine ${product.label.toLowerCase()} supplied and distributed by AQS Technologies across the UAE and region.`}
        image={product.image}
        imageAlt={product.label}
        quoteTitle={`Need ${product.label}?`}
        quoteText={`Share your specification and our team will help with availability, pricing, and the right ${category.title.toLowerCase()} setup.`}
        crumbs={[
          { href: "/products", label: "Products" },
          { href: category.href, label: category.title },
          { href: product.href, label: product.label },
        ]}
      />
      <Container className="py-12">
        {related.length > 0 ? (
          <>
            <div className="text-center">
              <p className="text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
                Related
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-aqs-navy">
                More in {category.title}
              </h2>
            </div>
            <div className="mt-10">
              <ProductCards items={related} />
            </div>
          </>
        ) : null}
      </Container>
    </>
  );
}
