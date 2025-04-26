import React from 'react';
import { HeroBannerProps } from '../../types';
import Button from './Button';

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  subtitle,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
  backgroundImage,
}) => {
  return (
    <div className="relative bg-primary-800 text-white">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {subtitle}
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {primaryButtonText && (
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={primaryButtonAction}
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && (
              <Button 
                variant="outline" 
                size="lg" 
                onClick={secondaryButtonAction}
                className="text-white border-white hover:bg-white/10"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;