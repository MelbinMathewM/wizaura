"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomeProjects() {
    const projects = [
        {
            title: "DrChiller",
            image: "/drchiller_landing.webp",
            description: "An online platform for HVAC & chiller services with seamless booking and expert support.",
        },
        {
            title: "E-learning Platform",
            image: "/drchiller_landing.webp",
            description: "Interactive platform for online courses and tutorials.",
        },
        {
            title: "Portfolio Website",
            image: "/drchiller_landing.webp",
            description: "Personal portfolio showcasing projects and skills.",
        },
    ];

    return (
        <section
            id="projects"
            className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900/98 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 sm:gap-8">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                    Projects <span className="text-indigo-500">Glimpse</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center text-lg sm:text-xl max-w-2xl">
                    Here&apos;s a glimpse of some of the projects we&apos;ve worked on. We combine{" "}
                    <span className="text-indigo-500 font-semibold">creativity</span> and{" "}
                    <span className="text-indigo-500 font-semibold">technology</span> to deliver impactful solutions.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg dark:shadow-gray-800 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer"
                        >
                            <Image
                                width={280}
                                height={280}
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 text-base">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <Link href="/projects" className="mt-4">
                    <span className="flex items-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                        See All Projects
                        <FaArrowRight className="ml-2" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
