"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false);

  // Open side menu
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }
  };

  // Close side menu
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = 'translateX(16rem)';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Light mode background glow */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "backdrop-blur-lg shadow-sm bg-white/50 dark:bg-darkTheme/50 dark:shadow-white/10" : "bg-transparent"}`}>
        <div className="flex items-center font-serif justify-between h-full w-[90%] max-w-7xl mx-auto">
          
          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight hover:opacity-80 transition-opacity">
            Ashwani<span className="text-blue-600">.</span>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <ul className={`hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full border border-gray-200/50 shadow-sm transition-all duration-300 ${isScroll ? "bg-transparent border-transparent shadow-none" : "bg-white/50 dark:bg-transparent dark:border-white/20 backdrop-blur-md"}`}>
            <li>
              <Link href="#top" className="text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-700 dark:text-white/80 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium transition-colors">
                Contact
              </Link>
            </li>
          </ul>

          {/* RIGHT CONTROLS */}
          <div className="flex items-center gap-4">
            
            {/* THEME TOGGLE BUTTON (SUN / MOON) */}
            <button 
              onClick={() => setIsDarkMode(prev => !prev)} 
              className='cursor-pointer p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
              aria-label="Toggle Theme"
            >
              <Image 
                src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                alt="Theme toggle" 
                className="w-6 h-6 object-contain"
              />
            </button>

            {/* CTA BUTTON */}
            <Link
              href="#contact"
              className="hidden lg:flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full bg-gray-900 dark:bg-white dark:text-black hover:bg-blue-600 text-white transition-all duration-300 shadow-md hover:shadow-blue-500/20"
            >
              <span>Contact us</span>
              <Image src={assets.arrow_icon} alt="" className={`w-3 ${isDarkMode ? '' : 'invert'}`} />
            </Link>

            {/* HAMBURGER MENU ICON (MOBILE) */}
            <button 
              className="p-2 block md:hidden rounded-lg hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors" 
              onClick={openMenu}
              aria-label="Open Menu"
            >
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
            </button>
          </div>

        </div>

        {/* MOBILE MENU SIDEBAR */}
        <ul 
          ref={sideMenuRef} 
          className="flex md:hidden flex-col gap-6 py-20 px-10 fixed top-0 bottom-0 -right-64 w-64 z-[10001] h-screen bg-white/90 dark:bg-darkTheme/95 dark:text-white backdrop-blur-2xl shadow-2xl transition-transform duration-500 ease-in-out border-l border-gray-100 dark:border-gray-800"
        >
          {/* CLOSE BUTTON */}
          <button 
            className="absolute right-6 top-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer" 
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="Close Menu" className="w-5 h-5" />
          </button>

          <li>
            <Link href="#top" className="text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 transition-colors block" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 transition-colors block" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 transition-colors block" onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#work" className="text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 transition-colors block" onClick={closeMenu}>
              My Work
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-gray-800 dark:text-white text-base font-semibold hover:text-blue-600 transition-colors block" onClick={closeMenu}>
              Contact Me
            </Link>
          </li>
        </ul>

      </nav>
    </>
  );
};

export default Navbar;