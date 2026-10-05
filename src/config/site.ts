export const siteConfig = {
  name: "AQS Technologies",
  legalName: "AQS International Trading LLC",
  tagline: "Your Trusted Technology Supplier & Distributor",
  description:
    "An independent supplier and distributor, sourcing, importing, exporting, and distributing quality technology products across the UAE and region.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aqstechnologies.com",
  contact: {
    location: "Dubai, UAE",
    phone: "+971 4 123 4567",
    phoneHref: "tel:+97141234567",
    email: "info@aqstechnologies.com",
    linkedin: "https://www.linkedin.com/",
    whatsapp:
      "https://wa.me/97141234567?text=Hello%20AQS%20Technologies%2C%20I%20would%20like%20to%20enquire%20about%20your%20products.",
  },
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products", menu: "products" },
    { href: "/brands", label: "Brands" },
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
      href: "/products#access-control",
      image: "/images/category-access-control.jpg",
      blurb:
        "Readers, controllers, access cards, door hardware, and identity systems.",
      aboutBlurb:
        "Reliable access control, identity and security solutions for modern workplaces.",
      links: [
        {
          label: "Readers",
          href: "/products#access-control",
          image: "/images/product-readers.jpg",
          spec: "RFID / NFC wall readers",
        },
        {
          label: "Controllers",
          href: "/products#access-control",
          image: "/images/product-controllers.jpg",
          spec: "Door controller panels",
        },
        {
          label: "Access Cards",
          href: "/products#access-control",
          image: "/images/product-cards.jpg",
          spec: "Proximity cards & fobs",
        },
        {
          label: "Door Accessories",
          href: "/products#access-control",
          image: "/images/product-door.jpg",
          spec: "Locks, strikes & closers",
        },
        {
          label: "Enterprise Identity & Access Management",
          href: "/products#access-control",
          image: "/images/product-identity.jpg",
          spec: "Identity software platforms",
        },
      ],
    },
    {
      title: "Audio Video",
      href: "/products#audio-video",
      image: "/images/category-audio-video.jpg",
      blurb:
        "Interactive displays, digital signage, video walls, conferencing kits and AV hardware.",
      aboutBlurb: "Displays, conferencing and collaboration systems.",
      links: [
        {
          label: "Interactive Displays",
          href: "/products#audio-video",
          image: "/images/product-displays.jpg",
          spec: "Touch collaboration screens",
        },
        {
          label: "Digital Signage",
          href: "/products#audio-video",
          image: "/images/product-signage.jpg",
          spec: "Commercial display screens",
        },
        {
          label: "Video Walls",
          href: "/products#audio-video",
          image: "/images/product-videowall.jpg",
          spec: "Thin-bezel video walls",
        },
        {
          label: "Conferencing Kit",
          href: "/products#audio-video",
          image: "/images/product-conferencing.jpg",
          spec: "Camera bars & mics",
        },
        {
          label: "Adapters & Converters",
          href: "/products#audio-video",
          image: "/images/product-adapters.jpg",
          spec: "HDMI, USB-C & switches",
        },
        {
          label: "Mixers",
          href: "/products#audio-video",
          image: "/images/product-mixers.jpg",
          spec: "Audio mixing hardware",
        },
      ],
    },
    {
      title: "Networking",
      href: "/products#networking",
      image: "/images/category-networking.jpg",
      blurb:
        "Copper, fiber, speaker, HDMI, hybrid and specialized cables with accessories.",
      aboutBlurb: "Copper, fiber, speaker and specialised cables.",
      links: [
        {
          label: "Copper Cables & Accessories",
          href: "/products#networking",
          image: "/images/product-copper.jpg",
          spec: "Cat6 / Cat6A copper",
        },
        {
          label: "Fiber Cables & Accessories",
          href: "/products#networking",
          image: "/images/product-fiber.jpg",
          spec: "Single & multimode fiber",
        },
        {
          label: "Speaker Cables",
          href: "/products#networking",
          image: "/images/product-speaker.jpg",
          spec: "Install-grade speaker cable",
        },
        {
          label: "HDMI Cables",
          href: "/products#networking",
          image: "/images/product-hdmi.jpg",
          spec: "High-speed HDMI leads",
        },
        {
          label: "Hybrid Cables",
          href: "/products#networking",
          image: "/images/product-hybrid.jpg",
          spec: "Copper + fiber hybrids",
        },
      ],
    },
    {
      title: "Enclosures",
      href: "/products#enclosures",
      image: "/images/category-enclosures.jpg",
      blurb: "Server racks, networking cabinets, open frames and specialized racks.",
      aboutBlurb: "Server racks, networking cabinets and specialised racks.",
      links: [
        {
          label: "Server Racks",
          href: "/products#enclosures",
          image: "/images/product-server-rack.jpg",
          spec: "Floor-standing cabinets",
        },
        {
          label: "Networking Racks",
          href: "/products#enclosures",
          image: "/images/product-network-rack.jpg",
          spec: "Data & AV cabinets",
        },
        {
          label: "Open Frame Racks",
          href: "/products#enclosures",
          image: "/images/product-open-rack.jpg",
          spec: "2-post & 4-post frames",
        },
        {
          label: "Specialized Racks",
          href: "/products#enclosures",
          image: "/images/product-special-rack.jpg",
          spec: "Wall-mount cabinets",
        },
      ],
    },
  ],
  partners: [
    {
      name: "HID",
      description: "Access control and identity products.",
      aboutLine: "Access Control Products",
      href: "/partners#hid",
      logo: "/brands/hid.png",
    },
    {
      name: "Security Shells",
      description: "Security and identity management products.",
      aboutLine: "Security Shells",
      href: "/partners#security-shells",
      logo: "/brands/security-shells.png",
    },
    {
      name: "Trend",
      description: "Network and cable testing solutions.",
      aboutLine: "Network Testing Solutions",
      href: "/partners#trend",
      logo: "/brands/trend.png",
    },
    {
      name: "KAYBE",
      description: "Networking and enclosure solutions.",
      aboutLine: "Networking and Enclosures",
      href: "/partners#kaybe",
      logo: "/brands/kaybe.png",
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
      { href: "/brands", label: "Brands" },
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
