import type { Metadata } from "next";

import { ContactView } from "@/components/contact/contact-view";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with AQS Technologies for product inquiries, pricing, partnerships and technical support in Dubai, UAE.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  return <ContactView topic={topic} />;
}
