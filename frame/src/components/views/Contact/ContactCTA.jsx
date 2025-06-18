import React from 'react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <motion.div 
      className="bg-blue-800 text-white py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-3xl font-bold mb-6"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          Still Have Questions?
        </motion.h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          Check out our FAQs or reach out to our support team
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/faq"
            className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-md font-medium"
          >
            Visit FAQ
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact-form"
            className="bg-transparent border-2 border-white hover:bg-blue-700 px-8 py-3 rounded-md font-medium"
          >
            Contact Support
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCTA;