export const navigation = [
    { name: "Projekte", href: "#projekte" },
    { name: "Skills", href: "#skills" },
    { name: "Erfahrung", href: "#erfahrung" },
    { name: "Über mich", href: "#ueber-mich" },
    { name: "Kontakt", href: "#kontakt" },
];

export const projects = [
    {
        title: "E-Commerce Dashboard",
        description:
            "Ein umfassendes Admin-Dashboard zur Verwaltung von Produkten, Bestellungen und Kundenanalysen. Fokus auf Performance und Usability.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
        links: {
            demo: "https://example.com",
            github: "https://github.com/example/repo",
        },
    },
    {
        title: "Task Management App",
        description:
            "Echtzeit-Kollaborations-Tool für Teams. Mit Drag & Drop Kanban-Boards und Team-Chat-Integration.",
        tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        links: {
            demo: "https://example.com",
            github: "https://github.com/example/repo",
        },
    },
    {
        title: "Portfolio Template",
        description:
            "Modernes, minimalistisches Portfolio-Template für Entwickler mit Fokus auf SEO und Barrierefreiheit.",
        tags: ["Astro", "Tailwind CSS", "Motion"],
        links: {
            demo: "https://example.com",
            github: "https://github.com/example/repo",
        },
    },
];

export const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    backend: ["Node.js", "PostgreSQL", "Prisma", "Supabase", "Serverless"],
    devops: ["Docker", "Vercel", "GitHub Actions", "AWS"],
    tools: ["Figma", "Git", "VS Code", "Postman"],
};

export const experience = [
    {
        role: "Senior Frontend Developer",
        company: "Tech Solutions GmbH",
        period: "2021 – Heute",
        description: [
            "Leitung der Frontend-Entwicklung für die SaaS-Plattform.",
            "Optimierung der Performance (Core Web Vitals) um 40%.",
            "Mentoring von Junior-Entwicklern und Einführung von Best Practices.",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Creative Agency Berlin",
        period: "2019 – 2021",
        description: [
            "Entwicklung von maßgeschneiderten Webanwendungen für Kunden.",
            "Implementierung von CMS-Lösungen mit Headless-Ansatz.",
            "Zusammenarbeit im agilen Team (Scrum).",
        ],
    },
];

export const about = {
    text: "Ich bin ein leidenschaftlicher Full-Stack-Entwickler mit einem Auge für Details. Meine Mission ist es, komplexe Probleme in elegante, benutzerfreundliche Lösungen zu verwandeln. Ich glaube an Clean Code, offene Webstandards und kontinuierliches Lernen.",
};
