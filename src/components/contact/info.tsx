"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
    const info = [
        {
            icon: <FaPhoneAlt className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            title: "Phone",
            detail: "+91 97478 27371",
            href: "tel:+919747827371",
        },
        {
            icon: <FaEnvelope className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            title: "Email",
            detail: "info@wizaura.com",
            href: "mailto:info@wizaura.com",
        },
        {
            icon: <FaMapMarkerAlt className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            title: "Address",
            detail: "Kannur, Kerala, India",
            href: "https://goo.gl/maps/yourmaplink",
        },
    ];

    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-gray-800 transition-colors duration-500">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                    Contact Information
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                    Whether you have a question, need a quote, or just want to say hello, our team is here to help. Reach out through any of the following methods.
                </p>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-8">
                    {info.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-indigo-500 mb-2 flex items-center">
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
