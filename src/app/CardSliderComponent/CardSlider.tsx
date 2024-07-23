"use client";

import { useState, useRef, useEffect } from 'react';
import Card from '../../app/CardSliderComponent/Cards'; // Ajustez le chemin si nécessaire

const CardSlider = () => {
  const cards = [
    { imageSrc: '/cardimage.jpg', heading1: 'Catagory', heading2: 'Catagory Name', buttonText: 'Go To Catgories' },
    { imageSrc: '/image2.jpg', heading1: 'Catagory', heading2: 'Catagory Name', buttonText: 'Go To Catagories' },
    { imageSrc: '/image2.jpg', heading1: 'Catagory', heading2: 'Catagory Name', buttonText: 'Go To Catagories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Catagory Name', buttonText: 'Go To Catagories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Catagory Name', buttonText: 'Go To Catagories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Catagory Name', buttonText: 'Go To Catagories' },

  ];

  return (
    <div className="bg-white flex justify-center items-center p-4">
      {/* Mobile view with horizontal scroll */}
      <div className="sm:hidden flex overflow-x-auto space-x-6">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-auto">
            <Card {...card} />
          </div>
          
        ))}
      </div>

      {/* Tablet and Desktop view with grid layout */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[10px]">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
