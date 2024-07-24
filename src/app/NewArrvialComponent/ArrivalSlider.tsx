"use client";

import { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye, FaHeart } from 'react-icons/fa'; // Import the icons
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const ArrivalSlider = () => {
  const cards = [
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
    { id: 2, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
    { id: 3, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
    { id: 4, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
    { id: 5, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
    { id: 6, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__' },
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

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full">
        <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2 px-2">
          <button onClick={scrollLeft} className="p-2 bg-gray-100 rounded-full shadow-md">
            <IoIosArrowBack className="w-6 h-6 text-gray-600" />
          </button>
          <button onClick={scrollRight} className="p-2 bg-gray-100 rounded-full shadow-md">
            <IoIosArrowForward className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="relative flex-shrink-0 m-2 w-320 h-480 rounded overflow-hidden snap-center"
            >
              <img
                src={card.imageUrl}
                alt={`Card ${card.id}`}
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button className="p-1 bg-white rounded-full shadow-md">
                  <FaEye className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1 bg-white rounded-full shadow-md">
                  <FaHeart className="w-4 h-4 text-red-600" />
                </button>
              </div>
              <div className="absolute bottom-2 left-2 space-x-2">
                <button className="p-2 bg-pink-500 text-white rounded-md">Shop</button>
                <button className="p-2 bg-green-500 text-white rounded-md">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-pink-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ArrivalSlider;
