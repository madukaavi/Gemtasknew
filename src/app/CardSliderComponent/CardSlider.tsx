"use client";

import { useRef, useState, useEffect } from 'react';
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

  useEffect(() => {
    if (scrollContainerRef.current) {
      const handleScroll = () => {
        const index = Math.round(scrollContainerRef.current!.scrollLeft / scrollContainerRef.current!.offsetWidth);
        setCurrentIndex(index);
      };

      scrollContainerRef.current.addEventListener('scroll', handleScroll);
      return () => {
        scrollContainerRef.current!.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleDotClick = (index: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: index * scrollContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white flex justify-center items-center p-4 relative">
      {/* Mobile view with dots for scroll */}
      <div className="sm:hidden flex flex-col items-center">
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 scrollbar-hide w-full snap-x snap-mandatory">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-auto snap-center">
              <Card {...card} />
            </div>
          ))}
        </div>
        <div className="flex space-x-2 mt-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Tablet and Desktop view with horizontal scroll and arrows */}
      <div className="hidden sm:flex items-center relative w-full px-28">
        <button className="absolute left-0 z-10 p-2" onClick={scrollLeft}>
          <IoIosArrowBack size={30} className='relative left-12' />
        </button>
        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 scrollbar-hide w-full">
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-auto">
              <Card {...card} />
            </div>
          ))}
        </div>
        <button className="absolute right-0 z-10 p-2" onClick={scrollRight}>
          <IoIosArrowForward size={30} className=' relative right-12' />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
