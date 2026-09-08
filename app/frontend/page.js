"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const FrontendServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 font-sans">
      
      {/* SECTION 1: TOP NAVBAR */}
      <header className="w-full bg-[#111827]/80 backdrop-blur-md text-white py-4 px-6 sm:px-[10%] sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Services
          </Link>
          <span className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full">
            Frontend Development
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 sm:px-[10%] py-10 space-y-8">
        
        {/* SECTION 2: HERO / OVERVIEW CARD */}
        <section className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-md">
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3 font-serif">
              Frontend Web Development
            </h1>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-3xl">
              I craft high-performance, pixel-perfect user interfaces with component-driven architecture. Specializing in responsive design, state management, and smooth micro-interactions to deliver modern digital web apps.
            </p>
          </motion.div>
        </section>

        {/* SECTION 3: CORE LANGUAGES WORKED ON */}
        <section className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-md">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Languages I Work With
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'JavaScript (ES6+)', color: 'bg-yellow-500/10 text-yellow-400' },
              { name: 'TypeScript', color: 'bg-blue-500/10 text-blue-400' },
              { name: 'HTML5', color: 'bg-orange-500/10 text-orange-400' },
              { name: 'CSS3', color: 'bg-indigo-500/10 text-indigo-400' },
            ].map((lang, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold ${lang.color}`}
              >
                <span>{lang.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: FRAMEWORKS & TOOLS */}
        <section className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-md">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
            Frameworks & Technologies
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              { name: 'React.js', tag: 'UI Library' },
              { name: 'Next.js 15', tag: 'Framework' },
              { name: 'Tailwind CSS', tag: 'Styling' },
              { name: 'Framer Motion', tag: 'Animation' },
              { name: 'REST APIs', tag: 'Integration' }
            ].map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1F2937] text-xs font-medium text-gray-200 hover:bg-[#253041] transition"
              >
                <span>{tech.name}</span>
                <span className="text-[10px] text-gray-400 font-normal">({tech.tag})</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: FEATURED DEMO PROJECTS (SCREEN RECORDINGS) */}
        <section className="bg-[#111827] rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-white font-serif">Project Demos</h2>
              <p className="text-xs text-gray-400">Screen recorded live working walk-throughs of my web apps.</p>
            </div>
            <span className="text-xs font-medium text-gray-300 bg-[#1F2937] px-3 py-1 rounded-full">02 Demos</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* PROJECT DEMO 1 */}
            <div className="group rounded-xl bg-[#1F2937]/60 p-4 hover:bg-[#1F2937] transition-all duration-300">
              <div className="w-full h-44 rounded-lg bg-black overflow-hidden relative mb-4">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 hover:opacity-100"
                >
                  <source src="/frontend.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-white">E-Commerce Storefront</h3>
                <div className="flex gap-2 text-xs font-semibold">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition">Code</a>
                  <span className="text-gray-600">•</span>
                  <a href="/frontend.mp4" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 w-full h-full transition">Live Demo</a>
                </div>
              </div>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                Responsive online store demo showing Next.js product filters, dynamic cart state management, and smooth interaction flow.
              </p>
            </div>

            {/* PROJECT DEMO 2 */}
            <div className="group rounded-xl bg-[#1F2937]/60 p-4 hover:bg-[#1F2937] transition-all duration-300">
              <div className="w-full h-44 rounded-lg bg-black overflow-hidden relative mb-4">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 hover:opacity-100"
                >
                  <source src="/frontend (2).mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-white">Analytics SaaS Dashboard</h3>
                <div className="flex gap-2 text-xs font-semibold">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 transition">Code</a>
                  <span className="text-gray-600">•</span>
                  <a href="/frontend (2).mp4" target="_blank" rel="noreferrer" className="text-purple-400 h-full w-full hover:text-purple-300 transition">Live Demo</a>
                </div>
              </div>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                Interactive SaaS metrics web dashboard demo built with React, chart UI components, and real-time state updates.
              </p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default FrontendServicePage;