import { AboutView } from "@/components/about/about-view";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description:
    "Founded in 2022 in Dubai, AQS Technologies is a sister concern of AQS International Trading LLC. We source and distribute HID access control, TREND AV, and KAYBE networking products for workplaces across the UAE.",
  path: "/about",
  keywords: [
    "AQS Technologies about",
    "AQS International Trading LLC",
    "technology distributor Dubai",
    "HID supplier UAE",
  ],
});

export default function AboutPage() {
  return <AboutView />;
}
