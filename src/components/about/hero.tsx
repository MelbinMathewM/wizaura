import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="relative w-full flex items-center px-6 sm:px-12 py-14 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-12 w-full">
                {/* Logo Side */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <Image
                        height={280}
                        width={280}
                        src="/logo.png"
                        alt="Wizaura Logo"
                        className="w-48 sm:w-64 md:w-72 object-contain"
                    />
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                        About <span className="text-cyan-600 dark:text-cyan-400">Wizaura</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        We are passionate about crafting modern, innovative, and user-friendly web and app solutions.
                        Our team combines creativity, technology, and strategy to empower businesses in the digital world.
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-lg mx-auto md:mx-0">
                        From startups to established enterprises, we deliver tailored solutions that elevate your brand, engage users, and drive results.
                    </p>
                </div>
            </div>
        </section>
    );
}
