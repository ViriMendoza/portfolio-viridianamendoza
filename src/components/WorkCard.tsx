import type { LucideIcon } from "lucide-react";
import { revealOnScroll } from "../utils/revealOnScroll";

interface WorkCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export default function WorkCard({
    icon: Icon,
    title,
    description,
}: WorkCardProps) {
    return (
        <div
            ref={revealOnScroll}
            className="group relative overflow-hidden rounded-3xl border border-line bg-card p-8 transition-transform duration-300 hover:-translate-y-2"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,60,107,.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />

            <div className="relative z-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted">{description}</p>
            </div>
        </div>
    );
}
