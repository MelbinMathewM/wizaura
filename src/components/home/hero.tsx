"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaPlay, FaServicestack, FaPhoneAlt } from "react-icons/fa";

export default function HomeHero() {
  const circleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);

  const amplitude = 20;
  const speed = 0.02;

  useEffect(() => {
    const animate = () => {
      phaseRef.current += speed;
      const offsetY = Math.sin(phaseRef.current) * amplitude;
      if (circleRef.current) {
        circleRef.current.style.transform = `translateY(${offsetY}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center 
      bg-[url('/hero.jpeg')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating Main Circle */}
      <div
        ref={circleRef}
        className="absolute w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]
        bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-800
        rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-teal-800
        hover:scale-110 transition-transform duration-500 will-change-transform z-10"
      >
        <div className="absolute inset-0 border-[10px] border-teal-300/40 rounded-full" />
        <div className="absolute inset-[20px] border border-teal-200 rounded-full" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-3 sm:px-6 py-2">
          <Image
            src="/logo.png"
            alt="Wizaura Logo"
            width={100}
            height={100}
            className="sm:mb-2 rounded-full"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-md">
            Wizaura
          </h1>
          <p className="text-teal-200 text-sm sm:text-lg font-semibold mb-1 sm:mb-3">
            The Aura of Innovation
          </p>

          <p className="w-10 h-10"></p>
        </div>
      </div>

      {/* Left Edge Button */}
      <Link
        href="/services"
        className="absolute bottom-16 left-8 sm:bottom-12 sm:left-24 lg:left-30 flex flex-col items-center justify-center 
        bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-800
        w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full text-teal-500 shadow-lg border-2 border-teal-500
        hover:scale-110 transition-transform duration-300 z-10"
      >
        <FaServicestack className="text-lg sm:text-xl lg:text-2xl mb-1" />
        <span className="text-xs sm:text-sm lg:text-lg font-semibold">Services</span>
      </Link>

      {/* Right Edge Button */}
      <Link
        href="/contact"
        className="absolute bottom-16 right-8 sm:bottom-12 sm:right-24 lg:right-30 flex flex-col items-center justify-center 
        bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-800
        w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full text-teal-500 shadow-lg border-2 border-teal-500
        hover:scale-110 transition-transform duration-300 z-10"
      >
        <FaPhoneAlt className="text-lg sm:text-xl lg:text-2xl mb-1" />
        <span className="text-xs sm:text-sm lg:text-lg font-semibold">Contact</span>
      </Link>
    </section>
  );
}
