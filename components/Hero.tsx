'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Typed from 'typed.js';
import Image from 'next/image';
import ResumeModal from './ResumeModal';

export const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Python Developer',
        'Machine Learning Engineer',
        'Backend Developer',
        'NLP Enthusiast'
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      // Destroy Typed instance during cleanup
      typed.destroy();
    };
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm mb-4">
                <span className="text-blue-600 dark:text-blue-400">Welcome to my portfolio</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm OYIBO Efetobor
              </h1>
              <h2 className="flex items-center text-xl sm:text-2xl">
                I'm a <span className="text-blue-600 dark:text-blue-400 ml-2" ref={el}></span>
              </h2>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-400 md:text-xl">
                Innovative and solutions-focused developer committed to using technology to solve real-world problems.
                Skilled in backend development, data-driven applications, and AI/ML integration.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
              >
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
              >
                <FaEye /> View Resume
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-800 bg-gradient-to-b from-blue-100 to-blue-50 dark:from-blue-900 dark:to-gray-900">
              <Image 
                src="/images/pfp.png" 
                alt="Oyibo Efetobor" 
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1200px) 350px, 400px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        resumeUrl="/resume.pdf"
      />
    </section>
  );
};

export default Hero;
