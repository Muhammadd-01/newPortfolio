import React from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { ArrowDownCircle } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const parallaxProps = useSpring({
    from: { transform: 'translate3d(0,-20px,0)' },
    to: { transform: 'translate3d(0,0,0)' },
    config: { mass: 10, tension: 550, friction: 140 },
  });

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <animated.div style={parallaxProps} className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Background"
          className="object-cover w-full h-full"
          width={1920}
          height={1080}
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </animated.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="mb-8 relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/20 shadow-lg"
            >
              <Image
                src="/placeholder.svg?height=160&width=160"
                alt="Profile"
                width={160}
                height={160}
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm [Your Name]
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            A passionate full-stack developer creating beautiful and functional web experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ArrowDownCircle className="w-8 h-8 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;

