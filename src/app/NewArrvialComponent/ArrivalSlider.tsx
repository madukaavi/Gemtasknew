"use client";

import { useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaHeart, FaEye, FaCheck } from 'react-icons/fa';

const ArrivalSlider = () => {
  const cards = [
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },
    { id: 1, imageUrl: 'https://s3-alpha-sig.figma.com/img/eb28/ed14/4a340896144a3bdb49af45b3ca0e7ee2?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IPp4myi0L7ipkgNonD4cpeynFlsayywR4XlOMcZzUDSeIobWIjBwcTIyaHCbZE-xA8y5z4P6lngElYjgGpI44YsVyDDAmzrsu6txYppIm7sOebtHIEcIyj275wPxECIlFI65SePpVWwiLcRQFBqK9DiqOD00ek6JxOiii93oph937nf4nILoaUGzUIPRtrzAUOZQGbwunvGtn~LWjNRPHMl5icJx0sC-w8m0Ogy2XpMu58kHHaJHwCw5fadBWQ-T3md2yjKej0QW33GE-QYAalgN~D4RmF~FvqLazQKkDvR2AhezNWrV9tMBm7Pv3Yj7khFSycH7rwWJyUbjGXFRLA__', title: 'item name', title2: 'item name' },

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
    <div className="bg-white flex justify-center items-center p-4 relative ">
      {/* Mobile view with dots */}
      <div className="sm:hidden w-full flex flex-col items-center">
        <div className="w-full overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex transition-transform duration-300 ease-in-out touch-none"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="flex-shrink-0 w-full relative group">
                <div className="w-[25px] h-96 rounded-md shadow-md bg-bgcolorcard overflow-hidden">
                  <img src={card.imageUrl} alt={card.title} className="w-[100px] h-[100px]" />
                  <div className="p-4">
                    <h2 className="text-md font-semibold text-center text-customPink">{card.title}</h2>
                    <h2 className="text-md font-semibold text-center">{card.title2}</h2>
                    {/* Hidden paragraph */}
                    <p className="text-xs font-medium font-inter text-center top-11 relative group-hover:hidden">Description paragraph goes here.Description paragraph .</p>
                    {/* Icons shown on hover */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-around items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full">
                        <FaHeart />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                        <FaEye />
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full">
                        <FaCheck />
                      </button>
                    </div>
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
      <div className="hidden sm:flex items-center relative w-full px-40 ">
        <button
          className="absolute left-0 z-10 p-2 text-black rounded-full focus:outline-none"
          onClick={scrollLeft}
        >
          <IoIosArrowBack size={30} className='relative left-10 ' />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide w-full"
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-auto relative group">
              <div className="w-[227px] h-[338px] shadow-md bg-bgcolorcard overflow-hidden">
                <img src={card.imageUrl} alt={card.title} className="w-[150px] h-[150px] relative bottom-4 left-10" />
                <div className="p-4 relative bottom-9">
                  <h4 className="text-[14px] font-semibold text-center text-customPink font-inter relative top-12">{card.title}</h4>
                  <h4 className="text-[14px] font-semibold text-center font-inter relative top-2 ">{card.title2}</h4>
                  <p className="text-xs font-medium font-inter text-center top-11 relative group-hover:hidden">Description paragraph goes here.Description paragraph .</p>
                  <p className="text-md font-bold mt-2 font-inter group-hover:top-14 text-center relative top-12">Rs2000.00</p>
                  <div className="flex space-x-2 mt-2 justify-center items-center relative top-12 group-hover:top-14">
                    <button className="w-5 h-5 bg-red-500 border-2 border-white"></button>
                    <button className="w-5 h-5 bg-customPink border-2 border-white"></button>
                    <button className="w-5 h-5 bg-green-500 border-2 border-white"></button>
                  </div>
                  <div className=" flex opacity-0 relative  group-hover:opacity-100 top-16 ">
                    <button className='bg-gradient-to-r from-customPink to-custompinknew   right-2     text-white  py-2 px-2 text-[11px] font-semibold max-w-full text-inter'>LEARN MORE</button>
                    <button className='bg-gradient-to-r from-customPink to-custompinknew relative left-2  text-white  py-2 px-2 text-[11px] font-semibold text-inter'>ADD TO CART</button>
                    </div>
                  {/* Icons shown on hover */}
                  <div className="absolute bottom-1 left-0 right-0 flex justify-center   items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-12">
                    <button className="w-8 h-8 flex items-center justify-center border-[1px] border-customPink text-customPink rounded-full">
                      <FaCheck/>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border-[1px] border-customPink text-customPink rounded-full">
                      <FaEye />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center border-[1px] border-customPink text-customPink rounded-full">
                      <FaHeart/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-2 text-black rounded-full focus:outline-none"
          onClick={scrollRight}
        >
          <IoIosArrowForward size={30} className='relative right-10 ' />
        </button>
      </div>
    </div>
  );
};

export default ArrivalSlider;
