"use client";

import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-center bg-white dark:bg-black items-center text-center px-6 sm:px-12 pt-16 sm:pt-12 z-10">

                <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-indigo-800 dark:text-indigo-600">
                    Wizaura
                </h1>

                {/* Slogan */}
                <p className="text-xl sm:text-2xl text-indigo-500 dark:text-indigo-300 font-semibold">
                    The Aura of Innovation
                </p>

                <p className="mt-8 text-lg sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl">
                    We craft modern websites, apps, and digital solutions tailored to your business.
                    Bringing together innovation, creativity, and quality.
                </p>

                <div className="mt-6 flex gap-4 flex-wrap justify-center w-full">
                    <Link
                        href="/services"
                        className="bg-indigo-100 border border-indigo-100 dark:bg-indigo-900 dark:border-indigo-900 text-indigo-700 dark:text-gray-300 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
                    >
                        Our Services
                    </Link>
                    <a
                        href="/contact"
                        className="border border-indigo-600 text-indigo-600 dark:text-indigo-600 dark:border-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 dark:hover:bg-indigo-900 hover:text-white transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}
