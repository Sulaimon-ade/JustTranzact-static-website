import React, { useState } from 'react';
import { ProductGalleryProps } from '../../types';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === Math.ceil(products.length / 3) - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? Math.ceil(products.length / 3) - 1 : prev - 1
    );
  };

  const openLightbox = (imageUrl: string) => {
    setLightboxImage(imageUrl);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Create product slides (3 per slide)
  const slides = [];
  for (let i = 0; i < products.length; i += 3) {
    slides.push(products.slice(i, i + 3));
  }

  return (
    <div className="relative">
      {/* Gallery */}
      <div className="overflow-hidden relative">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {slide.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:scale-105"
                    onClick={() => openLightbox(product.imageUrl)}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-primary-700">{product.name}</h3>
                      <p className="text-sm text-neutral-500">{product.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button 
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6 text-primary-700" />
      </button>
      
      <button 
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md z-10"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6 text-primary-700" />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              currentSlide === index ? 'bg-primary-600' : 'bg-neutral-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button 
            className="absolute top-4 right-4 text-white p-2"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          
          <img 
            src={lightboxImage} 
            alt="Product" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ProductGallery;