import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const formFields = [
    { id: 'name', type: 'text', label: 'Your Name' },
    { id: 'email', type: 'email', label: 'Email Address' },
    { id: 'phone', type: 'tel', label: 'Phone Number' },
    { id: 'subject', type: 'text', label: 'Subject' },
    { id: 'message', type: 'textarea', label: 'Your Message' }
  ];

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
      <form className="space-y-4">
        {formFields.map((field, index) => (
          <motion.div
            key={field.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <label htmlFor={field.id} className="block text-blue-800 font-medium mb-1">
              {field.label}
            </label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                rows="4"
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                className="w-full px-4 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors duration-300"
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;