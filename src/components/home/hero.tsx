"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaPhoneAlt, FaPlay, FaServicestack } from "react-icons/fa";

export default function HomeHero() {
  const circleSize = 400;
  const damping = 0.998;
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
    const height =
      window.visualViewport?.height ?? window.innerHeight;

    const leftX = 0;
    const rightX = width;
    const baseY = height * 0.6 - 20;
    const curveHeight = 200;

    setCurve({ leftX, rightX, baseY, curveHeight, width, height });

    amplitudeRef.current = (rightX - leftX) / 2 - 50;
    phaseRef.current = 0;
    lastTimeRef.current = performance.now();
  };
  // Initialize U curve
  useEffect(() => {
    updateBounds();
  window.addEventListener("resize", updateBounds);
  window.visualViewport?.addEventListener("resize", updateBounds);

  return () => {
    window.removeEventListener("resize", updateBounds);
    window.visualViewport?.removeEventListener("resize", updateBounds);
  };
  }, []);

  const startOscillation = () => {
    updateBounds();
  }

  // Animate rolling along U curve
  useEffect(() => {
    const tick = (now: number) => {
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      const { leftX, rightX, baseY, curveHeight, height } = curve;
      if (!leftX && !rightX) return;

      const centerX = (leftX + rightX) / 2;

      phaseRef.current += dt * frequency * Math.PI * 2;
      amplitudeRef.current *= damping;

      const x = centerX + amplitudeRef.current * Math.sin(phaseRef.current);
      const t = (x - centerX) / ((rightX - leftX) / 2);
      const y = baseY - curveHeight * (t * t);
      const rotation = Math.sin(phaseRef.current) * 20;

      if (circleRef.current) {
        const circleWidth = circleRef.current.offsetWidth;
        circleRef.current.style.left = `${x - circleWidth / 2}px`;
        circleRef.current.style.bottom = `${height - y - circleSize / 2 + height * 0.08}px`;
        circleRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      if (Math.abs(amplitudeRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [curve]);

  // Floating stars above the U curve
  useEffect(() => {
    const canvas = starCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize stars
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

        ctx.fillStyle = "rgba(20,184,166,0.8)";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animateStars);
    };

    animateStars();
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-950 overflow-hidden pb-[env(safe-area-inset-bottom)]">
      {/* Star canvas */}
      <canvas
        ref={starCanvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Gradient background under curve */}
      <svg className="absolute top-13 left-0 w-full h-full">
        <defs>
          <linearGradient id="uFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(20, 58, 184, 0.15)" />
            <stop offset="100%" stopColor="rgba(81, 151, 243, 0.8)" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={`M ${curve.leftX} ${curve.baseY} 
              Q ${(curve.leftX + curve.rightX) / 2} ${curve.baseY + curve.curveHeight}
              ${curve.rightX} ${curve.baseY} 
              L ${curve.rightX} ${curve.height} 
              L ${curve.leftX} ${curve.height} Z`}
          fill="url(#uFill)"
          opacity="0.8"
        />

        <path
          d={`M ${curve.leftX} ${curve.baseY} 
              Q ${(curve.leftX + curve.rightX) / 2} ${curve.baseY + curve.curveHeight}
              ${curve.rightX} ${curve.baseY}`}
          stroke="teal"
          strokeWidth="4"
          fill="transparent"
          filter="url(#glow)"
        />
      </svg>

      {/* Wizaura Circle */}
      <div
        ref={circleRef}
        className="absolute w-[250px] h-[250px] shadow-gray-900 shadow-xl sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-black rounded-full flex items-center justify-center"
      >
        <div className="absolute w-full h-full border border-teal-400 rounded-full opacity-50" />
        <div className="absolute w-[90%] h-[90%] border-8 border-teal-300 rounded-full opacity-30" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-3 sm:px-6py-2 sm:py-4">
          <Image src={"/logo.png"} alt="logo" width={80} height={80} className="sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]" />
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2">
            Wizaura
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl font-semibold text-teal-400 mb-1 sm:mb-6">
            The Aura of Innovation
          </p>
        </div>
      </div>

      {/* Edge Buttons */}
      <Link
        href="/services"
        className="absolute bottom-10 sm:bottom-6 left-4 sm:left-6 w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 text-xs sm:text-sm font-semibold"
      >
        <FaServicestack className="mb-1 text-base sm:text-lg" />
        Services
      </Link>

      {/* Contact Button */}
      <Link
        href="/contact"
        className="absolute bottom-10 sm:bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-20 sm:h-20 flex flex-col items-center justify-center rounded-full bg-teal-600 hover:bg-teal-500 text-white shadow-lg hover:scale-110 transition-transform duration-300 text-xs sm:text-sm font-semibold"
      >
        <FaPhoneAlt className="mb-1 text-base sm:text-lg" />
        Contact
      </Link>
      <button
        onClick={startOscillation}
        className="absolute bottom-24 sm:bottom-20 left-1/2 sm:left-26/51 -translate-x-1/2 cursor-pointer text-teal-500 shadow-lg hover:scale-105 transition-transform duration-300 text-sm font-semibold flex items-center gap-2"
      >
        <FaPlay />
      </button>
    </section>
  );
}
