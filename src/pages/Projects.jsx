import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully functional e-commerce app built with React and Node.js.',
    category: 'React.js Applications',
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://ecommerce.example.com',
    repoLink: 'https://github.com/user/ecommerce'
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my projects and skills.',
    category: 'UI/UX Design',
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://portfolio.example.com',
    repoLink: 'https://github.com/user/portfolio'
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'A full-stack task management application with user authentication.',
    category: 'Full-Stack Development',
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://taskmanager.example.com',
    repoLink: 'https://github.com/user/taskmanager'
  },
  {
    id: 4,
    title: 'Open Source Library',
    description: 'A popular open-source library for handling date and time in JavaScript.',
    category: 'Open Source Contributions',
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://datelib.example.com',
    repoLink: 'https://github.com/user/datelib'
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A simple weather application built for learning purposes.',
    category: 'Personal/Fun Projects',
    image: '/placeholder.svg?height=300&width=400',
    demoLink: 'https://weather.example.com',
    repoLink: 'https://github.com/user/weather-app'
  },
];

const categories = ['All', 'React.js Applications', 'UI/UX Design', 'Full-Stack Development', 'Open Source Contributions', 'Personal/Fun Projects'];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Live Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Projects</h1>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full ${
                filter === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
              } hover:bg-indigo-500 hover:text-white transition-colors duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;

