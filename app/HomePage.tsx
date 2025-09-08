import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Projects } from '../components/projects/Projects';

import Footer from '../components/Footer';
import Hero from '../components/Hero';

const contactLinks = [
  { icon: <FaPhone />, text: '+234 704 914 88850', href: 'tel:+23470491488850' },
  { icon: <FaEnvelope />, text: 'efetobor3x@gmail.com', href: 'mailto:efetobor3x@gmail.com' },
  { icon: <FaGithub />, text: 'GitHub', href: 'https://github.com/Oyibo-Efetobor' },
  { icon: <FaLinkedin />, text: 'LinkedIn', href: 'https://www.linkedin.com/in/efetobor-oyibo-0518742b1/' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white">

      {/* Hero section */}
      <section id="top" className="section-animate scroll-mt-24">
        <Hero />
      </section>

      {/* Skills section - modern layout */}
  <section id="skills" className="py-8 mt-4 mx-4 md:mx-0 section-animate-delayed scroll-mt-24">
  <h2 className="text-4xl text-center font-bold text-blue-600 dark:text-blue-400 pt-[40px]">Tech Stack</h2>
        <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
          {/* Tech stack icons and names - use your actual skills */}
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="Python" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(53,114,165,0.07)'}}>
              <img alt="Python" src="https://img.icons8.com/color/144/python--v1.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">Python</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="ReactJS" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(107,164,221,0.07)'}}>
              <img alt="ReactJS" src="https://img.icons8.com/ultraviolet/120/react--v1.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">ReactJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="NextJS" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.07)'}}>
              <img alt="NextJS" src="/images/nextjs.svg" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">NextJS</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="Node.js" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(139,195,74,0.07)'}}>
              <img alt="Node.js" src="https://img.icons8.com/color/144/nodejs.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">Node.js</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="Tailwind" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,172,193,0.07)'}}>
              <img alt="Tailwind" src="https://img.icons8.com/color/144/tailwindcss.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">Tailwind</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="TypeScript" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(105,149,218,0.07)'}}>
              <img alt="TypeScript" src="https://img.icons8.com/color/144/typescript.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">TypeScript</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="PostgreSQL" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(49,99,140,0.07)'}}>
              <img alt="PostgreSQL" src="https://img.icons8.com/color/144/postgreesql.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">PostgreSQL</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="TensorFlow" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(255,193,7,0.07)'}}>
              <img alt="TensorFlow" src="https://img.icons8.com/color/144/tensorflow.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">TensorFlow</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="Git" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(240,80,51,0.07)'}}>
              <img alt="Git" src="https://img.icons8.com/color/144/git.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">Git</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div title="Linux" className="h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center" style={{backgroundColor: 'rgba(48,48,48,0.07)'}}>
              <img alt="Linux" src="https://img.icons8.com/color/144/linux.png" width="56" height="56" className="h-12 w-12 md:h-14 md:w-14 object-contain" />
            </div>
            <p className="text-sm md:text-base">Linux</p>
          </div>
        </div>
      </section>

      {/* Projects section - slightly different background, no big box */}
      <section id="projects" className="section-animate-delayed scroll-mt-24 bg-gray-50 dark:bg-gray-900 py-12">
        <h2 className="text-4xl text-center font-bold text-blue-600 dark:text-blue-400 mb-8">Projects</h2>
        <div className="lg:w-3/4 2xl:w-3/5 mx-auto">
          <Projects />
        </div>
      </section>

        {/* Contact Me Section */}
        <section id="contact" className="section-animate scroll-mt-24 py-16 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img src="/images/contact.gif" alt="Contact" className="object-contain" />
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6">
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center md:text-left">Contact Me</h2>
              <div className="flex flex-col gap-4 w-full">
                <a href="mailto:efetobor3x@gmail.com" className="group flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition shadow-md">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    <FaEnvelope size={40} />
                  </span>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">efetobor3x@gmail.com</span>
                </a>
                <a href="tel:+2347049148850" className="group flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition shadow-md">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    <FaPhone size={40} />
                  </span>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">+234 704 914 8850</span>
                </a>
                <a href="https://github.com/Oyibo-Efetobor" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition shadow-md">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    <FaGithub size={40} />
                  </span>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/efetobor-oyibo-0518742b1/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition shadow-md">
                  <span className="text-blue-600 dark:text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300">
                    <FaLinkedin size={40} />
                  </span>
                  <span className="text-lg font-medium text-gray-700 dark:text-gray-200">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      
      <Footer />
    </main>
  );
}
