export const profile = {
  name: "Tolotra Nomenjanahary",
  roles: ["Développeur Full Stack", "Développeur Web", "Frontend & Backend"],
  location: "Mahajanga, Madagascar",
  email: "tanjoniainatolotra6@gmail.com",
  phone: "+261 34 71 357 18",
  phoneHref: "+261347135718",
  summary: [
    `Du premier écran au dernier endpoint, j'aime comprendre comment les pièces
     s'assemblent. Je transforme des idées en applications fonctionnelles, avec une
     attention particulière portée à l'expérience et à la simplicité.`,
    `Toujours en train d'apprendre, toujours en train de construire — je progresse
     par la pratique, sur des projets réels, en restant fiable sur la durée.`,
  ],
};

export const softSkills = [
  "Apprentissage rapide & curiosité",
  "Résolution de problèmes",
  "Fiable & autonome",
  "Esprit d'équipe",
];

export const languages = [
  { name: "Malagasy", level: 100 },
  { name: "Français", level: 100 },
  { name: "Anglais", level: 80 },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["HTML / CSS", "JavaScript", "React.js", "Angular", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js + Express.js", "Java / Spring Boot", "PHP / Laravel", "Python"],
  },
  {
    title: "Base de données",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Outils & Système",
    items: ["Git / GitHub", "Claude Code", "Linux", "N8N", "Odoo"],
  },
];

export const experience: {
  date: string;
  company: string;
  role: string;
  description: string;
  stack: string[];
  active: boolean;
}[] = [
  {
    date: "2026 – En cours",
    company: "LovaTech",
    role: "Stage — Développement Web",
    description:
      "Développement web et automatisation de processus, avec intégration d'outils d'IA et de workflows.",
    stack: ["Python", "JavaScript", "XML", "PostgreSQL", "HTML", "CSS", "SEO", "N8N", "Odoo"],
    active: true,
  },
  {
    date: "2025 · 6 mois",
    company: "R&R Development",
    role: "Stage — Développement Full Stack",
    description:
      "Développement d'une application de gestion immobilière de bout en bout.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    active: false,
  },
  {
    date: "2024 · 3 mois",
    company: "FY-TECH",
    role: "Stage — Intégrateur Web",
    description:
      "Développement d'un site vitrine pour une agence de location de voitures.",
    stack: ["HTML", "CSS", "JavaScript"],
    active: false,
  },
];

export const projects: {
  title: string;
  description: string;
  stack: string[];
}[] = [
  {
    title: "Application de gestion immobilière",
    description:
      "Application full-stack de gestion de biens (locations & ventes) développée en stage chez R&R Development.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    title: "Site vitrine — agence de voiture",
    description:
      "Intégration d'un site vitrine responsive pour une agence de location de voitures, réalisé en stage chez FY-TECH.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "EcoTourMg",
    description:
      "Application web full-stack reliant les touristes aux communautés locales à Madagascar.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "FormaPlus",
    description:
      "Gestion d'un centre de formation : étudiants, cours, formateurs et paiements.",
    stack: ["PHP", "Laravel", "Blade", "MySQL"],
  },
];

export const personalProjectsNote =
  "Projets personnels d'apprentissage : To-Do CRUD en React.js, API RESTful Node.js/Express.js, système de gestion d'étudiants en PHP/Laravel.";

export const education = [
  {
    date: "2026",
    school: "EMIT Fianarantsoa",
    detail: "Licence 3 en Développement d'Applications Internet / Intranet",
    active: true,
  },
  {
    date: "2025",
    school: "EMIT Fianarantsoa",
    detail: "Licence 2 en Développement d'Applications Internet / Intranet",
    active: false,
  },
  {
    date: "2024",
    school: "EMIT Fianarantsoa",
    detail: "Licence 1 en Développement d'Applications Internet / Intranet",
    active: false,
  },
];

export const learningResources = [
  {
    title: "Autoformation frontend",
    items: "freeCodeCamp · MDN Web Docs · Traversy Media · Web Dev Simplified",
  },
  {
    title: "Autoformation backend & outils",
    items: "The Odin Project · Laracasts · Spring Academy · documentation officielle",
  },
];

export const stats = [
  { value: 3, label: "Stages en entreprise" },
  { value: 6, label: "Projets réalisés" },
  { value: 15, label: "Technologies pratiquées" },
  { value: 3, label: "Années de formation EMIT" },
];

export const cv = {
  href: "/cv/TOLOTRA_NOMENJANAHARY.pdf",
  label: "Télécharger mon CV",
};

export const navLinks = [
  { href: "#profil", label: "Profil" },
  { href: "#competences", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];
