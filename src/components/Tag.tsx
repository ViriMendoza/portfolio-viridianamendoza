import clsx from "clsx";
import type { ReactNode } from "react";

const variants = {
    primary: "bg-primary/8 text-primary",
    strong: "border border-primary/20 bg-primary/15 font-semibold text-primary",
    subtle: "border border-line bg-primary/6 text-muted",
    outline: "border border-line bg-card",
};

const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-sm",
};

interface TagProps {
    children: ReactNode;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
}

export default function Tag({
    children,
    variant = "primary",
    size = "md",
}: TagProps) {
    return (
        <span className={clsx("rounded-full", variants[variant], sizes[size])}>
            {children}
        </span>
    );
}
