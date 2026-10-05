import type { Metadata } from "next";

import { PageHero } from "@/components/layout/page-hero";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  return (
    <>
      <PageHero
        title="Latest Insights"
        description="Product guides, workplace technology notes, and updates from AQS Technologies."
      />
      <Container className="py-16">
        <p className="text-aqs-muted">Articles will appear here shortly.</p>
      </Container>
    </>
  );
}
