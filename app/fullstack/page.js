"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FullstackServicePage = () => {
  return (
    <div className="min-h-screen px-[10%] py-16 text-gray-800 dark:text-white dark:bg-[#11001F] transition-colors duration-500">
      
      {/* BACK BUTTON */}
      <Link 
        href="/#services" 
        className="inline-flex items-center gap-2 text-sm font-medium hover:underline mb-8 text-gray-600 dark:text-white/80"
      >
        ← Back to Services
      </Link>

      {/* HEADER SECTION */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-4">
          Fullstack Integration & Deployment
        </h1>
        <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed">
          I connect modern frontend interfaces seamlessly with powerful Node.js backends and databases like MongoDB & MySQL. I deliver complete end-to-end web applications with secure authentication, API integrations, and cloud deployment.
        </p>
      </motion.div>

      {/* FULLSTACK SKILLS & TOOLS BADGES */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
          Fullstack Technologies & Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'MERN Stack', 
            'Next.js (App Router)', 
            'REST API Integration', 
            'Database Modeling', 
            'State Management', 
            'Stripe Payment Gateway', 
            'Vercel & Render Deployment', 
            'Git & GitHub'
          ].map((tech, index) => (
            <span 
              key={index} 
              className="bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-800/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* FULLSTACK PROJECTS SHOWCASE GRID */}
      <h3 className="text-2xl font-semibold mb-6 font-serif">
        Featured Fullstack Applications
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD 1: FULLSTACK WEB APP */}
        <div className="border border-gray-300 dark:border-white/20 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <div className="w-full h-52 bg-gray-200 dark:bg-gray-800 rounded-xl mb-5 overflow-hidden relative">
            <Image 
              src="/bittree.jpeg" 
              alt="Bitlinks Platform" 
              fill 
              className="object-cover"
            />
          </div>
          <h4 className="text-xl font-bold mb-2">Bittree - Multi-Link Bio Platform</h4>
          <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
            A full-stack Linktree clone built with Next.js, Express, and MongoDB. Supports user profiles, link analytics, dynamic rendering, and responsive UI.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a 
              href="https://github.com/ashwaniiikuma/BitTree-web-App" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              GitHub Repo →
            </a>
            <a 
              href="https://bittree-webapp.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Live App →
            </a>
          </div>
        </div>

        {/* CARD 2: URL SHORTENER / UTILITY APP */}
        <div className="border border-gray-300 dark:border-white/20 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <div className="w-full h-52 bg-gray-200 dark:bg-gray-800 rounded-xl mb-5 overflow-hidden relative">
            <Image 
              src="/bitlinkimage.jpeg" 
              alt="Bitlinks Platform" 
              fill 
              className="object-cover"
            />
          </div>
          <h4 className="text-xl font-bold mb-2">Bitlinks - Custom URL Shortener</h4>
          <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
            Real-time link shortener with custom analytics dashboard, QR code generator, dynamic redirection logic, and MongoDB database storage.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a 
              href="https://github.com/ashwaniiikuma/Bitlinks-website" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              GitHub Repo →
            </a>
            <a 
              href="https://www.bitlinksapp.online/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Live App →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FullstackServicePage;