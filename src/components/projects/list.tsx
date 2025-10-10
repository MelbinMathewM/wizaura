"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
    { title: "DrChiller", description: "A comprehensive HVAC and chiller management platform.", tech: ["React", "TypeScript", "EmailJS", "Tailwind CSS"], live: "https://drchiller.com", github: "https://github.com/dr-chiller/dr.chiller", image: "/drchiller_landing.webp" },
];

export default function ProjectsList() {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="w-full pb-12 pt-6 px-6 sm:px-12 lg:px-12 bg-white dark:bg-black transition-colors duration-500">
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {projects.map((project, index) => {
                    const topOffset = index % 2 === 0 ? "sm:mt-12" : "mt-0";

                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`${topOffset} w-full h-[250px] sm:h-[360px]`}
                        >
                            <motion.div
                                className="w-full h-full border border-teal-400/30 dark:border-teal-800 rounded-xl shadow-lg
                                flex flex-col p-2 items-center justify-center transition-transform duration-300 ease-out hover:scale-[1.03]
                                overflow-hidden bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
                                whileHover={{ y: -5 }}
                            >
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={250}
                                        height={150}
                                        className="w-full h-36 object-cover rounded-t-xl mb-4"
                                    />
                                )}
                                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 px-2 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 justify-center mb-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-sm text-teal-500 dark:text-teal-400 font-medium bg-teal-50 dark:bg-teal-900/30 px-2 py-1 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-teal-600 dark:text-teal-400 font-medium hover:underline"
                                        >
                                            Live <FaExternalLinkAlt className="w-3 h-3" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:text-teal-500 dark:hover:text-teal-400"
                                        >
                                            GitHub <FaGithub className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
