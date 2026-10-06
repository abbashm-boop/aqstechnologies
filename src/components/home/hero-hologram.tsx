"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const categories = siteConfig.productCategories;
const CARD_COPY = [
  { title: "Access Control", line: "Readers, cards and identity systems." },
  { title: "Audio Video", line: "Displays, conferencing and AV." },
  { title: "Networking", line: "Copper, fiber and HDMI cables." },
  { title: "Enclosures", line: "Server and networking racks." },
];
const RAYS = [12, 20, 28, 36, 44, 52, 60, 68, 76, 84];
const BEAMS = [18, 32, 50, 68, 82];
const SPARKS = [
  { left: "18%", delay: "0.2s" },
  { left: "32%", delay: "0.45s" },
  { left: "48%", delay: "0.15s" },
  { left: "63%", delay: "0.6s" },
  { left: "78%", delay: "0.35s" },
  { left: "24%", delay: "1.1s" },
  { left: "56%", delay: "1.4s" },
  { left: "71%", delay: "0.9s" },
];
const TICKS = ["SCAN", "LIVE"];

function IconAccess() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconAv() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 21h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconNet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h3l2-6 4 12 2-6h3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconRack() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="5" y="3" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="5" y="10" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.7" />
      <rect x="5" y="17" width="14" height="4" rx="1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

const ICONS = [IconAccess, IconAv, IconNet, IconRack];

export function HeroHologram() {
  const [active, setActive] = useState(0);
  const [playId, setPlayId] = useState(0);
  const [locked, setLocked] = useState(false);
  const [pressed, setPressed] = useState(false);
  const category = categories[active];
  const copy = CARD_COPY[active];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || locked) return;

    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % categories.length);
      setPlayId((id) => id + 1);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [locked]);

  function select(index: number) {
    setLocked(true);
    setPressed(true);
    window.setTimeout(() => setPressed(false), 220);
    setActive(index);
    setPlayId((id) => id + 1);
  }

  function next() {
    select((active + 1) % categories.length);
  }

  return (
    <div className="hero-holo-frame relative mx-auto w-full max-w-[520px]">
      <div key={playId} className="hero-holo">
        <article className="hero-holo-card">
          <span className="hero-holo-bracket" aria-hidden />
          <p className="hero-holo-ticks" aria-hidden>
            {TICKS.map((tick, index) => (
              <span key={tick} style={{ animationDelay: `${480 + index * 90}ms` }}>
                {tick}
              </span>
            ))}
          </p>
          <h3
            className="hero-holo-line text-[14px] font-semibold tracking-tight text-white"
            style={{ animationDelay: "420ms" }}
          >
            {copy.title}
          </h3>
          <p
            className="hero-holo-line mt-1 text-[11px] leading-4 text-white/70"
            style={{ animationDelay: "560ms" }}
          >
            {copy.line}
          </p>
        </article>

        <div className="hero-holo-stage">
          <div className="hero-holo-grid" />
          <div className="hero-holo-vignette" />
          {RAYS.map((left, index) => (
            <span
              key={left}
              className="hero-holo-ray"
              style={{
                left: `${left}%`,
                height: `${36 + (index % 4) * 8}%`,
                animationDelay: `${90 + index * 60}ms`,
              }}
            />
          ))}
          {SPARKS.map((spark) => (
            <span
              key={`${spark.left}-${spark.delay}`}
              className="hero-holo-spark"
              style={{ left: spark.left, animationDelay: spark.delay }}
            />
          ))}
          <div className="hero-holo-scan" />
          <div className="hero-holo-scan is-loop" />
          <div className="hero-holo-product">
            <div className="hero-holo-product-float">
              <Image
                src={category.image}
                alt={category.title}
                width={480}
                height={360}
                priority={active === 0}
                className="h-full w-full object-contain"
              />
              <span className="hero-holo-sweep" aria-hidden />
            </div>
          </div>
        </div>

        <div className="hero-holo-base">
          <div className="hero-holo-floor" />
          <span className="hero-holo-ring" aria-hidden />
          <span className="hero-holo-ring is-late" aria-hidden />
          <svg className="hero-holo-svg" viewBox="0 0 400 90" aria-hidden>
            <ellipse className="hero-holo-orbit a" cx="200" cy="48" rx="170" ry="22" />
            <ellipse className="hero-holo-orbit b" cx="200" cy="48" rx="132" ry="16" />
            <ellipse className="hero-holo-orbit c" cx="200" cy="48" rx="92" ry="11" />
          </svg>
        </div>
      </div>

      <div className="hero-holo-link" aria-hidden>
        {BEAMS.map((left, index) => (
          <span
            key={left}
            className="hero-holo-beam"
            style={{
              left: `${left}%`,
              animationDelay: `${index * 180}ms`,
            }}
          />
        ))}
      </div>

      <div className="hero-holo-rail" aria-label="Categories">
        {categories.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <button
              key={item.title}
              type="button"
              className={cn("hero-holo-icon", index === active && "is-on")}
              style={{ animationDelay: `${index * 0.35}s` }}
              onClick={() => select(index)}
              aria-label={item.title}
            >
              <Icon />
            </button>
          );
        })}
      </div>

      <div
        className={cn("hero-holo-pad", pressed && "is-pressed")}
        onClick={next}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            next();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={`Show next category, currently ${category.title}`}
      >
        <span className="hero-holo-pad-gem" aria-hidden />
        <span className="hero-holo-pad-name">AQS</span>
        <span className="hero-holo-pad-dots">
          {categories.map((item, index) => (
            <button
              key={item.title}
              type="button"
              className={cn("hero-holo-dot", index === active && "is-on")}
              onClick={(event) => {
                event.stopPropagation();
                select(index);
              }}
              aria-label={item.title}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
