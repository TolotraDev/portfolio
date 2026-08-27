export const profile = {
  name: "Tolotra Nomenjanahary",
  roles: ["Développeur Full Stack", "Administrateur Systèmes & Réseaux"],
  location: "Fianarantsoa, Madagascar",
  email: "tanjoniainatolotra6@gmail.com",
  phone: "+261 34 71 357 18",
  phoneHref: "+261347135718",
  summary: [
    `Étudiant en informatique motivé, alliant le développement web full-stack à
     l'administration systèmes et réseaux. À l'aise pour créer des applications web
     de bout en bout comme pour mettre en place et gérer une infrastructure IT.`,
    `Je souhaite rejoindre une équipe comme stagiaire développeur ou administrateur,
     contribuer à des projets réels et progresser par la pratique — en apprenant vite,
     en résolvant des problèmes concrets, et en restant fiable sur la durée.`,
  ],
};

export const softSkills = [
  "Apprentissage rapide & curiosité",
  "Résolution de problèmes",
  "Fiable & autonome",
  "Esprit d'équipe",
];

export const languages = [
  { name: "Français", level: 100 },
  { name: "Anglais", level: 80 },
];

export const devSkills = [
  "HTML", "CSS", "JavaScript", "React.js", "Angular", "Tailwind CSS",
  "Node.js", "Express.js", "Java / Spring Boot", "PHP", "Laravel", "Python",
  "MySQL", "PostgreSQL", "MongoDB", "API REST", "Git / GitHub", "Design responsive",
];

export const netSkills = [
  "Windows Server", "Linux (Ubuntu)", "TCP/IP", "DNS", "DHCP",
  "VPN", "SSH", "VLAN", "ACL", "Active Directory",
  "Virtualisation", "Zabbix", "Sécurité IT (bases)", "Bash", "Dépannage",
];

export const tools = [
  "Git", "GitHub", "VS Code", "Postman", "Claude Code", "N8N", "Odoo",
  "Linux", "Cisco Packet Tracer", "VirtualBox", "VMware",
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
    company: "Monétique",
    role: "Stage — Développement Web",
    description:
      "Développement web et automatisation de processus, avec intégration d'outils d'IA et de workflows.",
    stack: ["Python", "JavaScript", "XML", "PostgreSQL", "SEO", "N8N", "Odoo"],
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
    date: "3 mois",
    company: "FY-TECH",
    role: "Stage — Intégrateur Web",
    description:
      "Développement d'un site vitrine pour une agence de location de voitures.",
    stack: ["HTML", "CSS", "JavaScript"],
    active: false,
  },
];

export type ProjectCategory = "dev" | "net";

export const projects: {
  title: string;
  category: ProjectCategory;
  description: string;
  stack: string[];
}[] = [
  {
    title: "EcoTourMg",
    category: "dev",
    description:
      "Application web full-stack reliant les touristes aux communautés locales à Madagascar.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    title: "Mitady-Trano",
    category: "dev",
    description:
      "Plateforme immobilière : gestion de locations et de ventes avec recherche et filtres avancés.",
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
  },
  {
    title: "FormaPlus",
    category: "dev",
    description:
      "Gestion d'un centre de formation : étudiants, cours, formateurs et paiements.",
    stack: ["PHP", "Laravel", "Blade", "MySQL"],
  },
  {
    title: "Mise en place d'un labo IT",
    category: "net",
    description:
      "Installation et configuration d'Active Directory, DNS et DHCP sous Windows Server en environnement virtuel, avec gestion des utilisateurs et des groupes.",
    stack: ["Windows Server", "Active Directory", "DNS", "DHCP", "Virtualisation"],
  },
  {
    title: "Simulation réseau d'entreprise",
    category: "net",
    description:
      "Conception d'un réseau d'entreprise sous Cisco Packet Tracer : VLAN, routage inter-VLAN, DHCP et listes de contrôle d'accès (ACL).",
    stack: ["Cisco Packet Tracer", "VLAN", "DHCP", "ACL"],
  },
  {
    title: "Supervision système",
    category: "net",
    description:
      "Déploiement d'une solution de supervision Zabbix suivant la disponibilité des services et les ressources système.",
    stack: ["Zabbix", "Linux", "Supervision"],
  },
];

export const personalProjectsNote =
  "Projets personnels d'apprentissage : To-Do CRUD en React.js, API RESTful Node.js/Express.js, système de gestion d'étudiants en PHP/Laravel.";

export const education = [
  {
    date: "2023 – 2026",
    school: "EMIT Fianarantsoa",
    detail: "Licence en Développement d'Applications Internet / Intranet",
    active: true,
  },
  {
    date: "2022 – 2023",
    school: "FSTE Mahajanga",
    detail: "1ʳᵉ année de Licence en Sciences de la Matière et des Structures",
    active: false,
  },
];

export const learningResources = [
  {
    title: "Autoformation développement",
    items: "freeCodeCamp · MDN Web Docs · Traversy Media · Web Dev Simplified",
  },
  {
    title: "Autoformation systèmes & réseaux",
    items: "Cisco Networking Academy · ITProTV · LinkedIn Learning",
  },
];

export const stats = [
  { value: 6, label: "Projets réalisés" },
  { value: 2, label: "Domaines maîtrisés" },
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
