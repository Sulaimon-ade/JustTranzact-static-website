import React from 'react';
import { SectionTitleProps } from '../../types';

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
        {title}
      </h2>
      
      {subtitle && (
        <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className={`h-1 w-24 bg-accent-600 mt-4 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;