import React from 'react';
import { IconGridProps } from '../../types';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';

const IconGrid: React.FC<IconGridProps> = ({ icons }) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {icons.map((item) => {
        // Dynamically get the icon component from lucide-react
        const IconComponent = LucideIcons[item.icon as keyof typeof LucideIcons];
        
        return (
          <Link 
            key={item.id} 
            to={`/${item.title.toLowerCase().replace(' ', '-')}`}
            className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                {IconComponent && (
                  <IconComponent className="h-8 w-8 text-primary-600" />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-primary-700 mb-3">
                {item.title}
              </h3>
              
              <p className="text-neutral-600">
                {item.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default IconGrid;