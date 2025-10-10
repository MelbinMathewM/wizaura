"use client";

import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    // On initial load, set theme from localStorage or system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = !savedTheme
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
            : savedTheme === "dark";

        if (prefersDark) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDark(true);
        }
    };

    return (
        <button
            className="transition text-teal-500 hover:text-teal-600"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
        >
            {isDark ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
    );
}
