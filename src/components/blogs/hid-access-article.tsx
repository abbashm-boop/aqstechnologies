import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/lib/blogs";

const toc = [
  { href: "#opening", label: "Begin with the opening" },
  { href: "#readers", label: "Readers" },
  { href: "#credentials", label: "Credentials" },
  { href: "#controller", label: "The controller" },
  { href: "#alongside", label: "Hardware and software beside HID" },
  { href: "#shortlist", label: "A shortlist, not a specification" },
  { href: "#quotation", label: "What a quotation needs" },
  { href: "#supply", label: "How supply is handled" },
  { href: "#dubai-notes", label: "Dubai supply notes" },
];

function accessProducts() {
  return (
    siteConfig.productCategories.find((category) => category.slug === "access-control")
      ?.links ?? []
  );
}

function findProduct(slug: string) {
  return accessProducts().find((item) => item.slug === slug);
}

function ProductLink({
  slug,
  children,
}: {
  slug: string;
  children?: React.ReactNode;
}) {
  const item = findProduct(slug);
  if (!item) return <>{children}</>;
  return (
    <Link
      href={item.href}
      className="font-semibold text-aqs-navy underline decoration-aqs-red/35 decoration-1 underline-offset-[5px] hover:text-aqs-red hover:decoration-aqs-red"
    >
      {children ?? item.label}
    </Link>
  );
}

const shortlist = [
  {
    brief: "A reader for a card and a mobile credential",
    slug: "readers",
    confirm: "Name the credential the card or phone will use, and the controller on the same order.",
  },
  {
    brief: "An iCLASS SE reader",
    slug: "hid-readers",
    confirm: "Confirm R40 or RK40, and that the cards already in use are iCLASS.",
  },
  {
    brief: "Seos as the site credential",
    slug: "access-cards",
    confirm: "Name the reader model that will accept those Seos cards.",
  },
  {
    brief: "iCLASS cards",
    slug: "hid-iclass",
    confirm: "Quote the reader and the controller with the cards.",
  },
  {
    brief: "Vento cards",
    slug: "hid-vento-card",
    confirm: "Confirm the reader. Do not assume another HID reader accepts this card.",
  },
  {
    brief: "Face authentication",
    slug: "door-accessories",
    confirm: "Complete a personal-data review, and confirm how the reader connects.",
  },
  {
    brief: "The panel for the doors",
    slug: "hid-aero",
    confirm: "Match door count and interfaces on this project to the X1100.",
  },
];

