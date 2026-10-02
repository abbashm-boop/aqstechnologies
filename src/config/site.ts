export const siteConfig = {
  name: "AQS Technologies",
  description:
    "AQS Technologies builds websites, software, and digital products for growing businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aqstechnologies.com",
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
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
