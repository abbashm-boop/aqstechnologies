"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const slides = [
  {
    image: "/images/hero-slide-intro.jpg",
    eyebrow: "AQS Technologies LLC",
    title: "Your Trusted Technology Supplier",
    line: "Genuine brands, UAE supply and project support.",
    href: "/products",
    cta: "Explore Products",
  },
  {
    image: "/images/hero-slide-hid.jpg",
    eyebrow: "HID",
    title: "Access Control & Identification",
    line: "Readers, controllers, credentials and identity systems.",
    href: "/products?brand=hid",
    cta: "View HID Products",
    logo: "/brands/hid.png",
  },
  {
    image: "/images/hero-slide-security-shells.jpg",
    eyebrow: "Security Shells",
    title: "Identity & Security Platforms",
    line: "iSecure IAM and security identity solutions.",
    href: "/products?brand=security-shells",
    cta: "View Products",
    logo: "/brands/security-shells.png",
  },
  {
    image: "/images/hero-slide-trend.jpg",
    eyebrow: "TREND by STEPWELL",
    title: "Network Testing Solutions",
    line: "Copper and fiber certifiers, testers and PoE tools.",
    href: "/products?brand=trend",
    cta: "View TREND Products",
    logo: "/brands/trend.png",
  },
  {
    image: "/images/hero-slide-kaybe.jpg",
    eyebrow: "KAYBE",
    title: "Networking & Enclosures",
    line: "Server racks, cabinets and specialized enclosures.",
    href: "/products?brand=kaybe",
    cta: "View KAYBE Products",
    logo: "/brands/kaybe.png",
  },
] as const;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = slides[index];

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches || paused) return;
    const timer = window.setInterval(() => go(index + 1), 5600);
    return () => window.clearInterval(timer);
  }, [go, index, paused]);

  return (
    <section
      className="hero-slider relative overflow-hidden bg-aqs-navy"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="AQS Technologies highlights"
    >
      <div className="relative sm:min-h-[460px] lg:min-h-[520px]">
        <div className="relative h-[210px] sm:absolute sm:inset-0 sm:h-auto">
          {slides.map((item, i) => (
            <div
              key={item.image}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
              aria-hidden={i !== index}
            >
              <Image
                src={item.image}
                alt=""
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover object-[center_30%] sm:object-center"
              />
            </div>
          ))}
        </div>

        <div className="hero-slider-veil pointer-events-none absolute inset-0 hidden sm:block" />
        <div className="hero-slider-panel pointer-events-none absolute inset-y-0 left-0 hidden w-[54%] sm:block lg:w-[42%]" />

        <div className="relative z-10 bg-aqs-navy px-5 pt-6 pb-[72px] sm:flex sm:min-h-[460px] sm:items-start sm:bg-transparent sm:px-10 sm:pt-12 sm:pb-0 lg:min-h-[520px] lg:px-12 lg:pt-14">
          <div key={slide.title} className="hero-slider-copy max-w-lg text-white">
            {slide.logo ? (
              <span className="mb-3 inline-flex h-9 items-center rounded-lg bg-white px-3">
                <img src={slide.logo} alt="" className="h-5 w-auto max-w-[110px] object-contain" />
              </span>
            ) : (
              <p className="text-[11px] font-semibold tracking-[0.22em] text-white/80 uppercase">
                {slide.eyebrow}
              </p>
            )}
            <h1 className="mt-2 text-[22px] leading-[1.2] font-semibold tracking-tight sm:text-[34px] sm:leading-[1.12]">
              {slide.title}
            </h1>
            <p className="mt-2 max-w-md text-[14px] leading-6 text-white/88 sm:text-[15px]">
              {slide.line}
            </p>
            <Link
              href={slide.href}
              className="mt-5 inline-flex h-10 items-center rounded-full bg-aqs-red px-5 text-sm font-semibold text-white hover:bg-aqs-red-hover"
            >
              {slide.cta}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2.5 sm:bottom-7 sm:gap-3">
          <button
            type="button"
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-aqs-navy shadow-[0_8px_20px_rgba(11,31,58,0.18)] transition hover:bg-white sm:h-10 sm:w-10"
            onClick={() => go(index - 1)}
          >
            <ArrowLeft />
          </button>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {slides.map((item, i) => (
              <button
                key={item.image}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index ? true : undefined}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-white sm:w-8" : "w-2 bg-white/45 hover:bg-white/70",
                )}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/92 text-aqs-navy shadow-[0_8px_20px_rgba(11,31,58,0.18)] transition hover:bg-white sm:h-10 sm:w-10"
            onClick={() => go(index + 1)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <p className="sr-only">{siteConfig.name}</p>
    </section>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M11.5 3.5 6 9l5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M6.5 3.5 12 9l-5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
