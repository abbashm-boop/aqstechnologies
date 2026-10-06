import type { Metadata } from "next";

import { Tilt } from "@/components/home/tilt";
import { PageHero } from "@/components/layout/page-hero";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Partners",
};

export default function PartnersPage() {
  return (
    <>
      <PageHero
        title="Our Technology Partners"
        description="We collaborate with global technology brands to deliver genuine products, reliable supply, and complete support."
      />
      <Container className="grid gap-6 py-16 sm:grid-cols-2">
        {siteConfig.partners.map((partner) => (
          <article
            key={partner.name}
            id={partner.slug}
            className="scroll-mt-32 rounded-xl border border-black/8 p-6"
          >
            <Tilt className="h-16 w-48">
              <BrandLogo src={partner.logo} alt={partner.name} />
            </Tilt>
            <h2 className="mt-5 text-xl font-semibold text-aqs-navy">
              {partner.name}
            </h2>
            <p className="mt-2 text-sm leading-6 text-aqs-muted">
              {partner.description}
            </p>
            <div className="mt-5">
              <ButtonLink href={partner.href}>View {partner.name} Products</ButtonLink>
            </div>
          </article>
        ))}
      </Container>
    </>
  );
}
