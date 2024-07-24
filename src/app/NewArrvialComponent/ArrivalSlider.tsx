"use client"; 
import React, { useEffect, useRef, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const cards = [
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  },
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  },
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  },
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  },
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  },
  {
    imgSrc: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__',
    title: 'Item Name',
    description: 'Lorem ipsum dolor',
    price: 2600
  }
];

const ArrivalSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const newIndex = Math.min(currentIndex + 1, cards.length - 1);
      setCurrentIndex(newIndex);
      slider.scrollTo({
        left: newIndex * 300, // Adjust this value according to your card width
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const newIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(newIndex);
      slider.scrollTo({
        left: newIndex * 300, // Adjust this value according to your card width
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <div className="overflow-x-scroll scrollbar-hide scroll-smooth" ref={sliderRef}>
        <div className="flex space-x-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex-none w-[300px] h-[200px] rounded-md bg-white shadow-md relative group"
            >
              <img
                src={card.imgSrc}
                alt={card.title}
                className="w-full h-full object-cover rounded-t-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
                <p className="text-lg font-bold">${card.price}</p>
              </div>
              {showButtons && (
                <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-4 py-2 bg-pink-500 text-white rounded-md">Add to Cart</button>
                  <button className="px-4 py-2 bg-pink-500 text-white rounded-md">View Details</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {showButtons && (
        <>
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
            onClick={handlePrev}
          >
            <IoIosArrowBack size={24} />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full"
            onClick={handleNext}
          >
            <IoIosArrowForward size={24} />
          </button>
        </>
      )}
    </div>
  );
};

export default ArrivalSlider;
