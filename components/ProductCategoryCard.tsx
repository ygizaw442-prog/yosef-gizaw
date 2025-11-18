
import React from 'react';
import type { ProductCategory } from '../types';
import {
    SmartphoneIcon,
    LaptopIcon,
    HeadphoneIcon,
    CameraIcon,
    SmartHomeIcon,
    AccessoryIcon,
    CubeIcon
} from './IconComponents';

interface ProductCategoryCardProps {
  category: ProductCategory;
  accentColor: string;
}

const iconMap: { [key: string]: React.ElementType } = {
  smartphone: SmartphoneIcon,
  laptop: LaptopIcon,
  headphone: HeadphoneIcon,
  camera: CameraIcon,
  smarthome: SmartHomeIcon,
  accessory: AccessoryIcon,
  default: CubeIcon
};


const ProductCategoryCard: React.FC<ProductCategoryCardProps> = ({ category, accentColor }) => {
  const IconComponent = iconMap[category.icon.toLowerCase()] || iconMap.default;

  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10
                    transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-400/50">
      <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gray-700 group-hover:bg-orange-400 transition-colors duration-300">
        <IconComponent className="h-8 w-8 text-gray-300 group-hover:text-white" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
    </div>
  );
};

export default ProductCategoryCard;
