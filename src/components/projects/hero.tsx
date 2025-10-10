"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ProjectsHero() {
    return (
        <section className="relative w-full pt-8 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-500">
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 leading-tight"
                    >
                        Project Showcase
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="bg-teal-600 dark:bg-teal-600 text-white text-center p-6 rounded-lg text-lg font-medium h-fit md:self-center"
                    >
                        Explore a selection of web and mobile applications we&apos;ve built for clients across different industries. Each project demonstrates our commitment to quality, innovation, and user-centric design.
                    </motion.p>
                </header>
        </section>
    );
}
