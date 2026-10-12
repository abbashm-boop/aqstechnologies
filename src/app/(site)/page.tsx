import { HomeView } from "@/components/home/home-view";
import { JsonLd } from "@/components/seo/json-ld";
import { pageMetadata, websiteJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "AQS Technologies | HID, AV, Networking and Racks Supplier in Dubai",
  description:
    "From HID door readers and iSecure software to TREND meeting-room displays and KAYBE cables and racks, AQS Technologies supplies genuine workplace technology from Dubai across the UAE and GCC.",
  path: "/",
  keywords: [
    "AQS Technologies Dubai",
    "HID access control UAE",
    "TREND interactive displays",
    "KAYBE networking cables",
    "server racks Dubai",
    "technology distributor UAE",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <HomeView />
    </>
  );
}
