"use client";

import Link from "next/link";
import ThemeSwitcher from "./ThemeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // for active page
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        if (pathname !== "/") return; // apply only on home page

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20); // change bg after scrolling 20px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 
        ${pathname === "/" && !isScrolled
                    ? "bg-transparent shadow-none"
                    : "bg-white dark:bg-black dark:border-b dark:border-gray-900 shadow-md backdrop-blur-md"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <div className="flex items-center space-x-1">
                    {/* Logo Image */}
                    <Image
                        src="/logo.png"
                        alt="Wizaura Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />

                    {/* Brand Name */}
                    <Link
                        href="#home"
                        className="text-2xl font-bold text-teal-600 dark:text-teal-400"
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
                                            ? "text-teal-600 font-semibold dark:text-teal-400"
                                            : "text-teal-500 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-400"
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
                        className="text-teal-500 dark:text-indigo-400 focus:outline-none text-2xl"
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
                                    ? "text-teal-600 font-semibold dark:text-teal-400"
                                    : "text-teal-500 hover:text-teal-600 dark:text-teal-500 dark:hover:text-teal-400"
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
