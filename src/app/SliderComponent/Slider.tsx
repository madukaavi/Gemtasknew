"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Slider: React.FC = () => {
  const images = [
    { src: '/Frame 23 (1).png', alt: 'Left Image' },
    { src: '/Frame 23.png', alt: 'Middle Image' },
    { src: '/Carsoul.png', alt: 'Right Image' }
  ];

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = (imageSrc: string) => {
    setHoveredImage(imageSrc);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setHoveredImage(images[(currentIndex + 1) % images.length].src);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, images]);

  return (
    <div className="w-full h-[300px] flex cursor-pointer items-center justify-center mt-4 space-x-4">
      <div
        className="relative w-[100px] h-[100px] sm:block hidden top-8"
        onMouseEnter={() => handleMouseEnter(images[0].src)}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          className="blur-sm opacity-30"
        />
      </div>
      <div className="relative w-[300px] lg:w-1/4 md:w-[250px] sm:w-[200px] h-full">
        <Image
          src={hoveredImage || images[1].src}
          alt="Middle Image"
          layout="fill"
          objectFit="cover"
          className="blur-none opacity-100"
        />
      </div>
      <div
        className="relative w-[100px] h-[100px] cursor-pointer sm:block hidden top-8"
        onMouseEnter={() => handleMouseEnter(images[2].src)}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[2].src}
          alt={images[2].alt}
          layout="fill"
          objectFit="cover"
          className="blur-sm opacity-30"
        />
      </div>
    </div>
  );
};

export default Slider;
