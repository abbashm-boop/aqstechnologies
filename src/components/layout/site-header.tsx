"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, type FormEvent } from "react";

import { Tilt } from "@/components/home/tilt";
import { Container } from "@/components/ui/container";
import { FitImage } from "@/components/ui/fit-image";
import { BrandLogo } from "@/components/ui/brand-logo";
import { WhatsAppIcon } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type MenuKey = "products" | "partners";

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<MenuKey | null>(null);
  const [mobileSearch, setMobileSearch] = useState(false);
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
    setMobileSub(null);
    setMobileSearch(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) setMobileSub(null);
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

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    window.dispatchEvent(new Event("aqs:route"));
    router.push(value ? `/products?q=${encodeURIComponent(value)}` : "/products");
    closeNow();
    setMobileOpen(false);
    setMobileSearch(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-aqs-navy text-white">
        <Container className="flex h-9 items-center justify-between gap-6 text-[12px] sm:h-10">
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
        className="relative overflow-x-clip border-b border-black/8 bg-white"
        onMouseLeave={closeSoon}
      >
        <Container className="flex h-[68px] min-w-0 items-center gap-2 overflow-x-clip sm:h-[80px] sm:gap-4">
          <Link href="/" className="shrink-0" aria-label={siteConfig.legalName}>
            <Image
              src="/brand/logo.png"
              alt={siteConfig.legalName}
              width={320}
              height={104}
              priority
              className="h-9 w-auto max-w-[110px] object-contain sm:h-[52px] sm:max-w-[200px]"
            />
          </Link>

          <nav className="ml-8 hidden items-center gap-4 lg:ml-12 lg:flex" aria-label="Main">
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
                      "rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors",
                      active
                        ? "bg-aqs-red text-white"
                        : "text-aqs-navy hover:bg-black/5 hover:text-aqs-red",
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
                    "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold whitespace-nowrap transition-colors",
                    active || menuOpen
                      ? "bg-aqs-red text-white"
                      : "text-aqs-navy hover:bg-black/5 hover:text-aqs-red",
                  )}
                  aria-expanded={menuOpen}
                >
                  {item.label}
                  <ChevronDown />
                </button>
              );
            })}
          </nav>

          <SearchField
            query={query}
            setQuery={setQuery}
            onSearch={onSearch}
            className="ml-auto hidden min-w-0 lg:block lg:w-[240px] lg:flex-none"
          />
          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-aqs-navy hover:bg-black/5 lg:hidden"
            aria-label={mobileSearch ? "Close search" : "Search products"}
            aria-expanded={mobileSearch}
            onClick={() => {
              setMobileSearch((open) => !open);
              setMobileOpen(false);
              closeNow();
            }}
          >
            {mobileSearch ? <CloseIcon /> : <SearchIcon className="h-[18px] w-[18px]" />}
          </button>
          <Link
            href="/contact"
            onMouseEnter={closeNow}
            className="hidden h-10 shrink-0 items-center rounded-full bg-aqs-red px-4 text-[13px] font-semibold whitespace-nowrap text-white hover:bg-aqs-red-hover lg:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-aqs-navy hover:bg-black/5 lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => {
              setMobileOpen((open) => !open);
              setMobileSearch(false);
              closeNow();
            }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </Container>

        {mobileSearch ? (
          <div className="border-t border-black/8 bg-white px-5 py-3 lg:hidden">
            <SearchField query={query} setQuery={setQuery} onSearch={onSearch} autoFocus />
          </div>
        ) : null}

        {openMenu === "products" ? (
          <MegaWrap onMouseEnter={() => open("products")}>
            <ProductsMega onNavigate={closeNow} />
          </MegaWrap>
        ) : null}
        {openMenu === "partners" ? (
          <MegaWrap onMouseEnter={() => open("partners")}>
            <PartnersMega onNavigate={closeNow} />
          </MegaWrap>
        ) : null}
      </div>

      {mobileOpen ? (
        <div className="max-h-[calc(100vh-120px)] overflow-x-clip overflow-y-auto border-b border-black/8 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              const hasMenu = "menu" in item && Boolean(item.menu);
              if (!hasMenu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-xl px-4 py-3 text-sm font-semibold",
                      isActive(item.href) ? "bg-aqs-red text-white" : "text-aqs-navy",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = mobileSub === item.menu;
              return (
                <div key={item.href} className="rounded-xl bg-[#f6f8fb]">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold",
                      expanded || isActive(item.href) ? "text-aqs-red" : "text-aqs-navy",
                    )}
                    aria-expanded={expanded}
                    onClick={() =>
                      setMobileSub((current) => (current === item.menu ? null : item.menu))
                    }
                  >
                    {item.label}
                    <span className={cn("transition-transform", expanded && "rotate-180")}>
                      <ChevronDown />
                    </span>
                  </button>
                  {expanded && item.menu === "products" ? (
                    <div className="px-3 pb-3">
                      <MobileProducts onNavigate={() => setMobileOpen(false)} />
                    </div>
                  ) : null}
                  {expanded && item.menu === "partners" ? (
                    <div className="px-3 pb-3">
                      <MobilePartners onNavigate={() => setMobileOpen(false)} />
                    </div>
                  ) : null}
                </div>
              );
            })}
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

