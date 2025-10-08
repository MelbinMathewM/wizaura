"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaPlay, FaServicestack } from "react-icons/fa";

export default function HomeHero() {
  const circleSize = 400;
  const settleDuration = 15000;
  const startTimeRef = useRef<number | null>(null);
  const frequency = 0.5;

  const circleRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const starCanvasRef = useRef<HTMLCanvasElement>(null);

  const amplitudeRef = useRef(0);
  const phaseRef = useRef(0);
  const lastTimeRef = useRef(0);

  const [curve, setCurve] = useState({
    leftX: 0,
    rightX: 0,
    baseY: 0,
    curveHeight: 0,
    width: 0,
    height: 0,
  });

  const stars: { x: number; y: number; size: number; dx: number; dy: number }[] =
    [];

  const updateBounds = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const leftX = 0;
    const rightX = width;
    const baseY = height * 0.6 - 20;
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
      const rotation = Math.sin(phaseRef.current) * 20 * (1 - t);

      if (circleRef.current) {
        const circleWidth = circleRef.current.offsetWidth;
        circleRef.current.style.left = `${x - circleWidth / 2}px`;
        circleRef.current.style.bottom = `${height - y - circleSize / 2 + 50}px`;
        circleRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [curve]);

  useEffect(() => {
    const canvas = starCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * (window.innerHeight * 0.6),
        size: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
        if (star.y > canvas.height * 0.6) star.y = 0;
        if (star.y < 0) star.y = canvas.height * 0.6;

        ctx.fillStyle = "rgba(154, 184, 20, 0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, []);

  return (
    <section className="relative w-full h-[100vh] sm:h-screen flex items-center justify-center bg-gray-950 overflow-hidden">
      <canvas
        ref={starCanvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      <svg className="absolute top-13 left-0 w-full h-full">
        <defs>
          <linearGradient id="uFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(45, 212, 190, 1)" />
            <stop offset="40%" stopColor="rgba(45, 212, 190, 0.84)" />
            <stop offset="70%" stopColor="rgba(255, 255, 255, 1)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>

          <linearGradient id="uFillDark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(45, 212, 190, 0.7)" />
            <stop offset="70%" stopColor="rgba(0, 0, 0, 1)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 1)" />
          </linearGradient>
        </defs>

        <path
          d={`M ${curve.leftX} ${curve.baseY} 
        Q ${(curve.leftX + curve.rightX) / 2} ${curve.baseY + curve.curveHeight}
        ${curve.rightX} ${curve.baseY} 
        L ${curve.rightX} ${curve.height} 
        L ${curve.leftX} ${curve.height} Z`}
          fill="url(#uFill)"
          className="dark:hidden"
        />
        <path
          d={`M ${curve.leftX} ${curve.baseY} 
        Q ${(curve.leftX + curve.rightX) / 2} ${curve.baseY + curve.curveHeight}
        ${curve.rightX} ${curve.baseY} 
        L ${curve.rightX} ${curve.height} 
        L ${curve.leftX} ${curve.height} Z`}
          fill="url(#uFillDark)"
          className="hidden dark:inline"
        />

        <path
          d={`M ${curve.leftX} ${curve.baseY} 
        Q ${(curve.leftX + curve.rightX) / 2} ${curve.baseY + curve.curveHeight}
        ${curve.rightX} ${curve.baseY}`}
          stroke="teal"
          strokeWidth="2"
          fill="transparent"
          filter="url(#glow)"
        />
      </svg>


      <div
        ref={circleRef}
        className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-black rounded-full flex flex-col items-center justify-center"
      >
        <div className="absolute w-full h-full border border-teal-400 rounded-full opacity-50" />
        <div className="absolute w-[90%] h-[90%] border-8 border-teal-300 rounded-full opacity-30" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-3 sm:px-6 py-2 sm:py-4">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={80}
            height={80}
            className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
          />
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2">
            Wizaura
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-400 mb-3 sm:mb-6">
            The Aura of Innovation
          </p>

          <button
            onClick={startOscillation}
            className="cursor-pointer z-40 text-teal-600 hover:text-teal-500 shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2 text-sm sm:text-base"
          >
            <FaPlay />
          </button>
        </div>
      </div>

      {/* Edge Buttons */}
      <Link
        href="/services"
        className="absolute bottom-20 sm:bottom-6 left-4 sm:left-16 w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500 border text-white shadow-lg hover:scale-110 transition-transform duration-300 text-xs sm:text-sm font-semibold"
      >
        <FaServicestack className="mb-1 text-base sm:text-lg" />
        Services
      </Link>

      <Link
        href="/contact"
        className="absolute bottom-20 sm:bottom-6 right-4 sm:right-16 w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500 border text-white shadow-lg hover:scale-110 transition-transform duration-300 text-xs sm:text-sm font-semibold"
      >
        <FaPhoneAlt className="mb-1 text-base sm:text-lg" />
        Contact
      </Link>
    </section>
  );
}
