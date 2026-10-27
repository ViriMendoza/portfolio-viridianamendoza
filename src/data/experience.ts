import type { Experience } from "../types/experience";

// Most recent first. Achievements lead with impact; add real numbers
// (e.g. "Raised Lighthouse performance from 62 to 96") when available.
export const experience: Experience[] = [
    {
        role: "Frontend Developer",
        company: "Toro Digital Creative",
        period: "Mar 2022 — Present",
        location: "Remote",
        summary:
            "Building data-driven, analytics-oriented product features alongside design and backend teams.",
        achievements: [
            "Develop scalable frontend applications with React and TypeScript, built on a library of reusable UI components.",
            "Deliver analytics-oriented interfaces in close collaboration with designers and backend engineers.",
            "Integrate frontend applications with APIs to ensure reliable, consistent data flow.",
            "Improve Lighthouse scores through targeted performance optimization.",
            "Implement WCAG accessibility standards to make products usable for everyone.",
        ],
        technologies: [
            "React",
            "TypeScript",
            "REST APIs",
            "Lighthouse",
            "WCAG",
        ],
    },
    {
        role: "Frontend Developer",
        company: "Tecnologías Comunicaciones y Sistemas de Jalisco",
        period: "Feb 2021 — Mar 2022",
        achievements: [
            "Developed interactive user interfaces with React and modern JavaScript.",
            "Built modular components aligned with a scalable frontend architecture.",
            "Integrated APIs and dynamic data in collaboration with backend teams.",
            "Debugged production issues and delivered performance improvements.",
        ],
        technologies: ["React", "JavaScript", "REST APIs"],
    },
    {
        role: "React Developer",
        company: "Freelance",
        period: "2020 — Present",
        location: "Remote",
        achievements: [
            "Build React applications with TypeScript and a modular architecture.",
            "Ship responsive, high-performance interfaces with a focus on data-driven UI and accessibility.",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
    },
];
