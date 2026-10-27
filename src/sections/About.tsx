import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import StatCard from "../components/StatCard";
import { stats } from "../data/profile";

export default function About() {
    return (
        <Section id="about" className="py-32">
            <div className="grid items-center gap-20 lg:grid-cols-2">
                <div>
                    <SectionHeader
                        eyebrow="About"
                        title="Building digital products that balance design, accessibility and performance."
                    />

                    <div className="mt-8 space-y-6 text-lg text-muted">
                        <p>
                            I'm a Frontend Developer with more than 5 years of
                            experience creating digital experiences for
                            enterprise, healthcare, finance and public-sector
                            organizations.
                        </p>

                        <p>
                            I specialize in transforming UX/UI designs into
                            scalable, maintainable and pixel-perfect interfaces
                            using React, TypeScript and modern frontend
                            technologies.
                        </p>

                        <p>
                            My work focuses on accessibility, Lighthouse
                            optimization, technical SEO and clean component
                            architecture, ensuring every project delivers
                            exceptional user experience and measurable business
                            impact.
                        </p>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {stats.map((stat) => (
                        <StatCard key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
