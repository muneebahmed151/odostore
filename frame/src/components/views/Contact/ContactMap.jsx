import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <motion.div
      className="h-full min-h-96 bg-blue-100 rounded-lg overflow-hidden shadow-md relative"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.01 }}
    >
      {/* Replace with your actual map component or iframe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6 bg-white bg-opacity-90 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-blue-900 mb-2">Our Location</h3>
          <p className="text-blue-800">Interactive map would appear here</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMap;