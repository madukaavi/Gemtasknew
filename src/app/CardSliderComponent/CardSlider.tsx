"use client";

import { useRef } from 'react';
import Card from '../../app/CardSliderComponent/Cards'; // Adjust the path if necessary
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; // Import the arrow icons

const CardSlider = () => {
  const cards = [
    { imageSrc: '/cardimage.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Category', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },
    { imageSrc: '/image2.jpg', heading1: 'Heading 4', heading2: 'Category Name', buttonText: 'Go To Categories' },

  ];

  // Specify the type as HTMLDivElement | null
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white flex justify-center items-center p-4 relative">
      {/* Mobile view with horizontal scroll */}
      <div className="sm:hidden flex overflow-x-auto space-x-6">
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0 w-auto">
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Tablet and Desktop view with horizontal scroll and arrows */}
      <div className="hidden sm:flex items-center relative w-full px-28">
        <button
          className="absolute left-0 z-10 p-2 "
          onClick={scrollLeft}
        >
          <IoIosArrowBack size={30} className='relative left-12' />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide w-full"
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-auto">
              <Card {...card} />
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 bg-gray-200 rounded-full"
          onClick={scrollRight}
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
