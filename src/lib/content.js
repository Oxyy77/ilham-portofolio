// Centralized content for the portfolio.
// Edit values here instead of digging through every section component.

export const profile = {
  name: "Ilham",
  fullTagline: "Computer Engineering student & full-stack developer",
  roles: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "Computer Engineering Student",
  ],
  bio:
    "Computer Engineering student at Andalas University who builds responsive websites and Android apps end to end. Comfortable moving between React/TypeScript frontends, PHP/Laravel APIs, and Kotlin/Flutter mobile clients — focused on shipping things that are fast, usable, and maintainable.",
  location: "Bukittinggi, West Sumatra, ID",
  timeZone: "Asia/Jakarta",
  available: true,
  email: "ilhmoxy@gmail.com",
  phone: "+62 898 4828 899",
  resumeUrl: "/assets/Ilham-Resume.pdf",
  socials: {
    github: "https://github.com/Oxyy77",
    linkedin: "https://linkedin.com/in/ilham-‎-29857b249",
    instagram: "https://www.instagram.com/ilham20___",
  },
};

export const stats = [
  { value: 10, suffix: "+", label: "Projects shipped" },
  { value: 15, suffix: "+", label: "Certificates earned" },
  { value: 3, suffix: "+", label: "Hackathons & competitions" },
];

export const education = {
  school: "Andalas University",
  degree: "B.Eng. Computer Engineering",
  period: "2022 — Present",
};

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["PHP", "Laravel", "REST APIs", "MySQL"],
  },
  {
    label: "Mobile",
    items: ["Kotlin", "Flutter", "Jetpack Compose"],
  },
  {
    label: "Tooling",
    items: ["Git", "Postman", "Figma", "Vite"],
  },
];

export const focusAreas = [
  {
    icon: "CodeXml",
    title: "Web development",
    description:
      "End-to-end websites and dashboards — React/TypeScript on the frontend, Laravel or Node on the backend, deployed and monitored.",
    tags: ["React", "Laravel", "Tailwind"],
  },
  {
    icon: "Smartphone",
    title: "Mobile development",
    description:
      "Native-feeling Android apps with Kotlin and Jetpack Compose, or cross-platform builds with Flutter when speed matters more.",
    tags: ["Kotlin", "Flutter"],
  },
  {
    icon: "Settings2",
    title: "Custom solutions",
    description:
      "Internal tools, automations, and integrations scoped around a specific workflow rather than a generic template.",
    tags: ["APIs", "Automation"],
  },
];

// NOTE: every project below is a placeholder used to demonstrate the new
// layout. Swap these for real projects, links, and screenshots later.
export const projects = {
  web: [
    {
      title: "Nimbus Analytics",
      description:
        "A usage-analytics dashboard for SaaS teams — funnels, retention cohorts, and exportable reports behind a clean React UI.",
      stack: ["React", "TypeScript", "Tailwind", "Chart.js"],
      type: "Personal project",
      accent: "signal",
      kind: "browser",
    },
    {
      title: "Lentera CMS",
      description:
        "A lightweight headless CMS for small editorial teams, with role-based publishing and a Laravel API at its core.",
      stack: ["Laravel", "PHP", "MySQL", "Alpine.js"],
      type: "Team project",
      accent: "copper",
      kind: "browser",
    },
    {
      title: "Loop Market",
      description:
        "An e-commerce storefront with cart, checkout, and order tracking, built around a Stripe-backed payment flow.",
      stack: ["React", "Node.js", "Stripe"],
      type: "Personal project",
      accent: "signal",
      kind: "browser",
    },
  ],
  mobile: [
    {
      title: "Wayfare",
      description:
        "A travel-itinerary planner that syncs offline and shares day-by-day plans with collaborators in real time.",
      stack: ["Flutter", "Firebase"],
      type: "Team project",
      accent: "signal",
      kind: "phone",
    },
    {
      title: "Pulsework",
      description:
        "A habit and fitness tracker with streaks, reminders, and a weekly summary built on Jetpack Compose.",
      stack: ["Kotlin", "Jetpack Compose"],
      type: "Personal project",
      accent: "copper",
      kind: "phone",
    },
    {
      title: "Kasir Lite",
      description:
        "A point-of-sale app for small retail counters — offline-first inventory and receipts on a single device.",
      stack: ["Flutter", "SQLite"],
      type: "Personal project",
      accent: "signal",
      kind: "phone",
    },
  ],
  other: [
    {
      title: "Terra Sense",
      description:
        "An IoT soil-monitoring rig paired with a small prediction model, surfacing irrigation suggestions on a web dashboard.",
      stack: ["Python", "TensorFlow", "Raspberry Pi", "React"],
      type: "Personal project",
      accent: "copper",
      kind: "board",
    },
  ],
};
