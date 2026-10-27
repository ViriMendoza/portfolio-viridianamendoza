import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;

        function closeOnEscape(event: KeyboardEvent) {
            if (event.key === "Escape") setMenuOpen(false);
        }

        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [menuOpen]);

    return (
        <header className="sticky top-0 z-50 border-b border-line bg-page/75 backdrop-blur-lg">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <a href="/" className="text-lg font-bold tracking-tight">
                    Viridiana Mendoza
                </a>

                <nav aria-label="Main" className="hidden gap-8 md:flex">
                    {navLinks.map(({ href, label }) => (
                        <a key={href} href={href}>
                            {label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <ThemeToggle />

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Main"
                    className="border-t border-line bg-page px-6 py-4 md:hidden"
                >
                    {navLinks.map(({ href, label }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="block py-3 text-lg"
                        >
                            {label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
