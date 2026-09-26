import { profile } from "@/content/profile";

export const SITE_URL = "https://www.sameerbabar.com";

export const SITE_TITLE = `${profile.name} — ${profile.role}`;

export const SITE_DESCRIPTION =
  "Sameer Babar is a full-stack developer and AI engineer building multi-tenant SaaS platforms, AI agents, RAG pipelines and automation with Next.js, Node.js and Python for clients in 40+ countries.";

export const SITE_KEYWORDS = [
  "Sameer Babar",
  "Full-Stack Developer",
  "AI Engineer",
  "Next.js Developer",
  "React Developer",
  "SaaS Developer",
  "AI Agents",
  "RAG",
  "LLM Integration",
  "Node.js",
  "Python",
  "FastAPI",
  "Freelance Developer",
  "Lahore",
  "Pakistan",
];

export function absoluteUrl(path = "/"): string {
  return new URL(path, SITE_URL).toString();
}
