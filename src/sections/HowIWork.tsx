import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import WorkCard from "../components/WorkCard";
import { principles } from "../data/profile";

export default function HowIWork() {
    return (
        <Section id="how-i-work" className="py-32">
            <SectionHeader
                eyebrow="Engineering Principles"
                title="Building products that balance design quality, accessibility and performance."
                description="I approach every project with a focus on thoughtful design, inclusive experiences, measurable performance and maintainable frontend architecture."
            />

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {principles.map((principle) => (
                    <WorkCard key={principle.title} {...principle} />
                ))}
            </div>
        </Section>
    );
}
