export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  x: number;
  y: number;
}

export const ARCHITECTURE_VIEWBOX = { width: 1000, height: 560, nodeWidth: 200 } as const;

export const clientNodes: ArchitectureNode[] = [
  {
    id: "web",
    title: "Web app",
    subtitle: "Dashboards & portals",
    tech: ["Next.js", "React", "Tailwind CSS"],
    x: 110,
    y: 100,
  },
  {
    id: "mobile",
    title: "Mobile app",
    subtitle: "iOS & Android",
    tech: ["React Native", "Expo"],
    x: 110,
    y: 280,
  },
  {
    id: "channels",
    title: "Voice & messaging",
    subtitle: "Calls, SMS & email",
    tech: ["Twilio", "Resend"],
    x: 110,
    y: 460,
  },
];

export const coreNode: ArchitectureNode = {
  id: "api",
  title: "API & auth",
  subtitle: "Multi-tenant · RBAC · webhooks",
  tech: ["Node.js", "FastAPI", "tRPC", "Hono"],
  x: 500,
  y: 280,
};

export const serviceNodes: ArchitectureNode[] = [
  {
    id: "ai",
    title: "AI layer",
    subtitle: "LLMs, RAG & agents",
    tech: ["OpenAI", "Gemini", "Hugging Face"],
    x: 890,
    y: 100,
  },
  {
    id: "data",
    title: "Data",
    subtitle: "Isolated per tenant",
    tech: ["PostgreSQL", "Supabase", "MongoDB"],
    x: 890,
    y: 280,
  },
  {
    id: "integrations",
    title: "Integrations",
    subtitle: "Payments & infrastructure",
    tech: ["Stripe", "AWS", "Docker"],
    x: 890,
    y: 460,
  },
];