function SearchField({
  query,
  setQuery,
  onSearch,
  className,
  autoFocus = false,
}: {
  query: string;
  setQuery: (value: string) => void;
  onSearch: (event: FormEvent) => void;
  className?: string;
  autoFocus?: boolean;
}) {
  return (
    <form onSubmit={onSearch} className={cn("relative min-w-0 w-full", className)} role="search">
      <SearchIcon className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-aqs-muted" />
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search products"
        aria-label="Search products"
        autoFocus={autoFocus}
        className="h-10 w-full min-w-0 rounded-full border border-black/10 bg-[#f4f6f8] pr-3 pl-9 text-base text-aqs-navy outline-none transition-colors placeholder:text-aqs-muted/80 focus:border-aqs-red focus:bg-white lg:text-sm"
      />
    </form>
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
      className="absolute inset-x-0 top-full z-40 -mt-px hidden border-t border-black/8 bg-white shadow-[0_18px_40px_rgba(11,31,58,0.12)] lg:block"
      onMouseEnter={onMouseEnter}
    >
      <Container className="py-6">{children}</Container>
    </div>
  );
}

function ProductsMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {siteConfig.productCategories.map((category) => (
        <div key={category.title} className="min-w-0">
          <Link href={category.href} onClick={onNavigate} className="group block">
            <FitImage
              src={category.image}
              alt={category.title}
              sizes="(min-width: 1024px) 18vw, 45vw"
              className="aspect-[4/3] rounded-2xl"
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
                  onClick={onNavigate}
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

function MobileProducts({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-3 rounded-xl bg-white px-3 py-3">
      {siteConfig.productCategories.map((category) => (
        <div key={category.slug}>
          <Link
            href={category.href}
            onClick={onNavigate}
            className="block text-sm font-semibold text-aqs-navy"
          >
            {category.title}
          </Link>
          <ul className="mt-1.5 space-y-1">
            {category.links.map((link) => (
              <li key={link.slug}>
                <Link
                  href={link.href}
                  onClick={onNavigate}
                  className="block py-1 text-[13px] text-aqs-muted"
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

function MobilePartners({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="space-y-2 rounded-xl bg-white px-2 py-2">
      {siteConfig.partners.map((partner) => (
        <Link
          key={partner.slug}
          href={partner.href}
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-[#f6f8fb]"
        >
          <span className="flex h-10 w-16 shrink-0 items-center justify-center">
            <img src={partner.logo} alt="" className="max-h-8 max-w-16 object-contain" />
          </span>
          <span>
            <span className="block text-sm font-semibold text-aqs-navy">{partner.name}</span>
            <span className="block text-[12px] text-aqs-muted">{partner.aboutLine}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function PartnersMega({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {siteConfig.partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.href}
          onClick={onNavigate}
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

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
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
