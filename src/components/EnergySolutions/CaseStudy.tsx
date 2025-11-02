import React from 'react';
import { CaseStudyProps } from '../../types';
import { ArrowRight } from 'lucide-react';

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  summary,
  imageUrl, // still keeping it in case later
}) => {

  const whatsappNumber = '2348176620323';
  const message = encodeURIComponent(
    `Hello, good day! I’d like to know more about your Energy Solutions — particularly about ${title}.`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

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

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default CaseStudy;
