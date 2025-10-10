"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
    const info = [
        {
            icon: <FaPhoneAlt className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            title: "Phone",
            detail: "+91 97478 27371",
            href: "tel:+919747827371",
        },
        {
            icon: <FaEnvelope className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            title: "Email",
            detail: "info@wizaura.com",
            href: "mailto:info@wizaura.com",
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            title: "Address",
            detail: "Kannur, Kerala, India",
            href: "https://goo.gl/maps/yourmaplink",
        },
    ];

    return (
        <section className="w-full py-12 lg:py-4 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500">
            <div className="text-center">
                <h2 className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-8">
                    Contact Information
                </h2>
                <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-8 lg:gap-4">
                    {info.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-xl transition
                            border border-teal-400/30 dark:border-teal-800
                            bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                            dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
                        >
                            <h3 className="text-xl font-semibold text-teal-500 mb-2 flex items-center">
                                <span className="mr-4">{item.icon}</span>
                                {item.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-center">{item.detail}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
