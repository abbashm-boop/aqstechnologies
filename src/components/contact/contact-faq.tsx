"use client";

import { useState } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What are your working hours?",
    a: "We are based in Dubai and typically respond during UAE business hours. For the fastest reply, WhatsApp us on " +
      siteConfig.contact.phone +
      ".",
  },
  {
    q: "Do you provide international shipping?",
    a: "Yes. We supply across the UAE and to regional and international markets through our partner network. Share the destination with our team and we will confirm availability and delivery.",
  },
  {
    q: "How can I request a product quote?",
    a: "Fill in the form on this page with the products you need, or WhatsApp us. We will come back with availability and competitive pricing.",
  },
  {
    q: "Do you offer technical support?",
    a: "Yes. We help with product specification, selection and after-sale support by phone, email or WhatsApp.",
  },
  {
    q: "Can I become a partner with AQS?",
    a: "Yes. We work with system integrators, resellers and installers. Tell us about your business in the form and our team will follow up.",
  },
  {
    q: "What brands do you distribute?",
    a: "We supply genuine products from HID, Security Shells, TREND Networks and KAYBE across access control, networking and enclosures.",
  },
];

export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div
            key={item.q}
            className="border-b border-black/8 last:border-b-0"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : index)}
            >
              <span
                className={cn(
                  "text-[15px] font-semibold leading-6",
                  expanded ? "text-aqs-red" : "text-aqs-navy",
                )}
              >
                {item.q}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg font-semibold transition-colors",
                  expanded
                    ? "bg-aqs-red text-white"
                    : "bg-[#eef1f6] text-aqs-navy",
                )}
                aria-hidden
              >
                {expanded ? "–" : "+"}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <p className="overflow-hidden text-sm leading-6 text-aqs-muted">
                <span className="block pb-4">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
