"use client";

import { FaLightbulb, FaCheckCircle, FaPaintBrush, FaUsers } from "react-icons/fa";
import { coreValues } from "@/data/core-values";

const iconMap: Record<string, React.ReactNode> = {
    FaLightbulb: <FaLightbulb />,
    FaUsers: <FaUsers />,
    FaCheckCircle: <FaCheckCircle />,
    FaPaintBrush: <FaPaintBrush />,
};

export default function AboutMission() {

    return (
        <section className="py-16 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
            <style jsx>{`
                .flip-card { perspective: 1000px; }
                .flip-card-inner {
                    transform-style: preserve-3d;
                    transition: transform 0.7s;
                    position: relative;
                    width: 100%;
                    height: 100%;
                }
                /* rotate on hover */
                .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }

                .flip-card-front,
                .flip-card-back {
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                    position: absolute;
                    inset: 0;
                }

                /* back side faces away by default */
                .flip-card-back { transform: rotateY(180deg); }
            `}</style>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-start lg:items-center">
                    {/* Left: Mission */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left h-full">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400">
                            Our Mission
                        </h2>
                        <div className="bg-teal-600 dark:bg-teal-700 text-white rounded-xl p-6 sm:p-8 w-full max-w-xl flex items-center">
                            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                                At <span className="font-semibold text-white">Wizaura</span>, our mission is to help
                                businesses grow by delivering innovative, high-quality, and user-friendly
                                web and app solutions. We strive to bring creativity, technology, and
                                strategy together to empower our clients in the digital world.
                            </p>
                        </div>
                    </div>

                    {/* Right: Core Values (flip cards) */}
                    <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start h-full lg:pe-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-teal-600 dark:text-teal-400 text-center lg:text-left">
                            Our Core Values
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {coreValues.map((card) => (
                                <div
                                    key={card.id}
                                    className="flip-card w-[160px] sm:w-[160px] md:w-[180px] lg:w-[160px] h-[160px] sm:h-[160px] md:h-[180px] lg:h-[230px]"
                                >
                                    <div className="flip-card-inner">
                                        {/* FRONT: icon + title (centered) */}
                                        <div className="flip-card-front rounded-xl bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 border border-teal-300 dark:border-teal-800 shadow-lg flex flex-col items-center justify-center text-center text-gray-700 dark:text-gray-300 p-4">
                                            <div className="text-4xl text-teal-500 mb-2">{iconMap[card.icon]}</div>
                                            <h3 className="font-semibold text-base sm:text-lg">{card.title}</h3>
                                        </div>

                                        {/* BACK: icon + title + description */}
                                        <div className="flip-card-back rounded-xl bg-teal-600 dark:bg-teal-700 text-white shadow-lg flex flex-col items-center justify-center text-center p-2 pe-6">
                                            <div className="text-2xl mb-2">{iconMap[card.icon]}</div>
                                            <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                                            <p className="text-sm opacity-90">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
