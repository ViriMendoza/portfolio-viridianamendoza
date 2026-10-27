import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import type { Project } from "../types/project";
import Tag from "./Tag";

interface CaseStudyModalProps {
    project: Project | null;
    onClose: () => void;
}

// Native <dialog> provides focus trapping, Escape to close and aria-modal for free.
export default function CaseStudyModal({
    project,
    onClose,
}: CaseStudyModalProps) {
    const ref = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = ref.current;
        if (!dialog) return;

        if (project) dialog.showModal();
        else dialog.close();
    }, [project]);

    return (
        <dialog
            ref={ref}
            aria-labelledby="case-study-title"
            onClose={onClose}
            // A click on the dialog itself (not its content) is a click on the backdrop
            onClick={(e) => e.target === e.currentTarget && onClose()}
            className="m-auto my-12 w-[calc(100%-1.5rem)] max-w-4xl overflow-hidden rounded-4xl border border-line bg-card text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm sm:w-[calc(100%-3rem)]"
        >
            {project && (
                <div className="relative max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain">
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close case study"
                        className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/15"
                    >
                        <X size={20} />
                    </button>

                    {project.imageFit === "contain" ? (
                        // Diagrams are hard to read at this size, so link to the full image
                        <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-3 pt-20 pb-2 sm:px-8"
                        >
                            <img
                                src={project.image}
                                alt={project.imageAlt ?? project.title}
                                className="max-h-[75dvh] w-full object-contain"
                            />
                            <span className="mt-3 flex items-center justify-center gap-1 text-sm text-primary">
                                Open full-size diagram
                                <ArrowUpRight size={16} />
                            </span>
                        </a>
                    ) : (
                        <img
                            src={project.image}
                            alt={project.imageAlt ?? project.title}
                            className="aspect-16/8 w-full object-cover"
                        />
                    )}

                    <div className="p-10">
                        <span className="text-sm tracking-wider text-primary uppercase">
                            {project.category}
                        </span>

                        <h2
                            id="case-study-title"
                            className="mt-3 text-4xl font-bold"
                        >
                            {project.title}
                        </h2>

                        <p className="mt-6 text-lg leading-relaxed text-muted">
                            {project.overview}
                        </p>

                        {project.challenge && (
                            <CaseStudySection title="Challenge">
                                <p className="mt-4 leading-relaxed text-muted">
                                    {project.challenge}
                                </p>
                            </CaseStudySection>
                        )}

                        {project.solution && (
                            <CaseStudySection title="Solution">
                                <p className="mt-4 leading-relaxed text-muted">
                                    {project.solution}
                                </p>
                            </CaseStudySection>
                        )}

                        {project.results && (
                            <CaseStudySection title="Results">
                                <ul className="mt-5 space-y-3">
                                    {project.results.map((result) => (
                                        <li
                                            key={result}
                                            className="flex items-center gap-3"
                                        >
                                            <span
                                                aria-hidden="true"
                                                className="text-primary"
                                            >
                                                ✓
                                            </span>
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </CaseStudySection>
                        )}

                        <CaseStudySection title="Technologies">
                            <div className="mt-5 flex flex-wrap gap-3">
                                {project.technologies.map((tech) => (
                                    <Tag key={tech}>{tech}</Tag>
                                ))}
                            </div>
                        </CaseStudySection>

                        {project.kind === "client" && (
                            <p className="mt-12 text-sm text-muted">
                                Client details omitted due to confidentiality
                                agreements.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </dialog>
    );
}

function CaseStudySection({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <section className="mt-12">
            <h3 className="text-xl font-semibold">{title}</h3>
            {children}
        </section>
    );
}
