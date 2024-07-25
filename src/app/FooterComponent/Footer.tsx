"use client";
import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaChevronRight, FaTwitter, FaPinterestP } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa6';
import { IoMdArrowDropright } from 'react-icons/io';
import { TiSocialFacebook } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-inter text-lg mb-2 md:text-xl">Contact</h3>
            <p className="text-base text-inter md:text-lg relative top-4"><strong className=" text-inter font-bold">Address:</strong><span className="text-[12px] font-semibold leading-3"> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Phone:</strong><span className="text-[12px] font-semibold"> (+01) 123-456-789</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Email:</strong><span className="text-[12px] font-semibold leading-3"> contact@ecom-market.com</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Hours:</strong>  <span className="text-[12px] font-semibold"> 8:00 - 17:00, Mon - Sat</span></p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:text-xl text-inter">Make Money With <br></br>Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Mission & Vision</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Our Team</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Careers</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Press & Media</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink  duration-300 text-inter">Advertising</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">Company</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center justify-center md:justify-start mb-1 ">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Our Blog</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Plan & Pricing</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Knowledge Base</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Cookie Policy</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">Office Center</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform hover:text-customPink duration-300 text-inter">News & Events</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">My Account</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 hover:text-customPink text-inter">FAQs</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 hover:text-customPink transition-transform duration-300 text-inter">Editor Help</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="e hover:translate-x-2 transition-transform duration-300 hover:text-customPink text-inter">Community</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 hover:text-customPink text-inter">Live Chatting</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 hover:text-customPink text-inter">Contact Us</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 hover:text-customPink text-inter">Support Center</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">We Using Safe Payments</h3>
            <div className="text-4xl md:text-5xl space-x-3">
              <FaCcVisa className="inline text-customPink"/>
              <FaCcMastercard className="inline text-customPink"/>
              <FaCcPaypal className="inline text-customPink"/>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">Social Media</h3>
            <div className="flex space-x-3 justify-center md:justify-start text-4xl md:text-5xl">
              <FaTwitter className="text-customPink cursor-pointer transition-transform duration-300 hover:scale-110" />
              <FaPinterestP className="text-customPink cursor-pointer transition-transform duration-300 hover:scale-110" />
              <FaGooglePlusG className="text-customPink cursor-pointer transition-transform duration-300 hover:scale-110" />
              <TiSocialFacebook className="text-customPink cursor-pointer transition-transform duration-300 hover:scale-110" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
