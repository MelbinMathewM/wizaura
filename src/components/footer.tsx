"use client";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-gray-950 dark:bg-gray-900 text-gray-800 dark:text-gray-300 transition-colors duration-500 pt-12 pb-4 px-6 sm:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="flex flex-col gap-2">
                    {/* Logo + Heading */}
                    <div className="flex items-center gap-1">
                        <Image
                            src="/logo.png"
                            alt="Wizaura Logo"
                            height={40}
                            width={40}
                            className="object-contain"
                        />
                        <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
                            Wizaura
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 dark:text-gray-400">
                        Crafting modern web and mobile applications that empower businesses.
                    </p>
                </div>


                {/* Navigation Links */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">Quick Links</h3>
                    <ul className="space-y-1 text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">About</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Services</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Projects</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">Contact</h3>
                    <p className="flex items-center gap-2">
                        <FaEnvelope className="text-teal-600 dark:text-teal-400" />
                        <a
                            href="mailto:info@wizaura.com"
                            className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                        >
                            info@wizaura.com
                        </a>
                    </p>
                    <p className="flex items-center gap-2">
                        <FaPhoneAlt className="text-teal-600 dark:text-teal-400" />
                        <a
                            href="tel:+919747827371"
                            className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"
                        >
                            +91 9747 827 371
                        </a>
                    </p>
                    <p className="flex items-center gap-2 text-gray-400">
                        <FaMapMarkerAlt className="text-teal-600 dark:text-teal-400" />
                        Kannur, India
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-lg font-semibold text-teal-600 dark:text-teal-400">Follow Us</h3>
                    <div className="flex gap-4 mt-2">
                        <a href="#" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"><FaFacebookF /></a>
                        <a href="#" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"><FaTwitter /></a>
                        <a href="#" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"><FaLinkedinIn /></a>
                        <a href="#" className="text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-300"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-700 dark:border-gray-700 pt-4 text-center text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Wizaura. All rights reserved.
            </div>
        </footer>
    );
}
