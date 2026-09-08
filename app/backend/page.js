"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BackendServicePage = () => {
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
          Backend Development & APIs
        </h1>
        <p className="text-lg text-gray-600 dark:text-white/70 leading-relaxed">
          I build scalable server-side applications, secure RESTful APIs, and robust database architectures using Node.js and Express.js. My focus is on data security, high performance, clean API structure, and efficient database querying.
        </p>
      </motion.div>

      {/* BACKEND SKILLS & TOOLS BADGES */}
      <div className="mb-14">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white font-serif">
          Technologies & Tools
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Node.js', 
            'Express.js', 
            'MongoDB & Mongoose', 
            'MySQL / PostgreSQL', 
            'RESTful APIs', 
            'JWT Authentication', 
            'Postman',
            'MVC Architecture'
          ].map((tech, index) => (
            <span 
              key={index} 
              className="bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* BACKEND SHOWCASE GRID (PROJECTS & ARCHITECTURE) */}
      <h3 className="text-2xl font-semibold mb-6 font-serif">
        Backend Projects & API Showcases
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* CARD 1: REST API / AUTHENTICATION SYSTEM */}
        <div className="border border-gray-300 dark:border-white/20 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition">
          <div className="w-full h-52 bg-gray-200 dark:bg-gray-800 rounded-xl mb-5 overflow-hidden relative flex items-center justify-center">
            {/* Project Image or Video */}
            <Image 
              src="/login.jpeg" 
              alt="REST API Architecture" 
              fill 
              className="object-cover"
            />
          </div>
          <h4 className="text-xl font-bold mb-2">Secure Authentication & User Management API</h4>
          <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
            Production-ready backend service supporting JWT authentication, role-based access control (RBAC), password hashing with bcrypt, and MongoDB schemas.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a 
              href="https://github.com/ashwaniiikuma/Register-login-page" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              GitHub Source Code →
            </a>
          </div>
        </div>

        {/* CARD 2: E-COMMERCE BACKEND / DATABASE SYSTEM */}
        <div className="border border-gray-300 dark:border-white/20 p-6 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-sm hover:shadow-md transition">
           <div className="w-full h-52 bg-gray-200 dark:bg-gray-800 rounded-xl mb-5 overflow-hidden relative flex items-center justify-center">
            {/* Project Image or Video */}
            <Image 
              src="/backend.jpeg" 
              alt="REST API Architecture" 
              fill 
              className="object-cover"
            />
          </div>
          <h4 className="text-xl font-bold mb-2">Scalable E-Commerce Backend Service</h4>
          <p className="text-sm text-gray-600 dark:text-white/70 mb-4">
            Complete API set for product management, shopping cart state, order processing, and payment gateway integration.
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a 
              href="https://github.com/ashwaniiikuma/backend-scholarship-AI" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-600 dark:text-purple-400 hover:underline"
            >
              GitHub Source Code →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BackendServicePage;