import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "Design System Starter",
    description: "A reusable component library powered by shadcn/ui and Tailwind themes.",
    tags: ["React", "TypeScript", "shadcn/ui"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    title: "Realtime Dashboard",
    description: "Next.js + WebSockets dashboard with optimistic updates and charts.",
    tags: ["Next.js", "WS", "Charts"],
    image: "https://images.unsplash.com/photo-1551281044-8b59adf6f148?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
  {
    title: "Headless Commerce",
    description: "Type‑safe storefront with tRPC, Stripe, and server components.",
    tags: ["tRPC", "Stripe", "RSC"],
    image: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1200&auto=format&fit=crop",
    link: "https://example.com",
  },
];

export const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};