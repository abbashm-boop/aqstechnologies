import Image from "next/image";

import { siteConfig } from "@/config/site";

export function HeroWave() {
  return (
    <section className="relative overflow-hidden bg-[#070b18]">
      <div className="hero-wave relative min-h-[540px] overflow-hidden sm:min-h-[560px] lg:min-h-[600px]">
        <div className="hero-wave-bg pointer-events-none">
          <Image
            src="/images/hero-palm-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="hero-wave-girl pointer-events-none">
          <Image
            src="/images/hero-palm-girl.png"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hero-palm-photo object-cover"
          />
        </div>

        <div className="hero-wave-veil pointer-events-none absolute inset-0" />

        <div className="hero-palm-bob">
          <article
            className="hero-palm-card"
            style={{ WebkitBackdropFilter: "blur(5px) saturate(1.4)" }}
          >
            <div className="hero-palm-copy-wrap">
              <p className="hero-palm-copy hero-palm-copy-1 relative text-[12px] font-bold tracking-[0.2em] text-white/80 uppercase">
                Trusted Partner
              </p>
              <p className="hero-palm-copy hero-palm-copy-2 hero-palm-title relative mt-3 text-[22px] leading-7 font-extrabold text-white sm:text-[24px]">
                {siteConfig.name}
              </p>
              <p className="hero-palm-copy hero-palm-copy-3 relative mt-3 text-[15px] leading-6 font-semibold text-white/90">
                {siteConfig.tagline}
              </p>
              <p className="hero-palm-copy hero-palm-copy-4 relative mt-2 text-[13px] leading-5 font-semibold text-[#ffd7b8]">
                Genuine brands, UAE supply and project support.
              </p>
            </div>
          </article>
        </div>

        <h1 className="sr-only">{siteConfig.name}</h1>
      </div>
    </section>
  );
}
