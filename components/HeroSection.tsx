
import React from 'react';

interface HeroSectionProps {
  tagline: string;
  accentColor: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ tagline, accentColor }) => {
  return (
    <div className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 lg:pt-48 lg:pb-24">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm"></div>
       <div 
        className="absolute inset-x-0 top-0 h-96 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://picsum.photos/1920/1080?random=1&grayscale&blur=2')" }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          <span className="block">{tagline}</span>
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300 sm:max-w-3xl">
          Discover the latest in tech, tailored for Ethiopia. Quality, affordability, and innovation at your fingertips.
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
            <a
              href="#"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-lg transition-transform transform hover:scale-105"
              style={{ backgroundColor: accentColor }}
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
