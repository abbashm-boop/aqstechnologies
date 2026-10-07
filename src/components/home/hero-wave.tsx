"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { siteConfig } from "@/config/site";

const STEPS = [
  {
    eyebrow: "Trusted Partner",
    title: "AQS Technologies",
    line: "Your Trusted Technology Supplier & Distributor",
    detail: "Genuine brands, UAE supply and project support.",
  },
  {
    eyebrow: "01  /  Access",
    title: "Access Control",
    line: "Readers, cards and identity systems.",
    detail: "Controllers, door hardware and workplace ID.",
  },
  {
    eyebrow: "02  /  AV",
    title: "Audio Video",
    line: "Displays, conferencing and AV.",
    detail: "Signage, video walls and meeting kits.",
  },
  {
    eyebrow: "03  /  Network",
    title: "Networking",
    line: "Copper, fiber and HDMI cables.",
    detail: "Hybrid leads, speaker cable and accessories.",
  },
  {
    eyebrow: "04  /  Racks",
    title: "Enclosures",
    line: "Server and networking racks.",
    detail: "Cabinets, open frames and wall-mounts.",
  },
] as const;

export function HeroWave() {
  const [active, setActive] = useState(0);
  const [playId, setPlayId] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const bobRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const step = STEPS[active];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const play = () => {
      if (document.hidden) return;
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", play);

    let raf = 0;
    let passedClose = false;
    let inFar = true;
    const tick = () => {
      const bob = bobRef.current;
      const card = cardRef.current;
      const duration = video.duration || 5;
      const current = video.currentTime;
      const far = current < 0.4 || current > duration - 0.4;
      if (!far) passedClose = true;
      if (far && passedClose && !inFar) {
        passedClose = false;
        setActive((index) => (index + 1) % STEPS.length);
        setPlayId((id) => id + 1);
      }
      inFar = far;
      const t = duration > 0 ? current / duration : 0;
      const amount = 0.5 - 0.5 * Math.cos(t * Math.PI * 2);
      const size = 214 + 62 * amount;
      if (bob) bob.style.top = `${64 + 8 * amount}%`;
      if (card) {
        card.style.width = `${size}px`;
        card.style.minHeight = `${size}px`;
        card.style.marginTop = `${-size}px`;
        card.style.marginLeft = `${-36 + 16 * amount}px`;
      }
      raf = window.requestAnimationFrame(tick);
    };
    raf = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(raf);
      video.removeEventListener("canplay", play);
      document.removeEventListener("visibilitychange", play);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="hero-wave relative min-h-[500px] overflow-hidden sm:min-h-[560px] lg:min-h-[600px]">
        <div className="hero-wave-media">
          <Image
            src="/images/hero-palm-far.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_8%]"
          />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-palm-far.jpg"
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-[center_8%] motion-reduce:hidden"
          >
            <source src="/hero-palm.mp4?v=8" type="video/mp4" />
          </video>
        </div>
        <div className="hero-wave-veil pointer-events-none absolute inset-0" />

        <div ref={bobRef} className="hero-palm-bob">
          <article
            ref={cardRef}
            className="hero-palm-card backdrop-blur-xl backdrop-saturate-150"
            style={{ WebkitBackdropFilter: "blur(12px) saturate(1.5)" }}
          >
            <div key={playId} className="hero-palm-copy-wrap">
              <p className="hero-palm-copy hero-palm-copy-1 relative text-[11px] font-bold tracking-[0.2em] text-white/80 uppercase">
                {step.eyebrow}
              </p>
              <p className="hero-palm-copy hero-palm-copy-2 hero-palm-title relative mt-2.5 text-[18px] leading-6 font-extrabold text-white">
                {step.title}
              </p>
              <p className="hero-palm-copy hero-palm-copy-3 relative mt-2 text-[13px] leading-5 font-semibold text-white/90">
                {step.line}
              </p>
              <p className="hero-palm-copy hero-palm-copy-4 relative mt-1.5 text-[12px] leading-4 font-semibold text-[#ffd7b8]">
                {step.detail}
              </p>
            </div>
          </article>
        </div>

        <h1 className="sr-only">{siteConfig.name}</h1>
      </div>
    </section>
  );
}
