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
            <p className="text-base text-inter md:text-lg relative top-4"><strong className=" text-inter font-bold">Address:</strong><span className="text-[20px] font-semibold leading-3"> 502 New Design Str, Melbourne, San Francisco, CA 94110, United States</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Phone:</strong><span className="text-[20px] font-semibold"> (+01) 123-456-789</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Email:</strong><span className="text-[20px] font-semibold leading-3"> contact@ecom-market.com</span></p>
            <p className="text-base text-inter md:text-lg relative top-5"><strong className="font-bold text-inter">Hours:</strong>  <span className="text-[20px] font-semibold"> 8:00 - 17:00, Mon - Sat</span></p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-4 md:text-xl text-inter">Make Money With <br></br>Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Mission & Vision</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Our Team</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Careers</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Press & Media</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Advertising</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">Company</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center justify-center md:justify-start mb-1 ">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Our Blog</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Plan & Pricing</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Knowledge Base</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="hover:translate-x-2 transition-transform duration-300 text-inter">Cookie Policy</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Office Center</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">News & Events</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">My Account</h3>
            <ul className="text-base md:text-lg relative top-5">
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">FAQs</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Editor Help</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className="e hover:translate-x-2 transition-transform duration-300 text-inter">Community</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Live Chatting</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Contact Us</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1">
                <IoMdArrowDropright  className="mr-2 text-lg md:text-xl" />
                <a href="#" className=" hover:translate-x-2 transition-transform duration-300 text-inter">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-5 md:text-xl text-inter">App & Payment</h3>
            <p className="text-base sm:text-md mb-4 text-inter font-semibold text-inter relative top-5 ">Download our Apps and get extra 15% Discount on your first Order…!</p>
            <p className="text-base sm:text-md mb-4 text-inter font-semibold text-inter relative top-5">Secured Payment Gateways </p>
            <div className="flex justify-center md:justify-start space-x-4 text-base md:text-lg relative top-5">
              <a href="https://example.com/visa"><img className='h-[18px] w-[30px]' src="https://firebasestorage.googleapis.com/v0/b/gemgem-b7c15.appspot.com/o/logos_visaelectron.png?alt=media&token=579734ef-89ab-4df4-92ce-d41b873023d7" alt="Visa" /></a>
              <a href="https://example.com/mastercard"><img className='h-[20px] w-[30px]'  src="https://firebasestorage.googleapis.com/v0/b/gemgem-b7c15.appspot.com/o/logos_mastercard.png?alt=media&token=ef95d40a-7e80-4367-8d56-91ff91f7bd1e" alt="Mastercard" /></a>
              <a href="https://example.com/paypal"><img className='h-[20px] w-[30px]' src="https://firebasestorage.googleapis.com/v0/b/gemgem-b7c15.appspot.com/o/logos_amex.png?alt=media&token=248c7682-01bf-4179-b8ce-c80054823b44" alt="Paypal" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
