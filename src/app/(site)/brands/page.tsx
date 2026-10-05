import type { Metadata } from "next";
import Link from "next/link";

import { Tilt } from "@/components/home/tilt";
import { PageHero } from "@/components/layout/page-hero";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Brands",
};

export default function BrandsPage() {
  return (
    <>
      <PageHero
        title="Trusted Technology Brands"
        description="We supply genuine products from leading technology brands used in modern workplaces."
      />
      <Container className="grid gap-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {siteConfig.partners.map((partner) => (
          <Link
            key={partner.name}
            href={partner.href}
            className="rounded-xl border border-black/8 p-6 transition-colors hover:border-aqs-red"
          >
            <Tilt className="h-16 w-full">
              <BrandLogo src={partner.logo} alt={partner.name} />
            </Tilt>
            <h2 className="mt-5 text-center text-lg font-semibold text-aqs-navy">
              {partner.name}
            </h2>
            <p className="mt-2 text-center text-sm leading-6 text-aqs-muted">
              {partner.description}
            </p>
          </Link>
        ))}
      </Container>
    </>
  );
}
