import type { TechGroup } from "../types/techStack";

export const techStack: TechGroup[] = [
    {
        category: "Frontend",
        group: "primary",
        technologies: ["React", "TypeScript", "JavaScript", "Redux", "HTML5"],
    },

    {
        category: "Styling",
        group: "supporting",
        technologies: ["SASS", "Tailwind CSS", "Bootstrap", "CSS3"],
    },

    {
        category: "Accessibility & Optimization",
        group: "supporting",
        technologies: ["Accessibility", "SEO", "Lighthouse", "Core Web Vitals"],
    },

    {
        category: "CMS",
        group: "supporting",
        technologies: ["WordPress", "Webflow", "HubSpot", "Document360"],
    },

    {
        category: "Data & APIs",
        group: "supporting",
        technologies: ["REST APIs", "Fetch API", "Axios", "JSON"],
    },

    {
        category: "Cloud & Infrastructure",
        group: "expanding",
        technologies: [
            "AWS",
            "S3",
            "CloudFront",
            "Lambda",
            "API Gateway",
            "CloudWatch",
        ],
    },

    {
        category: "AI & Emerging Technologies",
        group: "expanding",
        technologies: ["LLMs", "Embeddings", "Chunking", "RAG", "AI Agents"],
    },

    {
        category: "Development Workflow",
        group: "supporting",
        technologies: ["Vite", "npm", "Git", "GitHub", "ESLint", "Prettier"],
    },

    {
        category: "Collaboration & Delivery",
        group: "supporting",
        technologies: ["Figma", "Jira", "ServiceNow", "Agile", "Scrum"],
    },
];

export const coreSkills = ["Accessibility", "Performance", "SEO", "Lighthouse"];
