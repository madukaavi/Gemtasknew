// components/Card.js
import Image from 'next/image';
import { LuEye } from "react-icons/lu";

const Cards = ({ imageSrc, heading1, heading2, buttonText }) => {
  return (
    <div className="relative w-[250px] h-96 rounded-lg overflow-hidden shadow-lg flex flex-col bg-white">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt="Card Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
        <h2 className="text-md font-bold text-black">{heading1}</h2>
        <h3 className="text-xl font-bold text-black">{heading2}</h3>
        <button className="w-full bg-gradient-to-r from-pink-800 to-pink-400 text-white rounded-full py-2 mt-4 flex items-center justify-center">
         {buttonText} <LuEye className="relative left-4" />
        </button>
      </div>
    </div>
  );
};

export default Cards;
