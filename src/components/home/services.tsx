"use client";

import Link from "next/link";
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const iconMap: Record<string, React.ReactNode> = {
    FaLaptopCode: <FaLaptopCode size={28} className="text-teal-500 mb-3" />,
    FaMobileAlt: <FaMobileAlt size={28} className="text-teal-500 mb-3" />,
    FaPalette: <FaPalette size={28} className="text-teal-500 mb-3" />,
};

const HomeServices = () => {

    const topServices = services.slice(0, 3);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="bg-white dark:bg-black py-12 px-4 md:px-8 lg:px-16 text-gray-900 dark:text-white transition-colors duration-500">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-4">
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
                        At Wizaura, we deliver a range of digital solutions to help your business thrive online.
                    </motion.p>
                </header>

                {/* Cards Section */}
                <motion.div
                    className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {topServices.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="relative flex-1 md:max-w-[380px] h-[280px] md:h-[300px]"
                            >
                                <div
                                    className={`w-full h-full border border-teal-400/30 dark:border-teal-800
                                        rounded-xl p-8 shadow-lg flex flex-col justify-center items-center transition-transform duration-300 ease-out
                                        hover:scale-[1.03] dark:hover:shadow-gray-900
                                        relative md:absolute overflow-hidden
                                        bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                                        dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
                                        ${index === 1 ? "md:top-10" : index === 2 ? "md:top-20" : "md:top-0"}
                                    `}
                                >
                                    <div>{iconMap[card.icon]}</div>
                                    <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">{card.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">{card.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Button always below cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } }}
                    className="mt-6 flex justify-center md:justify-start"
                >
                    <Link
                        href="/services"
                        className="flex items-center gap-2 bg-teal-500 dark:bg-teal-400 text-white font-medium text-lg px-8 py-3 rounded-full 
                transition duration-300 ease-in-out hover:bg-teal-400 dark:hover:bg-teal-300 hover:-translate-y-0.5"
                    >
                        All Services <FaArrowRight />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default HomeServices;
