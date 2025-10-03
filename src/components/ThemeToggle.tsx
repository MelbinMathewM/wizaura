"use client";

import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const html = document.documentElement;
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            setIsDark(false);
        } else {
            html.classList.add("dark");
            setIsDark(true);
        }
    };

    return (
        <button
            className="transition text-teal-500"
            onClick={toggleTheme}
        >
            {isDark ? <BiSun /> : <BiMoon />}
        </button>
    );
}
