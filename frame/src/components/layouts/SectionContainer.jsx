import React from 'react';

const SectionContainer = ({ title, subtitle, children, className = '' }) => {
  return (
    <section className={`my-8 ${className}`}>
      <div className="mb-6">
        {title && <h2 className="text-2xl font-bold text-blue-900">{title}</h2>}
        {subtitle && <p className="text-blue-700">{subtitle}</p>}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;