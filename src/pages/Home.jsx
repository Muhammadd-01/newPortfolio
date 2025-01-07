import React from 'react';
import { motion } from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={3}
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        factor={3}
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0.8}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl md:text-2xl mb-8">I'm a passionate developer creating amazing web experiences</p>
          <Link
            to="/projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm a full-stack developer with a passion for creating beautiful and functional web applications. With expertise in React, Node.js, and modern web technologies, I strive to deliver high-quality solutions that exceed expectations.
          </p>
          <Link
            to="/about"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Learn More About Me →
          </Link>
        </motion.div>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={0.5}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore my portfolio of projects, ranging from web applications to mobile apps and more. Each project showcases my skills and passion for development.
          </p>
          <Link
            to="/projects"
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            View My Projects →
          </Link>
        </motion.div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

