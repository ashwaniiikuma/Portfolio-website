"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const UiUxServicePage = () => {
  return (
    <div className="min-h-screen bg-[#0A051B] text-gray-100 font-sans selection:bg-pink-500 selection:text-white">
      
      {/* HEADER / NAVBAR */}
      <header className="w-full bg-[#0A051B]/80 backdrop-blur-md text-white py-5 px-6 sm:px-[10%] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
            Ashwani<span className="text-pink-500 text-2xl leading-none">.</span>
          </Link>

          {/* NAVIGATION LINKS */}
          <nav className="hidden md:flex items-center gap-6 bg-[#160D33]/60 border border-white/10 px-6 py-2 rounded-full text-xs font-medium text-gray-300">
            <Link href="/#home" className="hover:text-white transition">Home</Link>
            <Link href="/#about" className="hover:text-white transition">About</Link>
            <Link href="/#services" className="hover:text-white transition">Services</Link>
            <Link href="/#work" className="hover:text-white transition">My Work</Link>
            <Link href="/#contact" className="hover:text-white transition">Contact</Link>
          </nav>

          {/* ACTION BUTTON & MOON ICON */}
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>
            <Link 
              href="/#contact" 
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-gray-950 text-xs font-semibold rounded-full hover:bg-gray-200 transition"
            >
              Contact us ↗
            </Link>
          </div>
        </div>
      </header>

      {/* BACK TO SERVICES LINK */}
      <div className="max-w-7xl mx-auto px-6 sm:px-[10%] pt-6">
        <Link 
          href="/#services" 
          className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-white transition-colors"
        >
          ← Back to Services
        </Link>
      </div>

      <main className="max-w-7xl mx-auto px-6 sm:px-[10%] py-8 space-y-12">
        
        {/* HERO / OVERVIEW */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 font-serif">
              UI/UX & Interactive Web Design
            </h1>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
              I design clean, intuitive, and responsive user interfaces with a focus on user experience. From layout structuring in HTML/CSS to smooth micro-interactions powered by Vanilla JavaScript, I craft web layouts that look great on every screen.
            </p>
          </motion.div>
        </section>

        {/* CORE LANGUAGES WORKED ON */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white font-serif">
            Languages & Core Frontend Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'HTML5 (Semantic)', color: 'bg-orange-500/10 text-orange-400 border border-orange-500/20' },
              { name: 'CSS3 (Flexbox & Grid)', color: 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' },
              { name: 'JavaScript (ES6+)', color: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' },
            ].map((lang, i) => (
              <div 
                key={i} 
                className={`px-4 py-2 rounded-full text-xs font-medium ${lang.color}`}
              >
                {lang.name}
              </div>
            ))}
          </div>
        </section>

        {/* DESIGN CONCEPTS & TOOLS */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold text-white font-serif">
            Design Concepts & Techniques
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {[
              'Responsive Layouts',
              'CSS Micro-Animations',
              'Vanilla JavaScript DOM Interactions',
              'UI Components (Modals, Sliders)',
              'Cross-Browser Testing',
              'Visual Hierarchy & Typography'
            ].map((concept, i) => (
              <div 
                key={i} 
                className="px-4 py-2 rounded-full bg-[#160D33] text-xs font-medium text-purple-200 border border-purple-500/20 hover:border-purple-400/40 transition"
              >
                {concept}
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS WITH SCREEN RECORDINGS */}
        <section className="space-y-6 pt-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
            Featured UI/UX Demos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* PROJECT DEMO 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-[#130B2B] p-5 border border-purple-900/30 hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="w-full h-52 sm:h-60 rounded-xl bg-black overflow-hidden relative mb-4 border border-white/5">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                >
                  <source src="/gymwebsite.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Interactive Landing Page</h3>
                <div className="flex gap-2 text-xs font-semibold">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 transition">Code</a>
                  <span className="text-gray-600">•</span>
                  <a href="/gymwebsite.mp4" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 transition">Live Demo</a>
                </div>
              </div>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                Responsive web layout built with HTML5 & CSS Grid. Features smooth JS scroll animations, custom navigation bar, and clean visual typography.
              </p>
            </motion.div>

            {/* PROJECT DEMO 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-[#130B2B] p-5 border border-purple-900/30 hover:border-pink-500/40 transition-all duration-300"
            >
              <div className="w-full h-52 sm:h-60 rounded-xl bg-black overflow-hidden relative mb-4 border border-white/5">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90 group-hover:opacity-100"
                >
                  <source src="/game.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-bold text-white">Dynamic Product Showcase UI</h3>
                <div className="flex gap-2 text-xs font-semibold">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 transition">Code</a>
                  <span className="text-gray-600">•</span>
                  <a href="/game.mp4" target="_blank" rel="noreferrer" className="text-pink-400 hover:text-pink-300 transition">Live Demo</a>
                </div>
              </div>
              <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
                Interactive web application UI using Vanilla JS for DOM updates, dynamic filtering, modal popups, and responsive form components.
              </p>
            </motion.div>

          </div>
        </section>

      </main>
    </div>
  );
};

export default UiUxServicePage;