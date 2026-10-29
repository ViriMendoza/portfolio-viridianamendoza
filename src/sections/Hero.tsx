import ButtonLink from "../components/ButtonLink";
import Section from "../components/Section";
import { Eyebrow } from "../components/SectionHeader";
import Tag from "../components/Tag";
import { highlights } from "../data/profile";

const title =
    "Building accessible, performant and intelligent web experiences.";
const titleWords = title.split(" ");

const WORD_STAGGER_MS = 80;
// The eyebrow enters first, then the title starts
const titleDelay = 150;
// The rest of the hero starts entering while the last title words are still settling
const contentDelay = titleDelay + titleWords.length * WORD_STAGGER_MS;

export default function Hero() {
    return (
        <Section
            variant="hero"
            className="flex items-center py-20 md:min-h-[calc(100vh-80px)] md:py-0"
        >
            <Eyebrow className="hero-fade block font-medium">
                Frontend Engineer
            </Eyebrow>

            <h1 className="mt-4 max-w-4xl text-5xl leading-tight font-bold md:text-7xl">
                {/* Screen readers get the sentence in one piece; the animated words are visual only */}
                <span className="sr-only">{title}</span>
                <span aria-hidden="true">
                    {titleWords.map((word, index) => (
                        <span key={index}>
                            <span
                                className="hero-word"
                                style={{
                                    animationDelay: `${titleDelay + index * WORD_STAGGER_MS}ms`,
                                }}
                            >
                                {word}
                            </span>{" "}
                        </span>
                    ))}
                </span>
            </h1>

            <p
                className="hero-fade mt-8 max-w-2xl text-lg text-muted"
                style={{ animationDelay: `${contentDelay}ms` }}
            >
                React Developer with 5+ years of experience creating scalable
                interfaces focused on UX, accessibility, SEO and performance.
            </p>

            <div
                className="hero-fade mt-10 flex gap-4"
                style={{ animationDelay: `${contentDelay + 150}ms` }}
            >
                <ButtonLink href="#projects">View Projects</ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                    Contact Me
                </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 md:mt-16">
                {highlights.map((item, index) => (
                    // The flex wrapper keeps the Tag a block-level box, as it was before wrapping
                    <span
                        key={item}
                        className="hero-fade flex"
                        style={{
                            animationDelay: `${contentDelay + 300 + index * 60}ms`,
                        }}
                    >
                        <Tag variant="outline">{item}</Tag>
                    </span>
                ))}
            </div>
        </Section>
    );
}
