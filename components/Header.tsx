
import React from 'react';
import { OriLogoIcon } from './IconComponents';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 text-white">
              <OriLogoIcon className="h-8 w-8 text-orange-400"/>
              <span className="text-2xl font-bold">Ori Tech</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Support</a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
