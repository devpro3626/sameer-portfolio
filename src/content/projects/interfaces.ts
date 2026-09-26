import type { ProjectEntry } from "./types";

export const interfaceProjects: ProjectEntry[] = [
  {
    slug: "gdpr-guardian",
    title: "GDPR Guardian",
    tagline: "Gamified privacy training",
    category: "web",
    summary:
      "Scenario-based GDPR training where users make data-handling decisions under time pressure to earn certification.",
    overview: [
      "Players face realistic workplace scenarios with a 15-second timer per decision, with instant breach alerts and explanations for mistakes.",
      "Certification requires 100% accuracy across 10 challenges drawn from 20 curated scenarios.",
    ],
    highlights: [
      "Easy and Hard difficulty modes",
      "Timed decisions with instant feedback",
      "Personalised certification",
      "Light and dark modes",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Gamification"],
    shots: [
      [1800, 794],
      [978, 434],
      [1000, 613],
    ],
  },
  {
    slug: "petwatch",
    title: "petWatch",
    tagline: "Missing pet & community sightings",
    category: "web",
    summary:
      "A platform for owners to list missing pets while the community reports sightings with geographic coordinates.",
    overview: [
      "Owners manage listings through a dashboard, and community members report sightings that appear on a map.",
      "It is built as a clean PHP MVC application with PDO prepared statements, sanitised output and automatic image compression.",
    ],
    highlights: [
      "Role-based owner and community access",
      "Location-based sighting reports",
      "Pagination and SQL filtering",
      "GD-based image resizing",
    ],
    stack: ["PHP", "MVC", "SQLite", "PDO", "GD Library"],
    shots: [
      [1523, 882],
      [1525, 873],
    ],
  },
  {
    slug: "cs2-guessing-game",
    title: "CS2 Skin Guesser",
    tagline: "Daily Counter-Strike guessing game",
    category: "web",
    summary:
      "A daily puzzle game styled on the classic CS menu, with attribute comparison, progressive clues and date-seeded challenges.",
    overview: [
      "Each guess is compared on wear, collection, rarity, weapon type, colour and knife status, using indicators that don't rely on colour alone.",
      "Daily mode is seeded by calendar date and persists across refreshes, while Unlimited mode offers endless practice.",
    ],
    highlights: [
      "Autocomplete skin search",
      "Multi-attribute comparison engine",
      "Progressive clue unlocking",
      "Daily and unlimited modes",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "State Management"],
    shots: [
      [1018, 665],
      [996, 556],
    ],
  },
  {
    slug: "picker-wheel",
    title: "Picker Wheel",
    tagline: "Discord & OBS streaming tool",
    category: "web",
    summary:
      "A physics-based spinning wheel for giveaways, with a dedicated OBS mode controlled from a separate browser tab.",
    overview: [
      "Cross-tab synchronisation lets streamers control the wheel from Chrome while a clean OBS browser source displays it.",
      "All sound is synthesised with the Web Audio API, so it runs fully offline.",
    ],
    highlights: [
      "Realistic easing and deceleration",
      "Cross-tab OBS control",
      "Synthesised tick and fanfare audio",
      "Persistent settings",
    ],
    stack: ["JavaScript", "Web Audio API", "Cross-Tab Sync", "LocalStorage"],
    shots: [
      [1902, 847],
      [1892, 845],
    ],
  },
  {
    slug: "human-design-bodygraph",
    title: "Bodygraph",
    tagline: "Interactive Human Design charts",
    category: "web",
    summary:
      "A profile platform that turns birth information into an interactive bodygraph chart with detailed personality data.",
    overview: [
      "The chart visualises active centres, channels and gates alongside planetary placements and profile properties.",
    ],
    highlights: [
      "Bodygraph visualisation",
      "Type, strategy, authority and profile breakdown",
      "Planetary placement tables",
    ],
    stack: ["JavaScript", "HTML5", "CSS3", "Data Visualisation"],
    shots: [
      [1898, 862],
      [1896, 857],
    ],
  },
  {
    slug: "web-programming-platform",
    title: "Joke & Film Platforms",
    tagline: "Secure PHP content applications",
    category: "web",
    summary: "Two MVC content platforms with authentication, RBAC, moderation and a normalised 3NF database.",
    overview: [
      "The Internet Joke Database handles submissions, search, moderation and user banning with bcrypt hashing and session-based access.",
      "The film review platform extends it with TinyMCE rich text, object-oriented models and relational integrity checks.",
    ],
    highlights: [
      "PDO prepared statements",
      "Role-based admin access",
      "3NF database design",
      "XSS and SQL injection testing",
    ],
    stack: ["PHP", "MySQL", "MVC", "PDO", "TinyMCE"],
    shots: [
      [1920, 878],
      [1920, 878],
    ],
  },
  {
    slug: "bean-boutique",
    title: "Bean Boutique",
    tagline: "Responsive coffee e-commerce site",
    category: "web",
    summary:
      "A multi-page coffee shop site with cart, offers, events and locations, validated against W3C and accessibility standards.",
    overview: [
      "It was designed from wireframes and built with jQuery, Bootstrap concepts and Slick Carousel, then tested with NVDA and VoiceOver.",
    ],
    highlights: [
      "Nine page multi-page experience",
      "Cart and product presentation",
      "W3C validation and screen reader testing",
    ],
    stack: ["HTML5", "CSS3", "jQuery", "Bootstrap"],
    shots: [
      [1397, 836],
      [1406, 845],
    ],
  },
  {
    slug: "brewed-by-sofia",
    title: "Brewed By Sofia",
    tagline: "Premium coffee brand website",
    category: "web",
    summary:
      "A responsive coffee brand site with a shopping cart, discount modal and scroll animations, tested for accessibility.",
    overview: [
      "It is built on semantic HTML5 with accessible forms and focus states, and tested with the NVDA screen reader and W3C validators.",
    ],
    highlights: [
      "Mobile hamburger navigation",
      "Interactive cart and marketing modal",
      "AOS scroll animation",
    ],
    stack: ["HTML5", "CSS3", "JavaScript", "AOS"],
    shots: [
      [1585, 833],
      [1563, 751],
    ],
  },
];
