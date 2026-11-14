export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  readingTime: string;
  category: string;
  image: string;
  imageAlt: string;
  keywords: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kaybe-cabling-and-racks-for-dubai-workplaces",
    title: "How to Specify KAYBE Cabling and Racks for a Dubai Workplace",
    metaTitle: "KAYBE Cables and Racks in Dubai",
    description:
      "KAYBE LAN, BMS copper, fiber, 4K HDMI, telecom cable, patch panels, and floor, network, open-frame and wall racks supplied from Dubai.",
    excerpt:
      "Network cable, copper BMS reels, fiber, HDMI, telephone cable, patching, and the floor, open-frame and wall racks on our list.",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    readingTime: "8 min read",
    category: "Cabling and racks",
    image: "/images/blog-cables.jpg",
    imageAlt: "Network cables patched into a rack",
    keywords: [
      "KAYBE cables Dubai",
      "KAYBE LAN cable UAE",
      "KAYBE network cable boxes",
      "KAYBE BMS cable",
      "KAYBE 100% copper cable",
      "KAYBE 4K HDMI cable Dubai",
      "KAYBE fiber optic cable",
      "indoor outdoor fiber cable UAE",
      "KAYBE telecom cable",
      "multi-pair telephone cable Dubai",
      "KAYBE patch panel",
      "keystone connector UAE",
      "KAYBE server rack Dubai",
      "KAYBE network cabinet",
      "data AV cabinet UAE",
      "open frame rack Dubai",
      "2-post 4-post rack UAE",
      "wall mount cabinet Dubai",
      "structured cabling supplier Dubai",
    ],
  },
  {
    slug: "trend-audio-visual-for-dubai-workplaces",
    title: "How to Specify TREND Audio Visual for a Dubai Workplace",
    metaTitle: "TREND Displays and Meeting AV in Dubai",
    description:
      "TREND by STEPWELL meeting displays, video wall, conference camera, D Series panel, lecture recording, adapters, converters, mixers and splitters from Dubai.",
    excerpt:
      "Meeting displays, the video wall, wireless sharing, the D Series panel, lecture recording, and the adapters, converters, mixers and splitters on our list — with the supply notes a Dubai order should confirm.",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    readingTime: "8 min read",
    category: "Audio Visual",
    image: "/images/blog-displays.jpg",
    imageAlt: "A meeting-room display above a conference table",
    keywords: [
      "TREND audio visual Dubai",
      "TREND by STEPWELL",
      "TREND video conferencing display",
      "TREND video wall UAE",
      "TREND conference camera Dubai",
      "USB conference camera bar UAE",
      "TREND wireless screen sharing",
      "TREND interactive flat panel",
      "TREND D Series panel Dubai",
      "TREND lecture recording system",
      "lecture archiving UAE",
      "TREND Type-C HDMI adapter",
      "TREND HDMI converter Dubai",
      "TREND conference audio mixer",
      "TREND HDMI splitter UAE",
      "meeting room AV supplier Dubai",
    ],
  },
  {
    slug: "hid-access-control-for-dubai-workplaces",
    title: "How to Specify HID Access Control for a Dubai Workplace",
    metaTitle: "HID Signo, iCLASS and Aero in Dubai",
    description:
      "HID Signo, iCLASS SE, Seos, Vento, Amico and Aero X1100 supplied from Dubai. How to specify readers, cards and the controller before you order.",
    excerpt:
      "Readers, cards, the Aero controller, and the door hardware around them — mapped to the HID products on our catalogue, with the supply notes a Dubai order should confirm.",
    date: "2026-11-14",
    dateLabel: "14 Nov 2026",
    readingTime: "8 min read",
    category: "Access Control",
    image: "/images/blog-access.jpg",
    imageAlt: "A workplace team reviewing access and security for a Dubai office",
    keywords: [
      "HID access control Dubai",
      "HID Signo readers UAE",
      "HID Signo 40 Dubai",
      "HID iCLASS SE R40",
      "HID iCLASS SE RK40",
      "HID Seos cards Dubai",
      "HID iCLASS cards UAE",
      "HID Vento card Dubai",
      "HID Amico face reader",
      "HID Aero X1100 Dubai",
      "access control supplier Dubai",
      "electromagnetic door lock UAE",
      "emergency break glass Dubai",
      "iSecure access control UAE",
    ],
  },
];

export function blogPath(slug: string) {
  return `/blogs/${slug}`;
}

export function getBlog(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null;
}
