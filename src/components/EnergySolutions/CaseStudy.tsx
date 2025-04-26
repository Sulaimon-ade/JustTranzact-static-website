import React from 'react';
import { CaseStudyProps } from '../../types';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  summary,
  imageUrl,
  slug,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3 h-48 md:h-auto">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="md:w-2/3 p-6">
        <h3 className="text-xl font-bold text-primary-700 mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{summary}</p>
        
        <Link 
          to={`/energy-solutions/case-studies/${slug}`}
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudy;