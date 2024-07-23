"use client";

import { useState, useRef, useEffect } from 'react';
import Card from '../../app/CardSliderComponent/Cards'; // Adjust the path if necessary

const CardSlider = () => {
  const cards = [
    { imageSrc: '/cardimage.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },
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

      {/* Tablet and Desktop view with horizontal scroll */}
      <div className="hidden sm:flex overflow-x-auto space-x-6 hide-scrollbar">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-auto">
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
