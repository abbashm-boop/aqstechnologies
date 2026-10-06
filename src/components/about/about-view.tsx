import Image from "next/image";
import Link from "next/link";

import { Tilt } from "@/components/home/tilt";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { CountUp } from "@/components/ui/count-up";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const { about } = siteConfig;

export function AboutView() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -top-24 left-[-8%] h-72 w-72 rounded-full bg-aqs-red/10 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute right-[-6%] bottom-0 h-80 w-80 rounded-full bg-aqs-navy/8 blur-3xl" />
        <Container className="relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="animate-fade-up">
            <p className="text-sm text-aqs-muted">
              <Link href="/" className="hover:text-aqs-red">
                Home
              </Link>
              <span className="mx-2 text-black/25">/</span>
              <span className="font-medium text-aqs-navy">About Us</span>
            </p>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
              {about.eyebrow}
            </p>
            <h1 className="mt-3 max-w-xl text-[1.85rem] font-semibold leading-tight tracking-tight text-aqs-navy sm:text-5xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-aqs-muted">
              {about.intro}
            </p>
            <ButtonLink
              href="/contact"
              className="shine mt-7 gap-2 shadow-[0_12px_28px_rgba(227,28,35,0.28)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote <span aria-hidden>→</span>
            </ButtonLink>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "120ms" }}>
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-aqs-red/18 via-transparent to-aqs-navy/15 blur-sm" />
            <Tilt className="group relative overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(11,31,58,0.16)]">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/images/hero-workplace.jpg"
                  alt="AQS Technologies workplace"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="img-zoom object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-aqs-navy/25 via-transparent to-transparent" />
                <Image
                  src="/brand/logo.png"
                  alt=""
                  width={180}
                  height={58}
                  className="animate-float absolute top-5 right-5 h-12 w-auto rounded-xl bg-white/94 px-3 py-2 shadow-[0_10px_30px_rgba(11,31,58,0.16)]"
                />
              </div>
            </Tilt>
          </div>
        </Container>
      </section>

      <section className="relative z-10 -mt-10 pb-4">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 90} shift>
                <div className="group flex items-center gap-4 rounded-2xl border border-black/6 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(11,31,58,0.06)] transition-all duration-500 hover:-translate-y-1 hover:border-aqs-red/25 hover:shadow-[0_18px_40px_rgba(11,31,58,0.12)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-aqs-red/10 text-aqs-red transition-transform duration-500 group-hover:scale-110 group-hover:bg-aqs-red group-hover:text-white">
                    <StatIcon index={index} />
                  </span>
                  <div>
                    <CountUp
                      value={stat.value}
                      className="text-xl font-semibold text-aqs-navy"
                    />
                    <p className="text-sm text-aqs-muted">{stat.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal shift>
            <p className="text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
              {about.storyEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-aqs-navy">
              {about.storyTitle}
            </h2>
            {about.story.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-sm leading-7 text-aqs-muted">
                {paragraph}
              </p>
            ))}
            <ButtonLink
              href="/products"
              className="shine mt-8 gap-2 shadow-[0_12px_28px_rgba(227,28,35,0.22)] transition-transform hover:-translate-y-0.5"
            >
              Our Product Range <span aria-hidden>→</span>
            </ButtonLink>
          </Reveal>
          <Reveal delay={120} className="relative lg:pr-8">
            <Tilt className="group overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(11,31,58,0.12)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/hero-workplace.jpg"
                  alt="Modern workplace supported by AQS Technologies"
                  fill
                  sizes="(min-width: 1024px) 48vw, 90vw"
                  className="img-zoom object-cover object-[center_40%]"
                />
              </div>
            </Tilt>
            <div className="mt-4 space-y-1 rounded-2xl border border-black/6 bg-white/95 p-4 shadow-[0_16px_40px_rgba(11,31,58,0.1)] backdrop-blur-md lg:absolute lg:top-1/2 lg:right-0 lg:mt-0 lg:w-[258px] lg:-translate-y-1/2">
              {about.highlights.map((item) => (
                <p
                  key={item}
                  className="flex items-start gap-3 rounded-xl px-2 py-2 text-sm font-medium text-aqs-navy transition-colors hover:bg-aqs-red/6"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-aqs-red text-white">
                    <CheckIcon />
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container>
          <Reveal shift className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
                {about.categoryEyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-aqs-navy">
                Product Categories
              </h2>
              <p className="mt-4 text-sm leading-7 text-aqs-muted">
                {about.categoryIntro}
              </p>
            </div>
            <ButtonLink
              href="/products"
              className="shine shrink-0 gap-2 transition-transform hover:-translate-y-0.5"
            >
              View All Products <span aria-hidden>→</span>
            </ButtonLink>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.productCategories.map((category, index) => (
              <Reveal key={category.title} delay={index * 80}>
                <Tilt className="h-full">
                  <Link
                    href={category.href}
                    className="group flex h-full flex-col overflow-hidden rounded-[36px] border border-black/4 bg-white transition-shadow duration-300 hover:shadow-[0_8px_18px_rgba(11,31,58,0.08)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#f7f8fa]">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                        className="img-zoom object-contain object-center p-6"
                      />
                    </div>
                    <div className="flex flex-1 flex-col px-5 pb-6">
                      <h3 className="text-base font-semibold text-aqs-navy">
                        {category.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-6 text-aqs-muted">
                        {category.aboutBlurb}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-aqs-red transition-transform duration-300 group-hover:translate-x-1">
                        Explore Products →
                      </p>
                    </div>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal shift className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
                {about.brandsEyebrow}
              </p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight text-aqs-navy">
                {about.brandsTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-aqs-muted">
                {about.brandsIntro}
              </p>
            </div>
            <ButtonLink
              href="/partners"
              className="shine shrink-0 gap-2 transition-transform hover:-translate-y-0.5"
            >
              View All Brands <span aria-hidden>→</span>
            </ButtonLink>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.partners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 80}>
                <Tilt>
                  <Link
                    href={partner.href}
                    className="block rounded-2xl border border-black/8 bg-white px-6 py-8 text-center transition-colors duration-300 hover:border-aqs-red"
                  >
                    <BrandLogo
                      src={partner.logo}
                      alt={partner.name}
                      imageClassName="h-14 max-h-14"
                    />
                    <p className="mt-5 text-base font-semibold text-aqs-navy">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-sm text-aqs-muted">{partner.aboutLine}</p>
                  </Link>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-aqs-navy py-14 sm:py-20 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(227,28,35,0.22),transparent_34%),radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.08),transparent_32%)]" />
        <Container className="relative">
          <Reveal shift className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight">{about.whyTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{about.whyIntro}</p>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.why.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} shift>
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-aqs-red text-white shadow-[0_10px_24px_rgba(227,28,35,0.35)]">
                    <WhyIcon index={index} />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-20">
        <Container>
          <Reveal shift className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
              {about.processEyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-aqs-navy">
              {about.processTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-aqs-muted">
              {about.processIntro}
            </p>
          </Reveal>
          <Reveal shift className="relative mt-14">
            <div className="process-line absolute top-7 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-aqs-red/10 via-aqs-red/40 to-aqs-red/10 lg:block" />
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
              {about.process.map((step, index) => (
                <div key={step.title} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-aqs-red text-white shadow-[0_8px_20px_rgba(227,28,35,0.28)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
                    <ProcessIcon index={index} />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold text-aqs-navy">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-aqs-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal shift>
            <h2 className="text-4xl font-semibold tracking-tight text-aqs-navy">
              {about.regionTitle}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-aqs-muted">
              {about.regionText}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {about.regionStats.map((item, index) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-black/6 bg-white px-4 py-4 transition-transform duration-500 hover:-translate-y-1"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-aqs-red/10 text-aqs-red">
                    <RegionIcon index={index} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-aqs-navy">{item.value}</p>
                  <p className="text-xs text-aqs-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Tilt className="group overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgba(11,31,58,0.14)]">
              <div className="relative aspect-[16/11]">
                <Image
                  src="/images/cta-dubai.jpg"
                  alt="AQS Technologies serving businesses across Dubai and the region"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="img-zoom object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aqs-navy/35 via-transparent to-transparent" />
                <div className="animate-float absolute right-5 bottom-5 rounded-xl bg-aqs-navy/92 px-4 py-3 text-white shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-semibold">Global Reach</p>
                  <p className="text-xs text-white/70">Local Support</p>
                </div>
              </div>
            </Tilt>
          </Reveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-aqs-navy py-16 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(227,28,35,0.22),transparent_28%),linear-gradient(90deg,rgba(5,13,24,0.2),transparent)]" />
        <Container className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal shift className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {about.ctaTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">{about.ctaText}</p>
          </Reveal>
          <Reveal delay={100} shift className="flex flex-wrap gap-3">
            <ButtonLink
              href="/contact"
              className="shine gap-2 shadow-[0_12px_28px_rgba(227,28,35,0.35)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </ButtonLink>
            <Link
              href="/contact"
              className="inline-flex h-11 items-center rounded-full border border-white/30 px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.2 5 8.7 9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StatIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 4v4M16 4v4M4 11h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 19c.6-3 2.7-4.8 5-4.8S13.4 16 14 19" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M14.2 14.4c1.6-.4 3.2.4 4.3 2.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 12h16M12 4c2.4 2.4 3.6 5.2 3.6 8S14.4 17.6 12 20c-2.4-2.4-3.6-5.2-3.6-8S9.6 6.4 12 4Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 3 20 7v6c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M8.5 12.2 11 14.7l4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhyIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3 20 7v6c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8.5 12.2 11 14.7l4.5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 16V8h11v8H3Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 11h4l3 3v2h-7v-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <circle cx="7" cy="18" r="1.6" fill="currentColor" />
        <circle cx="17" cy="18" r="1.6" fill="currentColor" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v18M8 7h5.5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 14v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 14a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="8.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="15.5" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ProcessIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M6 19c.8-3.2 3-5 6-5s5.2 1.8 6 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v18M8 7h5.5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (index === 3) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3 20 7v6c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  if (index === 4) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 16V8h11v8H3Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M14 11h4l3 3v2h-7v-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 14v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 14a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function RegionIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M4 12h16M12 4c2.4 2.4 3.6 5.2 3.6 8S14.4 17.6 12 20c-2.4-2.4-3.6-5.2-3.6-8S9.6 6.4 12 4Z" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 18V7l6 3 4-3 6 3v8" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M10 10v8M14 7v11" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}
