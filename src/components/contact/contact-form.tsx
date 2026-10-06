"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";

import { siteConfig } from "@/config/site";

const BUSINESS_TYPES = [
  "System Integrator",
  "Reseller",
  "Installer",
  "Consultant",
  "End User",
  "Other",
];

const INTEREST_OPTIONS = [
  "Access Control & Identification",
  "Audio Video",
  "Networking",
  "Enclosures",
  "Partnership",
  "Technical Support",
  "Not sure yet",
];

const TOPIC_INTEREST: Record<string, string> = {
  products: "Access Control & Identification",
  partners: "Partnership",
  support: "Technical Support",
  quote: "Not sure yet",
};

const fieldClass =
  "mt-1.5 h-11 w-full min-w-0 rounded-xl border border-black/10 bg-[#f4f6f8] px-3.5 text-base text-aqs-navy outline-none transition-colors placeholder:text-aqs-muted/70 focus:border-aqs-red focus:bg-white lg:text-sm";

export function ContactForm({ topic }: { topic?: string }) {
  const initialInterest = TOPIC_INTEREST[topic ?? ""] ?? "";
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [interest, setInterest] = useState(initialInterest);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const mapped = TOPIC_INTEREST[topic ?? ""];
    if (mapped) setInterest(mapped);
  }, [topic]);

  const whatsappHref = useMemo(() => {
    const lines = [
      "Hello AQS Technologies, I would like to discuss a requirement.",
      "",
      `Name: ${name.trim()}`,
      company.trim() ? `Company: ${company.trim()}` : null,
      `Email: ${email.trim()}`,
      phone.trim() ? `Phone: +971 ${phone.trim()}` : null,
      businessType ? `Business type: ${businessType}` : null,
      interest ? `Product interest: ${interest}` : null,
      "",
      message.trim(),
    ].filter(Boolean);

    return `https://wa.me/971562234115?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [businessType, company, email, interest, message, name, phone]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex min-h-[420px] flex-col items-start justify-center">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-aqs-red uppercase">
          Message ready
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-aqs-navy">
          Thank you, {name.split(" ")[0] || "there"}.
        </h3>
        <p className="mt-3 max-w-md text-sm leading-6 text-aqs-muted">
          WhatsApp should now be open with your enquiry. If it did not open, use
          the button below and our team will get back to you.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex h-11 items-center rounded-xl bg-aqs-red px-5 text-sm font-semibold text-white hover:bg-aqs-red-hover"
        >
          Open WhatsApp
        </a>
        <button
          type="button"
          className="mt-3 text-sm font-semibold text-aqs-navy underline-offset-4 hover:underline"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
      <label className="block text-[13px] font-semibold text-aqs-navy">
        Full Name *
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your full name"
          autoComplete="name"
          className={fieldClass}
        />
      </label>
      <label className="block text-[13px] font-semibold text-aqs-navy">
        Company Name
        <input
          value={company}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Enter company name"
          autoComplete="organization"
          className={fieldClass}
        />
      </label>
      <label className="block text-[13px] font-semibold text-aqs-navy">
        Email Address *
        <input
          required
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address"
          autoComplete="email"
          className={fieldClass}
        />
      </label>
      <div className="block text-[13px] font-semibold text-aqs-navy">
        <label htmlFor="contact-phone">Phone Number</label>
        <div className="mt-1.5 flex h-11 min-w-0 overflow-hidden rounded-xl border border-black/10 bg-[#f4f6f8] focus-within:border-aqs-red focus-within:bg-white">
          <span className="inline-flex shrink-0 items-center border-r border-black/10 px-3 text-sm font-semibold text-aqs-navy">
            +971
          </span>
          <input
            id="contact-phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="Enter phone number"
            autoComplete="tel-national"
            inputMode="tel"
            className="h-full min-w-0 flex-1 bg-transparent px-3 text-base text-aqs-navy outline-none placeholder:text-aqs-muted/70 lg:text-sm"
          />
        </div>
      </div>
      <label className="block text-[13px] font-semibold text-aqs-navy">
        Business Type
        <select
          value={businessType}
          onChange={(event) => setBusinessType(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select business type</option>
          {BUSINESS_TYPES.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-[13px] font-semibold text-aqs-navy">
        Product Interest
        <select
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
          className={fieldClass}
        >
          <option value="">Select product category</option>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-[13px] font-semibold text-aqs-navy sm:col-span-2">
        Your Message *
        <textarea
          required
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Tell us about your requirements..."
          rows={3}
          className="mt-1.5 min-h-[88px] w-full resize-y rounded-xl border border-black/10 bg-[#f4f6f8] px-3.5 py-2.5 text-base text-aqs-navy outline-none transition-colors placeholder:text-aqs-muted/70 focus:border-aqs-red focus:bg-white lg:text-sm"
        />
      </label>
      </div>
      <div>
        <button
          type="submit"
          className="shine inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-aqs-red text-sm font-semibold text-white shadow-[0_12px_28px_rgba(227,28,35,0.28)] transition-transform hover:-translate-y-0.5 hover:bg-aqs-red-hover"
        >
          Send Message <span aria-hidden>→</span>
        </button>
        <p className="mt-2 flex items-center justify-center gap-2 text-center text-[12px] text-aqs-muted">
          <LockIcon />
          Your information is secure and will only be used for business
          communication.
        </p>
        <p className="sr-only">
          Submitting opens WhatsApp to {siteConfig.contact.phone}.
        </p>
      </div>
    </form>
  );
}

function LockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="5"
        y="11"
        width="14"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M8 11V8a4 4 0 0 1 8 0v3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}
