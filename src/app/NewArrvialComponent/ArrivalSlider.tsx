"use client";
import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const cards: any[] = [
  // ... (your card data remains unchanged)
];

const ArrivalSlider: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainer.current) {
        const containerWidth = scrollContainer.current.clientWidth;
        const cardWidth = 250; // Updated card width
        const newIndex = (currentIndex + 1) % cards.length;
        scrollContainer.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
        setCurrentIndex(newIndex);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.clientWidth;
      const cardWidth = 250; // Updated card width
      const newIndex = Math.max(currentIndex - 1, 0);
      scrollContainer.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.clientWidth;
      const cardWidth = 250; // Updated card width
      const newIndex = Math.min(currentIndex + 1, cards.length - 1);
      scrollContainer.current.scrollTo({ left: newIndex * cardWidth, behavior: 'smooth' });
      setCurrentIndex(newIndex);
    }
  };

  const handleDotClick = (index: number) => {
    if (scrollContainer.current) {
      const containerWidth = scrollContainer.current.clientWidth;
      const cardWidth = 250; // Updated card width
      scrollContainer.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setCurrentIndex(index);
    }
  };

  return (
    <div className="relative">
      {/* Navigation buttons desktop view */}
      <div className="hidden md:flex items-center justify-between absolute inset-y-0 left-14 z-10">
        <button onClick={scrollLeft} className="p-2 text-pink-800 hidden lg:block">
          <IoIosArrowBack size={30} />
        </button>
      </div>
      <div className="flex overflow-x-scroll lg:overflow-x-hidden md:items-center md:justify-center space-x-4 px-4 py-8 snap-x snap-mandatory scrollbar-hidden" ref={scrollContainer}>
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] h-[96px] rounded-md overflow-hidden shadow-lg snap-center relative group">
            <img className="w-full h-full object-cover transition duration-500 group-hover:blur-sm" src={card.imgSrc} alt={card.title} />
            <div className="p-2">
              <div className="font-bold font-inter text-sm mb-1 text-center">{card.title}</div>
              <p className="text-gray-700 text-xs font-inter font-light text-center">{card.description}</p>
              <div className="flex justify-center mt-2 space-x-2">
                <div className="w-4 h-4 bg-red-600 cursor-pointer"></div>
                <div className="w-4 h-4 bg-pink-800 cursor-pointer"></div>
                <div className="w-4 h-4 bg-green-800 cursor-pointer"></div>
              </div>
              <p className="text-center mt-1 font-inter font-bold">Price: ${card.price}</p>
            </div>
            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="flex flex-col space-y-2">
                <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-800 hover:text-white py-2 px-4 rounded font-sans font-semibold transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300">BUY NOW</button>
                <button className="bg-gradient-to-r hover:bg-pink-200 from-pink-500 to-pink-800 text-white py-2 px-4 rounded font-sans font-semibold transform translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300">ADD TO CART</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Navigation buttons desktop view */}
      <div className="hidden md:flex items-center justify-between absolute inset-y-0 right-24 z-10">
        <button onClick={scrollRight} className="p-2 hidden lg:block text-pink-800">
          <IoIosArrowForward className='relative left-10' width={30} />
        </button>
      </div>
      {/* Dots for mobile view */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-4 md:hidden">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-pink-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArrivalSlider;
