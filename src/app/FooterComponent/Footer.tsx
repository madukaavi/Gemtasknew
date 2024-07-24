"use client";
import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaChevronRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-inter text-lg mb-2 md:text-xl">Contact</h3>
            <p className="text-base text-inter md:text-lg"><strong className="font-medium text-inter">Address:</strong> 1234 Street Name, City, State, 12345</p>
            <p className="text-base text-inter md:text-lg"><strong className="font-medium text-inter">Phone:</strong> (123) 456-7890</p>
            <p className="text-base text-inter md:text-lg"><strong className="font-medium text-inter">Email:</strong> info@example.com</p>
            <p className="text-base text-inter md:text-lg"><strong className="font-medium text-inter">Hours:</strong> Mon-Fri 9am - 6pm</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl text-inter">Make Money With Us</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Mission & Vision</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Our Team</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Careers</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Press & Media</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Advertising</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Testimonials</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl text-inter">Company</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Our Blog</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Plan & Pricing</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Knowledge Base</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Cookie Policy</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Office Center</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">News & Events</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl text-inter">My Account</h3>
            <ul className="text-base md:text-lg">
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">FAQs</a>
              </li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Editor Help</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Community</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Live Chatting</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Contact Us</a></li>
              <li className="flex items-center justify-center md:justify-start mb-1 group">
                <FaChevronRight className="mr-2 text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-2" />
                <a href="#" className="hover:underline text-inter">Support Center</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6 text-center md:text-left">
            <h3 className="font-bold text-lg mb-2 md:text-xl text-inter">App & Payment</h3>
            <p className="text-base md:text-lg mb-4 text-inter">Download our app and pay with your favorite payment method. We support various payment gateways to ensure a smooth transaction.</p>
            <div className="flex justify-center md:justify-start space-x-4 text-base md:text-lg">
              <a href="https://example.com/visa"><FaCcVisa size={24} /></a>
              <a href="https://example.com/mastercard"><FaCcMastercard size={24} /></a>
              <a href="https://example.com/paypal"><FaCcPaypal size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
