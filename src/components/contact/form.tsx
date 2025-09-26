"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

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
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsLoading(true);

        // Simulate API call
        await new Promise((res) => setTimeout(res, 2000));

        console.log("Form submitted:", formData);
        setIsLoading(false);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section className="w-full py-20 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-3 text-center">
                    Send Us a Message
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-center mb-8 max-w-2xl mx-auto">
                    Fill out the form below and our team will get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? "border-red-500" : "border-gray-300 dark:border-gray-700"
                                    } bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 outline-none transition`}
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
                                    } bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 outline-none transition`}
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
                                } bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-cyan-500 outline-none transition`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-cyan-600 dark:bg-cyan-600 text-white dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-cyan-700 dark:hover:bg-cyan-600 transition flex justify-center items-center gap-2"
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

                    {submitted && (
                        <p className="text-green-600  dark:text-green-400 text-center">
                            Thank you! Your message has been sent.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}
