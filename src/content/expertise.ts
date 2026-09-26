import type { Service, SkillGroup } from "@/types/content";

export const services: Service[] = [
  {
    icon: "platform",
    title: "SaaS Platforms",
    description:
      "Multi-tenant products with strict data isolation, role-based access, subscription billing and the admin tooling teams need to operate them.",
    tags: ["Multi-tenancy", "RBAC", "Stripe", "Supabase RLS"],
  },
  {
    icon: "agent",
    title: "AI Products & Agents",
    description:
      "Grounded LLM features that earn their place: RAG pipelines, voice agents, AI receptionists and automated business workflows.",
    tags: ["LLMs", "RAG", "AI Agents", "Voice AI"],
  },
  {
    icon: "code",
    title: "Full-Stack Engineering",
    description:
      "Fast, typed interfaces in Next.js and React, backed by clean APIs in Node.js, Hono, tRPC or FastAPI and a well-modelled database.",
    tags: ["Next.js", "TypeScript", "Node.js", "FastAPI"],
  },
  {
    icon: "vision",
    title: "Machine Learning & Vision",
    description:
      "Computer vision, predictive analytics and reinforcement learning, with explainability built in so decisions can be trusted.",
    tags: ["YOLOv8", "XGBoost", "PyTorch", "SHAP"],
  },
];

export const marqueeStack: string[] = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "OpenAI",
  "Gemini",
  "PyTorch",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Docker",
  "Stripe",
  "Twilio",
  "AWS",
  "Vercel",
];

export const skillGroups: SkillGroup[] = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "React Native"] },
  { label: "Backend", items: ["Node.js", "Express", "FastAPI", "Hono", "tRPC", "GraphQL", "Laravel"] },
  { label: "AI & ML", items: ["LLMs", "RAG", "AI Agents", "YOLOv8", "OpenCV", "XGBoost", "PyTorch"] },
  { label: "Data & Cloud", items: ["PostgreSQL", "MongoDB", "Supabase", "Drizzle ORM", "Docker", "AWS S3"] },
];
