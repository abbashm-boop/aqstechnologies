import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/lib/blogs";

const toc = [
  { href: "#room", label: "Begin with the room" },
  { href: "#displays", label: "Displays and the video wall" },
  { href: "#meeting", label: "The meeting itself" },
  { href: "#teaching", label: "Teaching and a record of the session" },
  { href: "#signal", label: "Adapters, converters, audio and splitters" },
  { href: "#shortlist", label: "A shortlist, not a specification" },
  { href: "#quotation", label: "What a quotation needs" },
  { href: "#supply", label: "How supply is handled" },
  { href: "#dubai-notes", label: "Dubai supply notes" },
];

function avProducts() {
  return (
    siteConfig.productCategories.find((category) => category.slug === "audio-video")
      ?.links ?? []
  );
}

function findProduct(slug: string) {
  return avProducts().find((item) => item.slug === slug);
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
    brief: "A meeting room that needs a display and a camera together",
    slug: "video-conferencing-display",
    confirm: "The room, the platform the meeting uses, and whether the video bar is the camera for that room.",
  },
  {
    brief: "One large picture for a lobby, a boardroom or a control space",
    slug: "video-wall",
    confirm: "The wall size, what feeds it, and how that source reaches the wall.",
  },
  {
    brief: "A camera for a display the room already has",
    slug: "plug-play-conference-camera",
    confirm: "That the camera is the USB bar on our list, and which computer it will plug into.",
  },
  {
    brief: "A laptop that should appear on the screen without a cable",
    slug: "wireless-screen-sharing",
    confirm: "The display is the interactive flat screen with wireless casting, and the devices that will cast to it.",
  },
  {
    brief: "A panel people write and present on",
    slug: "interactive-flat-panel",
    confirm: "That the requirement is the D Series interactive flat panel, and what will be connected to it.",
  },
  {
    brief: "A lecture or class that has to be kept",
    slug: "lecture-recording-system",
    confirm: "What is recorded, where it is kept, and who is allowed to keep it.",
  },
  {
    brief: "A laptop output that does not match the display",
    slug: "adapters",
    confirm: "The exact plugs: Type-C, HDMI or USB, on both ends.",
  },
  {
    brief: "A signal that has to change format, including a wireless hop",
    slug: "converters",
    confirm: "The source format, the display format, and whether the converter is cabled or wireless.",
  },
  {
    brief: "Sound in the meeting, not only the picture",
    slug: "mixers",
    confirm: "Which microphones and which loudspeakers the mixer has to join.",
  },
  {
    brief: "One picture sent to more than one screen",
    slug: "splitters",
    confirm: "How many screens, and that they are meant to show the same source.",
  },
];

