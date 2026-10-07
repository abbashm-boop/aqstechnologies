import Link from "next/link";

import { HeroHologram } from "@/components/home/hero-hologram";
import { Container } from "@/components/ui/container";

type Crumb = { href: string; label: string };

export function CatalogHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
  logo = "/brand/logo.png",
  logoAlt = "AQS Technologies LLC",
  quoteTitle,
  quoteText,
  holoSlug,
  holoTitle,
  holoLine,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  crumbs: Crumb[];
  logo?: string;
  logoAlt?: string;
  quoteTitle?: string;
  quoteText?: string;
  holoSlug?: string;
  holoTitle?: string;
  holoLine?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-aqs-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_48%,rgba(240,212,138,0.16),transparent_34%),radial-gradient(circle_at_18%_20%,rgba(227,28,35,0.18),transparent_32%),linear-gradient(90deg,#07111f_0%,#0b1f3a_46%,#102844_100%)]" />
      <div className="pointer-events-none absolute -right-10 -top-8 h-52 w-52 rounded-full bg-aqs-red/18 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-40px] left-[28%] h-36 w-36 rounded-full bg-[#f0d48a]/16 blur-3xl" />

      <Container className="relative grid items-center gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-6 lg:py-6">
        <div className="min-w-0 lg:pl-6">
          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-white px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
              <img
                src={logo}
                alt={logoAlt}
                className="h-8 w-auto max-w-[132px] object-contain sm:h-9"
              />
            </div>
            <nav
              className="flex min-w-0 flex-wrap items-center gap-1.5 text-[11px] text-white/60"
              aria-label="Breadcrumb"
            >
              {crumbs.map((crumb, index) => (
                <span key={crumb.href} className="flex items-center gap-1.5">
                  {index > 0 ? <span aria-hidden>/</span> : null}
                  {index === crumbs.length - 1 ? (
                    <span className="truncate text-white/90">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="transition-colors hover:text-white">
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
          </div>

          <p className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-[#f0d48a] uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-2 max-w-xl text-[28px] font-semibold tracking-tight text-white sm:text-[36px] sm:leading-[1.12]">
            {title}
          </h1>
          <p className="mt-3 max-w-lg text-[14px] leading-6 text-white/72">{description}</p>

          {quoteTitle ? (
            <div className="mt-4 max-w-lg rounded-2xl border border-white/12 bg-white/8 px-4 py-3 backdrop-blur-md">
              <p className="text-[13px] font-semibold text-white">{quoteTitle}</p>
              {quoteText ? (
                <p className="mt-1 text-[12px] leading-5 text-white/68">{quoteText}</p>
              ) : null}
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center rounded-full bg-aqs-red px-5 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(227,28,35,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
            <Link
              href="/products"
              className="inline-flex h-10 items-center rounded-full border border-white/22 bg-white/8 px-5 text-[13px] font-semibold text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/12"
            >
              All Products
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <HeroHologram
            initialSlug={holoSlug}
            image={holoSlug ? image : undefined}
            title={holoTitle}
            line={holoLine}
          />
        </div>
      </Container>
    </section>
  );
}
