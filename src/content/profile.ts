import type { Profile } from "@/types/content";

export const profile: Profile = {
  name: "Sameer Babar",
  headline: "I build SaaS platforms and AI products that hold up in production.",
  firstName: "Sameer",
  lastName: "Babar",
  role: "Full-Stack Developer & AI Engineer",
  location: "Lahore, Pakistan",
  timeZone: "Asia/Karachi",
  email: "smeerai.dev@gmail.com",
  phone: "+92 323 1227782",
  resume: "/sameer-babar-resume.pdf",
  intro:
    "Full-stack developer and AI engineer with 4+ years of experience shipping multi-tenant SaaS, LLM features and automation for clients in over 40 countries.",
  bio: [
    "I work across the whole stack: React and Next.js on the front end, Node.js, Python and FastAPI behind it, and LLMs, RAG and AI agents wherever they genuinely improve the product.",
    "Most of my work is for founders and teams who need a system that stays secure and maintainable once real users arrive, with tenant isolation, role-based access, tested deployments and a clean hand-over.",
  ],
  stats: [
    { value: 150, suffix: "+", label: "Projects delivered" },
    { value: 40, suffix: "+", label: "Countries served" },
    { value: 4, suffix: "+", label: "Years of experience" },
  ],
  socials: [
    { label: "LinkedIn", handle: "in/sameer-babar", href: "https://linkedin.com/in/sameer-babar" },
    { label: "GitHub", handle: "ScientistSameer", href: "https://github.com/ScientistSameer" },
  ],
};
