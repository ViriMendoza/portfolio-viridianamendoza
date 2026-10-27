interface StatCardProps {
    value: string;
    label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
    return (
        <div className="rounded-3xl border border-line bg-card p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h3 className="text-4xl font-bold text-primary">{value}</h3>
            <p className="mt-2 text-sm text-muted">{label}</p>
        </div>
    );
}
