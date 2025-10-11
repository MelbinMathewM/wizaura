// ContactHero.jsx
"use client";
import { motion } from "framer-motion";

export default function ContactHero() {
    return (
        <section className="py-12 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-500 flex flex-col items-center text-center">
            <div className="max-w-7xl mx-auto">
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="text-4xl md:text-5xl text-left font-extrabold text-teal-600 dark:text-teal-400 leading-tight"
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="bg-teal-600 dark:bg-teal-600 text-white text-center p-6 rounded-lg text-lg font-medium h-fit md:self-center"
                    >
                        Have a project in mind, or just want to say hello?
                        We&apos;d love to hear from you. Reach out and let&apos;s start building something amazing together.
                    </motion.p>
                </header>
            </div>
        </section>
    );
}
