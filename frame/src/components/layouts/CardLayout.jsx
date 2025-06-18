import React from 'react';

const CardLayout = ({ title, children, footer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-200">
      {title && <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>}
      <div className="mb-4">
        {children}
      </div>
      {footer && (
        <div className="border-t border-blue-200 pt-4">
          {footer}
        </div>
      )}
    </div>
  );
};

export default CardLayout;