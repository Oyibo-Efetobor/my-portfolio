import React from 'react';

interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow text-center text-blue-700 dark:text-blue-300 font-medium">
    {skill}
  </div>
);

export default SkillCard;
