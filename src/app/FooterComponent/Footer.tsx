"use client";
import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaChevronRight } from 'react-icons/fa';
import { IoMdArrowDropright } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-inter text-lg mb-2 md:text-xl">Contact</h3>
            <p className="text-sm text-inter md:text-md"><strong className="text-inter font-bold">Address:</strong> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</p>
            <p className="text-sm text-inter md:text-md"><strong className="font-bold text-inter">Phone:</strong>  (+01) 123-456-789</p>
            <p className="text-sm text-inter md:text-md"><strong className="font-bold text-inter">Email:</strong> contact@ecom-market.com</p>
            <p className="text-sm text-inter md:text-md"><strong className="font-bold text-inter">Hours:</strong> 8:00 - 17:00, Mon - Sat</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:text-xl text-inter">Make Money With <br></br>Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Mission & Vision</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Our Team</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Careers</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Press & Media</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Advertising</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">Company</h3>
            <ul className="text-base md:text-lg relative top-4">
              <li className="flex items-center justify-center md:justify-start mb-1 ">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Our Blog</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Plan & Pricing</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Knowledge Base</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Cookie Policy</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Office Center</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">News & Events</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">My Account</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">FAQs</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Editor Help</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Community</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Live Chatting</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Contact Us</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">App & Payment</h3>
            <p className="text-base md:text-md mb-4 text-inter font-semibold text-inter">Download our Apps and get extra 15% Discount on your first Order…!</p>
            <p className="text-base md:text-md mb-4 text-inter font-semibold text-inter">Secured Payment Gateways </p>
            <div className="flex justify-center md:justify-start space-x-4 text-base md:text-lg">
              <a href="https://example.com/visa"><FaCcVisa /></a>
              <a href="https://example.com/mastercard"><FaCcMastercard /></a>
              <a href="https://example.com/paypal"><FaCcPaypal /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm md:text-base text-inter">© 2023 Ecom Market. All rights reserved. Designed by Mohammed Foysal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
