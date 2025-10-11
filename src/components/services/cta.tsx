"use client";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";

export default function ServicesCTA() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-teal-600 transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-4 sm:gap-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                    Ready to Build Something Amazing?
                </h2>

                <p className="text-gray-300 text-base sm:text-lg max-w-3xl leading-relaxed">
                    At <span className="font-semibold text-white">Wizaura</span>, we combine creativity, technology, and strategy to deliver websites and applications that not only look stunning but also perform seamlessly. Whether you need a full-stack solution, a responsive frontend, or real-time features, we&apos;ve got you covered.
                </p>

                <Link href="/contact">
                    <span className="mt-2 sm:mt-4 inline-flex items-center bg-white text-teal-500 font-semibold px-6 py-3 rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 hover:scale-105 transition-all duration-300">
                        Get In Touch
                        <FaPaperPlane className="ml-2 text-teal-500" />
                    </span>
                </Link>
            </div>
        </section>
    );
}
