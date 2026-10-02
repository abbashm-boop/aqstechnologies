import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <Container className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 uppercase">
        {siteConfig.name}
      </p>
      <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
        Coming soon
      </h1>
      <p className="mt-6 max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        We are building the new AQS Technologies website. Check back shortly.
      </p>
    </Container>
  );
}
