"use client";

import { useState } from "react";
import Link from "next/link";

const FloatingActions = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end gap-3 z-50">
            {open && (
                <>
                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/919747827371"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full bg-teal-500 px-3 py-2 text-white hover:bg-teal-600 transition shadow"
                        title="Chat on WhatsApp"
                    >
                        Whatsapp
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.52 3.48A11.88 11.88 0 0012 0a11.88 11.88 0 00-8.52 3.48A11.88 11.88 0 000 12c0 2.1.55 4.15 1.6 5.98L0 24l6.28-1.6A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 21.6a9.6 9.6 0 01-5.05-1.44l-.36-.22-3.72.95.99-3.63-.24-.37A9.6 9.6 0 012.4 12C2.4 6.8 6.8 2.4 12 2.4s9.6 4.4 9.6 9.6S17.2 21.6 12 21.6zm5.49-7.26c-.3-.15-1.78-.88-2.06-.98-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.5-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.05 1.05-1.05 2.55 0 1.5 1.08 2.95 1.23 3.15.15.2 2.13 3.27 5.17 4.58.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.08 1.78-.72 2.03-1.42.25-.7.25-1.3.15-1.42-.1-.11-.27-.18-.57-.33z" />
                        </svg>
                    </a>

                    {/* Contact Page */}
                    <Link
                        href="/contact"
                        className="flex items-center gap-1 rounded-full bg-teal-500 px-3 py-2 text-white hover:bg-teal-600 transition shadow"
                        title="Contact Page"
                    >
                        Contact Us
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5.121 17.804A7.966 7.966 0 0112 15a7.966 7.966 0 016.879 2.804M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </Link>

                    {/* Email */}
                    <a
                        href="mailto:info@wizaura.co"
                        className="flex items-center gap-1 rounded-full bg-teal-500 px-3 py-2 text-white hover:bg-teal-600 transition shadow"
                        title="Send Email"
                    >
                        Email
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                    </a>

                    {/* Call */}
                    <a
                        href="tel:+919747827371"
                        className="flex items-center gap-1 rounded-full bg-teal-500 px-3 py-2 text-white hover:bg-teal-600 transition shadow"
                        title="Call"
                    >
                        Call
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.1l-2.1 2.1a11.042 11.042 0 005.3 5.3l2.1-2.1a1 1 0 011.1-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z"
                            />
                        </svg>
                    </a>
                </>
            )}

            {/* Main contact button */}
            <button
                onClick={() => setOpen(!open)}
                className="rounded-full bg-teal-600 w-12 h-12 flex items-center justify-center text-white hover:bg-teal-700 transition shadow"
                title="Contact"
            >
                {open ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.2 3.6a1 1 0 01-.27 1.1l-2.1 2.1a11.042 11.042 0 005.3 5.3l2.1-2.1a1 1 0 011.1-.27l3.6 1.2a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C8.163 21 3 15.837 3 9V5z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default FloatingActions;
