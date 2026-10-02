import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/10 dark:border-white/10">
      <Container className="flex h-16 items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p>{siteConfig.url.replace(/^https?:\/\//, "")}</p>
      </Container>
    </footer>
  );
}
