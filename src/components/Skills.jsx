import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  { name: 'Node.js', level: 85, color: 'bg-green-500' },
  { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
  { name: 'Python', level: 75, color: 'bg-yellow-500' },
  { name: 'AWS', level: 70, color: 'bg-orange-500' },
  { name: 'Docker', level: 85, color: 'bg-blue-400' },
];

const SkillBar = ({ skill, index }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <motion.div
          className={`h-2.5 rounded-full ${skill.color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the technologies I work with on a daily basis
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

