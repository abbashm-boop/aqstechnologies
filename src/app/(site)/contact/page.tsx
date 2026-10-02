import type { Metadata } from "next";

import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Add your contact details and form here. Form submissions can be stored
        in Supabase from a Server Action on this page.
      </p>
    </Container>
  );
}
