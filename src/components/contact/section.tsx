"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { info } from "@/data/contact";

const iconMap: Record<string, React.ReactNode> = {
    FaPhoneAlt: <FaPhoneAlt className="w-4 h-4 text-teal-500 dark:text-teal-400 me-2" />,
    FaEnvelope: <FaEnvelope className="w-4 h-4 text-teal-500 dark:text-teal-400 me-2" />,
    FaMapMarkerAlt: <FaMapMarkerAlt className="w-4 h-4 text-teal-500 dark:text-teal-400 me-2" />,
};

type InfoItem = {
    icon: string;
    title: string;
    detail: string | string[];
    href?: string | string[];
};

interface InfoGridProps {
    info: InfoItem[];
    iconMap: Record<string, React.ReactNode>;
}


export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [errorSubmit, setErrorSubmit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const validate = () => {
        let valid = true;
        const newErrors = { name: "", email: "", message: "" };

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            valid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Email is invalid";
            valid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
        setSubmitted(false);
        setErrorSubmit(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);
        try {
            await emailjs.send(serviceId!, templateId!, formData, userId);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setErrorSubmit(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="py-8 md:py-12 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">

                {/* Left Side: Contact Information */}
                <div className="flex flex-col justify-center text-center lg:text-left">
                    <h2 className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4 text-center">
                        Contact Information
                    </h2>

                    <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-8 lg:gap-3">
                        {info.map((item, idx) => {
                            const isArray = Array.isArray(item.detail);
                            const hrefArray = Array.isArray(item.href) ? item.href : [item.href];

                            return (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center lg:items-start bg-white dark:bg-gray-900 p-4 rounded-xl shadow hover:shadow-xl dark:hover:shadow-gray-900 transition
                                        border border-teal-400/30 dark:border-teal-800
                                        bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                                        dark:from-gray-900 dark:via-gray-950 dark:to-gray-800"
                                >
                                    <h3 className="text-lg font-semibold text-teal-500 mb-2 flex items-center gap-2">
                                        <span>{iconMap[item.icon]}</span>
                                        {item.title}
                                    </h3>

                                    <div className="flex flex-row gap-5">
                                        {isArray ? (
                                            (item.detail as string[]).map((detail, i) => (
                                                <a
                                                    key={i}
                                                    href={hrefArray[i] as string}
                                                    className="text-gray-700 dark:text-gray-300 hover:text-teal-600 transition"
                                                >
                                                    {detail}
                                                </a>
                                            ))
                                        ) : item.href ? (
                                            <a
                                                href={item.href as string}
                                                className="text-gray-700 dark:text-gray-300 hover:text-teal-600 transition"
                                            >
                                                {item.detail as string}
                                            </a>
                                        ) : (
                                            <p className="text-gray-700 dark:text-gray-300">{item.detail}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {/* Right Side: Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-4 text-center">
                        Send Us a Message
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-4 mb-4">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                    } bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                                dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 text-gray-900 dark:text-gray-100 hover:ring-1 hover:ring-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition`}
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                    } bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                                dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 text-gray-900 dark:text-gray-100 hover:ring-1 hover:ring-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    <div className="mb-4">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            rows={6}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                } bg-gradient-to-tr from-gray-200 via-gray-50 to-gray-300
                            dark:from-gray-900 dark:via-gray-950 dark:to-gray-800 text-gray-900 dark:text-gray-100 hover:ring-1 hover:ring-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {submitted && (
                        <p className="text-green-600 font-semibold dark:text-green-400 text-center mb-2">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                    {errorSubmit && (
                        <p className="text-red-600 font-semibold dark:text-red-400 text-center mb-2">
                            Error submitting request. Try again!
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer bg-teal-600 hover:bg-teal-700 text-white dark:text-gray-300 px-6 py-3 rounded-full font-semibold transition flex justify-center items-center gap-2"
                    >
                        {isLoading ? (
                            <svg
                                className="w-5 h-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                ></circle>
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                ></path>
                            </svg>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
}
