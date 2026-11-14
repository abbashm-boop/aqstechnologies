import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HidAccessArticle } from "@/components/blogs/hid-access-article";
import { KaybeInfrastructureArticle } from "@/components/blogs/kaybe-infrastructure-article";
import { TrendAvArticle } from "@/components/blogs/trend-av-article";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPath, blogPosts, getBlog } from "@/lib/blogs";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return { title: "Blogs" };

  return pageMetadata({
    title: post.metaTitle,
    description: post.description,
    path: blogPath(post.slug),
    image: post.image,
    keywords: post.keywords,
    openGraphType: "article",
    publishedTime: post.date,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blogs", path: "/blogs" },
          { name: post.title, path: blogPath(post.slug) },
        ])}
      />
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: blogPath(post.slug),
          image: post.image,
          datePublished: post.date,
          keywords: post.keywords,
        })}
      />
      {post.slug === "hid-access-control-for-dubai-workplaces" ? (
        <HidAccessArticle post={post} />
      ) : null}
      {post.slug === "trend-audio-visual-for-dubai-workplaces" ? (
        <TrendAvArticle post={post} />
      ) : null}
      {post.slug === "kaybe-cabling-and-racks-for-dubai-workplaces" ? (
        <KaybeInfrastructureArticle post={post} />
      ) : null}
    </>
  );
}
