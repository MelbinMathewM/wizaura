export default function AboutMission() {
    return (
        <section className="py-12 px-6 sm:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            {/* Mission Section */}
            <div className="text-center mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">
                    Our Mission
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    At <span className="font-semibold text-cyan-600 dark:text-cyan-400">Wizaura</span>, our mission is to help
                    businesses grow by delivering innovative, high-quality, and user-friendly
                    web and app solutions. We strive to bring creativity, technology, and
                    strategy together to empower our clients in the digital world.
                </p>
            </div>

            {/* Core Values Section */}
            <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-cyan-600 dark:text-cyan-400">
                    Our Core Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                    <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 text-cyan-600 dark:text-cyan-400">Innovation</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We constantly explore new ideas and technologies to stay ahead.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 text-cyan-600 dark:text-cyan-400">Quality</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Every project is delivered with high standards and attention to detail.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 text-cyan-600 dark:text-cyan-400">Creativity</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            We bring unique, engaging designs that make your brand stand out.
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-950 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
                        <h3 className="font-semibold text-xl mb-3 text-cyan-600 dark:text-cyan-400">Customer Focus</h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Our clients success is our top priority in every project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
