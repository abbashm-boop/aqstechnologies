"use client";

import { Container } from "@/components/ui/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="py-24">
      <h1 className="text-3xl font-semibold tracking-tight">
        Something went wrong
      </h1>
      <button
        type="button"
        onClick={reset}
        className="mt-6 inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background"
      >
        Try again
      </button>
    </Container>
  );
}
