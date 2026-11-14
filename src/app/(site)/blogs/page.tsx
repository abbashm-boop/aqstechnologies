import { BlogIndex } from "@/components/blogs/blog-index";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPath, blogPosts } from "@/lib/blogs";
import { breadcrumbJsonLd, collectionJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "HID, TREND and KAYBE Product Guides",
  description:
    "Dubai guides to HID Signo and Aero, TREND meeting-room displays, and KAYBE cables and racks. Specify the product, then request a written quotation.",
  path: "/blogs",
  keywords: [
    "AQS Technologies blog",
    "HID access control Dubai",
    "HID Signo readers UAE",
    "HID Aero X1100",
    "TREND audio visual Dubai",
    "TREND interactive flat panel",
    "video conferencing display Dubai",
    "KAYBE cables Dubai",
    "KAYBE LAN cable UAE",
    "fiber optic cable Dubai",
    "server rack Dubai",
    "network cabinet UAE",
    "technology supplier Dubai",
  ],
});

export default function BlogsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
        ])}
      />
      <JsonLd
        data={collectionJsonLd({
          name: "AQS Technologies blogs",
          description:
            "Published guides on the technology products AQS Technologies supplies from Dubai.",
          path: "/blogs",
          items: blogPosts.map((post) => ({
            name: post.title,
            path: blogPath(post.slug),
          })),
        })}
      />
      <BlogIndex />
    </>
  );
}
