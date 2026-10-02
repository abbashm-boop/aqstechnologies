import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <Container className="py-24">
      <p className="text-sm font-medium text-zinc-500">AQS Technologies</p>
      <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Software and websites built to last.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        {siteConfig.description}
      </p>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/services">View services</ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Contact
        </ButtonLink>
      </div>
    </Container>
  );
}
