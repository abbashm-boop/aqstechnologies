import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "AQS Technologies supports websites, software and digital products alongside our core HID, AV and networking supply from Dubai.",
  path: "/services",
  index: false,
});

export default function ServicesPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
      <ul className="mt-10 grid gap-6 sm:grid-cols-3">
        {siteConfig.services.map((service) => (
          <li
            key={service.title}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <h2 className="text-lg font-medium">{service.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
