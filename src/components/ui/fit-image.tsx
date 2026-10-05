"use client";

import Image from "next/image";

import { Tilt } from "@/components/home/tilt";
import { cn } from "@/lib/utils";

export function FitImage({
  src,
  alt,
  sizes = "(min-width: 1024px) 18vw, (min-width: 640px) 40vw, 90vw",
  className,
  insetClassName = "inset-5",
}: {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  insetClassName?: string;
}) {
  return (
    <Tilt>
      <div
        className={cn(
          "relative w-full overflow-hidden border border-black/6 bg-white",
          className,
        )}
      >
        <div className={cn("absolute", insetClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          loading="eager"
          className="object-contain object-center"
        />
        </div>
      </div>
    </Tilt>
  );
}
