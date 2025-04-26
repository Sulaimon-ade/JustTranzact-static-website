import React from 'react';
import { FeatureCardProps } from '../../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  description,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-700 mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <Link 
          to={link}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;