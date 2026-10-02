import type { Metadata } from "next";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-semibold tracking-tight">About</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        AQS Technologies is a software company. This page is the place for the
        company story, team, and how you work with clients.
      </p>
    </Container>
  );
}
