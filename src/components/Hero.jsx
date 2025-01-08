import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Network Background */}
      <NetworkBackground />

      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="text-[#ff4d4d] text-3xl font-bold">
              Farin
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:flex space-x-8"
          >
            {['Home', 'About', 'Service', 'Portfolio', 'Resume', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-white hover:text-[#ff4d4d] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </motion.div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[#ff4d4d] text-2xl mb-4"
            >
              HELLO!
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white text-5xl md:text-6xl font-bold mb-6"
            >
              I Am Tasnia Farin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-300 text-lg mb-8 max-w-xl"
            >
              I'm a Web Developer with extensive experience for over 5 years. My expertise is to create
              and Websites design, graphic design and many more...
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4"
            >
              <Link
                to="/portfolio"
                className="bg-[#ff4d4d] text-white px-8 py-3 rounded-full hover:bg-[#ff3333] transition-colors duration-300"
              >
                View Work
              </Link>
              <Link
                to="/contact"
                className="bg-[#ff4d4d] text-white px-8 py-3 rounded-full hover:bg-[#ff3333] transition-colors duration-300"
              >
                Hire Me
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <img
              src="/profile-image.jpg" // Replace with your actual image
              alt="Tasnia Farin"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

