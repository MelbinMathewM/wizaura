"use client";

import { FaBolt, FaUsers, FaCheckCircle, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const benefitCards = [
        {
            icon: <FaBolt />,
            title: "Modern Technology",
            description:
                "We use the latest tools and frameworks to deliver high-quality digital solutions.",
            id: 1,
            pos: "top-0 left-1/2 -translate-x-1/2",
        },
        {
            icon: <FaUsers />,
            title: "Expert Team",
            description:
                "Our team combines creativity and technical expertise to solve complex challenges.",
            id: 2,
            pos: "top-1/2 right-0 -translate-y-1/2",
        },
        {
            icon: <FaCheckCircle />,
            title: "Trustworthy",
            description:
                "We ensure clarity, honesty, and transparency for consistently excellent results.",
            id: 3,
            pos: "bottom-0 left-1/2 -translate-x-1/2",
        },
        {
            icon: <FaClock />,
            title: "Timely Delivery",
            description:
                "We respect deadlines and deliver projects efficiently without compromising quality.",
            id: 4,
            pos: "top-1/2 left-0 -translate-y-1/2",
        },
    ];

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
                <div
                    className="row-start-1 row-end-3 col-start-1 col-end-2 relative 
                        w-full flex justify-center md:justify-start 
                        ps-0 sm:ps-4 lg:ps-36 mt-12 md:-mt-24 md:mb-6"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px]">
                        {benefitCards.map((card) => (
                            <div
                                key={card.id}
                                className={`
                                    absolute w-[120px] h-[120px] md:w-[140px] md:h-[140px]
                                    bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300 
                                    dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
                                    border border-teal-300 dark:border-teal-800 rounded-lg
                                    flex items-center justify-center shadow-lg
                                    transition-all duration-500 transform rotate-45
                                    ${card.pos} group cursor-pointer
                                    hover:rotate-0 hover:w-[220px] hover:h-[220px] hover:z-50
                                `}
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center transform -rotate-45 transition-all duration-300 group-hover:hidden">
                                    <div className="text-3xl text-teal-500 mb-1 flex items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-base text-gray-700 dark:text-gray-300 font-bold text-center">
                                        {card.title}
                                    </h3>
                                </div>

                                {/* Square view (on hover) */}
                                <div className="absolute inset-0 hidden group-hover:flex flex-col items-center justify-center text-center px-4 py-4 transform -rotate-0 transition-all duration-300">
                                    <div className="text-4xl text-teal-500 mb-2 flex items-center justify-center">
                                        {card.icon}
                                    </div>
                                    <h3 className="text-lg text-gray-700 dark:text-gray-300 font-bold mb-2">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
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

export default WhyChooseUs;
