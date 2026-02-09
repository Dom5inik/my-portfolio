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
            "Moderne E-Commerce-Anwendung zur Präsentation und Verwaltung von Kunstwerken mit Fokus auf Usability und Performance.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Context API", "Node.js", "FormData & File Upload API"],
        links: {
            demo: "https://art-gallery-ecommerce-nine.vercel.app/",
            github: "https://github.com/Dom5inik/art-gallery-ecommerce",
        },
    },
    {
        title: "Local PDF Editor",
        description:
            "Local PDF Editor enables users to preview, edit, annotate, reorder, and export PDF files directly in the browser — without any server-side PDF processing.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "PDF.js", "pdf-lib", "Lucide React"],
        links: {
            demo: "https://pdf-editor-bice.vercel.app/",
            github: "https://github.com/Dom5inik/pdf-editor/",
        },
    },
    {
        title: "Weather Checker Widget",
        description:
            "Weather Checker Widget is a small widget that allows users to check the weather in their city.",
        tags: [".NET", "C#", "MVVM", "WebView2", "Leaflet.js", "Open-Meteo API", "RainViewer API", "BigDataCloud API"],
        links: {
            demo: "/weather-demo",
            github: "https://github.com/Dom5inik/weather-viewer",
        },
    },
];

export const skills = {
    frontend: [
        { name: "C# WPF", level: "advanced" },
        { name: "React", level: "intermediate" },
        { name: "Next.js", level: "intermediate" },
        { name: "TypeScript", level: "intermediate" },
        { name: "Tailwind CSS", level: "intermediate" }
    ],
    backend: [
        { name: "Oracle DB", level: "advanced" },
        { name: "PL/SQL", level: "intermediate" },
        { name: "ASP.NET MVC", level: "intermediate" },
        { name: "Node.js", level: "intermediate" }
    ],
    devops: [
        { name: "Docker", level: "basic" },
        { name: "Vercel", level: "basic" }
    ],
    tools: [
        { name: "Git", level: "advanced" },
        { name: "VS Code", level: "advanced" },
        { name: "Visual Studio", level: "advanced" },
        { name: "Postman", level: "basic" }
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
        role: "Auslandspraktikum",
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
