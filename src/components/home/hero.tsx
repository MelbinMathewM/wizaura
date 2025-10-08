"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaServicestack, FaPhoneAlt } from "react-icons/fa";

export default function HomeHero() {
  const circleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const amplitudeRef = useRef<number>(0);
  const phaseRef = useRef<number>(0);

  const settleDuration = 15000; // 15s
  const frequency = 0.5;
  const circleSize = 350;

  const [curve, setCurve] = useState({
    leftX: 0,
    rightX: 0,
    baseY: 0,
    curveHeight: 0,
    width: 0,
    height: 0,
  });

  // Update bounds based on viewport
  const updateBounds = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const leftX = 0;
    const rightX = width;
    const baseY = height * 0.6;
    const curveHeight = 200;

    setCurve({ leftX, rightX, baseY, curveHeight, width, height });
    amplitudeRef.current = (rightX - leftX) / 2 - 50;
    phaseRef.current = 0;
    lastTimeRef.current = performance.now();
  };

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  const startOscillation = () => {
    startTimeRef.current = null;
    updateBounds();
  };

  // Pendulum animation
  useEffect(() => {
    const tick = (now: number) => {
      if (!startTimeRef.current) startTimeRef.current = now;
      const elapsed = now - startTimeRef.current;
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const { leftX, rightX, baseY, curveHeight, height } = curve;
      if (!leftX && !rightX) return;

      const centerX = (leftX + rightX) / 2;
      const t = Math.min(elapsed / settleDuration, 1);
      const amplitude = amplitudeRef.current * (1 - t);

      phaseRef.current += dt * frequency * Math.PI * 2;

      const x = centerX + amplitude * Math.sin(phaseRef.current);
      const normalized = (x - centerX) / ((rightX - leftX) / 2);
      const y = baseY - curveHeight * (normalized * normalized);
      const rotation = Math.sin(phaseRef.current) * 25 * (1 - t);

      if (circleRef.current) {
        const cw = circleRef.current.offsetWidth;
        circleRef.current.style.left = `${x - cw / 2}px`;
        circleRef.current.style.bottom = `${height - y - circleSize / 2}px`;
        circleRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [curve]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-950 to-teal-800 overflow-hidden">
      {/* Main Oscillating Circle */}
      <div
        ref={circleRef}
        className="absolute w-[300px] h-[300px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]
        bg-black rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-teal-800
        translate-y-[-90px] sm:translate-y-[-30px] transition-transform duration-700 hover:scale-110"
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
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-md">
            Wizaura
          </h1>
          <p className="text-teal-200 text-sm sm:text-lg font-semibold mb-1 sm:mb-3">
            The Aura of Innovation
          </p>

          <button
            onClick={startOscillation}
            className="mt-2 bg-transparent backdrop-blur-md cursor-pointer border border-teal-950 hover:bg-gray-950 text-teal-800 px-5 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base transition-all duration-300"
          >
            <FaPlay />
          </button>
        </div>
      </div>

      {/* Left Edge Button */}
      <Link
        href="/services"
        className="absolute bottom-16 left-8 sm:bottom-12 sm:left-24 lg:left-30 flex flex-col items-center justify-center 
        w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full bg-black hover:bg-black text-teal-500 shadow-lg border-2 border-teal-500
        hover:scale-110 transition-transform duration-300"
      >
        <FaServicestack className="text-lg sm:text-xl lg:text-2xl mb-1" />
        <span className="text-xs sm:text-sm lg:text-lg font-semibold">Services</span>
      </Link>

      {/* Right Edge Button */}
      <Link
        href="/contact"
        className="absolute bottom-16 right-8 sm:bottom-12 sm:right-24 lg:right-30 flex flex-col items-center justify-center 
        w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30 rounded-full bg-black hover:bg-black text-teal-500 shadow-lg border-2 border-teal-500
        hover:scale-110 transition-transform duration-300"
      >
        <FaPhoneAlt className="text-lg sm:text-xl lg:text-2xl mb-1" />
        <span className="text-xs sm:text-sm lg:text-lg font-semibold">Contact</span>
      </Link>
    </section>
  );
}
