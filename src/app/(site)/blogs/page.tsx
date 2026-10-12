import { BlogsComingSoon } from "@/components/blogs/blogs-coming-soon";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Blogs",
  description:
    "Practical notes from AQS Technologies on choosing HID access control, meeting-room AV, network cabling and racks for UAE workplaces. New articles are on the way.",
  path: "/blogs",
  keywords: [
    "access control guide UAE",
    "interactive display workplace",
    "network cable types",
    "AQS Technologies blog",
  ],
});

export default function BlogsPage() {
  return <BlogsComingSoon />;
}
