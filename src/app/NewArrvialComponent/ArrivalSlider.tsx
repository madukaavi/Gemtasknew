"use client"; 

import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import React Icons for arrows

const ArrivalSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    }
  };

  const cards = [
    { id: 1, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 1' },
    { id: 2, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 2' },
    { id: 3, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 3' },
    { id: 4, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 4' },
    { id: 5, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 5' },
    { id: 6, imageUrl: 'https://via.placeholder.com/300x150', title: 'Card 6' },
  ];

  return (
    <div className="relative flex items-center">
      <button 
        onClick={scrollLeft} 
        className="absolute left-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-10"
      >
        <FaChevronLeft />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-12 pb-4"
      >
        {cards.map(card => (
          <div key={card.id} className="w-[250px] h-96 rounded-md shadow-md overflow-hidden flex-shrink-0 px-12">
            <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-bold">{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        onClick={scrollRight} 
        className="absolute right-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none z-10"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ArrivalSlider;
