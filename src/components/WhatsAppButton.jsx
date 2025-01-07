import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const whatsappNumber = '+1234567890'; // Replace with your WhatsApp number
  const message = encodeURIComponent('Hello! I visited your portfolio and would like to connect.');

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="bg-green-500 text-white p-3 rounded-full shadow-lg"
        whileHover={{ boxShadow: '0 0 15px rgba(52, 211, 153, 0.7)' }}
      >
        <FaWhatsapp className="w-6 h-6" />
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;

