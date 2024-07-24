// components/ArrivalSlider.tsx
import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ArrivalSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        onClick={scrollLeft}
      >
        <FaArrowLeft />
      </button>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto space-x-4 p-4 scroll-smooth"
      >
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="w-80 h-96 bg-white shadow-sm flex-shrink-0">
            <img
              src="/path-to-image.jpg"
              alt={`Card ${item} Image`}
              className="w-full h-36 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">Heading {item}</h2>
              <h3 className="text-lg font-medium">Subheading</h3>
              {item === 1 ? (
                <>
                  <div className="flex items-center space-x-2 mt-2">
                    <FaArrowRight className="text-gray-500" />
                    <FaEye className="text-gray-500" />
                    <FaHeart className="text-gray-500" />
                  </div>
                  <p className="mt-2 text-lg font-bold">$123.45</p>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded flex items-center">
                      <AiOutlineShoppingCart className="mr-2" />
                      Add to Cart
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-2">This is a descriptive paragraph for the card. It provides additional details about the card's content.</p>
                  <p className="mt-2 text-lg font-bold">$234.56</p>
                  <div className="flex space-x-2 mt-2">
                    <div className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer"></div>
                    <div className="w-6 h-6 bg-green-500 rounded-full cursor-pointer"></div>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded hidden group-hover:flex">
                      Learn More
                      <FaArrowRight className="ml-2 inline" />
                    </button>
                    <button className="bg-green-500 text-white py-2 px-4 rounded hidden group-hover:flex">
                      Add to Cart
                      <AiOutlineShoppingCart className="ml-2 inline" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
        onClick={scrollRight}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ArrivalSlider;
