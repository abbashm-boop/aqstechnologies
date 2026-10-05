import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { FitImage } from "@/components/ui/fit-image";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Technology Products"
        description="High-quality technology products from global brands, supplied and distributed across the UAE and region."
      />
      <Container className="space-y-20 py-16">
        {siteConfig.productCategories.map((category) => (
          <section
            key={category.title}
            id={category.href.split("#")[1]}
            className="scroll-mt-32"
          >
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-aqs-navy">
                {category.title}
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-aqs-muted">
                {category.blurb}
              </p>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {category.links.map((item) => (
                <Link key={item.label} href="/contact" className="group block">
                  <FitImage
                    src={item.image}
                    alt={item.label}
                    className="aspect-square rounded-[24px]"
                    insetClassName="inset-6"
                  />
                  <h3 className="mt-4 text-center text-sm font-semibold text-aqs-navy">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-center text-xs text-aqs-muted">
                    {item.spec}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </Container>
    </>
  );
}
