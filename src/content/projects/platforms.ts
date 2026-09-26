import type { ProjectEntry } from "./types";

export const platformProjects: ProjectEntry[] = [
  {
    slug: "chindela",
    title: "Chindela",
    tagline: "AI-powered children's storybook platform",
    category: "saas",
    summary:
      "A subscription reading platform for children with an AI tutor, parental oversight and a full content management system.",
    overview: [
      "Chindela gives administrators, parents and children their own experiences, with child-friendly PIN login, story reading, diary submissions and progress tracking.",
      "A Gemini-powered tutor reviews diary entries in text, image or audio, offers gentle corrections and asks reflective questions. Parents can review the complete history of feedback.",
    ],
    highlights: [
      "Dual parent and child authentication with PIN login",
      "AI tutor feedback on text, image and audio entries",
      "Admin CMS for stories, lessons, characters and themes",
      "Media library on AWS S3",
      "Stripe subscriptions with optional contributions",
      "Deployment readiness guide and client documentation",
    ],
    stack: ["React", "Node.js", "TypeScript", "Gemini", "Stripe", "AWS S3", "MySQL", "Resend"],
    shots: [
      [1104, 565],
      [1431, 948],
    ],
  },
  {
    slug: "linked-marketplace",
    title: "Linked",
    tagline: "Service marketplace & job management",
    category: "saas",
    summary:
      "A marketplace connecting homeowners and businesses with verified service providers, from discovery and booking to live tracking and reviews.",
    overview: [
      "Linked supports 24 service categories, with provider onboarding covering rates, service areas and licence details, plus state-specific licensing resources for all 50 U.S. states.",
      "Jobs move through Pending, Accepted, On The Way, Arrived and Completed, with each transition authorised on the server, along with job-specific real-time chat and live GPS tracking.",
    ],
    highlights: [
      "Provider onboarding with Verified and Pro badges",
      "Server-authorised job lifecycle",
      "Real-time chat per job with automated reminders",
      "Map-based job discovery and live GPS tracking",
      "Reviews restricted to completed jobs",
      "Checkout, payments and downloadable job summaries",
    ],
    stack: ["React", "TypeScript", "Real-time Chat", "Maps & Geolocation", "Payments", "RBAC"],
    shots: [
      [1006, 698],
      [853, 804],
      [873, 818],
      [852, 806],
      [728, 806],
    ],
  },
  {
    slug: "cognicall-ai",
    title: "CogniCall AI",
    tagline: "Email, SMS, VoIP & AI voice automation",
    category: "saas",
    summary:
      "A communication platform that unifies email, SMS and VoIP with AI voice bots for lead qualification, OTP calls and appointment booking.",
    overview: [
      "The platform combines messaging, contacts, scheduling and SIP / VoIP infrastructure with conversational voice agents that qualify leads as hot, warm or cold and transfer them to live agents.",
      "It is deployed behind Nginx with SSL, HSTS, UFW and WireGuard, with backup, monitoring and disaster-recovery planning built in.",
    ],
    highlights: [
      "Multi-channel email, SMS and voice",
      "AI voice bots with STT, TTS and branching scripts",
      "Automated lead-calling campaigns with scoring",
      "SIP numbers, routing, voicemail and recordings",
      "Postal SMTP with regional SMS routing",
      "Hardened infrastructure with WireGuard VPN",
    ],
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Twilio", "FreeSWITCH", "WebRTC", "Docker", "Nginx"],
    shots: [[2000, 1091]],
  },
  {
    slug: "orderbay",
    title: "OrderBay",
    tagline: "Voice-driven AI grocery shopping",
    category: "ai",
    summary:
      "A voice-first grocery system spanning a React dashboard, a Manifest V3 extension and Playwright automation that builds retailer carts.",
    overview: [
      "Users build grocery lists by speaking naturally. Items are categorised with a 400+ term map, spelling is corrected with Levenshtein distance, and filler words are filtered out.",
      "A browser extension drives a state machine across Walmart and Instacart adapters, while a containerised Python backend handles sessions and cart automation.",
    ],
    highlights: [
      "Voice list creation with Web Speech API and ElevenLabs",
      "Intelligent categorisation and spelling correction",
      "Manifest V3 extension with retailer DOM adapters",
      "State-machine-driven shopping workflow",
      "Playwright automation in Dockerised microservices",
      "JWT-secured REST APIs with MongoDB sessions",
    ],
    stack: ["React", "TypeScript", "Manifest V3", "Python", "Flask", "Playwright", "MongoDB", "Docker"],
    shots: [[1581, 802]],
  },
  {
    slug: "carhub",
    title: "CarHub",
    tagline: "SaaS booking & garage management",
    category: "saas",
    summary:
      "An architecture review and production roadmap for a cross-platform automotive booking app built with Expo and Supabase.",
    overview: [
      "I reviewed the complete Expo / React Native and Supabase codebase, covering auth, bookings, vehicles, availability, documents and notifications.",
      "The outcome was a multi-tenant provider architecture and a production-readiness roadmap for turning the MVP into a subscription-ready SaaS.",
    ],
    highlights: [
      "Full codebase and architecture assessment",
      "Multi-tenant design for garages and service providers",
      "Supabase RLS and role-based access review",
      "Secure handling of vehicle documents",
      "Provider dashboard and scheduling architecture",
      "GDPR-oriented data protection evaluation",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "RLS"],
    shots: [
      [1430, 709],
      [458, 789],
    ],
  },
  {
    slug: "clear-health-portal",
    title: "Clear Health Group",
    tagline: "Healthcare compliance & employee portal",
    category: "saas",
    summary:
      "A role-based portal for employee compliance, certificates, site visits and appointment scheduling across client companies.",
    overview: [
      "Employers and Clear Health administrators each get their own dashboards, with company-level data isolation so employers only ever see their own records.",
      "The portal tracks hearing tests, respirator fit testing and first-aid certificates through current, expiring and expired states, and delivered 32 of 33 change requests.",
    ],
    highlights: [
      "Company-level data isolation",
      "CSV bulk roster upload with validation and mapping",
      "Compliance tracking with expiry states",
      "Certificate upload and PDF download",
      "Site visits and appointment slots with 48-hour lockout",
      "Make / Zapier-ready automation",
    ],
    stack: ["Softr", "Airtable", "Make", "Zapier"],
    shots: [
      [967, 560],
      [978, 465],
      [1045, 304],
    ],
  },
];
