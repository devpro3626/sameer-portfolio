import type { ProjectEntry } from "./types";

export const intelligenceProjects: ProjectEntry[] = [
  {
    slug: "shopbot-pro",
    title: "ShopBot Pro",
    tagline: "RAG customer support engine",
    category: "ai",
    summary:
      "An e-commerce support chatbot that retrieves grounded answers with TF-IDF search and generates replies with Llama 3.3 through Groq.",
    overview: [
      "ShopBot Pro answers questions about shipping, returns, payments, accounts and memberships by retrieving the most relevant FAQ entries before generating a concise reply.",
      "Confidence thresholds stop it from answering beyond its knowledge, and an offline fallback keeps it useful when the LLM is unavailable.",
    ],
    highlights: [
      "TF-IDF vector search with cosine similarity",
      "Llama 3.3 70B via the Groq API",
      "Conversation memory for follow-up questions",
      "Confidence thresholding against hallucination",
      "CSV-driven knowledge base with 50+ scenarios",
      "Offline fallback mode",
    ],
    stack: ["Python", "RAG", "TF-IDF", "Llama 3.3", "Groq API", "Pandas"],
    shots: [],
  },
  {
    slug: "iot-intrusion-detection",
    title: "IoT Intrusion Detection",
    tagline: "Vulnerability-aware network security with ML",
    category: "ai",
    summary:
      "Tree-based models trained on 6.6 million network flows, with XGBoost reaching 98.22% accuracy and 99.07% ROC-AUC.",
    overview: [
      "The pipeline aggregates CSE-CIC-IDS2018 Parquet data, removes leakage-prone identifiers, and standardises 78 encoded features before a stratified 80/20 split.",
      "Beyond classification, the most influential flow features are mapped to real attack patterns such as brute force, command-and-control and denial of service.",
    ],
    highlights: [
      "6.6M network flows processed end to end",
      "Random Forest, XGBoost and soft-voting ensemble",
      "99.69% precision with far fewer false positives",
      "Leakage-aware preprocessing",
      "Explainability layer linking features to vulnerabilities",
    ],
    stack: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SHAP", "Parquet"],
    shots: [
      [1431, 826],
      [1431, 1255],
      [800, 600],
      [1430, 868],
    ],
  },
  {
    slug: "horse-racing-prediction",
    title: "Race Performance Predictor",
    tagline: "Explainable ML for top-3 finishes",
    category: "ai",
    summary:
      "An explainable model trained on 79,447 race records, combining boosted ensembles, time-aware validation and SHAP explanations.",
    overview: [
      "34 engineered features capture odds, recent form, jockey and trainer performance, track suitability and conditions, with shift and expanding windows to prevent leakage.",
      "Six algorithms were compared, XGBoost was tuned with Optuna, and the strongest boosters were combined into an ensemble explained with SHAP.",
    ],
    highlights: [
      "79,447 records across 6,349 races",
      "Time-based splits to prevent future leakage",
      "XGBoost, LightGBM and CatBoost ensemble",
      "Optuna hyperparameter optimisation",
      "Global and per-prediction SHAP explanations",
    ],
    stack: ["Python", "XGBoost", "LightGBM", "CatBoost", "Optuna", "SHAP"],
    shots: [[2000, 1091]],
  },
  {
    slug: "stock-trading-rl",
    title: "RL Trading Agent",
    tagline: "Q-Learning vs Deep Q-Network",
    category: "ai",
    summary:
      "Reinforcement learning agents that learn Buy, Sell and Hold decisions on historical AAPL data, comparing tabular Q-Learning with a DQN.",
    overview: [
      "A custom trading environment rewards agents on portfolio performance, with market states represented by normalised 10-day price movements.",
      "The PyTorch DQN uses experience replay, target networks, epsilon-greedy exploration and gradient clipping.",
    ],
    highlights: [
      "Custom Buy / Sell / Hold environment",
      "Tabular Q-Learning with state discretisation",
      "DQN with replay buffer and target network",
      "Configurable ticker, range and episodes",
      "Loss, action and profit visualisation",
    ],
    stack: ["Python", "PyTorch", "NumPy", "Pandas", "yfinance", "Matplotlib"],
    shots: [[1431, 1242]],
  },
  {
    slug: "leaf-recognition",
    title: "Leaf Recognition",
    tagline: "Shape & texture computer vision",
    category: "ai",
    summary:
      "A classical vision pipeline using a Multiscale Triangle Descriptor and LBP features, reaching 87.61% top-1 accuracy across 100 species.",
    overview: [
      "Images are denoised, thresholded with Otsu and refined morphologically before contour extraction. Fourier analysis turns shape signals into rotation-invariant descriptors.",
      "Texture is captured with uniform Local Binary Pattern histograms, and both feature sets are combined for 1-NN classification with no high-level ML libraries.",
    ],
    highlights: [
      "Custom Multiscale Triangle Descriptor",
      "Rotation-invariant Fourier features",
      "LBP texture histograms",
      "87.61% accuracy on CVIP100",
      "Five bootstrap validation runs",
    ],
    stack: ["Python", "OpenCV", "NumPy", "Fourier Transform", "LBP"],
    shots: [
      [2000, 1042],
      [1073, 407],
      [1000, 600],
      [2000, 527],
    ],
  },
  {
    slug: "ppe-detection",
    title: "PPE Safety Detection",
    tagline: "Real-time compliance monitoring",
    category: "ai",
    summary:
      "A computer vision system that detects missing helmets and vests in live video using YOLOv8 and OpenCV.",
    overview: [
      "The system monitors video streams for workplace safety violations, detecting personnel and protective equipment in real time.",
      "Spatial association algorithms map each detected PPE item to the right person's bounding box, so violations are attributed accurately.",
    ],
    highlights: [
      "YOLOv8 detection on real-time video",
      "Spatial association of PPE to personnel",
      "Helmet and vest violation alerts",
      "Streamlit monitoring interface",
    ],
    stack: ["Python", "YOLOv8", "OpenCV", "Streamlit", "Deep Learning"],
    shots: [],
  },
  {
    slug: "lux-vera",
    title: "LUX VERA",
    tagline: "Local-LLM cultivation assistant",
    category: "ai",
    summary:
      "A desktop assistant that turns fitness metrics into RPG progression, powered by local Ollama models and a native voice.",
    overview: [
      "Five performance pillars feed an Ascension Score across six cultivation realms, with achievements, quests and breakthroughs.",
      "A virtual spirit assistant uses local LLMs with live user context to analyse status and suggest training, speaking through Windows SAPI5.",
    ],
    highlights: [
      "Local Ollama integration with model auto-detection",
      "Offline rulebook intelligence",
      "Background-threaded voice with live waveform",
      "Three switchable visual themes",
      "Backward-compatible JSON persistence",
    ],
    stack: ["Python", "Tkinter", "Ollama", "Local LLMs", "pyttsx3"],
    shots: [[2000, 1091]],
  },
  {
    slug: "security-drone",
    title: "Autonomous Security Drone",
    tagline: "Indoor navigation & surveillance",
    category: "systems",
    summary:
      "A programmable drone that navigates indoor spaces along calibrated paths, using QR markers for positioning and visual data collection.",
    overview: [
      "The drone is controlled from Python via the Pyhula API, calibrated for stable flight at about 60 cm with 30 cm movement steps.",
      "Camera-based QR detection supports navigation experiments and lays the groundwork for AI-based suspicious-person detection.",
    ],
    highlights: [
      "Autonomous takeoff, hover, movement and landing",
      "Calibrated distance-to-time navigation",
      "QR-marker detection and positioning",
      "Predefined multi-directional flight paths",
      "Planned AI detection module",
    ],
    stack: ["Python", "Pyhula API", "Computer Vision", "QR Detection", "Jira"],
    shots: [
      [1919, 1020],
      [1919, 1021],
      [1919, 1017],
      [1536, 2048],
      [1430, 1072],
    ],
  },
  {
    slug: "superstore-analytics",
    title: "Superstore Analytics",
    tagline: "Shipping, loyalty & profit analysis",
    category: "ai",
    summary:
      "An exploratory analytics workflow that turns transactional sales data into insight on shipping performance, loyalty and profit risk.",
    overview: [
      "Pandas pipelines engineer lead-time and order-day features, then aggregate them by region, shipping mode, city and category.",
      "Matplotlib and Seaborn visualisations expose delivery patterns, repeat-purchase rates and profit variability.",
    ],
    highlights: [
      "Lead-time analysis by region and mode",
      "Repeat-order rates by city",
      "Category variety and profit variability",
      "Exported visual reports",
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    shots: [
      [640, 480],
      [640, 480],
      [640, 480],
      [640, 480],
    ],
  },
];
