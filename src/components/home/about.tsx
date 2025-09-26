"use client";

export default function HomeAbout() {
    return (
        <section
            id="about"
            className="w-full py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500"
        >
            <h2 className="text-3xl text-center sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                About <span className="text-cyan-500">Wizaura</span>
            </h2>
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Text */}
                <div className="flex-1 text-center lg:text-left">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl">
                        At <span className="text-cyan-500 font-bold">Wizaura</span>, we create modern web and mobile applications that empower
                        businesses to reach their full potential. From sleek websites to
                        innovative apps, we focus on quality, usability, and cutting-edge
                        technology to bring your ideas to life.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg sm:text-xl mt-4">
                        Our team blends creativity and technical expertise to deliver digital
                        solutions that not only look great but also perform flawlessly.
                    </p>
                </div>

                {/* Image / Illustration */}
                <div className="flex items-center">
                    <img
                        src="/about-illu.png"
                        alt="About illustration"
                        className="w-full max-w-md mx-auto lg:mx-0"
                    />
                </div>
            </div>
        </section>
    );
}
