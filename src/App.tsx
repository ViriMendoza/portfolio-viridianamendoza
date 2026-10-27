import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import HowIWork from "./sections/HowIWork";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <About />
                <Experience />
                <HowIWork />
                <Projects />
                <TechStack />
                <Contact />
            </main>
        </>
    );
}
