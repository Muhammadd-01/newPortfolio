import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable Web Applications with React',
    excerpt: 'Learn how to create performant and maintainable React applications using modern best practices.',
    date: '2024-01-05',
    readTime: '5 min read',
    image: '/placeholder.svg?height=200&width=400',
    slug: 'building-scalable-web-applications'
  },
  {
    id: 2,
    title: 'The Future of Web Development',
    excerpt: 'Exploring upcoming trends and technologies that will shape the future of web development.',
    date: '2024-01-03',
    readTime: '7 min read',
    image: '/placeholder.svg?height=200&width=400',
    slug: 'future-of-web-development'
  },
  {
    id: 3,
    title: 'Optimizing React Performance',
    excerpt: 'Tips and techniques for improving the performance of your React applications.',
    date: '2024-01-01',
    readTime: '6 min read',
    image: '/placeholder.svg?height=200&width=400',
    slug: 'optimizing-react-performance'
  }
];

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
    >
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{post.date}</span>
          <Clock className="w-4 h-4 ml-4 mr-2" />
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {post.excerpt}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-500"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Insights and articles about web development, technology, and best practices
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            View All Posts
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

