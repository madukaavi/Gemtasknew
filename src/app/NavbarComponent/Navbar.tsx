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
                className="flex items-center relative gap-2 p-2 hover:text-pink-500 font-sans font-semibold text-white bg-pink-700 rounded-full"
              >
                Shop <IoIosArrowDown />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 p-2 w-48 bg-white shadow-lg border rounded-md z-50">
                  <a href="#" className="px-4 py-2 text-gray-700 hover:bg-pink-500 hover:rounded-full hover:text-white font-sans font-medium items-center justify-center flex gap-2 hover:shadow-sm"><FaGem />Gem Name</a>
                  <a href="#" className="px-4 py-2 text-gray-700 hover:bg-pink-500 hover:rounded-full hover:text-white font-sans font-medium items-center justify-center flex gap-2 hover:shadow-sm"><FaGem />Gem Name</a>
                  <a href="#" className="px-4 py-2 text-gray-700 hover:bg-pink-500 hover:rounded-full hover:text-white font-sans font-medium items-center justify-center flex gap-2 hover:shadow-sm"><FaGem />Gem Name</a>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-pink-500 font-sans font-semibold p-2 relative right-5">Home</a>
            <a href="#" className="hover:text-pink-500 font-sans font-semibold p-2 relative right-8 flex items-center justify-center gap-1">Gem Education <IoIosArrowDown /></a>
            <a href="#" className="hover:text-pink-500 font-sans font-semibold p-2 relative right-8 flex items-center justify-center gap-1">Gem History <IoIosArrowDown /></a>
            <a href="#" className="hover:text-pink-500 font-semibold font-sans p-2 relative right-8">About us</a>
            <a href="#" className="hover:text-pink-500 font-semibold font-sans p-2 relative right-8">Contact Us</a>
          </div>

          {/* Right side icons for desktop */}
          <div className="hidden lg:flex space-x-4 items-center">
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-pink-700 rounded-full">
              <IoIosSearch className="text-lg cursor-pointer text-white" />
            </div>
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-pink-700 rounded-full">
              <FaUser className="text-lg cursor-pointer text-white" />
            </div>
            <div className="box flex justify-center items-center w-[30px] h-[30px] bg-pink-700 rounded-full">
              <GoPerson className="text-lg cursor-pointer text-white" />
            </div>
            <button className="flex items-center justify-center border-[1px] border-pink-700 gap-2 w-auto p-2 h-10 rounded-full bg-none text-[8px] font-bold font-sans text-black cursor-pointer">
              Cart: no Items <div className="box w-8 h-8 flex items-center justify-center bg-pink-700 rounded-full"><MdOutlineShoppingCart className='text-lg text-white' /></div>
            </button>
          </div>

          {/* Icons for mobile and tablet */}
          <div className="lg:hidden flex justify-end items-center space-x-4">
            <IoIosSearch className="text-md cursor-pointer text-pink-700" />
            <GoPerson className="text-md cursor-pointer text-pink-700" />
            <MdOutlineShoppingCart className="text-md cursor-pointer text-pink-700" />
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
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold">Contact Us</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold">About Us</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold">Gem History</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold">Gem Education</a>
          <button
            onClick={toggleDropdown}
            className="block px-4 py-2 font-semibold text-left w-full hover:bg-gray-100 hover:rounded-full"
          >
            Shop <span className="ml-2 font-semibold font-sans"><IoIosArrowDown /></span>
          </button>
          {dropdownOpen && (
            <div className="bg-white shadow-lg border-gray-200 mt-2 p-2">
              <a href="#" className="px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold flex justify-center items-center gap-2"><FaGem />Gem Name</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold flex justify-center items-center gap-2"><FaGem />Gem Name</a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100 hover:rounded-full font-sans font-semibold flex justify-center items-center gap-2"><FaGem />Gem Name</a>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
