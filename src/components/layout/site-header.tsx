import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteHeader() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
