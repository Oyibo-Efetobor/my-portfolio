import React from 'react';

interface ExperienceCardProps {
  role: string;
  company: string;
  period: string;
  details: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ role, company, period, details }) => (
  <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-md">
    <h3 className="text-xl font-semibold mb-1 text-blue-700 dark:text-blue-300">{role} – {company}</h3>
    <p className="mb-2 text-gray-700 dark:text-gray-300">{period}</p>
    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
      {details.map((detail, idx) => (
        <li key={idx}>{detail}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceCard;
