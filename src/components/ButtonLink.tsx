import clsx from "clsx";
import type { ReactNode } from "react";

interface ButtonLinkProps {
    href: string;
    children: ReactNode;
    variant?: "primary" | "secondary";
    /** Opens in a new tab */
    external?: boolean;
}

export default function ButtonLink({
    href,
    children,
    variant = "primary",
    external = false,
}: ButtonLinkProps) {
    return (
        <a
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className={clsx(
                "inline-flex items-center justify-center rounded-full border px-6 py-3 font-medium transition duration-300 hover:-translate-y-1",
                variant === "primary"
                    ? "border-transparent bg-primary text-white hover:bg-primary-hover"
                    : "border-line text-fg",
            )}
        >
            {children}
        </a>
    );
}
