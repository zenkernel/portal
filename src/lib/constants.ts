export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "ZENKERNEL",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Technology consulting, design, and implementation for modern digital platforms.",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export const fallbackServices = [
  {
    slug: "consult",
    title: "Consult",
    tagline: "Strategy & technical advisory",
    description:
      "We help you clarify goals, assess architecture, and build a practical roadmap before you invest in delivery.",
    highlights: [
      "Architecture review",
      "Cloud & platform strategy",
      "Team enablement",
      "Vendor evaluation",
    ],
  },
  {
    slug: "design",
    title: "Design",
    tagline: "Product & system design",
    description:
      "From user journeys to API contracts and data models — we design systems that scale with your business.",
    highlights: [
      "UX & product design",
      "Solution architecture",
      "API & data modeling",
      "Security by design",
    ],
  },
  {
    slug: "implement",
    title: "Implement",
    tagline: "Build, integrate & ship",
    description:
      "Hands-on engineering to deliver production-ready software — integrations, automation, and cloud-native platforms.",
    highlights: [
      "Full-stack development",
      "Cloud & DevOps",
      "System integration",
      "Observability & SRE",
    ],
  },
] as const;
