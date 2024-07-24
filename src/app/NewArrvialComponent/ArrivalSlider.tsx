// CardComponent.tsx
"use client";

import React from 'react';
import { FaEye, FaHeart, FaArrowRight } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ArrivalSlider = () => {
  return (
    <div className="flex gap-4">
      {/* Card 1 */}
      <div className="w-80 h-96 bg-white shadow-sm">
        <img
          src="/path-to-image.jpg"
          alt="Card Image"
          className="w-full h-36 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">Heading 1</h2>
          <h3 className="text-lg font-medium">Heading 2</h3>
          <div className="flex items-center space-x-2 mt-2">
            <FaArrowRight className="text-gray-500" />
            <FaEye className="text-gray-500" />
            <FaHeart className="text-gray-500" />
          </div>
          <p className="mt-2 text-lg font-bold">$123.45</p> {/* Detailed price */}
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
        </div>
      </div>

      {/* Card 2 & 3 */}
      {[2, 3].map(card => (
        <div key={card} className="w-80 h-96 bg-white shadow-sm relative group">
          <img
            src="/path-to-image.jpg"
            alt={`Card ${card} Image`}
            className="w-full h-36 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Heading 1</h2>
            <h3 className="text-lg font-medium">Heading 2</h3>
            <p className="mt-2">This is a descriptive paragraph for the card. It provides additional details about the card's content.</p>
            <p className="mt-2 text-lg font-bold">$234.56</p> {/* Detailed price */}
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArrivalSlider;
