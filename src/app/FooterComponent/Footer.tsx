"use client";
import React from 'react';
import { FaTwitter, FaPinterestP } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa6';
import { IoMdArrowDropright } from 'react-icons/io';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <h3 className="font-bold text-lg mb-2 md:text-xl">Contact</h3>
            <p className="text-base md:text-lg relative top-4"><strong className="font-bold">Address:</strong><span className="text-[12px] font-semibold leading-3"> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</span></p>
            <p className="text-base md:text-lg relative top-5"><strong className="font-bold">Phone:</strong><span className="text-[12px] font-semibold"> (+01) 123-456-789</span></p>
            <p className="text-base md:text-lg relative top-5"><strong className="font-bold">Email:</strong><span className="text-[12px] font-semibold leading-3"> contact@ecom-market.com</span></p>
            <p className="text-base md:text-lg relative top-5"><strong className="font-bold">Hours:</strong>  <span className="text-[12px] font-semibold"> 8:00 - 17:00, Mon - Sat</span></p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <h3 className="font-bold text-lg mb-4 md:text-xl">Make Money With <br></br>Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Mission & Vision</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Our Team</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Careers</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Press & Media</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink  duration-300">Advertising</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <h3 className="font-bold text-lg mb-5 md:text-xl">Company</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center mb-1 ">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Our Blog</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Plan & Pricing</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Knowledge Base</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Cookie Policy</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">Office Center</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300">News & Events</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <h3 className="font-bold text-lg mb-5 md:text-xl">My Account</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 hover:text-customPink">FAQs</a>
              </li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 hover:text-customPink transition-transform duration-300">Editor Help</a></li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 hover:text-customPink">Community</a></li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 hover:text-customPink">Live Chatting</a></li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 hover:text-customPink">Contact Us</a></li>
              <li className="flex items-center mb-1">
                <IoMdArrowDropright className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 hover:text-customPink">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <ul className="flex space-x-4">
              <li><a href="#"><FaTwitter className="text-2xl hover:text-customPink transition duration-300"/></a></li>
              <li><a href="#"><TiSocialFacebook className="text-2xl hover:text-customPink transition duration-300"/></a></li>
              <li><a href="#"><FaPinterestP className="text-2xl hover:text-customPink transition duration-300"/></a></li>
              <li><a href="#"><FaGooglePlusG className="text-2xl hover:text-customPink transition duration-300"/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
