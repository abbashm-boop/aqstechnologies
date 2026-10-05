import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Request a Quote"
        description="Tell us what you need. Our team will help with product selection, availability, and pricing."
      />
      <Container className="grid gap-10 py-16 lg:grid-cols-2">
        <div className="space-y-3 text-sm leading-7 text-aqs-muted">
          <p>
            <span className="font-semibold text-aqs-navy">Location: </span>
            {siteConfig.contact.location}
          </p>
          <p>
            <span className="font-semibold text-aqs-navy">Phone: </span>
            <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
          </p>
          <p>
            <span className="font-semibold text-aqs-navy">Email: </span>
            <a href={`mailto:${siteConfig.contact.email}`}>
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
        <p className="text-sm leading-7 text-aqs-muted">
          A quote form can be connected here to store requests in Supabase.
        </p>
      </Container>
    </>
  );
}
