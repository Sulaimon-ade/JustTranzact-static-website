import React, { useState } from 'react';
import { FAQAccordionProps } from '../../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs }) => {
  const [openId, setOpenId] = useState<number | null>(1); // First one open by default

  const toggleAccordion = (id: number) => {
    setOpenId(prevId => prevId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => {
        const isOpen = faq.id === openId;
        
        return (
          <div 
            key={faq.id}
            className="border border-neutral-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                isOpen ? 'bg-primary-50' : 'hover:bg-neutral-50'
              }`}
              onClick={() => toggleAccordion(faq.id)}
            >
              <span className="font-medium text-primary-700">{faq.question}</span>
              {isOpen ? (
                <ChevronUp className="h-5 w-5 text-primary-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-primary-600" />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-4 pt-0 bg-white text-neutral-600">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;