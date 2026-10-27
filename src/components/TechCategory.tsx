import Tag from "./Tag";

interface TechCategoryProps {
    category: string;
    technologies: string[];
}

export default function TechCategory({
    category,
    technologies,
}: TechCategoryProps) {
    return (
        <div className="rounded-[28px] border border-line bg-card p-8 transition-transform duration-300 hover:-translate-y-1">
            <h3 className="mb-6 text-xl font-semibold">{category}</h3>

            <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                ))}
            </div>
        </div>
    );
}
