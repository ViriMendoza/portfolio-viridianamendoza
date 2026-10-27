import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
    // The initial theme is applied by the inline script in index.html
    const [dark, setDark] = useState(() =>
        document.documentElement.classList.contains("dark"),
    );

    function toggleTheme() {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
            localStorage.setItem("theme", next ? "dark" : "light");
        } catch {
            // Storage unavailable: the choice just won't persist.
        }
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line"
        >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}