export function TrendAvArticle({ post }: { post: BlogPost }) {
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
                <span className="text-white/90">TREND audio visual</span>
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
                A supply note from an independent distributor in Dubai. This page is not a TREND or STEPWELL specification, a tender, or a quotation. Compatibility, price and availability are confirmed in writing before an order is accepted.
              </p>

              <div className="mt-8 space-y-5 text-[17px] leading-8 text-[#243044]">
                <p>
                  A meeting room fails in ordinary ways. The display is in the room, but the laptop cannot reach it. The camera is a separate problem from the screen. The people at the far end can see the slides and cannot hear the room. A classroom has a panel, and no one has decided whether the session is kept. These are not one product. They are a path: a source, a connection, a display, and, where the brief asks for it, sound and a record.
                </p>
                <p>
                  {siteConfig.name} is a sister concern of AQS International Trading LLC. From Dubai we source, import and distribute technology products. The names below are the TREND by STEPWELL products on our audio-visual list today. A line in the catalogue identifies the product. It does not size the room, and a photograph on this website is not the design.
                </p>
              </div>

              <section id="room" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Begin with the room
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Name the room before you name the screen. A four-person meeting room, a training room, a lecture space and a lobby wall are not the same package. For each room, write down four things.
                  </p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>What the room is for: a meeting, teaching, a lecture that must be kept, or a picture for people walking past.</li>
                    <li>What enters the system: a laptop, a fixed computer, a camera, a microphone, or more than one of these.</li>
                    <li>How the picture gets to the screen: a cable, a wireless cast, or a splitter to more than one display.</li>
                    <li>Who mounts it, and who connects it. Supply and installation are not the same appointment.</li>
                  </ol>
                  <p>
                    That note is the brief we price against. Until it exists, a model name is only a guess.
                  </p>
                </div>
              </section>

              <section id="displays" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Displays and the video wall
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    Two display lines on the list do different jobs. Do not treat them as sizes of the same product.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="video-conferencing-display" />
                  </h3>
                  <p>
                    The catalogue lists this as a TREND flat panel with a video bar, for meeting rooms. Specify it where the room needs the display and the video bar together. Say which meeting platform the room uses, and say whether this bar is the camera for that room. If the room already has a display, this is probably the wrong line. The camera bar on its own is further down.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="video-wall" />
                  </h3>
                  <p>
                    This is the TREND large-format video wall. It belongs where one picture has to be read by a room, a lobby or a control space, not where two people need a meeting screen. The wall size, the source, and the path from that source to the wall are confirmed on the quotation. They are not assumed from the name.
                  </p>
                </div>
              </section>

              <section id="meeting" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  The meeting itself
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    A display does not hold a meeting. Someone has to be seen, someone has to be heard, and someone has to put a laptop on the screen. Those are separate lines on our list.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="plug-play-conference-camera" />
                  </h3>
                  <p>
                    This is a TREND USB conference camera bar. Specify it where the display is already chosen, or already installed, and the missing piece is the camera. Name the computer it will plug into. “Plug and play” on the catalogue describes the bar. It does not promise that every meeting platform, every computer, or every existing screen will accept it without a check.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="wireless-screen-sharing" />
                  </h3>
                  <p>
                    This line is a TREND interactive flat screen with wireless casting. Use it where people are meant to put a laptop on the screen without a cable. Name the devices that will cast. A wireless cast and a cabled adapter solve different problems. If the brief is a plug that does not match, the adapter is the right conversation, not this screen.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="mixers" />
                  </h3>
                  <p>
                    Mixers on our list are TREND by STEPWELL conference audio. Specify a mixer when the brief includes sound: microphones, loudspeakers, or both, joined for the meeting. Picture and sound are quoted as the parts the room actually needs. One does not include the other.
                  </p>
                </div>
              </section>

              <section id="teaching" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Teaching, and a record of the session
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <h3 className="text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="interactive-flat-panel" />
                  </h3>
                  <p>
                    This is the TREND interactive flat panel, D Series. Specify it where people write and present on the panel itself: a classroom, a training room, a workshop. It is not the meeting-room panel with a video bar, and it is not the wireless-casting screen, unless the quotation says those functions are part of the same unit. Say what will be connected to it.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="lecture-recording-system" />
                  </h3>
                  <p>
                    This is the TREND lecture archiving system. Specify it where a lecture or a class has to be kept. Say what is recorded, where the recording is stored, and who is allowed to keep it. A recording of people is personal data. The organisation that operates the system should take its own advice before it switches recording on. We supply the product. We do not decide the policy.
                  </p>
                </div>
              </section>

              <section id="signal" className="scroll-mt-32 mt-12">
                <h2 className="border-b border-black/10 pb-3 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Adapters, converters, and a picture on more than one screen
                </h2>
                <div className="mt-5 space-y-5 text-[17px] leading-8 text-[#243044]">
                  <p>
                    The display is useless if the source cannot reach it. These three lines are the path. They are small, and they are the reason a room works or does not. Quote them with the display, not after the display has already been ordered.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="adapters" />
                  </h3>
                  <p>
                    Adapters on the list are TREND by STEPWELL, for Type-C, HDMI and USB. An adapter changes a plug. It does not change the job of the room. Write down the plug on the laptop and the plug on the display. If those two are not named, the adapter cannot be specified.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="converters" />
                  </h3>
                  <p>
                    Converters on the list are TREND by STEPWELL, HDMI and wireless. A converter is for a signal that has to change, including a wireless hop. Say the format at the source and the format at the display, and say whether the hop is a cable or wireless. A converter is not an adapter, and it is not the wireless casting built into the interactive screen.
                  </p>
                  <h3 className="pt-2 text-lg font-semibold text-aqs-navy">
                    <ProductLink slug="splitters" />
                  </h3>
                  <p>
                    Splitters on the list are TREND by STEPWELL, for more than one screen. Use a splitter where one source is meant to appear on more than one display. Say how many screens. A splitter is not a video wall. A wall is its own line, above.
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
                  <p>Send the following. A partial list produces a partial price, and a room that arrives in pieces.</p>
                  <ol className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-aqs-red">
                    <li>The rooms, each named for its job: meeting, training, lecture, lobby or control.</li>
                    <li>The display, if one is required: conferencing panel, video wall, wireless screen, or D Series interactive panel.</li>
                    <li>The camera, if the room already has a display and needs the USB bar.</li>
                    <li>The source devices, and the plugs on them: Type-C, HDMI, USB, or a wireless cast.</li>
                    <li>Whether sound is in scope, and whether one source must reach more than one screen.</li>
                    <li>Whether a lecture is recorded, and who is responsible for that recording.</li>
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
                  <li>You describe the rooms, the sources, and the date the site needs the goods.</li>
                  <li>We match that brief to products on this list, and we mark anything that cannot yet be confirmed.</li>
                  <li>You receive a written quotation. That document is the offer. This page is not.</li>
                  <li>Order, payment and delivery follow the quotation. UAE VAT is charged as the law requires, unless the quotation says otherwise.</li>
                  <li>Mounting, cabling and commissioning remain with the integrator you appoint. Our role is supply.</li>
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
                    {siteConfig.name}, Dubai, is a sister concern of AQS International Trading LLC. We are an independent supplier and distributor. We are not TREND, and we are not STEPWELL. Nothing on this page makes us an agent who can bind either of them.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">2. Names and trademarks</h3>
                  <p>
                    TREND and STEPWELL are trademarks or product names of their owners. They are used here only to identify products we supply. Use of a name does not transfer any right in it, and it does not mean the manufacturer has approved this article.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">3. Descriptions</h3>
                  <p>
                    The words on our catalogue are a short identification of the product. Screen size, inputs, certifications and what a unit will connect to are those in the manufacturer’s current datasheet for the model named on your quotation. If this page and a quotation differ, the quotation prevails. Photographs are for identification. The meeting-room photograph at the top of this article is not a claim that the screen in the picture is a particular TREND model.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">4. No offer on the website</h3>
                  <p>
                    Publishing a product is not an offer to sell. Price, currency, delivery terms, lead time and the quantity we can ship are stated only on a written quotation. UAE VAT is charged as the law requires, unless that quotation says otherwise. Stock, manufacturer allocation and import clearance can change availability after a conversation and before an order is accepted.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">5. Goods and warranty</h3>
                  <p>
                    We supply the branded products named on the quotation. Any warranty is the warranty written there, together with the manufacturer’s terms that apply to that supply. We do not add a performance warranty, a promise that a room will work on a given platform, or a fitness-for-purpose promise beyond that writing.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">6. Installation</h3>
                  <p>
                    We supply products. Mounting, cabling, commissioning and maintenance stay with the consultant or integrator you appoint, including any UAE licence that activity requires, and including the building’s approved fit-out. A quotation for goods is not a contract to install them.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">7. Recordings and personal data</h3>
                  <p>
                    A lecture archiving system can record people. The organisation that operates it should take its own advice under Federal Decree-Law No. 45 of 2021 Concerning the Protection of Personal Data, and under any sector rule that applies to its business, before recording is switched on. This article is not legal advice, and {siteConfig.name} does not give legal advice.
                  </p>
                  <h3 className="pt-1 text-base font-semibold text-aqs-navy">8. Use of this article</h3>
                  <p>
                    You may share the link with a project team. Do not copy the text as your own specification, present it as a TREND or STEPWELL document, or treat it as a term of sale. It was published on {post.dateLabel} and describes the catalogue as it stood then.
                  </p>
                </div>
              </section>

              <div className="mt-12 border-t border-black/10 pt-8">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-aqs-red uppercase">
                  Supply desk, {contact.location}
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-aqs-navy">
                  Send the room list. We will confirm what we can supply.
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
                    href="/products/audio-video"
                    className="inline-flex h-11 items-center rounded-full border border-black/10 px-5 text-sm font-semibold text-aqs-navy hover:border-aqs-navy"
                  >
                    View the audio-visual list
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
