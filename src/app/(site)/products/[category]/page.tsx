import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CatalogHero } from "@/components/products/catalog-hero";
import { ProductCards } from "@/components/products/product-cards";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { getCategory } from "@/lib/catalog";

export function generateStaticParams() {
  return siteConfig.productCategories.map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Products" };
  return {
    title: category.title,
    description: category.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <>
      <CatalogHero
        eyebrow="Product Category"
        title={category.title}
        description={category.blurb}
        image={category.image}
        imageAlt={category.title}
        holoSlug={category.slug}
        quoteTitle={`Need ${category.title}?`}
        quoteText="Share your specification and our team will help with availability, pricing, and the right setup for your project."
        crumbs={[
          { href: "/products", label: "Products" },
          { href: category.href, label: category.title },
        ]}
      />
      <Container className="py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
            Collection
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-aqs-navy">
            {category.title} Products
          </h2>
          <p className="mt-3 text-sm leading-7 text-aqs-muted">{category.aboutBlurb}</p>
        </div>
        <div className="mt-10">
          <ProductCards items={category.links} />
        </div>
      </Container>
    </>
  );
}
