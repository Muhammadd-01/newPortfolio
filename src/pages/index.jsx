import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import TechStack from '../components/TechStack';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
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
      <Hero />
      <Skills />
      <TechStack />
      <Testimonials />
      <Blog />
    </Layout>
  );
};

export default Home;

