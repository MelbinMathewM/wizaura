// ContactHero.jsx
"use client";

export default function ContactHero() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500 flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-3">
                Get in Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Have a project in mind, or just want to say hello?
                We&apos;d love to hear from you. Reach out and let&apos;s start building something amazing together.
            </p>
        </section>
    );
}
