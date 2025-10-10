"use client";

import { useState } from "react";
import Info from "./info";
import emailjs from "emailjs-com";

export default function ContactForm() {
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

        emailjs
            .send(
                serviceId as string,
                templateId as string,
                formData,
                userId
            )
            .then(() => {
                setSubmitted(true)
                setFormData({ name: "", email: "", message: "" });
                setIsLoading(false);
            })
            .catch(() => {
                setErrorSubmit(true);
                setIsLoading(false);
            });

        await new Promise((res) => setTimeout(res, 2000));

        console.log("Form submitted:", formData);
        setIsLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <Info />
                {/* Right Side Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 gap-4 sm:gap-6 w-full"
                >
                    <h2 className="text-xl sm:text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3 text-center"> Send Us a Message </h2>
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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

                    <div>
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
                        <p className="text-teal-600 font-semibold dark:text-teal-400 text-center">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                    {errorSubmit && (
                        <p className="text-red-600 font-semibold dark:text-red-400 text-center">
                            Error Submitting request. Try again!
                        </p>
                    )}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cursor-pointer bg-teal-600 dark:bg-teal-600 hover:bg-teal-700 dark:hover:bg-teal-700 text-white dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-teal-700 dark:hover:bg-teal-600 transition flex justify-center items-center gap-2"
                    >
                        {isLoading ? (
                            <svg
                                className="w-5 h-5 animate-spin text-white dark:text-gray-900"
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
