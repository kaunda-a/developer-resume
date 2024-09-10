"use client";

import React, { useRef } from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = React.forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => (
    <div ref={ref} className={cn("z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]", className)}>
      {children}
    </div>
  )
);

Circle.displayName = "Circle";

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-#042f2e to-#0d9488">
      <div className="z-10 text-center">
        <motion.h1
          className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ndumiso Banda
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer & UI/UX Enthusiast
        </motion.p>
      </div>

      <motion.div
        className="relative flex w-full max-w-[800px] items-center justify-center overflow-hidden rounded-lg bg-white/10 p-10 backdrop-blur-sm"
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row justify-between">
            <Circle ref={profileRef} className="size-24">
              <Image src="/king.png" alt="Ndumiso Banda" width={80} height={80} className="rounded-full" />
            </Circle>
            <Circle ref={skillsRef} className="size-24">
              <Icons.code />
            </Circle>
          </div>
          <div className="flex flex-row justify-center">
            <Circle ref={experienceRef} className="size-24">
              <Icons.briefcase />
            </Circle>
          </div>
        </div>

        <AnimatedBeam containerRef={containerRef} fromRef={profileRef} toRef={skillsRef} startYOffset={10} endYOffset={10} curvature={-20} />
        <AnimatedBeam containerRef={containerRef} fromRef={profileRef} toRef={experienceRef} startYOffset={-10} endYOffset={-10} curvature={20} />
        <AnimatedBeam containerRef={containerRef} fromRef={skillsRef} toRef={experienceRef} startYOffset={10} endYOffset={-10} curvature={-20} />
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <MeteorShower />
      </div>
    </div>
  );
};

const MeteorShower = () => (
  <div className="absolute inset-0">
    {[...Array(20)].map((_, index) => (
      <motion.div
        key={index}
        className="absolute w-1 h-1 bg-white rounded-full"
        initial={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, scale: 0 }}
        animate={{ top: ['0%', '100%'], left: ['100%', '0%'], scale: [0, 1, 0] }}
        transition={{ duration: Math.random() * 2 + 1, repeat: Infinity, repeatType: 'loop', ease: 'linear', delay: Math.random() * 2 }}
      />
    ))}
  </div>
);

const Icons = {
  code: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  briefcase: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

export default AboutUs;
