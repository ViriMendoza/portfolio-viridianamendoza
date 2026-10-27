import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import { Eyebrow } from "../components/SectionHeader";
import Tag from "../components/Tag";
import { contactLinks, highlights } from "../data/profile";

export default function Contact() {
    return (
        <Section
            id="contact"
            variant="hero"
            className="py-40"
            containerClassName="max-w-4xl text-center"
        >
            <Eyebrow>Contact</Eyebrow>

            <h2 className="mt-6 text-5xl leading-tight font-bold md:text-6xl">
                Let's build something great together.
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-xl text-muted">
                I'm currently open to remote Frontend and React Developer
                opportunities across US and LATAM.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
                {contactLinks.map(({ label, ...link }) => (
                    <ButtonLink key={label} {...link}>
                        {label}
                    </ButtonLink>
                ))}
            </div>

            <div className="mt-16 flex flex-wrap justify-center gap-3">
                {highlights.map((item) => (
                    <Tag key={item}>{item}</Tag>
                ))}
            </div>

            <p className="mt-10 text-sm text-muted">
                Available for full-time remote opportunities, freelance projects
                and consulting engagements.
            </p>
        </Section>
    );
}
