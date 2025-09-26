"use client";

import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center bg-white dark:bg-black items-center text-center px-6 sm:px-12 pt-16 sm:pt-12 z-10">

                <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-cyan-800 dark:text-cyan-600">
                    Wizaura
                </h1>

                {/* Slogan */}
                <p className="text-xl sm:text-2xl text-cyan-500 dark:text-cyan-300 font-semibold">
                    The Aura of Innovation
                </p>

                <p className="mt-8 text-lg sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                    We craft modern websites, apps, and digital solutions tailored to your business.
                    Bringing together innovation, creativity, and quality.
                </p>

                <div className="mt-6 flex gap-4 flex-wrap justify-center w-full">
                    <Link
                        href="/services"
                        className="bg-cyan-100 border border-cyan-100 dark:bg-cyan-900 dark:border-cyan-900 text-cyan-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
                    >
                        Our Services
                    </Link>
                    <a
                        href="/contact"
                        className="border border-cyan-600 text-cyan-600 dark:text-cyan-600 dark:border-cyan-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 hover:text-white transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
