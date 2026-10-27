import clsx from "clsx";
import { useEffect, useRef } from "react";

interface BackgroundEffectsProps {
    variant?: "hero" | "section";
}

export default function BackgroundEffects({
    variant = "hero",
}: BackgroundEffectsProps) {
    const heroMode = variant === "hero";
    const ref = useRef<HTMLDivElement>(null);

    // The spotlight follows the pointer through CSS variables instead of state,
    // so moving the mouse never re-renders React. Updates are batched per frame.
    useEffect(() => {
        const element = ref.current;
        if (!heroMode || !element) return;

        let frame = 0;
        const handlePointerMove = (e: PointerEvent) => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const rect = element.getBoundingClientRect();
                element.style.setProperty(
                    "--spotlight-x",
                    `${e.clientX - rect.left}px`,
                );
                element.style.setProperty(
                    "--spotlight-y",
                    `${e.clientY - rect.top}px`,
                );
            });
        };

        window.addEventListener("pointermove", handlePointerMove, {
            passive: true,
        });

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            cancelAnimationFrame(frame);
        };
    }, [heroMode]);

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
            <div className="hero-grid absolute inset-0" />
            <div className="noise absolute inset-0" />

            {/* Blur is expensive on large layers, so only the hero variant uses it */}
            <div
                className={clsx(
                    "glow glow-primary",
                    heroMode
                        ? "-top-40 -left-40 size-175 opacity-20 blur-[140px]"
                        : "top-20 -left-20 size-125 opacity-10",
                )}
            />
            <div
                className={clsx(
                    "glow glow-secondary",
                    heroMode
                        ? "top-20 -right-40 size-150 opacity-15 blur-[140px]"
                        : "top-40 right-0 size-100 opacity-8",
                )}
            />

            {heroMode && <div className="spotlight absolute inset-0" />}
        </div>
    );
}
