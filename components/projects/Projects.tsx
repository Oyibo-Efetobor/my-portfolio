import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'ISS Tracker with Python',
    description: 'Real-time International Space Station location tracker using external APIs and Python scripting.',
    tags: ['Python', 'API', 'Automation'],
    link: "https://github.com/Oyibo-Efetobor/track-iss",
    image: "/images/iss-tracker.png", // Add your image path here
  },
  {
    title: 'Startup Shopping Site Backend + FrontEnd',
    description: 'Structured backend logic for a startup e-commerce site using Python and PostgreSQL. Integrated user authentication and catalog features using Flask and SQLAlchemy.',
    tags: ['Python', 'Flask', 'PostgreSQL', 'React', 'TypeScript'],
    link: "https://emethebrand.vercel.app",
    image: "/images/shopping-site.png",
  },
  {
    title: 'Nigerian Currency Note Fake Detection System',
    description: 'Software-based system in MATLAB to detect counterfeit Nigerian naira notes using image processing and SVM.',
    tags: ['MATLAB', 'Image Processing', 'SVM'],
    link: "https://github.com/Oyibo-Efetobor/fake_naira_detection",
    image: "/images/fake-naira.png",
  },
  {
    title: 'Movie Review Classifier',
    description: 'Built NLP pipelines for classification tasks using Hugging Face Transformers, Scikit-learn, Keras, and OpenAI GPT APIs.',
    tags: ['ML', 'NLP', 'Transformers', 'Keras', 'OpenAI'],
    link: "https://github.com/Oyibo-Efetobor/movie_review_classifier",
    image: "/images/nlp-work.png",
  },
  {
    title: 'Startup Edutech Site',
    description: 'Built an  Edutech site that renders services to Businesses, Students & Universities',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: "https://essaykreek.com",
    image: "/images/edutech-site.png",
  },
];

export const Projects: React.FC = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, idx) => (
      <ProjectCard key={idx} {...project} />
    ))}
  </div>
);
