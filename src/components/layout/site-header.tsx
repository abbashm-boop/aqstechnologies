"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Tilt } from "@/components/home/tilt";
import { Container } from "@/components/ui/container";
import { FitImage } from "@/components/ui/fit-image";
import { BrandLogo } from "@/components/ui/brand-logo";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type MenuKey = "products" | "partners" | "search";

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLDivElement>(null);

  function open(menu: MenuKey) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menu);
  }

  function closeSoon() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 220);
  }

  function closeNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(null);
  }

  useEffect(() => {
    closeNow();
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!barRef.current?.contains(event.target as Node)) {
        closeNow();
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-aqs-navy text-white">
        <Container className="flex h-10 items-center justify-between gap-6 text-[12px]">
          <p className="truncate font-medium">{siteConfig.tagline}</p>
          <div className="hidden items-center gap-3 lg:flex">
            <span>{siteConfig.contact.location}</span>
            <span className="text-white/30">|</span>
            <a href={siteConfig.contact.phoneHref} className="hover:text-white/80">
              {siteConfig.contact.phone}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="hover:text-white/80"
            >
              {siteConfig.contact.email}
            </a>
            <span className="text-white/30">|</span>
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white/80"
            >
              in
            </a>
            <span className="text-white/30">|</span>
            <a
              href={siteConfig.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="inline-flex items-center hover:text-white/80"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </Container>
      </div>

      <div
        ref={barRef}
        className="relative border-b border-black/8 bg-white"
        onMouseLeave={closeSoon}
      >
        <Container className="grid h-[72px] grid-cols-[auto_1fr_auto] items-center gap-3 sm:h-[88px] sm:gap-6">
          <Link href="/" className="flex min-w-0 items-center" aria-label={siteConfig.legalName}>
            <Image
              src="/brand/logo.png"
              alt={siteConfig.legalName}
              width={320}
              height={104}
              priority
              className="h-10 w-auto max-w-[150px] object-contain sm:h-[58px] sm:max-w-[240px]"
            />
          </Link>

          <nav className="hidden items-center justify-center gap-1 xl:flex" aria-label="Main">
            {siteConfig.nav.map((item) => {
              const hasMenu = "menu" in item && Boolean(item.menu);
              const active = isActive(item.href);
              const menuOpen = hasMenu && openMenu === item.menu;

              if (!hasMenu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={closeNow}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                      active
                        ? "bg-aqs-red text-white"
                        : "text-aqs-navy hover:text-aqs-red",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <button
                  key={item.href}
                  type="button"
                  onMouseEnter={() => open(item.menu)}
                  onClick={() => open(item.menu)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors",
                    active || menuOpen
                      ? "bg-aqs-red text-white"
                      : "text-aqs-navy hover:text-aqs-red",
                  )}
                  aria-expanded={menuOpen}
                >
                  {item.label}
                  <ChevronDown />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-aqs-navy hover:bg-black/5"
              aria-label="Search"
              onMouseEnter={closeNow}
              onClick={() =>
                setOpenMenu((current) => (current === "search" ? null : "search"))
              }
            >
              <SearchIcon />
            </button>
            <Link
              href="/contact"
              onMouseEnter={closeNow}
              className="hidden h-11 items-center rounded-full bg-aqs-red px-5 text-sm font-semibold text-white hover:bg-aqs-red-hover sm:inline-flex"
            >
              Request a Quote
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-aqs-navy hover:bg-black/5 xl:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </Container>

        {openMenu === "products" ? (
          <MegaWrap onMouseEnter={() => open("products")}>
            <ProductsMega />
          </MegaWrap>
        ) : null}
        {openMenu === "partners" ? (
          <MegaWrap onMouseEnter={() => open("partners")}>
            <PartnersMega />
          </MegaWrap>
        ) : null}
        {openMenu === "search" ? (
          <div className="absolute inset-x-0 top-full z-40 border-t border-black/8 bg-white py-4 shadow-lg">
            <Container>
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  window.location.href = `/products?q=${encodeURIComponent(query)}`;
                }}
              >
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products"
                  className="h-11 flex-1 rounded-full border border-black/10 px-4 text-sm outline-none focus:border-aqs-red"
                />
                <button
                  type="submit"
                  className="h-11 rounded-full bg-aqs-red px-5 text-sm font-semibold text-white hover:bg-aqs-red-hover"
                >
                  Search
                </button>
              </form>
            </Container>
          </div>
        ) : null}
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100vh-128px)] overflow-y-auto border-b border-black/8 bg-white xl:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-3 text-sm font-semibold",
                  isActive(item.href) ? "bg-aqs-red text-white" : "text-aqs-navy",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-aqs-red text-sm font-semibold text-white"
            >
              Request a Quote
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

function MegaWrap({
  children,
  onMouseEnter,
}: {
  children: React.ReactNode;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className="absolute inset-x-0 top-full z-40 -mt-px border-t border-black/8 bg-white shadow-[0_18px_40px_rgba(11,31,58,0.12)]"
      onMouseEnter={onMouseEnter}
    >
      <Container className="py-6">{children}</Container>
    </div>
  );
}

function ProductsMega() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {siteConfig.productCategories.map((category) => (
        <div key={category.title} className="min-w-0">
          <Link href={category.href} className="group block">
            <FitImage
              src={category.image}
              alt={category.title}
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="aspect-[4/3] rounded-lg"
              insetClassName="inset-4"
            />
            <p className="mt-3 text-sm font-semibold leading-5 text-aqs-navy group-hover:text-aqs-red">
              {category.title}
            </p>
          </Link>
          <ul className="mt-2 space-y-1.5">
            {category.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block text-[13px] leading-5 text-aqs-muted hover:text-aqs-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function PartnersMega() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {siteConfig.partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.href}
          className="block rounded-xl border border-black/8 p-5 transition-colors hover:border-aqs-red"
        >
          <Tilt className="h-20 w-full">
            <BrandLogo src={partner.logo} alt={partner.name} />
          </Tilt>
          <p className="mt-4 text-sm font-semibold text-aqs-navy">{partner.name}</p>
          <p className="mt-1 text-sm leading-6 text-aqs-muted">
            {partner.description}
          </p>
        </Link>
      ))}
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 4.5 6 8l3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20 16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
