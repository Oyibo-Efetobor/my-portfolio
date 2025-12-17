'use client';

import React from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Oyibo_Efetobor_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 flex flex-col">
      {/* Header with close and download buttons - Fixed at top */}
      <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Resume
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-blue-600 dark:text-blue-400 transition-colors"
            title="Download Resume"
            aria-label="Download Resume"
          >
            <FaDownload className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400 transition-colors"
            title="Close"
            aria-label="Close Modal"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      {/* PDF viewer - Full page scrollable */}
      <div className="flex-1 overflow-auto">
        <iframe
          src={resumeUrl}
          className="w-full h-full"
          title="Resume PDF"
          style={{ minHeight: '100vh' }}
        />
      </div>
    </div>
  );
};

export default ResumeModal;
