import type { Credential, Experience } from "@/types/content";

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer & AI Engineer",
    company: "Fiverr",
    context: "Independent Technical Consultant",
    period: "Apr 2023 — Present",
    points: [
      "Delivered 150+ end-to-end software projects for clients across 40+ countries.",
      "Architected full-stack platforms with secure auth, RBAC, multi-tenancy, REST APIs and dashboards.",
      "Built LLM applications, AI agents, RAG pipelines, voice systems and computer vision models.",
      "Shipped production integrations with Stripe, Twilio, Plaid, brokerage APIs, Docker and Nginx.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Xpert Prime",
    context: "Agile product team",
    period: "Jul 2025 — Jun 2026",
    points: [
      "Engineered enterprise modules with the MERN stack, PHP and Laravel.",
      "Optimised REST APIs, schemas and queries to speed up client-side rendering.",
      "Turned complex business specifications into React and TypeScript interfaces.",
      "Integrated microservices, payment gateways and third-party APIs under code review.",
    ],
  },
  {
    role: "Summer Intern",
    company: "Ustadam",
    context: "ERP & business systems",
    period: "Jun 2024 — Aug 2024",
    points: [
      "Customised and deployed enterprise modules on the Odoo platform.",
      "Worked on business workflow analysis and relational database design.",
    ],
  },
];

export const education: Credential = {
  title: "BSc Computer Science",
  issuer: "University of Engineering and Technology (UET), Lahore",
};

export const certifications: Credential[] = [
  {
    title: "Generative AI Application Developer — Top Performer",
    issuer: "Pak Angels / ASPIRE Pakistan",
    year: "2025",
  },
  {
    title: "PMI Kickoff — Agile & Predictive",
    issuer: "Project Management Institute",
    year: "2025",
  },
  {
    title: "Python & Machine Learning Advanced",
    issuer: "KICS, UET Lahore",
    year: "2023",
  },
];
