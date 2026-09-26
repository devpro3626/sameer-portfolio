import type { ProjectEntry } from "./types";

export const systemsProjects: ProjectEntry[] = [
  {
    slug: "runway-occupancy-dashboard",
    title: "AirOps Runway Dashboard",
    tagline: "Tactical airport operations interface",
    category: "systems",
    summary:
      "An offline-capable runway occupancy dashboard with a 1:1 SVG airport map, live occupancy tracking and a persistent tactical log.",
    overview: [
      "The SVG map reproduces civilian and military runways, taxiways, helipads and landmarks, and each element responds to live system state.",
      "Selecting a vehicle marks its area as occupied, triggers a RWY OCCUPIED alert and records timestamps and durations in a persistent local log.",
    ],
    highlights: [
      "Resolution-independent SVG airport layout",
      "Real-time runway and area occupancy",
      "Persistent tactical log with protected clearing",
      "Weather telemetry panel",
      "Tactical Cyan and Operations Green themes",
      "Zero runtime dependencies, runs offline",
    ],
    stack: ["JavaScript", "SVG", "HTML5", "CSS3", "LocalStorage"],
    shots: [
      [1871, 865],
      [1875, 853],
    ],
  },
  {
    slug: "mindspeaker-bci",
    title: "MindSpeaker BCI",
    tagline: "Brain-computer interface interaction demo",
    category: "systems",
    summary:
      "An Electron experience driven by real-time clench events over sockets, with precisely timed trials and frame-independent animation.",
    overview: [
      "Users pop balloons with darts using only BCI clench input, across calibration and 30 timed trials with increasing latency.",
      "The state machine spans 22 screens and handles rapid, duplicate, invalid and mistimed events robustly.",
    ],
    highlights: [
      "Socket-based real-time BCI event handling",
      "Frame-rate-independent animation with pause and resume",
      "Calibration with automated timing",
      "22 screens and 30 trials verified",
      "Animated result visualisation",
    ],
    stack: ["Electron", "TypeScript", "WebSockets", "SCSS", "State Machines"],
    shots: [
      [1322, 780],
      [1325, 777],
      [1163, 690],
      [1165, 689],
    ],
  },
  {
    slug: "session-management-system",
    title: "Session Control Server",
    tagline: "Client-server workstation management",
    category: "systems",
    summary:
      "A TCP client-server system for shared computer facilities, with centralised sessions, security alerts, remote control and automated billing.",
    overview: [
      "A server dashboard manages users, live sessions and workstation controls, while client terminals authenticate and report activity in real time.",
      "Registry monitoring flags unauthorised proxy changes, login webcam snapshots add accountability, and native Windows APIs lock workstations.",
    ],
    highlights: [
      "Real-time TCP communication",
      "Automated billing by session duration",
      "Registry monitoring for proxy tampering",
      "Remote termination and workstation locking",
      "SQL Server persistence",
    ],
    stack: ["C#", ".NET", "TCP/IP", "SQL Server", "Windows APIs"],
    shots: [
      [1642, 919],
      [1860, 913],
    ],
  },
  {
    slug: "rotor-digital-twin",
    title: "Rotor Digital Twin",
    tagline: "Vibration & rotor dynamics simulation",
    category: "systems",
    summary:
      "A physics-based digital twin of an unbalanced rotor that generates vibration data for diagnostics and predictive maintenance.",
    overview: [
      "The model solves equations of motion for a shaft carrying an unbalanced disc, producing displacement, acceleration and force time series.",
      "Operating near the critical speed reproduces resonance amplification, visualised through orbit plots and diagnostic reports.",
    ],
    highlights: [
      "Differential-equation physics engine",
      "Sub-critical and resonant operating states",
      "X-Y orbit and acceleration plots",
      "CSV and PNG diagnostic exports",
    ],
    stack: ["Python", "NumPy", "SciPy", "Pandas", "Matplotlib"],
    shots: [[1919, 1018]],
  },
  {
    slug: "heat-transfer-simulation",
    title: "Heat Transfer Simulator",
    tagline: "2D transient conduction modelling",
    category: "systems",
    summary:
      "A modular MATLAB solver for 2D heat conduction, using an explicit FTCS scheme with built-in stability validation.",
    overview: [
      "The simulator supports Dirichlet and Neumann boundaries, point and distributed heat sources, and spatially varying diffusivity with insulation barriers.",
      "Results are validated against steady-state solutions across multiple test scenarios.",
    ],
    highlights: [
      "Explicit FTCS finite-difference solver",
      "Automatic stability-condition checks",
      "Mixed boundary conditions",
      "Steady-state validation",
    ],
    stack: ["MATLAB", "Numerical Methods", "Scientific Computing"],
    shots: [
      [2000, 1091],
      [2000, 292],
      [2000, 292],
    ],
  },
  {
    slug: "tiktok-label-automation",
    title: "Live Label Printer",
    tagline: "OCR automation for TikTok Live",
    category: "systems",
    summary:
      "A desktop tool that reads winner names from a live stream with OCR and prints labels automatically, without duplicates.",
    overview: [
      "Users select the screen region where winners appear, and the app continuously extracts and validates names against the current session.",
      "Valid winners are sent straight to NELKO P21 and compatible label printers.",
    ],
    highlights: [
      "Configurable OCR capture region",
      "Session-based duplicate prevention",
      "Bluetooth label printer integration",
      "Guided setup and test printing",
    ],
    stack: ["Python", "OCR", "Screen Capture", "Windows Printing"],
    shots: [
      [1231, 793],
      [894, 747],
    ],
  },
];
