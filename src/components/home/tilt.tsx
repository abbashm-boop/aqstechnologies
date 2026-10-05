"use client";

import { useEffect, useRef } from "react";

import { subscribeScroll } from "@/lib/scroll-sync";
import { cn } from "@/lib/utils";

type TiltTarget = {
  rx: number;
  ry: number;
  gx: number;
  gy: number;
  hovering: boolean;
  lift: number;
};

export function Tilt({
  children,
  className,
  scroll3d = true,
}: {
  children: React.ReactNode;
  className?: string;
  scroll3d?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);
  const current = useRef({ rx: 0, ry: 0, gx: 50, gy: 50, lift: 0 });
  const target = useRef<TiltTarget>({
    rx: 0,
    ry: 0,
    gx: 50,
    gy: 50,
    hovering: false,
    lift: 0,
  });

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function stop() {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
      }
    }

    function apply(
      rx: number,
      ry: number,
      gx: number,
      gy: number,
      lift: number,
      hovering: boolean,
    ) {
      const inner = innerRef.current;
      const glare = glareRef.current;
      if (!inner) return;

      inner.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${lift}px) scale(${hovering ? 1.045 : 1 + lift * 0.0012})`;
      inner.style.boxShadow = hovering
        ? `${-ry * 1.6}px ${rx * 1.8 + 22}px 48px rgba(11, 31, 58, 0.26), 0 12px 28px rgba(11, 31, 58, 0.12)`
        : `${-ry * 0.9}px ${Math.abs(rx) * 1.1 + 14}px 32px rgba(11, 31, 58, 0.14)`;

      if (glare) {
        glare.style.opacity = hovering ? "1" : String(Math.min(0.32, lift * 0.012));
        glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.55), transparent 58%)`;
      }
    }

    function tick() {
      if (media.matches) {
        apply(0, 0, 50, 50, 0, false);
        frameRef.current = 0;
        return;
      }

      const speed = target.current.hovering ? 0.07 : 0.1;
      current.current.rx += (target.current.rx - current.current.rx) * speed;
      current.current.ry += (target.current.ry - current.current.ry) * speed;
      current.current.gx += (target.current.gx - current.current.gx) * speed;
      current.current.gy += (target.current.gy - current.current.gy) * speed;
      current.current.lift += (target.current.lift - current.current.lift) * speed;

      const { rx, ry, gx, gy, lift } = current.current;
      apply(rx, ry, gx, gy, lift, target.current.hovering);

      const settled =
        !target.current.hovering &&
        Math.abs(rx - target.current.rx) < 0.02 &&
        Math.abs(ry - target.current.ry) < 0.02 &&
        Math.abs(lift - target.current.lift) < 0.2;

      if (settled) {
        apply(
          target.current.rx,
          target.current.ry,
          target.current.gx,
          target.current.gy,
          target.current.lift,
          false,
        );
        current.current.rx = target.current.rx;
        current.current.ry = target.current.ry;
        current.current.lift = target.current.lift;
        frameRef.current = 0;
        return;
      }

      frameRef.current = requestAnimationFrame(tick);
    }

    function start() {
      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(tick);
      }
    }

    function applyScrollTilt() {
      if (media.matches || target.current.hovering || !scroll3d) return;
      const surface = rootRef.current;
      if (!surface || surface.closest(".animate-marquee")) return;

      const rect = surface.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      if (rect.bottom < -80 || rect.top > viewH + 80) {
        target.current.rx = 0;
        target.current.ry = 0;
        target.current.lift = 0;
        start();
        return;
      }

      const mobile = window.matchMedia("(max-width: 768px)").matches;
      const intensity = mobile ? 0.72 : 1;
      const mid = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (mid - viewH / 2) / (viewH / 2)));
      const closeness = 1 - Math.abs(progress);

      target.current.rx = progress * 16 * intensity;
      target.current.ry = progress * -6 * intensity;
      target.current.lift = closeness * 26 * intensity;
      start();
    }

    function onPointerMove(event: PointerEvent) {
      const surface = rootRef.current;
      if (!surface) return;
      const rect = surface.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const touch = event.pointerType === "touch";
      const amp = touch ? 0.7 : 1;
      target.current.hovering = true;
      target.current.rx = (0.5 - y) * 18 * amp;
      target.current.ry = (x - 0.5) * 24 * amp;
      target.current.gx = x * 100;
      target.current.gy = y * 100;
      target.current.lift = touch ? 16 : 32;
      start();
    }

    function onLeave() {
      target.current.hovering = false;
      target.current.gx = 50;
      target.current.gy = 50;
      if (scroll3d) applyScrollTilt();
      else {
        target.current.rx = 0;
        target.current.ry = 0;
        target.current.lift = 0;
        start();
      }
    }

    const surface = rootRef.current;
    if (!surface) return;

    surface.addEventListener("pointermove", onPointerMove);
    surface.addEventListener("pointerleave", onLeave);
    surface.addEventListener("pointerup", onLeave);
    const unsub = scroll3d ? subscribeScroll(applyScrollTilt) : () => undefined;

    return () => {
      stop();
      unsub();
      surface.removeEventListener("pointermove", onPointerMove);
      surface.removeEventListener("pointerleave", onLeave);
      surface.removeEventListener("pointerup", onLeave);
    };
  }, [scroll3d]);

  return (
    <div ref={rootRef} className={cn("tilt-root", className)}>
      <div ref={innerRef} className="tilt-inner">
        {children}
        <div ref={glareRef} className="tilt-glare" aria-hidden />
      </div>
    </div>
  );
}
