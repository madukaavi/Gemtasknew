"use client"; 
import React from 'react';
import { FaBullhorn, FaTools, FaRocket, FaSort } from 'react-icons/fa';

const services = [
  { icon: <FaBullhorn size={32} />, text: 'Free Delivery' },
  { icon: <FaSort size={32} />, text: 'Support 24/7' },
  { icon: <FaTools size={32} />, text: 'Gift Voucher' },
  { icon: <FaRocket size={32} />, text: 'Return & Refund' },
  { icon: <FaSort size={32} />, text: 'Secure Payment' }
];

const Services = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border-2 border-pink-600 rounded-lg p-6 text-center shadow-lg max-w-xs flex flex-col items-center">
              <div className="mb-4 flex justify-center items-center text-pink-600">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-pink-600">{service.text}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
