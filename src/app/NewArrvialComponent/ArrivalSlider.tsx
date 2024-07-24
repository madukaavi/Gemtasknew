"use client";

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye, FaHeart, FaInfoCircle, FaShoppingCart } from 'react-icons/fa'; // Import the arrow icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ArrivalSlider = () => {
  const cards = [
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 1' },
    { id: 2, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 2' },
    { id: 3, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 3' },
    { id: 4, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 4' },
    { id: 5, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 5' },
    { id: 6, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'Card 6' },
  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320, // Adjust to card width
        behavior: 'smooth'
      });
    }
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320, // Adjust to card width
        behavior: 'smooth'
      });
    }
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  return (
    <div className="relative w-full">
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={scrollLeft}
          disabled={currentIndex === 0}
          className={`p-2 bg-gray-800 text-white rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <IoIosArrowBack size={20} />
        </button>
      </div>

      <div className="flex overflow-x-auto no-scrollbar space-x-4" ref={scrollContainerRef}>
        {cards.map((card) => (
          <div
            key={card.id}
            className="min-w-[320px] h-[480px] rounded-md bg-white shadow-md relative group"
          >
            <img src={card.imageUrl} alt={card.title} className="w-full h-full object-cover rounded-md" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100">
              <div className="flex space-x-4 mb-4">
                <button className="p-2 bg-gray-800 bg-opacity-80 rounded-full">
                  <FaEye />
                </button>
                <button className="p-2 bg-gray-800 bg-opacity-80 rounded-full">
                  <FaShoppingCart />
                </button>
                <button className="p-2 bg-gray-800 bg-opacity-80 rounded-full">
                  <FaHeart />
                </button>
              </div>
              <button className="p-2 bg-gray-800 bg-opacity-80 rounded-full">
                <FaInfoCircle />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 text-white group-hover:opacity-100 opacity-0 transition-all duration-300">
              <h2 className="text-lg font-semibold">Main Heading</h2>
              <h3 className="text-sm font-medium">Subheading</h3>
              <p className="text-sm">Description paragraph goes here. A brief description of the product or card.</p>
              <p className="text-lg font-bold mt-2">$99.99</p>
              <div className="flex space-x-2 mt-2">
                <button className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></button>
                <button className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></button>
                <button className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={scrollRight}
          disabled={currentIndex === cards.length - 1}
          className={`p-2 bg-gray-800 text-white rounded-full ${currentIndex === cards.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default ArrivalSlider;
