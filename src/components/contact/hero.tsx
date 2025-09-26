// ContactHero.jsx
"use client";

export default function ContactHero() {
    return (
        <section className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-500 flex flex-col items-center text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-3">
                Get in Touch
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
                Have a project in mind, or just want to say hello?
                We'd love to hear from you. Reach out and let's start building something amazing together.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl">
                Whether it's a website, web app, or mobile solution, our team at <span className="font-semibold">Wizaura</span> is ready to help bring your ideas to life.
            </p>
        </section>
    );
}
