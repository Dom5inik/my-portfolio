export const navigation = [
    { name: "Projekte", href: "/#projekte" },
    { name: "Skills", href: "/#skills" },
    { name: "Erfahrung", href: "/#erfahrung" },
    { name: "Außer Coding", href: "/#auesser-coding" },
    { name: "Kontakt", href: "/#kontakt" },
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
    frontend: [
        { name: "C# WPF", level: "advanced" },
        { name: "React", level: "intermediate" },
        { name: "Next.js", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Tailwind CSS", level: "intermediate" },
        { name: "C# WinForms", level: "basic" },
    ],
    backend: [
        { name: "Oracle DB", level: "advanced" },
        { name: "PL/SQL", level: "intermediate" },
        { name: "ASP.NET MVC", level: "intermediate" },
        { name: "Node.js", level: "intermediate" },
    ],
    devops: [
        { name: "Docker", level: "basic" },
        { name: "Vercel", level: "basic" },
    ],
    tools: [
        { name: "Git", level: "advanced" },
        { name: "VS Code", level: "advanced" },
        { name: "Visual Studio", level: "advanced" },
        { name: "Postman", level: "basic" },
    ],
};

export const experience = [
    {
        role: "Ausbildung Fachinformatiker für Anwendungsentwicklung",
        company: "Woolworth GmbH",
        period: "2022 – 2025",
        description: [
            "Analyse von Kundenwünschen und Implementierung von Lösungen",
            "Strukturierung von Daten und Programmen",
            "Sicherstellung von Wartbarkeit und Konfigurierbarkeit von Programmen",
            "Erstellung, Durchführung und Auswertung von eigenen Testkonzepten",
            "Weiterentwicklung der Warenwirtschaft inklusive Datenbank",
            "Entwicklung von Front- und Backend-Anwendungen",
        ],
    },
    {
        role: "Auslandspraktikum (remote)",
        company: "International Formation Center, Madrid",
        period: "2022",
        description: [
            "Umsetzung der App mit Kotlin für Android",
            "Gestaltung des User Interface (UI-Design)",
            "Implementierung von Navigation zwischen verschiedenen Inhalten",
            "Strukturierte Darstellung von Lerninhalten",
            "Praktische Erfahrungen in App-Entwicklung und UX-Optimierung",
        ],
    },
];

export const about = {
    text: "Ich beschäftige mich gern mit DIY-Projekten und experimentiere mit eigenen Ideen. Außerdem interessiere ich mich für 3D-Modellierung und die kreative Umsetzung digitaler Objekte. In meiner Freizeit zocke ich vor allem gerne competitive Games, in denen ich ganz gut unterwegs bin.",
};
