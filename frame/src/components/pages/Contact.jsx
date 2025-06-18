import React from 'react';
import ContactHero from '../views/contact/ContactHero';
import ContactForm from '../views/contact/ContactForm';
import ContactInfo from '../views/contact/ContactInfo';
import ContactMap from '../views/contact/ContactMap';
import ContactCTA from '../views/contact/ContactCTA';

const ContactUs = () => {
  return (
    <div className="bg-blue-50">
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <ContactForm />
            <ContactInfo />
          </div>
          <ContactMap />
        </div>
      </div>
      <ContactCTA />
    </div>
  );
};

export default ContactUs;