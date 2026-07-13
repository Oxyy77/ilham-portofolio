// Centralized content for the portfolio.
// Edit values here instead of digging through every section component.

import loyaltyImg from "@/assets/img/project/loyalty-point-app-slide.png";
import hrisImg from "@/assets/img/project/hris-app-slide.png";
import hofeImg from "@/assets/img/project/hofe-app-slide.png";
import garudaImg from "@/assets/img/project/garuda-app-slide.png";
import posImg from "@/assets/img/project/pos-app-slide.png";

export const profile = {
  name: "Ilham",
  fullTagline: "Software Engineer ",
  roles: [
    "Full-Stack Web Developer",
    "Mobile App Developer",
  ],
  bio:
    "Software Engineer who builds responsive websites and Android apps end to end. Comfortable moving between React/TypeScript frontends, PHP/Laravel APIs, and Kotlin/Flutter mobile clients — focused on shipping things that are fast, usable, and maintainable.",
  location: "South Jakarta, ID",
  timeZone: "Asia/Jakarta",
  available: true,
  email: "ilhmoxy@gmail.com",
  phone: "+62 898 4828 899",
  resumeUrl: "/assets/CV Ilham.pdf",
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
  period: "2021 — 2025",
};

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Angular", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: ["PHP", "Laravel", "REST APIs", "MySQL", "PostgreSQL", "Redis", "Go"],
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
    tags: ["React", "Go", "Laravel", "Tailwind"],
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
      title: "Loyalty Point App",
      description:
        "A comprehensive web-based platform designed to manage and track customer loyalty programs, rewards redemption, and point transactions in real-time.",
      stack: ["Angular", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
      type: "Client project",
      accent: "signal",
      kind: "browser",
      image: loyaltyImg,
    },
    {
      title: "HRIS App",
      description:
        "A complete Human Resource Information System for managing employee databases, attendance tracking, leave requests, and payroll distribution.",
      stack: ["Angular", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
      type: "Client project",
      accent: "copper",
      kind: "browser",
      image: hrisImg,
    },
  ],
  mobile: [
    {
      title: "Hofe App",
      description:
        "A mobile application for managing smart hospitality orders, cafe reservations, and customer tables seamlessly.",
      stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Next.Js API"],
      type: "Client project",
      accent: "signal",
      kind: "phone",
      image: hofeImg,
    },
    {
      title: "Garuda App",
      description:
        "A native-feeling mobile app built to search, book, and manage flights, featuring digital boarding passes and notifications.",
      stack: ["Kotlin", "Jetpack Compose", "Retrofit", "Express.Js"],
      type: "Client project",
      accent: "copper",
      kind: "phone",
      image: garudaImg,
    },
  ],
  other: [
    {
      title: "POS App",
      description:
        "Point of Sale (POS) system designed for retail transactions, supporting offline operation, barcode scanning, and inventory tracking.",
      stack: ["Angular", "Electron", "Tailwind CSS", "SQLite", "Laravel API"],
      type: "Client project",
      accent: "signal",
      kind: "browser",
      image: posImg,
    },
  ],
};
