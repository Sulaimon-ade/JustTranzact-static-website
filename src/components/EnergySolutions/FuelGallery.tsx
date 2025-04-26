import React from 'react';
import { FuelGalleryProps } from '../../types';

const FuelGallery: React.FC<FuelGalleryProps> = ({ fuels }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {fuels.map((fuel) => (
        <div 
          key={fuel.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="h-40 overflow-hidden">
            <img 
              src={fuel.imageUrl} 
              alt={fuel.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-4">
            <h3 className="font-bold text-primary-700 mb-2">{fuel.name}</h3>
            <p className="text-sm text-neutral-600">{fuel.spec}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FuelGallery;