export interface ProcessStep {
  title: string;
  description: string;
  icon: "discover" | "architect" | "build" | "ai" | "launch";
}

export const processSteps: ProcessStep[] = [
  {
    icon: "discover",
    title: "Discover",
    description: "Map goals, users and constraints into a clear scope and technical plan.",
  },
  {
    icon: "architect",
    title: "Architect",
    description: "Design the data model, tenancy, auth and integrations before features.",
  },
  {
    icon: "build",
    title: "Build",
    description: "Ship typed, tested features in short iterations with visible progress.",
  },
  {
    icon: "ai",
    title: "Integrate AI",
    description: "Add LLMs, RAG or agents where they measurably improve the product.",
  },
  {
    icon: "launch",
    title: "Launch & hand over",
    description: "Deploy, monitor and document a system your team can confidently own.",
  },
];
