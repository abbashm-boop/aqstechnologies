export const siteConfig = {
  name: "AQS Technologies",
  legalName: "AQS International Trading LLC",
  tagline: "Your Trusted Technology Supplier & Distributor",
  description:
    "An independent supplier and distributor, sourcing, importing, exporting, and distributing quality technology products across the UAE and region.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aqstechnologies.com",
  contact: {
    location: "Dubai, UAE",
    phone: "+971 56 223 4115",
    phoneHref: "tel:+971562234115",
    email: "info@aqstechnologies.com",
    linkedin: "https://www.linkedin.com/",
    whatsapp:
      "https://wa.me/971562234115?text=Hello%20AQS%20Technologies%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products", menu: "products" },
    { href: "/partners", label: "Partners", menu: "partners" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact Us" },
  ],
  heroHighlights: [
    { title: "Genuine Products" },
    { title: "Reliable Supply" },
    { title: "Expert Consultation" },
    { title: "Competitive Pricing" },
  ],
  productCategories: [
    {
      title: "Access Control & Identification",
      slug: "access-control",
      href: "/products/access-control",
      image: "/images/category-access-control.png",
      blurb:
        "Readers, controllers, access cards, door hardware, and identity systems.",
      aboutBlurb:
        "Reliable access control, identity and security solutions for modern workplaces.",
      links: [
        {
          label: "Readers",
          slug: "readers",
          href: "/products/access-control/readers",
          image: "/images/product-readers.jpg",
          spec: "RFID / NFC wall readers",
        },
        {
          label: "Controllers",
          slug: "controllers",
          href: "/products/access-control/controllers",
          image: "/images/product-controllers.jpg",
          spec: "Door controller panels",
        },
        {
          label: "Access Cards",
          slug: "access-cards",
          href: "/products/access-control/access-cards",
          image: "/images/product-cards.jpg",
          spec: "Proximity cards & fobs",
        },
        {
          label: "Door Accessories",
          slug: "door-accessories",
          href: "/products/access-control/door-accessories",
          image: "/images/product-door.jpg",
          spec: "Locks, strikes & closers",
        },
        {
          label: "Enterprise Identity & Access Management",
          slug: "enterprise-identity",
          href: "/products/access-control/enterprise-identity",
          image: "/images/product-identity.jpg",
          spec: "Identity software platforms",
        },
      ],
    },
    {
      title: "Audio Video",
      slug: "audio-video",
      href: "/products/audio-video",
      image: "/images/category-audio-video.png",
      blurb:
        "Interactive displays, digital signage, video walls, conferencing kits and AV hardware.",
      aboutBlurb: "Displays, conferencing and collaboration systems.",
      links: [
        {
          label: "Interactive Displays",
          slug: "interactive-displays",
          href: "/products/audio-video/interactive-displays",
          image: "/images/product-displays.jpg",
          spec: "Touch collaboration screens",
        },
        {
          label: "Digital Signage",
          slug: "digital-signage",
          href: "/products/audio-video/digital-signage",
          image: "/images/product-signage.jpg",
          spec: "Commercial display screens",
        },
        {
          label: "Video Walls",
          slug: "video-walls",
          href: "/products/audio-video/video-walls",
          image: "/images/product-videowall.jpg",
          spec: "Thin-bezel video walls",
        },
        {
          label: "Conferencing Kit",
          slug: "conferencing-kit",
          href: "/products/audio-video/conferencing-kit",
          image: "/images/product-conferencing.jpg",
          spec: "Camera bars & mics",
        },
        {
          label: "Adapters & Converters",
          slug: "adapters-converters",
          href: "/products/audio-video/adapters-converters",
          image: "/images/product-adapters.jpg",
          spec: "HDMI, USB-C & switches",
        },
        {
          label: "Mixers",
          slug: "mixers",
          href: "/products/audio-video/mixers",
          image: "/images/product-mixers.jpg",
          spec: "Audio mixing hardware",
        },
      ],
    },
    {
      title: "Networking",
      slug: "networking",
      href: "/products/networking",
      image: "/images/category-networking.png",
      blurb:
        "Copper, fiber, speaker, HDMI, hybrid and specialized cables with accessories.",
      aboutBlurb: "Copper, fiber, speaker and specialised cables.",
      links: [
        {
          label: "Copper Cables & Accessories",
          slug: "copper-cables",
          href: "/products/networking/copper-cables",
          image: "/images/product-copper.jpg",
          spec: "Cat6 / Cat6A copper",
        },
        {
          label: "Fiber Cables & Accessories",
          slug: "fiber-cables",
          href: "/products/networking/fiber-cables",
          image: "/images/product-fiber.jpg",
          spec: "Single & multimode fiber",
        },
        {
          label: "Speaker Cables",
          slug: "speaker-cables",
          href: "/products/networking/speaker-cables",
          image: "/images/product-speaker.jpg",
          spec: "Install-grade speaker cable",
        },
        {
          label: "HDMI Cables",
          slug: "hdmi-cables",
          href: "/products/networking/hdmi-cables",
          image: "/images/product-hdmi.jpg",
          spec: "High-speed HDMI leads",
        },
        {
          label: "Hybrid Cables",
          slug: "hybrid-cables",
          href: "/products/networking/hybrid-cables",
          image: "/images/product-hybrid.jpg",
          spec: "Copper + fiber hybrids",
        },
      ],
    },
    {
      title: "Enclosures",
      slug: "enclosures",
      href: "/products/enclosures",
      image: "/images/category-enclosures.png",
      blurb: "Server racks, networking cabinets, open frames and specialized racks.",
      aboutBlurb: "Server racks, networking cabinets and specialised racks.",
      links: [
        {
          label: "Server Racks",
          slug: "server-racks",
          href: "/products/enclosures/server-racks",
          image: "/images/product-server-rack.jpg",
          spec: "Floor-standing cabinets",
        },
        {
          label: "Networking Racks",
          slug: "networking-racks",
          href: "/products/enclosures/networking-racks",
          image: "/images/product-network-rack.jpg",
          spec: "Data & AV cabinets",
        },
        {
          label: "Open Frame Racks",
          slug: "open-frame-racks",
          href: "/products/enclosures/open-frame-racks",
          image: "/images/product-open-rack.jpg",
          spec: "2-post & 4-post frames",
        },
        {
          label: "Specialized Racks",
          slug: "specialized-racks",
          href: "/products/enclosures/specialized-racks",
          image: "/images/product-special-rack.jpg",
          spec: "Wall-mount cabinets",
        },
      ],
    },
  ],
  partners: [
    {
      name: "HID",
      slug: "hid",
      description: "Access control and identity products.",
      aboutLine: "Access Control Products",
      href: "/products?brand=hid",
      logo: "/brands/hid.png",
      categorySlugs: ["access-control"],
    },
    {
      name: "Security Shells",
      slug: "security-shells",
      description: "Security and identity management products.",
      aboutLine: "Security Shells",
      href: "/products?brand=security-shells",
      logo: "/brands/security-shells.png",
      categorySlugs: ["access-control"],
    },
    {
      name: "Trend",
      slug: "trend",
      description: "Network and cable testing solutions.",
      aboutLine: "Network Testing Solutions",
      href: "/products?brand=trend",
      logo: "/brands/trend.png",
      categorySlugs: ["networking"],
    },
    {
      name: "KAYBE",
      slug: "kaybe",
      description: "Networking and enclosure solutions.",
      aboutLine: "Networking and Enclosures",
      href: "/products?brand=kaybe",
      logo: "/brands/kaybe.png",
      categorySlugs: ["enclosures"],
    },
  ],
  whyChoose: [
    {
      title: "Genuine Products",
      text: "We supply authentic products from leading technology brands.",
    },
    {
      title: "Reliable Supply",
      text: "Consistent stock and delivery support for workplace projects.",
    },
    {
      title: "Competitive Pricing",
      text: "Clear quotes that fit your specification and budget.",
    },
    {
      title: "Responsive Service",
      text: "A team that helps you specify, source, and follow through.",
    },
  ],
  blogs: [
    {
      title: "How Interactive Displays Are Transforming Modern Workplaces",
      href: "/blogs",
      image: "/images/blog-displays.jpg",
      date: "Oct 2026",
    },
    {
      title: "A Guide to Choosing the Right Access Control System",
      href: "/blogs",
      image: "/images/blog-access.jpg",
      date: "Oct 2026",
    },
    {
      title: "Understanding Different Types of Network Cables and Their Applications",
      href: "/blogs",
      image: "/images/blog-cables.jpg",
      date: "Sep 2026",
    },
  ],
  footer: {
    blurb:
      "AQS Technologies is an independent technology supplier and distributor serving workplaces across the UAE and region.",
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/products", label: "Products" },
      { href: "/partners", label: "Partners" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  about: {
    eyebrow: "About AQS Technologies",
    intro:
      "AQS Technologies is an independent supplier and distributor of premium access control, audio visual, networking and enclosure products from leading global brands, serving businesses across the UAE and region.",
    stats: [
      { value: "2020", label: "Year Established" },
      { value: "50+", label: "Projects Supplied" },
      { value: "20+", label: "Partner Brands" },
      { value: "100%", label: "Quality Focused" },
    ],
    storyEyebrow: "Who We Are",
    storyTitle: "About AQS Technologies",
    story: [
      "AQS Technologies LLC is an independent supplier and distributor of high-quality technology products from leading global brands. We specialise in Access Control & Identification, Audio Visual, Networking and Enclosures, helping businesses build secure, connected and modern workplaces.",
      "We work closely with system integrators, resellers, installers and end users to provide genuine products, reliable supply and expert support across the UAE and international markets.",
    ],
    highlights: [
      "Independent Supplier & Distributor",
      "Access Control Systems",
      "Wide Product Range",
      "Reliable Availability",
      "Technical Support",
      "Serving UAE & Region",
    ],
    categoryEyebrow: "Our Business Areas",
    categoryIntro:
      "We supply a complete range of technology products to meet the needs of modern businesses. From secure access to collaboration to reliable networking infrastructure.",
    brandsEyebrow: "Our Technology Partners",
    brandsTitle: "Global Brands We Work With",
    brandsIntro:
      "We supply and distribute genuine technology products from trusted global brands.",
    whyTitle: "Why Choose AQS Technologies",
    whyIntro:
      "We are committed to providing genuine products, reliable supply and value-driven solutions for our customers.",
    why: [
      {
        title: "Genuine Products",
        text: "We supply authentic products from trusted global brands.",
      },
      {
        title: "Reliable Supply",
        text: "Consistent stock and delivery support.",
      },
      {
        title: "Competitive Pricing",
        text: "Clear quotes that fit your business needs.",
      },
      {
        title: "Technical Support",
        text: "Expert guidance from specification to delivery.",
      },
    ],
    processEyebrow: "Our Process",
    processTitle: "How We Support Your Business",
    processIntro:
      "From product selection to delivery, we ensure a smooth and reliable experience.",
    process: [
      { title: "Requirement Understanding", text: "We listen first" },
      { title: "Product Selection", text: "The Right Products" },
      { title: "Competitive Pricing", text: "Quality Competitive Pricing" },
      { title: "Quality Assurance", text: "Genuine products you can trust" },
      { title: "Timely Delivery", text: "Reliable supply on schedule" },
      { title: "Ongoing Support", text: "Help after the sale" },
    ],
    regionTitle: "Serving UAE and the Region",
    regionText:
      "Based in Dubai, we supply technology products to businesses across the UAE and international markets through our trusted partners.",
    regionStats: [
      { value: "Dubai, UAE", label: "Head Office" },
      { value: "GCC", label: "Countries Served" },
      { value: "50+", label: "Projects" },
    ],
    ctaTitle: "Let's Build a Smarter, More Connected Workplace",
    ctaText:
      "Get in touch with our team for product availability, pricing and expert guidance.",
  },
  services: [
    {
      title: "Websites",
      description: "Fast, accessible marketing sites and web applications.",
    },
    {
      title: "Software",
      description: "Custom tools that fit how your team already works.",
    },
    {
      title: "Digital products",
      description: "Product design, build, and launch support.",
    },
  ],
} as const;
