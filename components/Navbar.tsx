'use client';

import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const navLinks = [
  { name: 'Home', href: '#top' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarElement = document.getElementById('navbar');
    if (scrollPosition > 50) {
      navbarElement?.classList.add('bg-opacity-95', 'backdrop-blur-sm');
    } else {
      navbarElement?.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Using a more refined scrolling with easing
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      
      // Update URL without page jump
      history.pushState(null, '', href);
    }
  };

  return (
    <nav id="navbar" className="w-full px-4 py-3 flex justify-between items-center bg-white dark:bg-gray-900 shadow fixed top-0 left-0 z-50 transition-all duration-300">
      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">efetobordev</div>
      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            onClick={(e) => smoothScroll(e, link.href)}
            className="navbar-item text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition"
          >
            {link.name}
          </a>
        ))}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
          aria-label="Toggle dark mode"
        >
          {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
        </button>
      </div>
      {/* Hamburger Button */}
      <button
        className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col items-center gap-4 py-6 md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => smoothScroll(e, link.href)}
              className="navbar-item text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 font-medium transition text-lg"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition"
            aria-label="Toggle dark mode"
          >
            {mounted && (theme === 'dark' ? <FaSun /> : <FaMoon />)}
          </button>
        </div>
      )}
    </nav>
  );
}
