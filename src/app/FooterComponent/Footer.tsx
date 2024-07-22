"use client"; 
import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl">Contact</h3>
            <p className="text-base md:text-lg"><strong className="font-medium">Address:</strong> 1234 Street Name, City, State, 12345</p>
            <p className="text-base md:text-lg"><strong className="font-medium">Phone:</strong> (123) 456-7890</p>
            <p className="text-base md:text-lg"><strong className="font-medium">Email:</strong> info@example.com</p>
            <p className="text-base md:text-lg"><strong className="font-medium">Hours:</strong> Mon-Fri 9am - 6pm</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl">Make Money With Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Mission & Vision</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Our Team</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Careers</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Press & Media</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Advertising</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl">Company</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Our Blog</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Plan & Pricing</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Knowledge Base</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Cookie Policy</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Office Center</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">News & Events</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl">My Account</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">FAQs</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Editor Help</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Community</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Live Chatting</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1"><FaChevronRight className="mr-2 text-lg md:text-xl" /><a href="#" className="hover:underline">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl">App & Payment</h3>
            <p className="text-base md:text-lg mb-4">Download our app and pay with your favorite payment method. We support various payment gateways to ensure a smooth transaction.</p>
            <div className="flex justify-center md:justify-start space-x-4 text-base md:text-lg">
              <FaCcVisa size={24} />
              <FaCcMastercard size={24} />
              <FaCcPaypal size={24} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
