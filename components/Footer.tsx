'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-white dark:bg-gray-900 shadow-lg mt-20">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">OYIBO Efetobor</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Python Developer | ML Enthusiast</p>
          </div>
          
          {/* Contact icons moved to Contact Me section */}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {year} OYIBO Efetobor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
