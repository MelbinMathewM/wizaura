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
        <section className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading Section */}
                <header className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 mb-4 md:mb-8">
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
                        <span className="font-semibold">technology</span> to deliver solutions that
                        empower your business.
                    </motion.p>
                </header>

                {/* Rhombus Cards Section */}
                <div className="relative w-full flex justify-center md:justify-start ps-0 sm:ps-4 lg:ps-36 mt-12 md:-mt-24 md:mb-6">
                    <div className="relative w-[360px] h-[360px] md:w-[360px] md:h-[360px]">
                        {benefitCards.map((card) => (
                            <div
                                key={card.id}
                                className={`
                  absolute w-[140px] h-[140px] md:w-[140px] md:h-[140px]
                  bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 
                  dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
                  border border-teal-300 dark:border-teal-800 rounded-lg
                  flex items-center justify-center shadow-lg
                  transform rotate-45 ${card.pos} group cursor-pointer
                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:rotate-0 hover:scale-125 hover:z-50
                `}
                            >
                                {/* Diamond View */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-45 transition-all duration-500 ease-in-out group-hover:opacity-0">
                                    <div className="text-3xl text-teal-500 mb-1 flex items-center justify-center">
                                        {iconMap[card.icon]}
                                    </div>
                                    <h3 className="text-base text-gray-700 dark:text-gray-300 font-bold text-center">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Square (hover) View */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center px-2 py-2 transform transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                    <div className="text-lg sm:text-xl text-teal-500 mb-1 flex items-center justify-center">
                                        {iconMap[card.icon]}
                                    </div>
                                    <h3 className="text-sm sm:text-base text-gray-700 dark:text-gray-300 font-bold mb-1">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeChoose;
