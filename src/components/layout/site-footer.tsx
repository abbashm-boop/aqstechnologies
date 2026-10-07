import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-black/8 bg-white text-aqs-navy">
      <Container className="py-12 sm:py-14">
        <div className="grid grid-cols-2 items-start gap-x-12 gap-y-10 lg:flex lg:flex-row lg:justify-between lg:gap-x-16">
          <div className="col-span-2 min-w-0 lg:max-w-[260px] lg:flex-none">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo.png"
                alt={siteConfig.legalName}
                width={240}
                height={78}
                className="h-11 w-auto sm:h-12"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-aqs-muted">
              {siteConfig.footer.blurb}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-aqs-navy hover:text-aqs-red"
              >
                in
              </a>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-aqs-muted hover:text-aqs-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold">Product Categories</h2>
            <ul className="mt-4 space-y-2">
              {siteConfig.productCategories.map((category) => (
                <li key={category.title}>
                  <Link
                    href={category.href}
                    className="text-sm text-aqs-muted hover:text-aqs-red"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h2 className="text-sm font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm text-aqs-muted">
              <li>{siteConfig.contact.location}</li>
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-aqs-red">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all hover:text-aqs-red"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-black/8">
        <Container className="flex flex-col items-center gap-1 py-4 text-center text-xs text-aqs-muted sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>
          <p>{siteConfig.name}</p>
        </Container>
      </div>
    </footer>
  );
}
