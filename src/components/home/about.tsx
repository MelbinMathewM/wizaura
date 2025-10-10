"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const HomeAbout = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const fadeRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="dark:bg-black py-12 px-4 sm:px-8 lg:px-16 overflow-x-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8 },
                    }}
                    className="text-teal-500 text-3xl sm:text-5xl font-extrabold mb-8"
                >
                    About us
                </motion.h1>

                <div
                    className="
            grid grid-cols-1 md:grid-cols-12
            gap-6 sm:gap-8 lg:gap-10
            items-start
          "
                >
                    {/* 1️⃣ TOP LEFT - Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeRight}
                        className="
              relative h-48 md:h-56 lg:h-64
              rounded-xl shadow-lg md:col-span-5
              order-2 md:order-1 overflow-hidden
            "
                    >
                        <Image
                            src="/about-1.png"
                            alt="About Image 1"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </motion.div>

                    {/* 2️⃣ TOP RIGHT - Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeLeft}
                        className="
              bg-teal-600 p-6 md:p-8 lg:p-14
              rounded-xl shadow-xl flex items-center
              md:col-span-7 order-1 md:order-2
              relative z-10
              md:-mt-10 lg:-mt-16 2xl:-mt-20
            "
                    >
                        <p className="text-white text-xl font-medium leading-relaxed">
                            “At <span className="font-bold">Wizaura</span>, we create sleek
                            and user-friendly web and mobile apps that help businesses grow.
                            We focus on quality and innovation.”
                        </p>
                    </motion.div>

                    {/* 3️⃣ BOTTOM LEFT - Text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeUp}
                        className="
              bg-teal-600 p-6 md:p-8
              rounded-xl shadow-xl flex items-center
              md:col-span-7 order-3 md:order-3 relative z-10
              md:mt-0 lg:mt-4
            "
                    >
                        <p className="text-white text-lg text-center font-medium leading-relaxed">
                            Our team blends creativity and technical expertise to deliver
                            digital solutions that not only look great but also perform
                            flawlessly.
                        </p>
                    </motion.div>

                    {/* 4️⃣ BOTTOM RIGHT - Image */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        variants={fadeUp}
                        className="
              relative h-48 md:h-56 lg:h-64
              rounded-xl shadow-lg md:col-span-5
              order-4 md:order-4 overflow-hidden
              md:-mt-18 lg:-mt-24 2xl:-mt-20
            "
                    >
                        <Image
                            src="/about-2.png"
                            alt="About Image 2"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
