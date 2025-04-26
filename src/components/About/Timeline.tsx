import React from 'react';
import { TimelineProps } from '../../types';

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="py-8">
      {/* Desktop Timeline (horizontal) */}
      <div className="hidden md:block">
        <div className="relative">
          {/* Horizontal line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-primary-200 -translate-y-1/2" />

          {/* Timeline items */}
          <div className="flex justify-between relative gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circle */}
                <div className="w-4 h-4 rounded-full bg-primary-600 mb-4 relative z-10" />

                {/* Date */}
                <div className="font-bold text-lg text-primary-600 mb-2">{item.date}</div>

                {/* Content box */}
                <div
                  className={`bg-white p-4 rounded-lg shadow-md w-48 min-h-[10rem] ${
                    index % 2 === 0 ? 'mt-2' : 'mt-[-10rem]'
                  }`}
                >
                  <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (vertical) */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical line */}
          <div className="absolute top-0 left-3 h-full w-0.5 bg-primary-200" />

          {/* Timeline items */}
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-10 relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Circle */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-600 shadow flex items-center justify-center -ml-3">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>

              {/* Date */}
              <div className="font-bold text-lg text-primary-600 mb-2">{item.date}</div>

              {/* Content box */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="font-bold text-primary-700 mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;