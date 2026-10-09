import Image from "next/image";
import Link from "next/link";

import { ContactFaq } from "@/components/contact/contact-faq";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "AQS Technologies Dubai UAE",
)}`;

const heroTopics = [
  {
    href: "/contact?topic=products#message",
    title: "Product Inquiries",
    text: "Get product details and pricing",
    icon: "chat",
  },
  {
    href: "/contact?topic=partners#message",
    title: "Partnerships",
    text: "Explore business opportunities",
    icon: "handshake",
  },
  {
    href: "/contact?topic=support#message",
    title: "Technical Support",
    text: "Expert guidance and assistance",
    icon: "support",
  },
  {
    href: "/contact?topic=quote#message",
    title: "Request a Quote",
    text: "Quick and easy quotation process",
    icon: "quote",
  },
] as const;

export function ContactView({ topic }: { topic?: string }) {
  return (
    <>
      <section className="relative overflow-hidden bg-aqs-navy text-white">
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-aqs-red/20 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] left-[22%] h-40 w-40 rounded-full bg-[#f0d48a]/16 blur-3xl" />

        <div className="grid lg:grid-cols-2">
          <div className="relative flex items-center px-5 py-8 sm:px-8 lg:py-10 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12">
            <div className="w-full max-w-[560px] animate-fade-up">
              <p className="text-[11px] font-semibold tracking-[0.24em] text-[#f0d48a] uppercase">
                Contact Us
              </p>
              <h1 className="mt-2 text-[1.75rem] font-semibold tracking-tight sm:text-4xl sm:leading-[1.1]">
                Get in Touch
              </h1>
              <p className="mt-2.5 max-w-lg text-[14px] leading-6 text-white/72">
                We&apos;re here to help. Connect with our team for product
                inquiries, pricing, partnerships or technical support.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-4 lg:gap-4">
                {heroTopics.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group min-w-0"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/8 text-[#ff6b6f] ring-1 ring-white/10 transition-colors group-hover:bg-aqs-red group-hover:text-white">
                      <TopicIcon name={item.icon} />
                    </span>
                    <span className="mt-2 block text-[13px] font-semibold leading-4 text-white">
                      {item.title}
                    </span>
                    <span className="mt-0.5 block text-[12px] leading-4 text-white/58">
                      {item.text}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[200px] sm:min-h-[260px] lg:min-h-[380px]">
            <Image
              src="/images/contact-office.jpg"
              alt="AQS Technologies office lobby in Dubai"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[68%_40%]"
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-aqs-navy to-transparent lg:w-16" />
          </div>
        </div>
      </section>

      <section
        id="message"
        className="scroll-mt-28 bg-[#f4f6f8] py-8 sm:py-10"
      >
        <Container className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="flex flex-col rounded-[24px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(11,31,58,0.06)] sm:p-6">
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
              <span className="h-[2px] w-6 bg-aqs-red" />
              Send us a message
            </p>
            <h2 className="mt-2 text-[1.45rem] font-semibold tracking-tight text-aqs-navy sm:text-[1.7rem]">
              Let&apos;s Discuss Your Requirements
            </h2>
            <p className="mt-1.5 mb-4 max-w-xl text-sm leading-6 text-aqs-muted">
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            <ContactForm topic={topic} />
          </Reveal>

          <div className="flex h-full flex-col gap-4">
            <Reveal delay={80} className="rounded-[24px] border border-black/6 bg-white p-5 shadow-[0_16px_40px_rgba(11,31,58,0.06)] sm:p-6">
              <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
                Contact information
              </p>
              <h2 className="mt-2 text-[1.45rem] font-semibold tracking-tight text-aqs-navy sm:text-[1.7rem]">
                Reach Us Directly
              </h2>
              <p className="mt-1.5 mb-4 text-sm leading-6 text-aqs-muted">
                Our team is available to assist you through multiple channels.
                Choose the one that works best for you.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                <InfoCard
                  icon="phone"
                  title="Call Us"
                  href={siteConfig.contact.phoneHref}
                >
                  <p>{siteConfig.contact.phone}</p>
                  <p className="mt-1 text-[12px] text-aqs-muted">
                    Calls and WhatsApp
                  </p>
                </InfoCard>
                <InfoCard
                  icon="mail"
                  title="Email Us"
                  href={siteConfig.contact.emailHref}
                >
                  {siteConfig.contact.emails.map((email) => (
                    <p key={email} className="break-all">
                      {email}
                    </p>
                  ))}
                  <p className="mt-1 text-[12px] text-aqs-muted">
                    We typically reply within 24 hours
                  </p>
                </InfoCard>
                <InfoCard icon="pin" title="Visit Our Office" href={mapsHref}>
                  <p>{siteConfig.contact.location}</p>
                  <p className="mt-1 text-[12px] font-semibold text-aqs-red">
                    View on Google Maps
                  </p>
                </InfoCard>
                <InfoCard
                  icon="support"
                  title="Technical Support"
                  href={siteConfig.contact.whatsapp}
                >
                  <p>{siteConfig.contact.whatsappPhone}</p>
                  <p className="mt-1 text-[12px] text-aqs-muted">
                    Chat with us on WhatsApp
                  </p>
                </InfoCard>
              </div>
            </Reveal>

            <Reveal
              delay={140}
              className="relative mt-auto overflow-hidden rounded-[24px] bg-aqs-navy text-white shadow-[0_18px_40px_rgba(11,31,58,0.18)]"
            >
              <Image
                src="/images/contact-quote.jpg"
                alt=""
                fill
                sizes="(min-width: 1024px) 38vw, 90vw"
                className="object-cover object-center opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-aqs-navy via-aqs-navy/90 to-aqs-navy/55" />
              <div className="relative grid items-center gap-4 p-4 sm:grid-cols-[1.15fr_0.85fr] sm:p-5">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    Need a Quick Quote?
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-5 text-white/70">
                    Share your requirements and get a competitive quote from our
                    team.
                  </p>
                  <Link
                    href="#message"
                    className="mt-3 inline-flex h-10 items-center gap-2 rounded-xl bg-aqs-red px-4 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(227,28,35,0.35)] transition-transform hover:-translate-y-0.5"
                  >
                    Request a Quote <span aria-hidden>→</span>
                  </Link>
                </div>
                <div className="relative hidden h-[108px] overflow-hidden rounded-xl border border-white/12 sm:block">
                  <Image
                    src="/images/contact-quote.jpg"
                    alt="Request a quote from AQS Technologies"
                    fill
                    sizes="(min-width: 1024px) 16vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <Container className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <Reveal className="rounded-[28px] border border-black/6 bg-white px-5 py-6 shadow-[0_16px_40px_rgba(11,31,58,0.06)] sm:px-8 sm:py-8">
            <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
              <span className="h-[2px] w-6 bg-aqs-red" />
              FAQ
            </p>
            <h2 className="mt-3 text-[1.65rem] font-semibold tracking-tight text-aqs-navy sm:text-[2rem]">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 mb-4 text-sm leading-6 text-aqs-muted">
              Quick answers to common questions.
            </p>
            <ContactFaq />
          </Reveal>

          <Reveal
            delay={80}
            className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-aqs-navy text-white shadow-[0_18px_40px_rgba(11,31,58,0.18)]"
          >
            <Image
              src="/images/cta-dubai.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 48vw, 90vw"
              className="object-cover object-[70%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-aqs-navy via-aqs-navy/88 to-aqs-navy/28" />
            <div className="relative flex h-full flex-col justify-between gap-10 p-6 sm:p-8 lg:p-10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.24em] text-[#f0d48a] uppercase">
                  Let&apos;s work together
                </p>
                <h2 className="mt-3 max-w-md text-[1.7rem] font-semibold tracking-tight sm:text-[2.05rem] sm:leading-[1.15]">
                  Partner with AQS Technologies for Your Technology Needs
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/72">
                  Whether you&apos;re looking for products, partnership
                  opportunities or expert advice, our team is here to help.
                </p>
                <Link
                  href="/contact?topic=partners#message"
                  className="shine mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-aqs-red px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(227,28,35,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Contact Our Team <span aria-hidden>→</span>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {partnerPoints.map((item) => (
                  <div key={item.title} className="min-w-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/12">
                      <PartnerIcon name={item.icon} />
                    </span>
                    <p className="mt-3 text-[13px] font-semibold leading-5 text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

const partnerPoints = [
  { title: "Trusted Brands", icon: "brands" },
  { title: "Reliable Supply", icon: "supply" },
  { title: "Expert Support", icon: "support" },
  { title: "Long-Term Partnerships", icon: "partner" },
] as const;

function InfoCard({
  icon,
  title,
  href,
  children,
}: {
  icon: "phone" | "mail" | "pin" | "support";
  title: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-xl border border-black/6 bg-[#f7f9fb] p-3.5 transition-colors hover:border-aqs-red/25 hover:bg-white"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-aqs-red/10 text-aqs-red">
        <TopicIcon name={icon} />
      </span>
      <p className="mt-2.5 text-sm font-semibold text-aqs-navy">{title}</p>
      <div className="mt-1 text-[13px] leading-5 text-aqs-navy">{children}</div>
    </a>
  );
}

function TopicIcon({
  name,
}: {
  name: "chat" | "handshake" | "support" | "quote" | "phone" | "mail" | "pin";
}) {
  if (name === "chat") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 16.5V7.8A2.8 2.8 0 0 1 7.8 5h8.4A2.8 2.8 0 0 1 19 7.8v5.4A2.8 2.8 0 0 1 16.2 16H9l-4 3.2Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "handshake") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 11.5 10.2 9l3.1 3.1 2.2-1.6 2.5 2.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 13.5 8 10l2.8 2.8M20 13.2l-3.2-2.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M9.2 14.8 11 16.5l2.4-1.7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "support") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 14v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M8 14a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8.4" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="15.6" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  if (name === "quote") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 4h7l4 4v12a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 20V5.5A1.5 1.5 0 0 1 8 4Z"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M15 4.5V9h4.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M9 13h6M9 16.5h4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "phone") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M7.2 4.8h3.1l1.2 3-1.7 1.2a11 11 0 0 0 5.2 5.2l1.2-1.7 3 1.2v3.1c0 .8-.7 1.5-1.5 1.5C9.8 18.3 5.7 14.2 5.7 6.3c0-.8.7-1.5 1.5-1.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (name === "mail") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect
          x="4"
          y="6.5"
          width="16"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="m5 8 7 5 7-5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-6.2 7-11.2A7 7 0 0 0 5 9.8C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="9.8" r="2.2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PartnerIcon({
  name,
}: {
  name: "brands" | "supply" | "support" | "partner";
}) {
  if (name === "brands") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="9" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="2.1" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4.5 18.5c.6-2.8 2.5-4.4 4.5-4.4s3.9 1.6 4.5 4.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M13.8 14.4c1.5-.5 3.2.2 4.3 2.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (name === "supply") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 16V8h11v8H3Z" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M14 11h4l3 3v2h-7v-5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <circle cx="7" cy="18" r="1.5" fill="currentColor" />
        <circle cx="17" cy="18" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (name === "support") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M5 14v2a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M8 14a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8.4" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="15.6" cy="9.2" r="2.1" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 11.5 10.2 9l3.1 3.1 2.2-1.6 2.5 2.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 13.5 8 10l2.8 2.8M20 13.2l-3.2-2.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
