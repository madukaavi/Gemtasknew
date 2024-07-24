"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const images = [
    { src: '/Frame 23 (1).png', alt: 'Left Image' },
    { src: '/Frame 23.png', alt: 'Middle Image' },
    { src: '/Carsoul.png', alt: 'Right Image' }
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Start with the middle image

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getImageClass = (index: number) => {
    if (index === currentIndex) {
      return "blur-none opacity-100 transition-all duration-500 transform scale-110"; // Middle image
    } else {
      return "blur-sm opacity-90 transition-all duration-500 transform scale-90"; // Left and right images
    }
  };

  return (
    <div className="w-full h-[300px] flex cursor-pointer items-center justify-center mt-4 space-x-4">
      <div
        className="relative w-[200px] h-[200px] sm:block hidden top-8 right-20"
        onClick={scrollLeft}
      >
        <Image
          src={images[(currentIndex + 2) % images.length].src}
          alt={images[(currentIndex + 2) % images.length].alt}
          layout="fill"
          objectFit="cover"
          className={getImageClass((currentIndex + 2) % images.length)}
        />
      </div>
      <div
        className="relative w-[300px] lg:w-1/4 md:w-[250px] sm:w-[200px] h-full cursor-pointer"
        onClick={scrollRight}
      >
        <Image
          src={images[currentIndex].src}
          alt="Middle Image"
          layout="fill"
          objectFit="cover"
          className="blur-none opacity-100 transition-all duration-500 transform scale-110"
        />
      </div>
      <div
        className="relative w-[200px] h-[200px] sm:block hidden top-8 left-20"
        onClick={scrollRight}
      >
        <Image
          src={images[(currentIndex + 1) % images.length].src}
          alt={images[(currentIndex + 1) % images.length].alt}
          layout="fill"
          objectFit="cover"
          className={getImageClass((currentIndex + 1) % images.length)}
        />
      </div>
    </div>
  );
};

export default Slider;
