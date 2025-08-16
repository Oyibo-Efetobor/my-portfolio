import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image?: string; // Add image prop (optional)
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, tags, link, image }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block p-0 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-md transition-transform hover:scale-[1.03] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    {/* Image section */}
    <div className="w-full h-40 md:h-48 rounded-t-lg overflow-hidden bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={title + " project image"}
          className="object-cover w-full h-full"
        />
      ) : (
        <div className="flex items-center justify-center w-full h-full text-gray-400 dark:text-gray-500 text-4xl">
          {/* Placeholder icon or text */}
          <span>🖼️</span>
        </div>
      )}
    </div>
    {/* Content section */}
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">{title}</h3>
      <p className="mb-2 text-gray-700 dark:text-gray-300">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">{tag}</span>
        ))}
      </div>
    </div>
  </a>
);

export default ProjectCard;
