"use client";

import { FaBolt, FaUsers, FaCheckCircle, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import { benefitCards } from "@/data/benefit-cards";

const iconMap: Record<string, React.ReactNode> = {
    FaBolt: <FaBolt />,
    FaUsers: <FaUsers />,
    FaCheckCircle: <FaCheckCircle />,
    FaClock: <FaClock />,
};

const HomeChoose = () => {
    return (
        <section className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 md:px-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="text-4xl md:text-5xl mb-0 font-extrabold text-teal-600 dark:text-teal-400 leading-tight"
                    >
                        <span className="text-3xl md:text-4xl">Why Choose</span> Wizaura
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                        className="bg-teal-600 dark:bg-teal-600 text-white text-center p-6 md:mt-24 rounded-lg text-lg font-medium h-fit md:self-center"
                    >
                        We blend <span className="font-semibold">creativity, expertise,</span> and{" "}
                        <span className="font-semibold">technology</span> to deliver solutions that empower your business.
                    </motion.p>
                </header>

                {/* 2x2 Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {benefitCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } }}
                            className={`flex justify-center ${
                                (index % 2 === 1 ? "sm:mt-8" : "sm:mb-8")
                                }`}
                        >
                            <div className="bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
          border border-teal-300 dark:border-teal-800 rounded-lg p-6 flex flex-col items-center text-center
          shadow-lg hover:scale-105 transition-transform duration-300 w-full sm:max-w-[260px]
        ">
                                <div className="text-4xl text-teal-500 mb-4">{iconMap[card.icon]}</div>
                                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-2">{card.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{card.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeChoose;