export function HidAccessArticle({ post }: { post: BlogPost }) {
  const { contact } = siteConfig;

  return (
    <article>
      <header className="relative overflow-hidden bg-aqs-navy text-white">
        <div className="pointer-events-none absolute -left-16 top-8 h-56 w-56 rounded-full bg-aqs-red/20 blur-3xl" />
        <div className="grid lg:grid-cols-2">
          <div className="relative flex items-center px-5 py-12 sm:px-8 lg:py-16 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:pr-12">
            <div className="w-full max-w-[640px]">
              <nav className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/55" aria-label="Breadcrumb">
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
                <span aria-hidden>/</span>
                <Link href="/blogs" className="transition-colors hover:text-white">
                  Blogs
                </Link>
                <span aria-hidden>/</span>
                <span className="text-white/90">HID access control</span>
              </nav>
              <p className="mt-6 text-[11px] font-semibold tracking-[0.24em] text-[#f0d48a] uppercase">
                {post.category} · Dubai
              </p>
              <h1 className="mt-3 text-[2rem] font-semibold tracking-tight sm:text-5xl sm:leading-[1.08]">
                {post.title}
              </h1>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/72">
                {post.description}
              </p>
              <p className="mt-5 text-[12px] font-medium tracking-wide text-white/55">
                {post.dateLabel}
                <span className="px-2">·</span>
                {post.readingTime}
                <span className="px-2">·</span>
                {siteConfig.name}
              </p>
            </div>
          </div>
          <div className="relative min-h-[240px] sm:min-h-[320px] lg:min-h-[520px]">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-aqs-navy to-transparent lg:block" />
          </div>
        </div>
      </header>

      <div className="bg-white">
        <Container className="py-10 sm:py-14">
          <div className="grid items-start gap-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
            <aside className="lg:sticky lg:top-32">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-aqs-red uppercase">
                Contents
              </p>
              <ol className="mt-4 space-y-2.5 border-l border-black/10 pl-4">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-[13px] leading-5 text-aqs-navy/75 transition-colors hover:text-aqs-red"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="min-w-0 max-w-3xl">
              <p className="border-l-2 border-aqs-red pl-4 text-[15px] leading-7 text-aqs-navy/80">
                A supply note from an independent distributor in Dubai. This page is not an HID specification, a tender, or a quotation. Compatibility, price and availability are confirmed in writing before an order is accepted.
              </p>

              <div className="mt-8 space-y-5 text-[17px] leading-8 text-[#243044]">
                <p>
                  A workplace door is a small system. A person presents a credential, a reader checks it, a controller decides, and the lock releases or it does not. In a Dubai office, warehouse or campus those parts are chosen together. A reader, taken on its own, does not say which card it will accept, how many doors the panel will serve, or how the door opens if there is a fire.
                </p>
                <p>
                  {siteConfig.name} is a sister concern of AQS International Trading LLC. From Dubai we source, import and distribute technology products. The names below are the HID products on our access-control list today. Where a choice depends on a datasheet, the quotation carries that detail. A photograph on this website identifies a product. It does not design the opening.
                </p>
              </div>

              <section id="opening" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Begin with the opening
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Name the door before you name the reader. A staff entrance, a reception lane, a server room and a plant door are not the same package. For each opening, write down four things.
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>Who enters, and whether visitors are included.</li>
                    <li>What they carry: a card, a phone, or neither, where the opening uses a face.</li>
                    <li>How the door must release in an emergency.</li>
                    <li>Who will issue credentials, and who will look after visitors or attendance.</li>
                  </ol>
                  <p>
                    That note is the brief we price against. Until it exists, a model number is only a guess.
                  </p>
                </div>
              </section>

              <section id="readers" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Readers
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Three reader lines are on the current list. Choose the reader for the credential you intend to issue, then confirm the pair on the quotation. Do not reverse that order.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="readers" />
                  </h3>
                  <p>
                    The catalogue lists the Signo 40 for RFID and mobile use. Specify it where the opening needs a reader that can take a card and a mobile credential, and name the credential in the same line of the quotation. The product page states the family. It does not, by itself, confirm that a particular card or phone pass will be accepted.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="hid-readers" />
                  </h3>
                  <p>
                    These are the iCLASS SE R40 and the RK40. They belong on a site where people already carry iCLASS. The two models are not the same opening. Say which one is required, and say so before the order is raised.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="door-accessories" />
                  </h3>
                  <p>
                    Amico is listed as a biometric face reader. A face is personal data. Specify this reader only after the organisation that will operate it has decided how that data will be collected, stored and limited. The legal position is set out in the supply notes below. We do not decide it for you.
                  </p>
                </div>
              </section>

              <section id="credentials" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Credentials
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Seos, iCLASS and Vento are three credential families. Sharing the HID name does not make one a substitute for another. The reader that will accept the card is named with the card. If that reader is not yet confirmed, the card is not yet specified.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="access-cards" />
                  </h3>
                  <p>
                    These are Seos smart cards and credentials. Where Seos is the standard for the site, the reader model is part of the same quotation. Seos is not an iCLASS card, and it is not a Vento card.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="hid-iclass" />
                  </h3>
                  <p>
                    These are iCLASS cards and credentials, for a population that is already on iCLASS. Pair them with a reader confirmed for iCLASS, and with the controller on the same order.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="hid-vento-card" />
                  </h3>
                  <p>
                    Vento is its own access card. Confirm the reader that will accept it before anyone treats Vento as the site standard. A Signo reader, an iCLASS SE reader or an Amico reader is not assumed to read a Vento card.
                  </p>
                </div>
              </section>

              <section id="controller" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  The controller
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    The controller on our list is the <ProductLink slug="hid-aero">HID Aero X1100</ProductLink>. It is the panel the readers report to. Door count, wiring and the head-end software are confirmed against the project. They are not inferred from the product name. If the opening count or the interfaces are still open, the controller is not yet specified.
                  </p>
                </div>
              </section>

              <section id="alongside" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Hardware and software beside the HID package
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Two further groups sit on the same access-control list. They are quoted under their own names. They are not HID products, and a specification should not describe them as if they were.
                  </p>
                  <p>
                    <ProductLink slug="door-locks">Electromagnetic door locks</ProductLink> are the lock on the door. <ProductLink slug="emergency-break-glass">Emergency break-glass units</ProductLink> are the local release. In Dubai, the way a locked door opens in an emergency follows the building’s approved fire and life-safety design, including Dubai Civil Defence requirements where those requirements apply. Supplying a break-glass unit does not approve that design, and it does not replace the authority’s approval of the building.
                  </p>
                  <p>
                    iSecure is a separate range, from Security Shells Infotech. Visitors, the cafeteria, mobile identity, alerts and time attendance often appear in the same conversation as the door. Each application is quoted on its own line, apart from the HID hardware:{" "}
                    <ProductLink slug="isecure-iam">iSecure IAM</ProductLink> for identity and access,{" "}
                    <ProductLink slug="isecure-trace">iSecure Trace</ProductLink> for visitors,{" "}
                    <ProductLink slug="isecure-cafe">iSecure Cafe</ProductLink> for the cafeteria,{" "}
                    <ProductLink slug="isecure-mobile">iSecure Mobile</ProductLink> for mobile identity and attendance,{" "}
                    <ProductLink slug="isecure-identity">iSecure Identity</ProductLink> for analytics and alerts, and{" "}
                    <ProductLink slug="isecure-hrms">iSecure HRMS</ProductLink> for time and attendance.
                  </p>
                </div>
              </section>

              <section id="shortlist" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  A shortlist, not a specification
                </h2>
                <p className="mt-5 text-[17px] leading-8 text-[#243044]">
                  Use the table to see where a brief usually starts. The right-hand column is the confirmation that has to be closed before a purchase order. If it is still open, the line stays off the order.
                </p>
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left text-[15px] leading-6">
                    <thead>
                      <tr className="border-b border-aqs-navy/20 text-[11px] tracking-[0.14em] text-aqs-muted uppercase">
                        <th scope="col" className="py-3 pr-4 font-semibold">If the brief is</th>
                        <th scope="col" className="py-3 pr-4 font-semibold">Start with</th>
                        <th scope="col" className="py-3 font-semibold">Then confirm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {shortlist.map((row) => {
                        const item = findProduct(row.slug);
                        if (!item) return null;
                        return (
                          <tr key={row.slug} className="border-b border-black/8 align-top">
                            <th scope="row" className="py-4 pr-4 font-medium text-aqs-navy">
                              {row.brief}
                            </th>
                            <td className="py-4 pr-4">
                              <ProductLink slug={row.slug} />
                            </td>
                            <td className="py-4 text-[#243044]/80">{row.confirm}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>

              <section id="quotation" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  What a quotation needs
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>Send the following. A partial list produces a partial price.</p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>The number of openings, each labelled in plain language: staff, visitor, plant or server.</li>
                    <li>The credential people should carry: Seos, iCLASS, Vento, mobile, or face.</li>
                    <li>Any opening that needs a face reader.</li>
                    <li>Whether visitors, the cafeteria, or time attendance are in scope. Those are iSecure questions, quoted apart from HID.</li>
                    <li>How each locked door is released in an emergency, and whether the life-safety design calls for a break-glass unit.</li>
                    <li>The delivery emirate, and the date the goods are required on site.</li>
                  </ol>
                  <p>
                    We reply with the models we can offer, the points we cannot yet confirm, and a written price. Until that quotation is issued and accepted, this page is not an offer to sell.
                  </p>
                </div>
              </section>

              <section id="supply" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  How a supply from Dubai is handled
                </h2>
                <ol className="mt-5 list-decimal space-y-3 pl-5 text-[17px] leading-8 text-[#243044] marker:font-semibold marker:text-aqs-red">
                  <li>You describe the openings, the credential, and the date the site needs the goods.</li>
                  <li>We match that brief to products on this list, and we mark anything that cannot yet be confirmed.</li>
                  <li>You receive a written quotation. That document is the offer. This page is not.</li>
                  <li>Order, payment and delivery follow the quotation. UAE VAT is charged as the law requires, unless the quotation says otherwise.</li>
                  <li>Design, cabling and commissioning remain with the integrator you appoint. Our role is supply.</li>
                </ol>
              </section>

              <section id="dubai-notes" className="scroll-mt-32 mt-14">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Dubai supply notes
                </h2>
                <div className="mt-5 space-y-5 text-[15px] leading-7 text-[#243044]">
                  <p>
                    These notes explain how to read this article and how a supply from Dubai is handled. They are not a contract. The written quotation, and the purchase order raised against it, govern the sale. UAE law applies to that contract as the quotation states.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">1. Who we are</h3>
                  <p>
                    {siteConfig.name}, Dubai, is a sister concern of AQS International Trading LLC. We are an independent supplier and distributor. We are not HID Global, and we are not Security Shells Infotech. Nothing on this page makes us an agent who can bind either manufacturer.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">2. Names and trademarks</h3>
                  <p>
                    HID, Signo, iCLASS, Seos, Aero, Amico and Vento are trademarks or product names of their owners. They are used here only to identify products we supply. iSecure is a product name of Security Shells Infotech. Use of a name does not transfer any right in it, and it does not mean the manufacturer has approved this article.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">3. Descriptions</h3>
                  <p>
                    The words on our catalogue are a short identification of the product. Features, supported credentials, certifications and dimensions are those in the manufacturer’s current datasheet for the model named on your quotation. If this page and a quotation differ, the quotation prevails. Photographs are for identification.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">4. No offer on the website</h3>
                  <p>
                    Publishing a product is not an offer to sell. Price, currency, delivery terms, lead time and the quantity we can ship are stated only on a written quotation. UAE VAT is charged as the law requires, unless that quotation says otherwise. Stock, manufacturer allocation and import clearance can change availability after a conversation and before an order is accepted.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">5. Goods and warranty</h3>
                  <p>
                    We supply the branded products named on the quotation. Any warranty is the warranty written there, together with the manufacturer’s terms that apply to that supply. We do not add a performance warranty, a promise that a site will be secure, or a fitness-for-purpose promise beyond that writing.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">6. Life safety in Dubai</h3>
                  <p>
                    Electromagnetic locks and emergency break-glass units must be installed in line with the building’s approved fire and life-safety design, including Dubai Civil Defence requirements where those requirements apply. Selecting a product from this article does not approve an egress strategy.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">7. Personal data</h3>
                  <p>
                    An Amico face reader processes biometric data. The organisation that operates it should take its own advice under Federal Decree-Law No. 45 of 2021 Concerning the Protection of Personal Data, and under any sector rule that applies to its business. This article is not legal advice, and {siteConfig.name} does not give legal advice.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">8. Installation and licensing</h3>
                  <p>
                    We supply products. Design, cabling, commissioning and maintenance stay with the consultant or integrator you appoint, including any UAE licence that activity requires. A quotation for goods is not a contract to install them.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">9. Use of this article</h3>
                  <p>
                    You may share the link with a project team. Do not copy the text as your own specification, present it as an HID document, or treat it as a term of sale. It was published on {post.dateLabel} and describes the catalogue as it stood then.
                  </p>
                </div>
              </section>

              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-aqs-red uppercase">
                  Supply desk, {contact.location}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Send the opening list. We will confirm what we can supply.
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#243044]/80">
                  Availability and price come back in writing.
                </p>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] font-semibold tracking-[0.14em] text-aqs-muted uppercase">Phone</dt>
                    <dd className="mt-1">
                      <a href={contact.phoneHref} className="font-semibold text-aqs-navy hover:text-aqs-red">
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-semibold tracking-[0.14em] text-aqs-muted uppercase">WhatsApp</dt>
                    <dd className="mt-1">
                      <a href={contact.whatsapp} className="font-semibold text-aqs-navy hover:text-aqs-red">
                        {contact.whatsappPhone}
                      </a>
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] font-semibold tracking-[0.14em] text-aqs-muted uppercase">Email</dt>
                    <dd className="mt-1 flex flex-col gap-1">
                      {contact.emails.map((email) => (
                        <a key={email} href={`mailto:${email}`} className="font-semibold text-aqs-navy hover:text-aqs-red">
                          {email}
                        </a>
                      ))}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center rounded-full bg-aqs-red px-5 text-sm font-semibold text-white"
                  >
                    Request a quote
                  </Link>
                  <Link
                    href="/products/access-control"
                    className="inline-flex h-11 items-center rounded-full border border-black/10 px-5 text-sm font-semibold text-aqs-navy hover:border-aqs-navy"
                  >
                    View the access-control list
                  </Link>
                </div>
                <p className="mt-8 text-xs leading-5 text-aqs-muted">
                  <Link href="/blogs" className="font-semibold text-aqs-navy hover:text-aqs-red">
                    Back to blogs
                  </Link>
                  <span className="px-2">·</span>
                  Published {post.dateLabel} by {siteConfig.name}, {contact.location}.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}
