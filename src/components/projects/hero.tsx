"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsHero() {
    return (
        <section className="relative w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">
                    Our Projects
                </h1>
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
                    Explore a selection of web and mobile applications we&apos;ve built for clients across different industries. Each project demonstrates our commitment to quality, innovation, and user-centric design.
                </p>

                <Link href="/contact">
                    <span className="mt-3 inline-flex items-center bg-indigo-500 text-white font-semibold px-4 py-2 rounded-full shadow-lg hover:shadow-2xl hover:translate-y-0.5 hover:scale-105 transition-all duration-300">
                        Start Your Project
                        <FaArrowRight className="ml-2" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
