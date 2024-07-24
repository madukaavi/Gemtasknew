"use client";

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import the arrow icons

const ArrivalSlider = () => {
  const cards = [
    { id: 1, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 3' },
    { id: 4, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 4' },
    { id: 5, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 5' },
    { id: 6, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 6' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white flex justify-center items-center p-4 relative">
      {/* Mobile view with dots */}
      <div className="sm:hidden w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex transition-transform duration-300 ease-in-out touch-none"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <div className="w-[250px] h-96 rounded-md shadow-md overflow-hidden">
                  <img src={card.imageUrl} alt={card.title} className="w-full h-auto" />
                  <div className="p-4">
                    <h2 className="text-lg font-bold">{card.title}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full border-[1px] ${index === currentIndex ? 'bg-customPink' : 'bg-transparent'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Tablet and Desktop view with horizontal scroll and arrows */}
      <div className="hidden sm:flex items-center relative w-full px-28">
        <button
          className="absolute left-0 z-10 p-2  text-white rounded-full focus:outline-none"
          onClick={scrollLeft}
        >
          <FaChevronLeft size={30} />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide w-full"
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-auto">
              <div className="w-[250px] h-96 rounded-md shadow-md overflow-hidden">
                <img src={card.imageUrl} alt={card.title} className="w-full h-20" />
                <div className="p-4">
                  <h2 className="text-lg font-bold">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2  text-white rounded-full focus:outline-none"
          onClick={scrollRight}
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ArrivalSlider;
