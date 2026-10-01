"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';

const Header = () => {
  return (
    <section 
      id="home" 
      className="w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-15 md:pt-28 pb-15 md:pb-12 flex flex-col items-center justify-center gap-4"
    >
      {/* PROFILE IMAGE WITH ANIMATION */}
      <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        className="relative"
      >
        <Image 
          src={assets.portfolio_img} 
          alt="Ashwani portfolio" 
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-200 dark:border-gray-700 shadow-md hover:scale-105 transition-transform duration-300"
        />
      </motion.div>

      {/* GREETING WITH FADE-IN */}
      <motion.h3 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center justify-center gap-2 text-xl md:text-2xl font-serif text-gray-800 dark:text-white/90"
      >
        Hi! I'm Ashwani
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
          className="inline-block origin-bottom-right"
        >
          <Image src={assets.hand_icon} alt="Waving hand" className="w-6 h-6 object-contain" />
        </motion.span>
      </motion.h3>

      {/* MAIN HEADING (MERN STACK DETAILS) */}
      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-2xl sm:text-5xl lg:text-[55px] font-serif leading-tight text-gray-900 dark:text-white"
      >
        MERN Full Stack Developer based in Uttarakhand.
      </motion.h1>

      {/* BIO / DESCRIPTION */}
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-2xl mx-auto font-serif text-gray-600 dark:text-white/90 text-sm sm:text-base leading-relaxed"
      >
        I specialize in building scalable web applications using JavaScript, React, Node.js, MongoDB, Express.js, and Next.js. Passionate about crafting high-performance user interfaces and robust RESTful APIs.
      </motion.p>  

      {/* CALL TO ACTION BUTTONS WITH HOVER & FADE ANIMATION */}
      <motion.div 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
      >
        <Link 
          href="#contact" 
          className="px-8 py-3.5 border border-black dark:border-white rounded-full bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 text-sm font-medium shadow-md hover:scale-105"
        >
          <span>Contact me</span>
          <Image src={assets.right_arrow_white || assets.arrow_icon} alt="" className="w-4 h-4 dark:invert-0 invert" />
        </Link>

        <a
  href="/resume-ashwani.pdf"
  download="resume-ashwani.pdf"
  className="px-8 py-3.5 border rounded-full border-gray-300 dark:border-white/50 flex items-center gap-2"
>
  <span>My resume</span>
  <Image src={assets.download_icon || assets.arrow_icon} alt="" className="w-4 h-4 dark:invert" />
</a>
      </motion.div> 
      
    </section>
  );
};

export default Header;