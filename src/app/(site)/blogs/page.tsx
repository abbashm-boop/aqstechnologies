import type { Metadata } from "next";

import { BlogsComingSoon } from "@/components/blogs/blogs-coming-soon";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "AQS Technologies LLC insights are coming soon. Practical guides on access control, AV, networking and enclosures.",
};

export default function BlogsPage() {
  return <BlogsComingSoon />;
}
