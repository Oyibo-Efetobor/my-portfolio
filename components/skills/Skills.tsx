import React from 'react';
import SkillCard from './SkillCard';

const skills = [
  'Python', 'Node.js', 'Flask', 'HTML5', 'CSS3', 'React.js',
  'PostgreSQL', 'MySQL', 'Git', 'GitHub', 'Linux',
  'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'Hugging Face Transformers', 'OpenAI GPT',
  'Supervised Learning', 'NLP', 'Data Labeling', 'Data Wrangling',
  'Figma', 'RESTful API Development', 'ORM (SQLAlchemy)', 'Version Control', 'Linux CLI'
];

export const Skills: React.FC = () => (
  <section className="w-full max-w-4xl mx-auto my-8 px-4 py-6 rounded-xl shadow-lg bg-white dark:bg-gray-800">
    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400">Technical Skills</h2>
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skills.map((skill, idx) => (
        <SkillCard key={idx} skill={skill} />
      ))}
    </div>
  </section>
);
