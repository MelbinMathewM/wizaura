"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="pt-12 md:pt-16 pb-4 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">

                    {/* Left: Heading + Image */}
                    <div className="w-full flex flex-col items-start gap-4 sm:gap-6 lg:items-start text-center lg:text-left">
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                            className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 leading-tight"
                        >
                            About Wizaura
                        </motion.h2>
                        <p className="bg-teal-600 text-white p-4 rounded-xl text-base sm:text-lg leading-relaxed max-w-xl text-center lg:text-left">
                            From startups to established enterprises, we deliver tailored solutions that elevate
                            your brand, engage users, and drive results.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }}
                            className="w-full max-w-md rounded-2xl overflow-hidden shadow-md"
                        >
                            <Image
                                src="/about-main2.webp"
                                alt="About Wizaura"
                                width={800}
                                height={400}
                                className="w-full h-60 object-cover"
                            />
                        </motion.div>
                    </div>

                    {/* Right: First and Second Paragraph */}
                    <div className="flex flex-col gap-4 lg:gap-6 items-end justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }}
                            className="w-full max-w-md rounded-2xl overflow-hidden shadow-md"
                        >
                            <Image
                                src="/about-main.webp"
                                alt="About Wizaura"
                                width={800}
                                height={400}
                                className="w-full h-60 object-cover"
                            />
                        </motion.div>
                        <p className="bg-teal-600 p-4 rounded-xl text-white text-base sm:text-lg leading-relaxed max-w-xl text-center lg:text-left">
                            We are passionate about crafting modern, innovative, and user-friendly web and app
                            solutions. Our team combines creativity, technology, and strategy to empower businesses
                            in the digital world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
