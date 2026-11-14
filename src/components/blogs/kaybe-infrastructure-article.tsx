import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/lib/blogs";
import type { ProductItem } from "@/lib/catalog";

const toc = [
  { href: "#route", label: "Begin with the route" },
  { href: "#copper", label: "LAN and BMS copper" },
  { href: "#fiber", label: "Fiber, HDMI and telephone" },
  { href: "#accessories", label: "The parts that join the cable" },
  { href: "#racks", label: "Where the cable lands" },
  { href: "#shortlist", label: "A shortlist, not a specification" },
  { href: "#quotation", label: "What a quotation needs" },
  { href: "#supply", label: "How supply is handled" },
  { href: "#dubai-notes", label: "Dubai supply notes" },
];

function kaybeProducts() {
  const items: ProductItem[] = [];
  for (const category of siteConfig.productCategories) {
    if (category.slug === "networking" || category.slug === "enclosures") {
      items.push(...category.links);
    }
  }
  return items;
}

function findProduct(slug: string) {
  return kaybeProducts().find((item) => item.slug === slug);
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
    brief: "Data outlets in an office or a floor",
    slug: "lan-cables",
    confirm: "The route length, the containment, and the terminations at both ends.",
  },
  {
    brief: "Copper for building-services cabling",
    slug: "bms-cables",
    confirm: "The system it serves. The catalogue describes these reels as 100% copper. The duty is still confirmed on the quotation.",
  },
  {
    brief: "A picture from a laptop or a player to a display",
    slug: "hdmi-cables",
    confirm: "The length and both ends. The line is listed as 4K HDMI. That is not a promise for every screen.",
  },
  {
    brief: "A run between buildings, or a backbone inside one",
    slug: "fiber-optic-cables",
    confirm: "Indoor or outdoor, and what it connects at each end.",
  },
  {
    brief: "Telephone and multi-pair telecom cabling",
    slug: "telecommunication-cables",
    confirm: "The pair count the service actually needs.",
  },
  {
    brief: "Panels, outlets and the connectors between them",
    slug: "lan-accessories",
    confirm: "Patch panels, keystones and connectors, counted against the outlets.",
  },
  {
    brief: "A floor cabinet for servers",
    slug: "server-racks",
    confirm: "The room, the equipment going in, and that the cabinet is the floor-standing line.",
  },
  {
    brief: "A cabinet for data or AV equipment",
    slug: "networking-racks",
    confirm: "Whether the cabinet is for data, AV, or both, and where it stands.",
  },
  {
    brief: "An open frame, not a closed cabinet",
    slug: "open-frame-racks",
    confirm: "2-post or 4-post, and that an open frame is acceptable in that room.",
  },
  {
    brief: "A cabinet on a wall, not on the floor",
    slug: "specialized-racks",
    confirm: "The wall, what is mounted in it, and that the line is the wall-mount cabinet.",
  },
];

