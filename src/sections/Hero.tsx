import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import { Eyebrow } from "../components/SectionHeader";
import Tag from "../components/Tag";
import { highlights } from "../data/profile";

export default function Hero() {
    return (
        <Section
            variant="hero"
            className="flex min-h-[calc(100vh-80px)] items-center"
        >
            <Eyebrow className="font-medium">Frontend Engineer</Eyebrow>

            <h1 className="mt-4 max-w-4xl text-5xl leading-tight font-bold md:text-7xl">
                Building accessible, performant and intelligent web experiences.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-muted">
                React Developer with 5+ years of experience creating scalable
                interfaces focused on UX, accessibility, SEO and performance.
            </p>

            <div className="mt-10 flex gap-4">
                <ButtonLink href="#projects">View Projects</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                    Contact Me
                </ButtonLink>
            </div>

            <div className="mt-16 flex flex-wrap gap-3">
                {highlights.map((item) => (
                    <Tag key={item} variant="outline">
                        {item}
                    </Tag>
                ))}
            </div>
        </Section>
    );
}
