import { useState } from "react";
import CaseStudyModal from "../components/CaseStudyModal";
import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/projects";
import type { Project } from "../types/project";

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    return (
        <Section id="projects" className="py-16 md:py-32">
            <SectionHeader
                eyebrow="Featured Projects"
                title="Selected work focused on accessibility, performance and user experience."
                description="A selection of projects exploring modern frontend architecture, accessible experiences and emerging technologies."
            />

            <div className="mt-10 grid gap-8 md:mt-20 lg:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        {...project}
                        onViewCaseStudy={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            <p className="mt-10 text-center text-lg text-muted md:mt-16">
                Additional client work available upon request due to
                confidentiality agreements.
            </p>

            <CaseStudyModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </Section>
    );
}
