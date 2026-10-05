import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors",
        variant === "primary" &&
          "bg-aqs-red text-white hover:bg-aqs-red-hover",
        variant === "secondary" &&
          "border border-black/10 bg-white text-aqs-navy hover:bg-black/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}
