"use client";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function ProjectsCTA() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Inspired by Our Work?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl">
                    If you like what you see, let&apos;s collaborate and bring your project ideas to life. We deliver modern, scalable, and user-friendly solutions.
                </p>

                <Link href="/contact">
                    <span className="mt-2 sm:mt-4 inline-flex items-center bg-cyan-500 dark:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-xl dark:shadow-cyan-950/40 hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
                        Get in Touch
                        <FaPaperPlane className="ml-2 text-white" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
