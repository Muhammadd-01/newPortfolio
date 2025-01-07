import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">My Resume</h1>
        <div className="flex justify-center space-x-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
          >
            View Resume
          </motion.button>
          <motion.a
            href="/dummy-resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Download Resume
          </motion.a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Professional Summary</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Experienced Full Stack Developer with a strong background in React, Node.js, and modern web technologies. Passionate about creating efficient, scalable, and user-friendly web applications.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Key Skills</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6">
            <li>React.js and Redux</li>
            <li>Node.js and Express</li>
            <li>MongoDB and SQL databases</li>
            <li>RESTful API design</li>
            <li>Git version control</li>
            <li>Agile methodologies</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">TechCorp, San Francisco, CA | 2021 - Present</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
              <li>Lead development of scalable web applications using React and Node.js</li>
              <li>Mentor junior developers and implement best practices</li>
              <li>Collaborate with cross-functional teams to deliver high-quality products</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">WebSolutions Inc., New York, NY | 2018 - 2021</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
              <li>Developed and maintained multiple client projects</li>
              <li>Focused on responsive design and performance optimization</li>
              <li>Implemented new features and resolved bugs in existing applications</li>
            </ul>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white p-8 rounded-lg max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Document
                file="/dummy-resume.pdf"
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p className="mt-4 text-center">
                Page {pageNumber} of {numPages}
              </p>
              <div className="flex justify-between mt-4">
                <button
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Resume;

