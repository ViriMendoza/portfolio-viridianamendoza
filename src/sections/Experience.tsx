import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Tag from "../components/Tag";
import { experience } from "../data/experience";

export default function Experience() {
    return (
        <Section id="experience" className="py-32">
            <SectionHeader
                eyebrow="Experience"
                title="Where I've built and shipped production interfaces."
            />

            <ol className="mt-16 space-y-12 border-l border-line">
                {experience.map(
                    ({
                        role,
                        company,
                        period,
                        location,
                        summary,
                        achievements,
                        technologies,
                    }) => (
                        <li
                            key={`${company}-${period}`}
                            className="relative pl-8 md:pl-12"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute top-2 -left-[7px] size-3.5 rounded-full border-2 border-page bg-primary"
                            />

                            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                                <h3 className="text-2xl font-semibold">
                                    {role}{" "}
                                    <span className="text-primary">
                                        · {company}
                                    </span>
                                </h3>

                                <p className="shrink-0 text-sm tracking-wide text-muted">
                                    {period}
                                    {location && ` · ${location}`}
                                </p>
                            </div>

                            {summary && (
                                <p className="mt-3 max-w-3xl text-muted">
                                    {summary}
                                </p>
                            )}

                            <ul className="mt-5 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-muted marker:text-primary">
                                {achievements.map((achievement) => (
                                    <li key={achievement}>{achievement}</li>
                                ))}
                            </ul>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {technologies.map((tech) => (
                                    <Tag key={tech} size="sm">
                                        {tech}
                                    </Tag>
                                ))}
                            </div>
                        </li>
                    ),
                )}
            </ol>
        </Section>
    );
}
