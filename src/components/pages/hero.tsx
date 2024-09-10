"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { NeonGradientCard } from '../magicui/neon-gradient-card';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center">
        <motion.h1 
          className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ndumiso Banda
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer & UI/UX Enthusiast
        </motion.p>
      </div>

      <motion.div 
        className="absolute"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <NeonGradientCard className="w-80 h-80 md:w-96 md:h-96 rounded-full z-20">
          <div className="relative w-full h-full overflow-hidden rounded-full">
            <Image
              src="/king.png"
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="z-10"
            />
          </div>
        </NeonGradientCard>
      </motion.div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-#042f2e to-#0d9488 opacity-20" />
        <MeteorShower />
      </div>
    </div>
  );
};

const MeteorShower = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(20)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            scale: 0,
          }}
          animate={{
            top: ['0%', '100%'],
            left: ['100%', '0%'],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
