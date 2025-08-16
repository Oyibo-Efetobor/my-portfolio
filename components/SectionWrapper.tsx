import React from 'react';

interface SectionWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => (
  <section className="w-full max-w-4xl mx-auto my-8 px-4 py-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">{title}</h2>
    <div>{children}</div>
  </section>
);
