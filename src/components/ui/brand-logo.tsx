import { cn } from "@/lib/utils";

export function BrandLogo({
  src,
  alt,
  className,
  imageClassName,
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "flex min-h-14 w-full items-center justify-center",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-auto max-w-full object-contain object-center",
          imageClassName ?? "h-12 max-h-12",
        )}
      />
    </div>
  );
}
