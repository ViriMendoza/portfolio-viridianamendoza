import clsx from "clsx";
import type { ReactNode } from "react";

interface EyebrowProps {
    children: ReactNode;
    className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
    return (
        <span
            className={clsx(
                "text-sm tracking-[0.3em] text-primary uppercase",
                className,
            )}
        >
            {children}
        </span>
    );
}

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    description?: string;
}

export default function SectionHeader({
    eyebrow,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>

            <h2 className="mt-4 text-4xl leading-tight font-bold md:text-5xl">
                {title}
            </h2>

            {description && (
                <p className="mt-6 text-lg text-muted">{description}</p>
            )}
        </div>
    );
}
