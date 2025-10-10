"use client";

import { FaReact, FaServer, FaDatabase, FaLock, FaRocket, FaChartLine, FaComments, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ServicesHero() {
    const services = [
        {
            title: "Full-Stack Web Development",
            description: "Build modern, scalable full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).",
            icon: <FaCogs size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Frontend Development",
            description: "Design responsive, interactive UIs with React and Tailwind CSS, optimized for performance and accessibility.",
            icon: <FaReact size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Backend & API Development",
            description: "Develop secure and efficient REST APIs and backend services with Node.js and Express.",
            icon: <FaServer size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Authentication & Security",
            description: "Implement robust authentication with JWT, OAuth, and role-based access while ensuring app security.",
            icon: <FaLock size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Database Management",
            description: "Design and integrate MongoDB and SQL databases, ensuring efficiency, reliability, and scalability.",
            icon: <FaDatabase size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Deployment & DevOps",
            description: "Deploy applications using Docker, Vercel, Render, or AWS with CI/CD pipelines and cloud scaling.",
            icon: <FaRocket size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "Real-Time Features",
            description: "Add live chat, notifications, and real-time updates powered by WebSockets and Socket.IO.",
            icon: <FaComments size={28} className="text-teal-500 mb-3" />,
        },
        {
            title: "SEO & Analytics",
            description: "Optimize websites for search engines (SEO) and integrate analytics dashboards for performance tracking.",
            icon: <FaChartLine size={28} className="text-teal-500 mb-3" />,
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="py-12 px-6 md:px-8 bg-white dark:bg-black transition-colors duration-500">
            {/* Hero Heading */}
            <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-4 sm:mb-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 leading-tight"
                >
                    Our Services
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                    className="bg-teal-600 dark:bg-teal-600 text-white text-center p-6 rounded-lg text-lg font-medium h-fit md:self-center"
                >
                    We provide end-to-end web and app solutions, combining modern technology, creativity, and best practices to help your business grow.
                </motion.p>
            </header>

            {/* Services Grid */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {services.map((service, index) => {
                    const topOffset = index % 2 === 0 ? "sm:mt-12" : "mt-0";

                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={`${topOffset} w-full h-[250px] sm:h-[280px]`}
                        >
                            <motion.div
                                className="w-full h-full border border-teal-400/30 dark:border-teal-800 rounded-xl shadow-lg dark:shadow-gray-900
                                flex flex-col items-center justify-center transition-transform duration-300 ease-out hover:scale-[1.03]
                                overflow-hidden bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
                                whileHover={{ y: -5 }}
                            >
                                <div className="text-indigo-500 mb-3">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed px-3">
                                    {service.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}