export function KaybeInfrastructureArticle({ post }: { post: BlogPost }) {
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
                <span className="text-white/90">KAYBE cabling and racks</span>
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
                A supply note from an independent distributor in Dubai. This page is not a KAYBE specification, a tender, or a quotation. Route, quantity, price and availability are confirmed in writing before an order is accepted.
              </p>

              <div className="mt-8 space-y-5 text-[17px] leading-8 text-[#243044]">
                <p>
                  A cable is not a product you pick from a picture. It is a route, with two ends, a length, and a place to land. In a Dubai office, school or plant room the route is decided before the reel is. The outlet, the containment, the cabinet and the patching are one brief. Ordering the cable without the cabinet, or the cabinet without the cable, is how a floor is left unfinished.
                </p>
                <p>
                  {siteConfig.name} is a sister concern of AQS International Trading LLC. From Dubai we source, import and distribute technology products. The names below are the KAYBE cabling and rack lines on our list today. A catalogue line identifies the product. It does not measure the route, and the photograph at the top of this article is not a claim that those coloured leads are a particular KAYBE model.
                </p>
              </div>

              <section id="route" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Begin with the route
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Name the run before you name the box. A floor outlet, a link between two buildings, a telephone riser and a cabinet on a wall are not the same order. For each run, write down four things.
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>What the cable carries: data, a building-services circuit, a display, telephone, or fiber.</li>
                    <li>Where it starts and where it ends, including the cabinet or frame it lands in.</li>
                    <li>Whether the run is indoors, outdoors, or both.</li>
                    <li>Who pulls it and who terminates it. Supply and installation are not the same appointment.</li>
                  </ol>
                  <p>
                    That note is the brief we price against. A reel count without a route is only a guess.
                  </p>
                </div>
              </section>

              <section id="copper" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  LAN and BMS copper
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Two copper lines sit next to each other on the list. They are not substitutes.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="lan-cables" />
                  </h3>
                  <p>
                    The catalogue lists these as KAYBE network cable boxes, for the data outlets on a floor. Specify them where the run is a network run. The box identifies the product. The length of the route, the containment, and the termination at each end are confirmed on the quotation. A network box is not a BMS reel.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="bms-cables" />
                  </h3>
                  <p>
                    The catalogue lists these as KAYBE reels, and it describes them as 100% copper. They are the BMS line: building-services cabling, not the data cable for an office outlet. Say which system the reel serves. The copper description is the catalogue line. It is confirmed, for the model on the order, in the quotation. It is not a description of the LAN boxes, the fiber, or the HDMI cables.
                  </p>
                </div>
              </section>

              <section id="fiber" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Fiber, HDMI and telephone
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <h3 className="text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="fiber-optic-cables" />
                  </h3>
                  <p>
                    The catalogue lists indoor and outdoor fiber cables. Use this line for a backbone inside a building, or for a run that leaves the building. Say which of the two the route is. Indoor and outdoor are not the same cable, and neither is a copper LAN box.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="hdmi-cables" />
                  </h3>
                  <p>
                    The catalogue lists these as KAYBE 4K HDMI cables. Specify them where a picture has to travel from a source to a display. Name the length and both ends. “4K” is the description on our list. It is not a promise that every display, every source and every length will behave the same way. If the room also needs an adapter or a converter, that is a TREND line, quoted apart from this cable.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="telecommunication-cables" />
                  </h3>
                  <p>
                    These are multi-pair telephone and telecom cables. Specify them for the telephone or telecom service, and say the pair count the service needs. A multi-pair cable is not a LAN cable and it is not a BMS reel.
                  </p>
                </div>
              </section>

              <section id="accessories" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  The parts that join the cable
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    <ProductLink slug="lan-accessories">LAN accessories</ProductLink> on the list are patch panels, keystones and connectors. A cable that arrives without them does not make an outlet. Count the panels, the outlets and the connectors against the runs, and put them on the same quotation as the cable. They are not a substitute for the cable, and the cable is not a substitute for them.
                  </p>
                </div>
              </section>

              <section id="racks" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Where the cable lands
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Four rack lines are on the list. They are different pieces of furniture. The room decides which one, not the photograph.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="server-racks" />
                  </h3>
                  <p>
                    These are floor-standing cabinets, for servers. Say what is going into the cabinet and which room it stands in. A floor cabinet is not a wall cabinet.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="networking-racks" />
                  </h3>
                  <p>
                    These are data and AV cabinets. Specify them where the landing point is network equipment, AV equipment, or both. Say which. A data cabinet and an AV cabinet are named together on this line. The quotation should say what this one is for.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="open-frame-racks" />
                  </h3>
                  <p>
                    These are 2-post and 4-post open frames. Specify a frame where the room is meant to have an open frame, not a closed cabinet. Say which of the two. An open frame does not become a cabinet because the equipment is valuable.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="specialized-racks" />
                  </h3>
                  <p>
                    These are wall-mount cabinets. Specify them where the cabinet is on a wall: a small closet, a shop, a local AV point. Name the wall and what is mounted in the cabinet. A wall cabinet is not the floor-standing server rack.
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
                  <p>Send the following. A reel count without a route produces a number, not a floor that can be finished.</p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>The runs: data, BMS, HDMI, fiber, telephone, or more than one of these.</li>
                    <li>Where each run starts and ends, and whether any of it is outdoors.</li>
                    <li>The outlets, patch panels and connectors, counted with the cable.</li>
                    <li>The landing: floor cabinet, data or AV cabinet, open frame, or wall cabinet.</li>
                    <li>What goes in that rack, in plain language.</li>
                    <li>The delivery emirate, and the date the goods are required on site.</li>
                  </ol>
                  <p>
                    We reply with the lines we can offer, the points we cannot yet confirm, and a written price. Until that quotation is issued and accepted, this page is not an offer to sell.
                  </p>
                </div>
              </section>

              <section id="supply" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  How a supply from Dubai is handled
                </h2>
                <ol className="mt-5 list-decimal space-y-3 pl-5 text-[17px] leading-8 text-[#243044] marker:font-semibold marker:text-aqs-red">
                  <li>You describe the routes, the racks, and the date the site needs the goods.</li>
                  <li>We match that brief to products on this list, and we mark anything that cannot yet be confirmed.</li>
                  <li>You receive a written quotation. That document is the offer. This page is not.</li>
                  <li>Order, payment and delivery follow the quotation. UAE VAT is charged as the law requires, unless the quotation says otherwise.</li>
                  <li>Pulling, terminating, mounting and testing remain with the integrator you appoint. Our role is supply.</li>
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
                    {siteConfig.name}, Dubai, is a sister concern of AQS International Trading LLC. We are an independent supplier and distributor. We are not KAYBE. Nothing on this page makes us an agent who can bind the manufacturer.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">2. Names and trademarks</h3>
                  <p>
                    KAYBE is a trademark or product name of its owner. It is used here only to identify products we supply. Use of the name does not transfer any right in it, and it does not mean the manufacturer has approved this article.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">3. Descriptions</h3>
                  <p>
                    The words on our catalogue are a short identification. Category, construction, pair count and what a rack is for are those in the manufacturer’s current datasheet for the model named on your quotation. “100% copper” is the catalogue description of the BMS reels, not of every cable on this page. “4K” is the catalogue description of the HDMI line, not a performance promise for every length and every display. If this page and a quotation differ, the quotation prevails. Photographs are for identification.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">4. No offer on the website</h3>
                  <p>
                    Publishing a product is not an offer to sell. Price, currency, delivery terms, lead time and the quantity we can ship are stated only on a written quotation. UAE VAT is charged as the law requires, unless that quotation says otherwise. Stock, manufacturer allocation and import clearance can change availability after a conversation and before an order is accepted.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">5. Goods and warranty</h3>
                  <p>
                    We supply the branded products named on the quotation. Any warranty is the warranty written there, together with the manufacturer’s terms that apply to that supply. We do not add a performance warranty, a promise that a link will pass a test, or a fitness-for-purpose promise beyond that writing.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">6. Routes, rooms and installation</h3>
                  <p>
                    Containment, pathways, earthing and the rack room follow the design of the consultant you appoint and the building’s approved services layout, including any Dubai Civil Defence requirement that applies to those routes. We supply products. Pulling, terminating, mounting, testing and certification stay with that consultant or integrator, including any UAE licence the work requires. A quotation for goods is not a contract to install them.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">7. Use of this article</h3>
                  <p>
                    You may share the link with a project team. Do not copy the text as your own specification, present it as a KAYBE document, or treat it as a term of sale. It was published on {post.dateLabel} and describes the catalogue as it stood then.
                  </p>
                </div>
              </section>

              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-aqs-red uppercase">
                  Supply desk, {contact.location}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Send the route list. We will confirm what we can supply.
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
                    href="/products/networking"
                    className="inline-flex h-11 items-center rounded-full border border-black/10 px-5 text-sm font-semibold text-aqs-navy hover:border-aqs-navy"
                  >
                    View cabling
                  </Link>
                  <Link
                    href="/products/enclosures"
                    className="inline-flex h-11 items-center rounded-full border border-black/10 px-5 text-sm font-semibold text-aqs-navy hover:border-aqs-navy"
                  >
                    View racks
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
