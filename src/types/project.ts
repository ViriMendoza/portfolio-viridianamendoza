export interface Project {
    title: string;
    category: string;
    overview: string;
    image: string;
    imageAlt?: string;
    // "contain" shows the whole image, for diagrams that must not be cropped
    imageFit?: "cover" | "contain";
    technologies: string[];
    metrics: string[];
    kind: "open-source" | "client" | "personal";
    featured?: boolean;
    // Case study details (shown in CaseStudyModal)
    challenge?: string;
    solution?: string;
    results?: string[];
}
