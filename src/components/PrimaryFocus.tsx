import { coreSkills, techStack } from "../data/techStack";
import Tag from "./Tag";
import { revealOnScroll } from "../utils/revealOnScroll";

const primaryStack = techStack
    .filter((group) => group.group === "primary")
    .flatMap((group) => group.technologies);

export default function PrimaryFocus() {
    return (
        <div
            ref={revealOnScroll}
            className="relative mt-12 overflow-hidden rounded-4xl border border-primary/35 bg-card p-8 md:p-10"
        >
            <div
                aria-hidden="true"
                className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--primary),transparent)] opacity-20 blur-[110px]"
            />

            <div className="relative z-10">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="text-xs font-medium tracking-[0.25em] text-primary uppercase">
                            Core Expertise
                        </span>

                        <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                            Frontend Engineering
                        </h3>
                    </div>

                    <p className="max-w-xs font-semibold text-primary">
                        5+ Years Building Enterprise Frontends
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {primaryStack.map((tech) => (
                        <Tag key={tech} variant="strong" size="lg">
                            {tech}
                        </Tag>
                    ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                    {coreSkills.map((skill) => (
                        <Tag key={skill} variant="subtle">
                            {skill}
                        </Tag>
                    ))}
                </div>
            </div>
        </div>
    );
}
