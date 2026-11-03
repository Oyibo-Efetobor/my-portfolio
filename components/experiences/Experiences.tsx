import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    role: 'Intern',
    company: 'TotalEnergies Nigeria',
    period: 'March 2024 – August 2024',
    details: [
      'Collaborated with a development team to create a CBT (Computer-Based Testing) web platform.',
      'Optimized backend performance using PostgreSQL for efficient data storage and retrieval.',
      'Worked cross-functionally to improve app usability and system reliability.',
    ],
  },
];

export const Experiences: React.FC = () => (
  <section className="w-full max-w-4xl mx-auto my-8 px-4 py-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Experience</h2>
    <div className="grid gap-6">
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </div>
  </section>
);
