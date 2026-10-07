import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const upcoming = [
  {
    title: "Access Control",
    text: "Readers, identity and workplace security guides.",
  },
  {
    title: "Audio Video",
    text: "Displays, conferencing and collaboration notes.",
  },
  {
    title: "Networking",
    text: "Copper, fiber and cable specification tips.",
  },
  {
    title: "Enclosures",
    text: "Racks, cabinets and infrastructure planning.",
  },
];

export function BlogsComingSoon() {
  return (
    <>
      <section className="relative overflow-hidden bg-aqs-navy text-white">
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-aqs-red/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] left-[22%] h-40 w-40 rounded-full bg-[#f0d48a]/16 blur-3xl" />

        <div className="grid lg:grid-cols-2">
          <div className="relative flex items-center px-5 py-12 sm:px-8 lg:py-16 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12">
            <div className="w-full max-w-[560px] animate-fade-up">
              <nav
                className="flex items-center gap-1.5 text-[12px] text-white/55"
                aria-label="Breadcrumb"
              >
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white/90">Blogs</span>
              </nav>

              <p className="mt-6 text-[11px] font-semibold tracking-[0.24em] text-[#f0d48a] uppercase">
                Insights
              </p>
              <h1 className="mt-3 text-[2rem] font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                Knowledge for modern workplaces
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/72">
                Practical guides on access control, audio visual, networking
                and enclosures — written for integrators, resellers and
                workplace teams across the UAE.
              </p>

              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase ring-1 ring-white/12">
                <span className="h-1.5 w-1.5 rounded-full bg-aqs-red" />
                Coming soon
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="shine inline-flex h-11 items-center rounded-full bg-aqs-red px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(227,28,35,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Talk to Our Team
                </Link>
                <Link
                  href="/products"
                  className="inline-flex h-11 items-center rounded-full border border-white/22 bg-white/8 px-5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/12"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          </div>

          <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[520px]">
            <Image
              src="/images/blog-hero.jpg"
              alt="AQS Technologies LLC workplace insights and collaboration space"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-aqs-navy to-transparent lg:w-16" />
            <div className="absolute top-5 right-5 hidden rounded-xl bg-white px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.22)] sm:block">
              <img
                src="/brand/logo.png"
                alt={siteConfig.name}
                className="h-9 w-auto max-w-[140px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f6f8] py-10 sm:py-14">
        <Container>
          <Reveal shift className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
              Coming soon
            </p>
            <h2 className="mt-2 text-[1.65rem] font-semibold tracking-tight text-aqs-navy sm:text-[2rem]">
              Articles are on the way
            </h2>
            <p className="mt-3 text-sm leading-6 text-aqs-muted">
              We are preparing short, useful reads around the products we
              supply. Until then, browse the range or speak with the team.
            </p>
          </Reveal>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {upcoming.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-black/6 bg-white px-3 py-4 text-center shadow-[0_10px_28px_rgba(11,31,58,0.05)] sm:px-4 sm:py-5">
                  <p className="text-sm font-semibold text-aqs-navy">{item.title}</p>
                  <p className="mt-2 text-[13px] leading-5 text-aqs-muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200} className="mt-8 flex justify-center">
            <ButtonLink
              href="/contact"
              className="shine shadow-[0_12px_28px_rgba(227,28,35,0.22)] transition-transform hover:-translate-y-0.5"
            >
              Request a Quote
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
