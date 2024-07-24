"use client"; 

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

function AllProduct() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Category name1', 'Category name2', 'Category name3', 'Category name4', 'Category name5'];

  return (
    <>
      <div className="w-full relative bottom-3">
        <div className="w-full items-center justify-center flex mb-2">
          <h1 className='font-inter text-lg font-semibold text-custompinkpr'>New arrivals</h1>
        </div>
        <div className="w-full items-center justify-center flex mb-6">
          <h1 className='font-inter text-4xl font-bold'>All Products</h1>
        </div>
        
        {/* Desktop View */}
        <div className="w-full items-center justify-center lg:flex gap-[12px] hidden md:flex">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <button
                className={`px-4 font-semibold text-sm p-1 rounded-full ${
                  activeCategory === category
                    ? 'bg-custompinkpr text-white'
                    : 'text-custompinkpr'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
              {index < categories.length - 1 && <h1 className='h-5 border-[0.5px] border-custompinkpr'></h1>}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile View */}
        <div className="w-full items-center justify-center flex md:hidden">
          <button className='w-full border-[1px] border-pink-800 bg-none flex items-center justify-between px-4 py-2 rounded-full'>
            <span>Select Category</span>
            <FaChevronDown className="text-pink-800" />
          </button>
        </div>
      </div>
    </>
  );
}

export default AllProduct;
