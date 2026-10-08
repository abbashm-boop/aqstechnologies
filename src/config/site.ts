export const siteConfig = {
  name: "AQS Technologies LLC",
  legalName: "AQS Technologies LLC",
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
      "https://wa.me/971562234115?text=Hello%20AQS%20Technologies%20LLC%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.",
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
      image: "/images/category-hid.png",
      blurb:
        "HID readers, Aero controllers, Seos credentials, Amico biometrics, and iSecure IAM.",
      aboutBlurb:
        "Reliable access control, identity and security solutions for modern workplaces.",
      links: [
        {
          label: "HID Signo Readers",
          slug: "readers",
          href: "/products/access-control/readers",
          image: "/images/product-readers.png",
          spec: "HID Signo 40 RFID / mobile",
        },
        {
          label: "HID Aero Controllers",
          slug: "controllers",
          href: "/products/access-control/controllers",
          image: "/images/product-controllers.png",
          spec: "HID Aero X1100 door controller",
        },
        {
          label: "HID Seos Cards",
          slug: "access-cards",
          href: "/products/access-control/access-cards",
          image: "/images/product-cards.png",
          spec: "Seos + iCLASS + Prox credentials",
        },
        {
          label: "HID Amico Readers",
          slug: "door-accessories",
          href: "/products/access-control/door-accessories",
          image: "/images/product-door.png",
          spec: "HID Amico biometric face readers",
        },
        {
          label: "iSecure IAM",
          slug: "enterprise-identity",
          href: "/products/access-control/enterprise-identity",
          image: "/images/product-identity.png",
          spec: "Security Shells identity platform",
        },
      ],
    },
    {
      title: "Audio Video",
      slug: "audio-video",
      href: "/products/audio-video",
      image: "/images/category-av.png",
      blurb:
        "Interactive displays, digital signage, conferencing bars, adapters and mixers.",
      aboutBlurb: "Displays, conferencing and collaboration systems.",
      links: [
        {
          label: "Interactive Displays",
          slug: "interactive-displays",
          href: "/products/audio-video/interactive-displays",
          image: "/images/product-displays.png",
          spec: "Logitech Rally Board 65",
        },
        {
          label: "Digital Signage",
          slug: "digital-signage",
          href: "/products/audio-video/digital-signage",
          image: "/images/product-signage.png",
          spec: "Rally Board 65 on mobile cart",
        },
        {
          label: "Video Walls",
          slug: "video-walls",
          href: "/products/audio-video/video-walls",
          image: "/images/product-videowall.png",
          spec: "Large-format collaboration display",
        },
        {
          label: "Conferencing Kit",
          slug: "conferencing-kit",
          href: "/products/audio-video/conferencing-kit",
          image: "/images/product-conferencing.png",
          spec: "Logitech Rally Bar",
        },
        {
          label: "Adapters & Converters",
          slug: "adapters-converters",
          href: "/products/audio-video/adapters-converters",
          image: "/images/product-adapters.png",
          spec: "StarTech USB to HDMI",
        },
        {
          label: "Mixers",
          slug: "mixers",
          href: "/products/audio-video/mixers",
          image: "/images/product-mixers.png",
          spec: "Yamaha MG10XU",
        },
      ],
    },
    {
      title: "Networking",
      slug: "networking",
      href: "/products/networking",
      image: "/images/category-trend.png",
      blurb:
        "TREND Networks copper and fiber certifiers, transmission testers, and PoE tools.",
      aboutBlurb: "TREND Networks cable certifiers and network testers.",
      links: [
        {
          label: "LanTEK IV-S",
          slug: "lantek-iv-s",
          href: "/products/networking/lantek-iv-s",
          image: "/images/product-copper.png",
          spec: "Copper cable certifier up to Cat 8",
        },
        {
          label: "FiberTEK IV",
          slug: "fibertek-iv",
          href: "/products/networking/fibertek-iv",
          image: "/images/product-fiber.png",
          spec: "MM / SM fiber certification kit",
        },
        {
          label: "SignalTEK NT",
          slug: "signaltek-nt",
          href: "/products/networking/signaltek-nt",
          image: "/images/product-speaker.png",
          spec: "Gigabit network transmission tester",
        },
        {
          label: "NaviTEK NT",
          slug: "navitek-nt",
          href: "/products/networking/navitek-nt",
          image: "/images/product-hdmi.png",
          spec: "Copper & fiber network troubleshooter",
        },
        {
          label: "PoE PRO",
          slug: "poe-pro",
          href: "/products/networking/poe-pro",
          image: "/images/product-hybrid.png",
          spec: "PoE / PoE++ load tester",
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
      name: "TREND",
      slug: "trend",
      description: "Network and cable testing solutions.",
      aboutLine: "TREND by STEPWELL",
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
      "AQS Technologies LLC is an independent technology supplier and distributor serving workplaces across the UAE and region.",
    quickLinks: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/products", label: "Products" },
      { href: "/partners", label: "Partners" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  about: {
    eyebrow: "About Us",
    intro:
      "Founded in 2022, AQS Technologies LLC is a sister concern of AQS International Trading LLC, a dynamic and diversified independant distribution and supply company based in Dubai, UAE. With a strong commitment to excellence, we specialize in sourcing, importing, exporting, and distributing a wide range of high-quality products across various industries, including - Data & Communication Cables, Control Cables, LED Screens and AV Accessories, Access Control Readers / Controllers / Cards, Hard drives and more.",
    story:
      "Over the years, we’ve built strong partnerships with manufacturers, suppliers, and system partners around the region, ensuring that our customers receive top-tier products at competitive prices.",
    stats: [
      { value: "2022", label: "Year Established" },
      { value: "50+", label: "Projects Supplied" },
      { value: "20+", label: "Partner Brands" },
      { value: "100%", label: "Quality Focused" },
    ],
    highlights: [
      "Data & Communication Cables",
      "Control Cables",
      "LED Screens and AV Accessories",
      "Access Control Readers / Controllers / Cards",
      "Hard drives and more",
    ],
    vision:
      "To become a trusted regional distributor in advanced technology infrastructure, AV and smart security products.",
    mission:
      "To deliver innovative, reliable, and high performance technology products through strategic partnerships and customer centric approach.",
    categoryEyebrow: "Our Business Areas",
    categoryIntro:
      "We supply a complete range of technology products to meet the needs of modern businesses. From secure access to collaboration to reliable networking infrastructure.",
    brandsEyebrow: "Our Technology Partners",
    brandsTitle: "Global Brands We Work With",
    brandsIntro:
      "We supply and distribute genuine technology products from trusted global brands.",
    whyTitle: "Why Choose Us?",
    why: [
      {
        title: "Diverse Product Range",
        text: "From everyday Networking, Security and AV goods to specialized & hybrid products, we meet a broad spectrum of supply needs.",
      },
      {
        title: "Global Network",
        text: "Our international partnerships allow us to operate efficiently across borders and deliver on-time products regionally.",
      },
      {
        title: "Customer-Centric Approach",
        text: "We believe in building long-term relationships through transparency, trust, and responsive service.",
      },
      {
        title: "Quality & Compliance",
        text: "We adhere to international standards to ensure that every product meets quality and regulatory benchmarks.",
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
