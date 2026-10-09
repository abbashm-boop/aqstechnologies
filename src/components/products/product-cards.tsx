import Link from "next/link";

import { FitImage } from "@/components/ui/fit-image";
import type { ProductItem } from "@/lib/catalog";

export function ProductCards({ items }: { items: readonly ProductItem[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-5 gap-y-12">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={item.href}
          className="group block w-full sm:w-[calc((100%-1.25rem)/2)] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3.75rem)/4)]"
        >
          <FitImage
            src={item.image}
            alt={item.label}
            className="aspect-square rounded-[36px]"
            insetClassName="inset-4"
          />
          <h3 className="mt-4 text-center text-sm font-semibold text-aqs-navy">
            {item.label}
          </h3>        </Link>
      ))}
    </div>
  );
}
