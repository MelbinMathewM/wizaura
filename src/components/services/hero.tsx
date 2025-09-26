// ServicesHero.tsx
import { FaReact, FaServer, FaDatabase, FaLock, FaRocket, FaChartLine, FaComments, FaCogs } from "react-icons/fa";

export default function ServicesHero() {
    const services = [
        {
            title: "Full-Stack Web Development",
            description: "Build modern, scalable full-stack applications using the MERN stack (MongoDB, Express, React, Node.js).",
            icon: <FaCogs size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Frontend Development",
            description: "Design responsive, interactive UIs with React and Tailwind CSS, optimized for performance and accessibility.",
            icon: <FaReact size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Backend & API Development",
            description: "Develop secure and efficient REST APIs and backend services with Node.js and Express.",
            icon: <FaServer size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Authentication & Security",
            description: "Implement robust authentication with JWT, OAuth, and role-based access while ensuring app security.",
            icon: <FaLock size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Database Management",
            description: "Design and integrate MongoDB and SQL databases, ensuring efficiency, reliability, and scalability.",
            icon: <FaDatabase size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Deployment & DevOps",
            description: "Deploy applications using Docker, Vercel, Render, or AWS with CI/CD pipelines and cloud scaling.",
            icon: <FaRocket size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "Real-Time Features",
            description: "Add live chat, notifications, and real-time updates powered by WebSockets and Socket.IO.",
            icon: <FaComments size={28} className="text-cyan-500 mb-3" />,
        },
        {
            title: "SEO & Analytics",
            description: "Optimize websites for search engines (SEO) and integrate analytics dashboards for performance tracking.",
            icon: <FaChartLine size={28} className="text-cyan-500 mb-3" />,
        },
    ];

    return (
        <section className="py-12 px-6 bg-white dark:bg-black transition-colors duration-500">
            {/* Hero Heading */}
            <div className="max-w-7xl mx-auto text-center mb-6 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-600 dark:text-cyan-400 mb-4">
                    Our Services
                </h1>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    We provide end-to-end web and app solutions, combining modern technology, creativity, and best practices to help your business grow.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 max-w-7xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md dark:shadow-gray-900 hover:shadow-lg transition transform hover:-translate-y-2 flex flex-col items-center text-center"
                    >
                        <h3 className="text-lg font-semibold text-cyan-500 mb-2 flex items-center">
                            <span className="mr-4">{service.icon}</span>
                            {service.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
