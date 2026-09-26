import type { ProjectEntry } from "./types";

export const gameProjects: ProjectEntry[] = [
  {
    slug: "keep-it-rolling",
    title: "Keep It Rolling",
    tagline: "Published dice & card strategy game",
    category: "games",
    summary:
      "A risk-and-reward dice game with 60+ unlockable cards, built, packaged, trailered and published end to end.",
    overview: [
      "Players roll six coloured dice to match card requirements, then decide whether to bank points or keep rolling and risk busting.",
      "I handled the gameplay systems, visuals, audio, packaging, trailer production and promotion.",
    ],
    highlights: [
      "60+ cards with combination requirements",
      "Drag-and-drop dice placement",
      "Progressive card unlocking",
      "Resolution scaling and display modes",
    ],
    stack: ["Python", "Pygame", "Game Design", "Audio"],
    links: [{ label: "Play on itch.io", href: "https://nickace9.itch.io/keep-it-trolling" }],
    shots: [
      [794, 496],
      [794, 794],
      [794, 495],
      [747, 1000],
      [794, 495],
      [794, 495],
    ],
  },
  {
    slug: "herbfarm",
    title: "Herbfarm",
    tagline: "PixiJS game UI & rendering",
    category: "games",
    summary:
      "A themed game UI system and rendering fixes for a PixiJS farming game, from shop and inventory screens to viewport borders.",
    overview: [
      "I replaced generic screens with a cohesive rustic-fantasy UI across Shop, Level-Up, Quests, Inbox, Stash, Storage and Gifts.",
      "I also rewrote the tree-border generation so it renders correctly across every farm size and unlocked tract.",
    ],
    highlights: [
      "Cohesive themed UI across major screens",
      "Responsive single-column mobile layouts",
      "Dynamic viewport border rendering",
    ],
    stack: ["React", "Node.js", "PixiJS", "Canvas"],
    shots: [
      [1280, 898],
      [1280, 915],
      [1280, 919],
      [1280, 894],
      [1280, 908],
    ],
  },
  {
    slug: "pokemon-multiplayer-server",
    title: "Pokémon Multiplayer",
    tagline: "Real-time server for RPG Maker XP",
    category: "games",
    summary:
      "A custom client-server layer that turns a single-player Pokémon Essentials game into a synchronised multiplayer world.",
    overview: [
      "It supports overworld synchronisation, chat, trading with confirmations, and 1v1 PvP battles with synchronised HP, switching and turns.",
      "The game auto-saves after trades to prevent duplication, and movement interpolation keeps the world smooth.",
    ],
    highlights: [
      "Real-time overworld sync",
      "Trading and PvP battles",
      "Reconnect handling",
      "Anti-duplication safeguards",
    ],
    stack: ["RPG Maker XP", "Pokémon Essentials", "Networking", "Client-Server"],
    shots: [
      [1309, 607],
      [960, 694],
      [931, 690],
      [1563, 989],
    ],
  },
  {
    slug: "the-last-kumite",
    title: "The Last Kumite",
    tagline: "NES fighting game in 6502 Assembly",
    category: "games",
    summary:
      "A playable retro fighter for real NES hardware, with AI opponent, special meter and a full presentation flow.",
    overview: [
      "It is written in 6502 Assembly within the NES's strict memory, tile and palette limits, with assets converted into genuine NES formats.",
      "It was tested in FCEUX with live memory inspection and built through a Makefile pipeline into a playable ROM.",
    ],
    highlights: [
      "Full combat moveset and KO states",
      "AI-controlled opponent",
      "Chargeable special-power system",
      "Scrolling stage and hit effects",
    ],
    stack: ["6502 Assembly", "ca65", "Python", "Lua", "FCEUX"],
    shots: [
      [800, 604],
      [735, 749],
      [800, 535],
    ],
  },
  {
    slug: "kickup-kings",
    title: "KickupKings",
    tagline: "Mobile soccer juggling game",
    category: "games",
    summary:
      "A physics-based juggling game for iOS and Android with unlockables, leaderboards and monetisation-ready architecture.",
    overview: [
      "It has responsive touch juggling physics, cosmetic balls and cleats, and multiple locations. I also prepared a signed iOS build for App Store Connect.",
    ],
    highlights: [
      "Physics-driven juggling",
      "Unlockable cosmetics and shop",
      "Leaderboard integration",
      "Signed iOS production build",
    ],
    stack: ["Godot", "GDScript", "iOS", "Android"],
    shots: [
      [608, 1072],
      [601, 1070],
      [512, 896],
      [507, 892],
    ],
  },
  {
    slug: "dance-mat-vocabulary",
    title: "Dance Mat Vocabulary",
    tagline: "Rhythm-based language learning",
    category: "games",
    summary:
      "A rhythm game that teaches vocabulary through movement, playable with keyboards or USB dance mats as a portable Electron app.",
    overview: [
      "It includes three difficulty modes, bilingual text-to-speech, a teacher performance dashboard and an admin panel with Hebrew auto-translation.",
    ],
    highlights: [
      "USB dance mat support",
      "Teacher performance dashboard",
      "JSON vocabulary import and export",
      "Portable, install-free executable",
    ],
    stack: ["JavaScript", "Electron", "Web Speech API", "Google Cloud TTS"],
    shots: [
      [1919, 1010],
      [1919, 1011],
      [1919, 982],
      [1448, 611],
      [1895, 982],
      [1919, 1014],
    ],
  },
  {
    slug: "pico-park-clone",
    title: "PICO PARK Clone",
    tagline: "Co-op platformer in C++17",
    category: "games",
    summary:
      "A two-player shared-keyboard platformer with precise physics, a cooperative camera and speedrun timing.",
    overview: [
      "The platformer physics include coyote time, jump buffering and variable jump height, and players can stand on each other.",
      "The modular architecture separates entities, physics, input, camera and UI behind a clean state machine.",
    ],
    highlights: [
      "Cooperative player collision",
      "Forgiving platformer physics",
      "Dual-player camera",
      "Millisecond speedrun timer",
    ],
    stack: ["C++17", "SDL2", "OpenGL", "CMake"],
    shots: [
      [1280, 745],
      [1280, 678],
      [1280, 670],
    ],
  },
  {
    slug: "space-shooter",
    title: "Space Shooter",
    tagline: "Console game in C++",
    category: "games",
    summary: "A real-time console shooter built on linked lists, queues, recursion and binary file handling.",
    overview: [
      "Bullets are managed in a linked queue and enemies in a dynamic list, with waves loaded from binary files and flicker-free rendering.",
    ],
    highlights: ["Queue-based bullet management", "Configurable enemy waves", "Flicker-reduced rendering"],
    stack: ["C++", "Data Structures", "Windows Console API"],
    shots: [[2000, 1091]],
  },
];
