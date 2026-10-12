import { ContactView } from "@/components/contact/contact-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Talk to AQS Technologies in Dubai about HID readers, TREND displays, KAYBE cables and racks. WhatsApp or email us for availability, pricing and project support in the UAE.",
  path: "/contact",
  keywords: [
    "contact AQS Technologies",
    "HID quote Dubai",
    "AV supplier WhatsApp UAE",
    "networking racks enquiry",
  ],
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  return <ContactView topic={topic} />;
}
