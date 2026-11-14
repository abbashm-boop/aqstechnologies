import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import { blogPath, blogPosts } from "@/lib/blogs";

export function BlogIndex() {
  return (
    <>
      <section className="relative overflow-hidden bg-aqs-navy text-white">
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-aqs-red/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] left-[22%] h-40 w-40 rounded-full bg-[#f0d48a]/16 blur-3xl" />
        <div className="grid lg:grid-cols-2">
          <div className="relative flex items-center px-5 py-12 sm:px-8 lg:py-16 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12">
            <div className="w-full max-w-[560px]">
              <nav className="flex items-center gap-1.5 text-[12px] text-white/55" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white/90">Blogs</span>
              </nav>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.24em] text-[#f0d48a] uppercase">
                Insights
              </p>
              <h1 className="mt-3 text-[2rem] font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                Guides for specifying and buying
              </h1>
              <p className="mt-4 max-w-lg text-[15px] leading-7 text-white/72">
                Practical notes from {siteConfig.name} in Dubai. Each guide stays with the products on our catalogue, and it separates product advice from the commercial terms of supply.
              </p>
            </div>
          </div>
          <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[460px]">
            <Image
              src="/images/blog-hero.jpg"
              alt="AQS Technologies workplace"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-aqs-navy to-transparent lg:block" />
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-aqs-navy sm:text-3xl">
            Guides
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={blogPath(post.slug)} className="group block">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-[11px] font-semibold tracking-[0.16em] text-aqs-red uppercase">
                  {post.category}
                  <span className="font-medium tracking-normal text-aqs-muted normal-case">
                    {" "}
                    · {post.dateLabel}
                  </span>
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-6 text-aqs-navy">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-aqs-muted">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
