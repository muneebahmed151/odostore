import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const ContactInfo = () => {
  const contactItems = [
    { icon: <FiMail className="text-blue-600 text-xl" />, text: 'hello@odo.com' },
    { icon: <FiPhone className="text-blue-600 text-xl" />, text: '+1 (555) 123-4567' },
    { icon: <FiMapPin className="text-blue-600 text-xl" />, text: '123 Commerce St, Business City, BC 10001' },
    { icon: <FiClock className="text-blue-600 text-xl" />, text: 'Mon-Fri: 9AM - 6PM\nSat: 10AM - 4PM' }
  ];

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h2>
      <div className="space-y-4">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
            className="flex items-start space-x-4"
          >
            <div className="mt-1">{item.icon}</div>
            <p className="text-blue-800 whitespace-pre-line">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactInfo;