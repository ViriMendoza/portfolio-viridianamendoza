import {
    Accessibility,
    Gauge,
    Layers3,
    PencilRuler,
    type LucideIcon,
} from "lucide-react";

export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

export const highlights = [
    "React",
    "TypeScript",
    "Accessibility",
    "Performance",
    "AWS",
    "AI",
];

export const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "95+", label: "Lighthouse Score" },
    { value: "WCAG", label: "Accessibility Focus" },
];

export const principles: {
    icon: LucideIcon;
    title: string;
    description: string;
}[] = [
    {
        icon: PencilRuler,
        title: "Pixel Perfect",
        description:
            "Transform UX/UI designs into production-ready interfaces with precise attention to detail and visual consistency.",
    },
    {
        icon: Accessibility,
        title: "Accessibility First",
        description:
            "Build inclusive experiences following WCAG principles, considering accessibility throughout the design and development process.",
    },
    {
        icon: Gauge,
        title: "Performance Driven",
        description:
            "Optimize Lighthouse scores, Core Web Vitals and loading performance without compromising the user experience.",
    },
    {
        icon: Layers3,
        title: "Scalable Architecture",
        description:
            "Create reusable React components and maintainable codebases designed to evolve as products, teams and technical requirements grow.",
    },
];

export const contactLinks: {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
    external?: boolean;
}[] = [
    { href: "mailto:viri.353033@gmail.com", label: "Email Me" },
    {
        href: "https://linkedin.com/in/erikme-viridiana-mendoza",
        label: "LinkedIn",
        variant: "secondary",
        external: true,
    },
    {
        href: "/CV-Viri-Mendoza.pdf",
        label: "Download Resume",
        variant: "secondary",
        external: true,
    },
];
