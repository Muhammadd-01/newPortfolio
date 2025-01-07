import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const skills = [
  { name: 'React', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'CSS/Sass', level: 75 },
  { name: 'Python', level: 70 },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Biography</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience in creating web applications. My journey in tech started when I built my first website at the age of 15, and since then, I've been hooked on the world of programming.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in React and Node.js, and I'm always eager to learn new technologies. When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <motion.div
                      className="bg-indigo-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white">My Journey</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(99, 102, 241)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(99, 102, 241)' }}
            date="2021 - present"
            iconStyle={{ background: 'rgb(99, 102, 241)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">Senior Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">TechCorp, San Francisco, CA</h4>
            <p>
              Leading development of scalable web applications, mentoring junior developers, and implementing best practices.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<FaBriefcase />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">WebSolutions Inc., New York, NY</h4>
            <p>
              Developed and maintained multiple client projects, focusing on responsive design and performance optimization.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2014 - 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Technology</h4>
            <p>
              Graduated with honors, specializing in web technologies and software engineering.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default About;

