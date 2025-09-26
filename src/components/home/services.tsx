"use client";

import Link from "next/link";
import { FaArrowRight, FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

export default function HomeServices() {
    const services = [
        {
            icon: <FaLaptopCode size={30} />,
            title: "Web Development",
            description:
                "Modern, responsive websites that engage users and drive results.",
        },
        {
            icon: <FaMobileAlt size={30} />,
            title: "Mobile Apps",
            description:
                "iOS and Android apps that provide seamless user experiences.",
        },
        {
            icon: <FaPalette size={30} />,
            title: "UI/UX Design",
            description:
                "Intuitive and beautiful designs that delight your users.",
        },
    ];

    return (
        <section
            id="services"
            className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
        >
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 text-center">
                    Our Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center text-lg sm:text-xl max-w-2xl">
                    At <span className="text-cyan-500 font-semibold">Wizaura</span>, we deliver a range of digital solutions to help your business thrive online.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-cyan-500 mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-base">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <Link href="/services" className="mt-4">
                    <span className="flex items-center bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300">
                        See All Services
                        <FaArrowRight className="ml-2" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
