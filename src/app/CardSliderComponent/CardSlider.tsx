"use client";

import { useRef, useState } from 'react';
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

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white flex justify-center items-center p-6 relative">
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
                <Card {...card} />
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
          className="absolute right-0 z-10 p-2 "
          onClick={scrollRight}
        >
          <IoIosArrowForward size={30} className=' relative right-12' />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
