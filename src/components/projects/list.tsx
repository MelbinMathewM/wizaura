"use client";

import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "DrChiller",
        description: "A comprehensive HVAC and chiller management platform for monitoring, service, and maintenance tasks.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        live: "https://drchiller.com",
        github: "https://github.com/dr-chiller/dr.chiller",
        image: "/drchiller_landing.webp",
    },
];

export default function ProjectsList() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-12 text-center">
                    Featured Projects
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-3 hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between"
                        >
                            {/* Project Image */}
                            {project.image && (
                                <Image
                                    width={280}
                                    height={280}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                            )}

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-sm text-indigo-500 dark:text-indigo-400 font-medium bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 flex gap-4">
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                                    >
                                        Live <FaExternalLinkAlt className="w-3 h-3" />
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-500 dark:hover:text-indigo-400"
                                    >
                                        GitHub <FaGithub className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
