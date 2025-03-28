import React from 'react'
import { BrowseCategoryCardProps } from '@/src/types';

const BrowseCategoryCard = ({ displayGenre, color, onClick}: BrowseCategoryCardProps) => {
  return (
    <div>
      <div
        className="w-48 h-20 flex items-end justify-end p-2 rounded-2xl active:scale-90 hover:scale-90 transition-all duration-300 ease-in-out cursor-pointer"
        onClick={onClick}
        style={{
          backgroundColor: color
        }}
      >
        <h2 className="text-md font-bold">{displayGenre}</h2>
      </div>
    </div>
  );
}

export default BrowseCategoryCard