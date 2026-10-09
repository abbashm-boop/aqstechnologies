import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-black/8 bg-white text-aqs-navy">
      <Container className="py-12 sm:py-14">
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:flex md:items-start md:justify-between md:gap-x-12">
          <div className="col-span-2 max-w-[280px] md:col-auto md:shrink-0">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo.png"
                alt={siteConfig.legalName}
                width={1041}
                height={374}
                className="h-12 w-auto max-w-[240px] object-contain object-left sm:h-14 sm:max-w-[280px]"
              />
            </Link>
            <p className="mt-4 text-sm leading-6 text-aqs-muted">
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

          <div className="min-w-0 md:shrink-0">
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

          <div className="min-w-0 md:shrink-0">
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

          <div className="min-w-0 md:shrink-0">
            <h2 className="text-sm font-semibold">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-sm text-aqs-muted">
              <li>{siteConfig.contact.location}</li>
              <li>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-aqs-red"
                >
                  WhatsApp: {siteConfig.contact.whatsappPhone}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-aqs-red">
                  Call / WhatsApp: {siteConfig.contact.phone}
                </a>
              </li>
              {siteConfig.contact.emails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="break-words hover:text-aqs-red">
                    {email}
                  </a>
                </li>
              ))}
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
