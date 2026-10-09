import type { Metadata } from "next";

import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in 2022, AQS Technologies is a sister concern of AQS International Trading LLC, based in Dubai, UAE.",
};

export default function AboutPage() {
  return <AboutView />;
}
