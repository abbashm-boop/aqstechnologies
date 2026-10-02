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
        "inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors",
        variant === "primary" &&
          "bg-foreground text-background hover:bg-zinc-700 dark:hover:bg-zinc-200",
        variant === "secondary" &&
          "border border-black/10 hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
