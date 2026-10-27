import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        title: "AI Accessibility Assistant",
        category: "AI / Accessibility",
        overview:
            "An AI-powered application designed to help developers identify, understand and address accessibility issues through contextual recommendations.",
        image: "/projects/ai-accessibility.png",
        technologies: ["React", "TypeScript", "AWS", "LLMs", "RAG"],
        metrics: [
            "Accessibility-focused workflow",
            "Contextual AI recommendations",
            "Cloud-based architecture",
        ],
        kind: "open-source",
        featured: true,
    },

    {
        title: "AWS Cloud Infrastructure & Web Deployment",
        category: "Cloud / Infrastructure",
        overview:
            "A cloud architecture for a web application on AWS across two Availability Zones: static assets delivered through CloudFront and S3, an auto-scaled EC2 tier behind a load balancer, and a database isolated in private subnets.",
        image: "/projects/aws-infrastructure.svg",
        imageAlt:
            "AWS architecture diagram: users reach Route 53 and CloudFront, which serves static assets from S3 and forwards traffic to an Application Load Balancer and an EC2 Auto Scaling group in public subnets across two Availability Zones, with Amazon RDS in private subnets.",
        imageFit: "contain",
        technologies: [
            "Route 53",
            "CloudFront",
            "S3",
            "VPC",
            "Application Load Balancer",
            "EC2 Auto Scaling",
            "RDS",
        ],
        metrics: [
            "EC2 Auto Scaling behind an Application Load Balancer across two Availability Zones",
            "RDS database isolated in private subnets with no direct internet access",
            "Static assets served from S3 through CloudFront, with DNS on Route 53",
        ],
        kind: "personal",
    },

    {
        title: "Project Three",
        category: "Frontend / Performance",
        overview:
            "A frontend experience focused on accessibility, performance optimization and delivering a fast user experience across devices.",
        image: "/projects/project-three.png",
        technologies: ["JavaScript", "HTML", "CSS", "Lighthouse"],
        metrics: [
            "Performance optimization",
            "Accessibility improvements",
            "Responsive experience",
        ],
        kind: "client",
    },
];
