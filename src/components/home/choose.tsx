"use client";

import { FaCheckCircle, FaRocket, FaUsers, FaClock } from "react-icons/fa";

export default function HomeChoose() {
    const features = [
        {
            icon: <FaRocket size={36} className="text-cyan-500" />,
            title: "Modern Technology",
            description: "We use the latest tools and frameworks to deliver high-quality digital solutions.",
        },
        {
            icon: <FaUsers size={36} className="text-cyan-500" />,
            title: "Expert Team",
            description: "Our team combines creativity and technical expertise to solve complex challenges.",
        },
        {
            icon: <FaCheckCircle size={36} className="text-cyan-500" />,
            title: "Trustworthy",
            description: "We ensure clarity, honesty, and transparency for consistently excellent results.",
        },
        {
            icon: <FaClock size={36} className="text-cyan-500" />,
            title: "Timely Delivery",
            description: "We respect deadlines and deliver projects efficiently without compromising quality.",
        },
    ];

    return (
        <section
            id="why-choose-us"
            className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
        >
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                    Why Choose <span className="text-cyan-500">Wizaura</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-center text-lg sm:text-xl max-w-2xl">
                    We blend <span className="text-cyan-500 font-semibold">creativity</span>,{" "}
                    <span className="text-cyan-500 font-semibold">expertise</span>, and{" "}
                    <span className="text-cyan-500 font-semibold">technology</span> to deliver solutions that empower your business.
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-gray-900 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl dark:hover:shadow-gray-900 transition-all duration-300"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
