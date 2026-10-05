import type { Metadata } from "next";

import { AboutView } from "@/components/about/about-view";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return <AboutView />;
}
