"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const HomeProjects = () => {
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

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const imageVariants = {
        initial: { scale: 0.6 },
        hover: { scale: 1, transition: { duration: 0.4 } },
        tap: { scale: 1 },
    };

    return (
        <section className="bg-white dark:bg-black py-12 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-4 md:mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="text-4xl md:text-5xl font-extrabold text-teal-500 dark:text-teal-400 leading-tight"
                    >
                        Project Glimpse
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="bg-teal-500 dark:bg-teal-600 text-white text-center p-6 rounded-lg text-lg font-medium h-fit md:self-center"
                    >
                        Here&apos;s a glimpse of some of the projects we&apos;ve worked on. We combine{" "}
                        <span className="font-semibold">creativity</span> and{" "}
                        <span className="font-semibold">technology</span> to deliver impactful solutions.
                    </motion.p>
                </header>

                {/* Cards Section */}
                <motion.div
                    className="relative flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 pb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {projects.map((project, index) => {
                        let topClass = "";
                        if (index === 0) topClass = "md:top-16";
                        else if (index === 1) topClass = "md:top-0";
                        else if (index === 2) topClass = "md:top-16";

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative flex-1 md:max-w-[500px] h-[250px] md:h-[280px]"
                            >
                                <motion.div
                                    className={`w-full h-full border border-teal-400/30 dark:border-teal-800 rounded-xl shadow-lg flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:scale-[1.03] md:absolute relative overflow-hidden
                                        bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 ${topClass}`}
                                    whileHover={{ y: -5 }}
                                >
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-16 h-16 rounded-full object-cover mb-5 cursor-pointer"
                                        variants={imageVariants}
                                        initial="initial"
                                        whileHover="hover"
                                    />

                                    <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 cursor-pointer"
                                    />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } }}
                    className="relative flex justify-center md:justify-start mt-4"
                >
                    <Link
                        href="/projects"
                        className="absolute bottom-0 md:left-2/5 lg:left-3/7 flex items-center gap-2 bg-teal-500 dark:bg-teal-400 text-white dark:text-black font-medium text-lg px-8 py-3 rounded-full 
                            transition duration-300 ease-in-out hover:bg-teal-400 dark:hover:bg-teal-300 hover:-translate-y-0.5"
                    >
                        All Projects <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeProjects;
