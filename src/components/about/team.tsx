"use client";

import Image from "next/image";

export default function AboutTeam() {
    const teamMembers = [
        {
            name: "Melbin Mathew",
            role: "Founder & CEO",
            img: "/melbin_mathew_1.webp",
            bio: "Visionary behind Wizaura, leading innovation in web and app solutions.",
            portfolio: "https://melbinmathew.vercel.app",
        },
        {
            name: "Aswanth C",
            role: "Co-Founder & COO",
            img: "/aswanth_c_1.jpg",
            bio: "Driving operations and ensuring seamless execution of projects across all teams.",
            portfolio: "https://melbinmathew.vercel.app",
        },
        
    ];

    return (
        <section className="py-6 px-6 sm:px-12 lg:px-16 bg-white dark:bg-black transition-colors duration-300">
            {/* Header + Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center mb-4 md:mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-teal-600 dark:text-teal-400 text-center lg:text-left">
                    Meet Our Team
                </h2>
                <p className="bg-teal-600 text-white rounded-xl p-6 text-base sm:text-lg leading-relaxed text-center lg:text-left">
                    Our team of experts works together to bring innovative web and app solutions to life.
                </p>
            </div>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="bg-gradient-to-tr from-gray-50 via-gray-300 to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-800
                        border border-teal-400/30 dark:border-teal-800
                        rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6 flex flex-col items-center text-center"
                    >
                        <Image
                            width={280}
                            height={280}
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mb-4 object-cover"
                        />
                        <h3 className="text-xl sm:text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-1">
                            {member.name}
                        </h3>
                        <p
                            className="bg-gradient-to-tr from-yellow-950 via-yellow-400 to-yellow-950 
                dark:from-yellow-100 dark:via-yellow-950 dark:to-yellow-100
                bg-clip-text text-transparent font-semibold mb-3"
                        >
                            {member.role}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
                            {member.bio}
                        </p>
                        <a
                            href={member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300"
                        >
                            View Portfolio
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
