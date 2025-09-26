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
        // {
        //     name: "Anya Thomas",
        //     role: "Co-Founder & CTO",
        //     img: "/team/anya.jpg",
        //     bio: "Tech lead focused on delivering cutting-edge solutions.",
        //     portfolio: "https://anya-portfolio.com",
        // },
        // {
        //     name: "Rohit Kumar",
        //     role: "Lead Designer",
        //     img: "/team/rohit.jpg",
        //     bio: "Designs intuitive and visually engaging user experiences.",
        //     portfolio: "https://rohit-portfolio.com",
        // },
        // {
        //     name: "Sara Joseph",
        //     role: "Marketing Head",
        //     img: "/team/sara.jpg",
        //     bio: "Drives brand growth and customer engagement strategies.",
        //     portfolio: "https://sara-portfolio.com",
        // },
    ];

    return (
        <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400">
                    Meet Our Team
                </h2>
                <p className="mt-4 max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                    Our team of experts works together to bring innovative web and app solutions to life.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                {teamMembers.map((member) => (
                    <div
                        key={member.name}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 p-6 text-center"
                    >
                        <Image
                            width={280}
                            height={280}
                            src={member.img}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-1">
                            {member.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 mb-3">{member.role}</p>
                        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base mb-4">
                            {member.bio}
                        </p>
                        <a
                            href={member.portfolio}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-600"
                        >
                            View Portfolio
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
