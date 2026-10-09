"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { HeroSlider } from "@/components/home/hero-slider";
import { Tilt } from "@/components/home/tilt";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Container } from "@/components/ui/container";
import { FitImage } from "@/components/ui/fit-image";
import { Reveal } from "@/components/ui/reveal";
import { subscribeScroll } from "@/lib/scroll-sync";
import { siteConfig } from "@/config/site";

export function HomeView() {
  const brandLoop = [...siteConfig.partners, ...siteConfig.partners];
  const ctaMediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    return subscribeScroll(() => {
      if (media.matches) return;
      const cta = ctaMediaRef.current;
      if (cta) {
        const rect = cta.getBoundingClientRect();
        const shift = (rect.top - window.innerHeight * 0.4) * 0.12;
        cta.style.transform = `translate3d(0, ${shift}px, 0) scale(1.08)`;
      }
    });
  }, []);

  return (
    <>
      <HeroSlider />

      <section className="py-14 sm:py-24">
        <Container>
          <Reveal shift>
            <p className="text-center text-[11px] font-semibold tracking-[0.24em] text-aqs-red uppercase">
              Our Categories
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl text-center text-4xl font-semibold tracking-tight text-aqs-navy">
              Explore Our Product Categories
            </h2>
          </Reveal>
          <div className="mt-12 grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.productCategories.map((category, index) => (
              <Reveal key={category.title} className="h-full" delay={index * 80}>
                <Link href={category.href} className="group flex h-full flex-col">
                  <FitImage
                    src={category.image}
                    alt={category.title}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                    className="aspect-[4/3] rounded-[36px]"
                    insetClassName="inset-4"
                  />
                  <h3 className="mt-4 min-h-[3.5rem] text-center text-xl font-semibold leading-7 text-aqs-navy">
                    {category.title}
                  </h3>
                  <p className="mt-2 flex-1 text-center text-sm leading-6 text-aqs-muted">
                    {category.blurb}
                  </p>
                  <p className="mt-4 text-center text-sm font-semibold text-aqs-red transition-transform duration-300 group-hover:translate-x-1">
                    View Products →
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {siteConfig.productCategories.map((category, index) => (
        <section
          key={category.title}
          id={category.slug}
          className={`scroll-mt-32 py-16 ${index % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container>
            <Reveal shift>
              <div className="text-center">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
                  Collection
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-aqs-navy">
                  {category.title}
                </h2>
                <Link
                  href={category.href}
                  className="mt-3 inline-block text-sm font-semibold text-aqs-red transition-transform hover:translate-x-1"
                >
                  View All →
                </Link>
              </div>
            </Reveal>
            <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-12">
              {category.links.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group block w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-5rem)/5)]"
                >
                  <FitImage
                    src={item.image}
                    alt={item.label}
                    className="aspect-square rounded-[36px]"
                    insetClassName="inset-4"
                  />
                  <h3 className="mt-4 text-center text-sm font-semibold text-aqs-navy">
                    {item.label}
                  </h3>                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="overflow-hidden bg-aqs-navy py-14 text-white sm:py-20">
        <Container>
          <Reveal shift className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight">
              Trusted Technology Brands
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
              We supply genuine products from leading technology brands.
            </p>
            <Link href="/partners" className="mt-4 inline-block text-sm font-semibold">
              View All Brands →
            </Link>
          </Reveal>
        </Container>
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max gap-6 px-6">
            {brandLoop.map((partner, index) => (
              <Tilt
                key={`${partner.name}-${index}`}
                scroll3d={false}
                className="h-28 w-56 shrink-0 rounded-2xl"
              >
                <Link
                  href={partner.href}
                  className="flex h-full w-full items-center justify-center bg-white px-6"
                >
                  <BrandLogo src={partner.logo} alt={partner.name} />
                </Link>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <Container>
          <Reveal shift>
            <h2 className="mx-auto max-w-2xl text-center text-4xl font-semibold tracking-tight text-aqs-navy">
              Why Choose AQS Technologies
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.whyChoose.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} shift>
                <div className="h-full rounded-2xl border border-aqs-navy/10 bg-white p-6 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,31,58,0.08)]">
                  <p className="text-sm font-semibold tracking-[0.2em] text-aqs-red">
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-aqs-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-aqs-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-28">
        <div ref={ctaMediaRef} className="hero-media absolute inset-0">
          <Image
            src="/images/cta-dubai.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#071526]/70" />
        <Container className="relative z-10 text-center">
          <Reveal shift className="mx-auto max-w-2xl text-white">
            <h2 className="text-4xl font-semibold tracking-tight">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-base leading-8 text-white/80">
              Share your requirements and our team will help you source the right
              systems and pricing.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Link
              href="/contact"
              className="shine mt-8 inline-flex h-12 items-center rounded-full bg-aqs-red px-8 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(227,28,35,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </Reveal>
        </Container>
      </section>

      <section className="py-14 sm:py-24">
        <Container>
          <Reveal shift>
            <h2 className="text-center text-4xl font-semibold tracking-tight text-aqs-navy">
              Latest Blogs
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {siteConfig.blogs.map((post, index) => (
              <Reveal key={post.title} delay={index * 90}>
                <Link href={post.href} className="group block">
                  <Tilt className="overflow-hidden rounded-[24px]">
                    <div className="relative aspect-video">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 768px) 30vw, 90vw"
                        className="img-zoom object-cover object-center"
                      />
                    </div>
                  </Tilt>
                  <p className="mt-4 text-center text-xs font-medium text-aqs-muted">
                    {post.date}
                  </p>
                  <h3 className="mt-2 text-center text-lg font-semibold leading-6 text-aqs-navy">
                    {post.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
