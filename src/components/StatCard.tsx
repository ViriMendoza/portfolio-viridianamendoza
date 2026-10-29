import { revealOnScroll } from "../utils/revealOnScroll";

interface StatCardProps {
    value: string;
    label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
    return (
        <div
            ref={revealOnScroll}
            className="rounded-3xl border border-line bg-card p-4 transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
        >
            <h3 className="text-3xl font-bold text-primary sm:text-4xl">
                {value}
            </h3>
            <p className="mt-2 text-sm text-muted">{label}</p>
        </div>
    );
}
