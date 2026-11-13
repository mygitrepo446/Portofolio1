export type Project = {
  slug: string;
  path: string;
  title: string;
  brand: string;
  category: string;
  blurb: string;
  tags: string[];
  problem: string;
  approach: string;
  result: string;
};

export const projects: Project[] = [
  {
    slug: "nordloom",
    path: "/demos/nordloom",
    title: "Nordloom",
    brand: "Shopify storefront",
    category: "Shopify",
    blurb:
      "Outdoor-gear storefront demo — collections, product detail, and cart drawer tuned for conversion.",
    tags: ["Shopify", "Theme UX", "Liquid patterns", "React"],
    problem:
      "A fictional outdoor brand needed a storefront that feels premium without slowing shoppers down.",
    approach:
      "Built a Shopify-style theme shell with clear merchandising hierarchy, sticky add-to-cart, and a lightweight drawer cart.",
    result:
      "Interactive sample clients can click through — browse, open a product, and add items without leaving the demo.",
  },
  {
    slug: "signaldraft",
    path: "/demos/signaldraft",
    title: "SignalDraft",
    brand: "AI brief studio",
    category: "Python / AI",
    blurb:
      "AI SaaS that turns messy notes into structured content briefs with tone controls and export.",
    tags: ["Python", "LLM UX", "SaaS", "Dashboard"],
    problem:
      "Teams waste time turning scattered notes into briefs that writers can actually use.",
    approach:
      "Mocked a Python/AI pipeline behind a focused UI — input notes, choose tone, generate a structured brief with sections and next steps.",
    result:
      "A polished feature demo showing how an AI product feels in a real SaaS dashboard.",
  },
  {
    slug: "harborflow",
    path: "/demos/harborflow",
    title: "Harborflow",
    brand: "Ops platform",
    category: "Web / SaaS",
    blurb:
      "Multi-view SaaS shell — pipeline board, activity feed, and role-aware filters for ops teams.",
    tags: ["Full-stack", "SaaS UI", "TypeScript", "Dashboards"],
    problem:
      "Ops leads need one place to see work status without bouncing across tools.",
    approach:
      "Designed a clean SaaS platform demo with kanban stages, filters, and a live activity rail using sample data.",
    result:
      "A credible product surface that shows full-stack product sense — layout, state, and workflow clarity.",
  },
];

/** Prefer your real Upwork profile URL when you have it. */
export const upworkUrl =
  "https://www.upwork.com/nx/search/talent/?q=Rebecca%20Mansell";

export const linkedInUrl = "https://www.linkedin.com/in/sean-willis-bb6704449/";

export const profile = {
  name: "Rebecca Mansell",
  role: "AI Full-Stack Developer",
  focus: "Web · Shopify · SaaS",
  support:
    "I build polished product surfaces — storefronts, AI features, and SaaS platforms clients can actually use.",
  linkedInUrl,
  upworkUrl,
};
