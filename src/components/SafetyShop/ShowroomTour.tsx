import React, { useState, useEffect } from 'react';

// Sample showroom images
const showroomImages = [
  'https://inwfile.com/s-cf/js8m0t.jpg',
  'https://uppler-platform-otego.s3.eu-west-3.amazonaws.com/uppler_default/98/af/985ab1c83bc8374a1ef0f16cd62d.webp',
  'https://www.trekkergroup.com/wp-content/uploads/2017/03/Basic-Personal-Protective-Equipment-PPE-for-Construction-Workers.jpg',
  'https://www.safeopedia.com/wp-content/uploads/2023/07/selecting-ppe-800x521.jpg',
];

const ShowroomTour: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % showroomImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
      {/* Slides */}
      <div className="h-full">
        {showroomImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Showroom view ${index + 1}`}
              className="w-full h-full object-cover"
            />
            
            {/* Text overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold">Portwest Safety Shop</h3>
                <p className="text-sm opacity-80">
                  Discover our extensive range of safety equipment in our state-of-the-art showroom
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {showroomImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowroomTour;