"use client";

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaGem, FaUser } from 'react-icons/fa';
import { IoIosSearch, IoIosArrowDown } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="mt-2 lg:bg-white md:bg-white sm:bg-slate-500 bg-slate-100 lg:h-[60px] flex lg:shadow-md sm:shadow-none lg:mx-16 md:mx-16 sm:mx-0 lg:rounded-full md:rounded-full md:h-[40px] sm:rounded-none border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Hide logo in desktop and tablet view */}
          <div className="hidden lg:hidden">
            <Image src="/image 1.png" alt="Logo" width={100} height={100} />
          </div>

          {/* Logo for mobile and tablet */}
          <div className="lg:hidden flex items-center">
            <Image src="/image 1.png" alt="Logo" width={50} height={50} />
          </div>

          {/* Nav links for desktop */}
          <div className="hidden lg:flex space-x-6">
            <div className="relative right-2">
              <button
                onClick={toggleDropdown}
                className="flex items-center relative gap-2 p-2  font-inter font-semibold text-white bg-customPink rounded-full"
              >
                Shop <IoIosArrowDown className='ml-1 transition-transform duration-300 group-hover:rotate-180' />
              </button>
              
            </div>
            <a href="#" className=" font-inter font-semibold p-2 relative right-5  transition-colors duration-300">Home <span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
            <a href="#" className=" font-inter font-semibold p-2 relative right-8 flex items-center justify-center gap-1">Gem Education <IoIosArrowDown className='ml-1 transition-transform duration-300 group-hover:rotate-180'/><span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
            <a href="#" className=" font-inter font-semibold p-2 relative right-8 flex items-center justify-center gap-1">Gem History <IoIosArrowDown className='ml-1 transition-transform duration-300 group-hover:rotate-180'/><span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
            <a href="#" className=" font-inter p-2 relative right-8">About us <span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
            <a href="#" className=" font-inter  p-2 relative right-8">Contact Us<span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
          </div>

          {/* Right side icons for desktop */}
          <div className="hidden lg:flex space-x-4 items-center">
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-customPink rounded-full">
              <IoIosSearch className="text-lg cursor-pointer text-white" />
            </div>
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-customPink rounded-full">
              <FaUser className="text-lg cursor-pointer text-white" />
            </div>
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-customPink rounded-full">
              <GoPerson className="text-lg cursor-pointer text-white" />
            </div>
            <button className="flex items-center justify-center border-[1px] border-customPink gap-2 w-auto p-2 h-10 rounded-full bg-none text-[8px] font-bold font-inter text-black cursor-pointer">
              Cart: no Items <div className="box w-8 h-8 flex items-center justify-center bg-customPink rounded-full"><MdOutlineShoppingCart className='text-lg text-white' /></div>
            </button>
          </div>

          {/* Icons for mobile and tablet */}
          <div className="lg:hidden flex justify-end items-center space-x-4">
            <IoIosSearch className="text-md cursor-pointer text-customPink" />
            <GoPerson className="text-md cursor-pointer text-customPink" />
            <MdOutlineShoppingCart className="text-md cursor-pointer text-customPink" />
            {/* Hamburger menu for mobile and tablet */}
            <button onClick={toggleMenu}>
              <FaBars className="text-md text-black" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile and tablet off-canvas menu */}
      <div className={`fixed top-0 z-50 right-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
          &times;
        </button>
        <div className="p-4">
          <a href="#" className="block px-4 py-2   font-inter font-semibold">Contact Us<span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
          <a href="#" className="block px-4 py-2   font-inter font-semibold">About Us<span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
          <a href="#" className="block px-4 py-2   font-inter font-semibold">Gem History<span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
          <a href="#" className="block px-4 py-2   font-inter font-semibold">Gem Education<span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></a>
          <button
            onClick={toggleDropdown}
            
          >
            Shop <span className="ml-2 font-semibold font-sans"><IoIosArrowDown /><span className="absolute left-0 bottom-0 w-full h-[0.6] bg-customPink scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span></span>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
