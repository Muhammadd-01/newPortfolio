import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "One of the most talented developers I've worked with. Their attention to detail and problem-solving skills are exceptional.",
    author: "Jane Smith",
    position: "CTO, Tech Corp",
    image: "/placeholder.svg?height=64&width=64"
  },
  {
    id: 2,
    content: "Delivered our project on time and exceeded all expectations. A true professional with excellent communication skills.",
    author: "John Doe",
    position: "Project Manager, Digital Solutions",
    image: "/placeholder.svg?height=64&width=64"
  },
  {
    id: 3,
    content: "Their technical expertise and creativity helped transform our vision into reality. Highly recommended!",
    author: "Sarah Johnson",
    position: "Founder, StartupX",
    image: "/placeholder.svg?height=64&width=64"
  }
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <Quote className="w-8 h-8 text-indigo-600 mb-4" />
      <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.content}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-white">{testimonial.author}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            What People Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take my word for it - hear what others have to say about working with me
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

