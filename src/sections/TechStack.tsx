import clsx from "clsx";
import PrimaryFocus from "../components/PrimaryFocus";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import TechCategory from "../components/TechCategory";
import { techStack } from "../data/techStack";
import type { TechGroup } from "../types/techStack";

const supportingStack = techStack.filter((g) => g.group === "supporting");
const expandingStack = techStack.filter((g) => g.group === "expanding");

export default function TechStack() {
    return (
        <Section id="tech-stack" className="py-32">
            <SectionHeader
                eyebrow="Tech Stack"
                title="A modern frontend stack, supported by cloud and emerging AI technologies."
                description="Focused on React development, accessible experiences, performance optimization and modern web architecture — with growing expertise in AWS and AI-powered applications."
            />

            <PrimaryFocus />

            <StackGroup
                eyebrow="Supporting Stack"
                title="Technologies I work with"
                groups={supportingStack}
                className="xl:grid-cols-4"
            />

            <StackGroup
                eyebrow="Expanding Capabilities"
                title="Cloud & AI"
                groups={expandingStack}
            />
        </Section>
    );
}

interface StackGroupProps {
    eyebrow: string;
    title: string;
    groups: TechGroup[];
    className?: string;
}

function StackGroup({ eyebrow, title, groups, className }: StackGroupProps) {
    return (
        <div className="mt-20">
            <div className="mb-8">
                <span className="text-xs font-medium tracking-[0.25em] text-muted uppercase">
                    {eyebrow}
                </span>

                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                    {title}
                </h3>
            </div>

            <div className={clsx("grid gap-5 md:grid-cols-2", className)}>
                {groups.map((group) => (
                    <TechCategory
                        key={group.category}
                        category={group.category}
                        technologies={group.technologies}
                    />
                ))}
            </div>
        </div>
    );
}
