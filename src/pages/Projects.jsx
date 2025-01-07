import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
    image: '/images/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveDemo: 'https://example.com/project1',
    sourceCode: 'https://github.com/yourusername/project1',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application with real-time updates.',
    image: '/images/project2.jpg',
    technologies: ['React', 'Firebase', 'Material-UI'],
    liveDemo: 'https://example.com/project2',
    sourceCode: 'https://github.com/yourusername/project2',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard with data visualization.',
    image: '/images/project3.jpg',
    technologies: ['React', 'D3.js', 'OpenWeather API'],
    liveDemo: 'https://example.com/project3',
    sourceCode: 'https://github.com/yourusername/project3',
  },
];

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Technologies Used:</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Source Code
          </a>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;

