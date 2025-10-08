"use client";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function HomeCTA() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-gray-950 transition-colors duration-500">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3 sm:gap-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Ready to Build Something Amazing?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl">
                    Let&apos;s work together to create a modern web or mobile application that elevates your business.
                </p>

                <Link href="/contact">
                    <span className="mt-4 inline-flex items-center bg-white dark:bg-black text-indigo-500 font-semibold px-6 py-3 rounded-full shadow-xl dark:shadow-indigo-950/40 hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
                        Get In Touch
                        <FaPaperPlane className="ml-2 text-indigo-500" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
