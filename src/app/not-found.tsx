import Link from "next/link";

import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        That page does not exist.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm font-medium underline">
        Back home
      </Link>
    </Container>
  );
}
