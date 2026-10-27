export interface TechGroup {
    category: string;
    /** primary: shown in PrimaryFocus · supporting: main grid · expanding: Cloud & AI */
    group: "primary" | "supporting" | "expanding";
    technologies: string[];
}
