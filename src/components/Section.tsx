import clsx from "clsx";
import type { ReactNode } from "react";
import BackgroundEffects from "./BackgroundEffects";

interface SectionProps {
    id?: string;
    variant?: "hero" | "section";
    className?: string;
    containerClassName?: string;
    children: ReactNode;
}

export default function Section({
    id,
    variant = "section",
    className,
    containerClassName = "max-w-7xl",
    children,
}: SectionProps) {
    return (
        <section
            id={id}
            className={clsx("relative isolate overflow-hidden", className)}
        >
            <BackgroundEffects variant={variant} />

            <div className={clsx("mx-auto w-full px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
