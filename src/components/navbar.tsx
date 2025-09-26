"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeToggle";
import { useState } from "react";
import { usePathname } from "next/navigation"; // for active page

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-white/40 dark:bg-black/40 dark:border-b dark:border-gray-900 backdrop-blur-md shadow-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <Link
                        href="#home"
                        className="text-2xl font-bold text-cyan-600 dark:text-cyan-400"
                    >
                        Wizaura
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`font-medium transition ${isActive
                                            ? "text-cyan-600 font-semibold dark:text-cyan-400"
                                            : "text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/* Theme toggle for desktop */}
                    <ThemeSwitcher />
                </div>

                {/* Mobile menu button + theme toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeSwitcher />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-cyan-500 dark:text-cyan-400 focus:outline-none text-2xl"
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 w-full px-6 py-4 flex flex-col gap-4 transition-colors duration-300">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition ${isActive
                                    ? "text-cyan-600 font-semibold dark:text-cyan-400"
                                    : "text-cyan-500 hover:text-cyan-600 dark:text-cyan-500 dark:hover:text-cyan-400"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}
