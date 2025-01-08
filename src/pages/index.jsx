import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <Layout>
      <NextSeo
        title="Your Name - Full Stack Developer"
        description="Personal portfolio of a passionate full-stack developer creating beautiful and functional web experiences"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://yourwebsite.com',
          site_name: 'Your Name - Portfolio',
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Hero />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </Layout>
  );
};

export default Home;

