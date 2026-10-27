import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types/project";
import Tag from "./Tag";

const kindBadges: Record<
    Project["kind"],
    { label: string; className: string }
> = {
    "open-source": {
        label: "Open Source",
        className: "bg-emerald-500/12 text-emerald-500",
    },
    client: {
        label: "Confidential Client",
        className: "bg-primary/12 text-primary",
    },
    personal: {
        label: "Personal Project",
        className: "bg-sky-500/12 text-sky-500",
    },
};

interface ProjectCardProps extends Project {
    onViewCaseStudy: () => void;
}

export default function ProjectCard({
    title,
    category,
    overview,
    image,
    imageAlt = title,
    imageFit = "cover",
    technologies,
    metrics,
    kind,
    featured = false,
    onViewCaseStudy,
}: ProjectCardProps) {
    return (
        <article
            className={clsx(
                "group overflow-hidden rounded-[28px] border bg-card transition-transform duration-300 hover:-translate-y-2",
                featured ? "border-primary/30 lg:col-span-2" : "border-line",
            )}
        >
            <div
                className={clsx(
                    "relative overflow-hidden",
                    featured ? "aspect-[2.4/1]" : "aspect-video",
                )}
            >
                {imageFit === "contain" ? (
                    <a
                        href={image}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Open full size"
                        className="block h-full px-4 pt-14 pb-4"
                    >
                        <img
                            src={image}
                            alt={imageAlt}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                        />
                    </a>
                ) : (
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                )}

                <div className="absolute top-5 left-5 rounded-full bg-card/75 px-3 py-1.5 text-xs tracking-[0.12em] text-primary uppercase backdrop-blur-md">
                    {category}
                </div>
            </div>

            <div className="p-7 md:p-8">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h3
                            className={clsx(
                                "leading-tight font-semibold",
                                featured ? "text-3xl md:text-4xl" : "text-2xl",
                            )}
                        >
                            {title}
                        </h3>

                        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
                            {overview}
                        </p>
                    </div>

                    <span
                        className={clsx(
                            "shrink-0 self-start rounded-full px-3 py-1 text-xs",
                            kindBadges[kind].className,
                        )}
                    >
                        {kindBadges[kind].label}
                    </span>
                </div>

                <div
                    className={clsx(
                        "mt-7 grid gap-3",
                        featured && "sm:grid-cols-2 lg:grid-cols-3",
                    )}
                >
                    {metrics.map((metric) => (
                        <div
                            key={metric}
                            className="rounded-xl border border-line bg-primary/5 px-4 py-3 text-sm text-muted"
                        >
                            {metric}
                        </div>
                    ))}
                </div>

                <div className="mt-7">
                    <div className="mb-3 text-xs tracking-[0.2em] text-muted uppercase">
                        Technologies
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                            <Tag key={tech} size="sm">
                                {tech}
                            </Tag>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    onClick={onViewCaseStudy}
                    className="mt-8 inline-flex items-center gap-2 font-medium text-primary transition-all duration-300 group-hover:gap-3"
                >
                    View Case Study
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </article>
    );
}
