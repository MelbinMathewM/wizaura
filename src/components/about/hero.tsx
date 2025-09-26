export default function AboutHero() {
    return (
        <section className="relative w-full flex items-center justify-center px-6 sm:px-12 py-6 sm:py-12 bg-white dark:bg-black transition-colors duration-500">
            <div className="max-w-3xl text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
                    About <span className="text-indigo-600 dark:text-indigo-400">Wizaura</span>
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    We are passionate about crafting modern, innovative, and user-friendly web and app solutions.
                    Our team combines creativity, technology, and strategy to empower businesses in the digital world.
                </p>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
                    From startups to established enterprises, we deliver tailored solutions that elevate your brand,
                    engage users, and drive results.
                </p>
            </div>
        </section>
    );
}
