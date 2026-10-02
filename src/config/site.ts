export const siteConfig = {
  name: "AQS Technologies",
  description: "The new AQS Technologies website is coming soon.",
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
