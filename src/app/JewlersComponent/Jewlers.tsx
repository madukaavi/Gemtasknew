"use client"; 
import { FaEye } from "react-icons/fa"
 
const Jewlers = () => {
  return (
    <>
  <div className="flex w-full flex-col items-center justify-center mt-3">
   <div className="container flex px-40 items-center justify-between mb-6">
   <h1 className="text-3xl  font-extrabold font-sans hidden lg:block">Jewels of the Earth</h1>
   <button className="bg-gradient-to-r hover:bg-pink-200 from-pink-500 to-pink-800 text-white items-center gap-2 px-4 py-2 rounded-full hidden lg:flex">
      Go To Categories
      <FaEye className="ml-2" />
    </button>

    </div>
    <div className="w-full flex justify-center items-center md:flex-row flex-col gap-6 ">
  <div className="flex">
  <div className="relative w-[316px] lg:w-[500px]  md:w-full  h-[310px] overflow-hidden rounded-md shadow-md z-20">
  <img
    src="/image2.jpg"
    alt="Card Image"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-0 left-3 p-2 bg-opacity-60 text-white">
    <h3 className="text-sm font-light">CATEGORIES</h3>
  </div>
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Timeless Gem For</h2>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Every Occasion</h2>
    <p className="text-xs sm:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur pariatur hic sapiente eos eius quas veritatis harum odio mollitia laboriosam ex tenetur eum deleniti quo reiciendis vero, ad corrupti!</p>
    <button className="mt-2 py-1 px-4 bg-gradient-to-r hover:bg-pink-200 from-pink-500 flex items-center to-pink-800 text-white rounded-full">
      Go To Categories <FaEye className="ml-2" />
    </button>
  </div>
    </div>
  </div>
  <div className="flex gap-5 relative bottom-3  lg:bottom-0">
    <div className="w-[140px] h-[320px] lg:w-[200px] lg:h-[300px] shadow-lg z-30 rounded-md bg-gradient-to-t from-gray-200 to-transparent ">
    <img
    src="/image.png"
    alt="Card Image"
    className="w-[200px] h-[150px]  object-cover"
  />
  <div className="flex w-full items-center justify-center"><h3 className="font-sans font-semibold text-pink-600">Catagory</h3></div>
  <div className="flex w-full items-center justify-center"><h3 className="font-sans font-semibold text-black mb-1">Item Name</h3></div>
  <div className="flex w-full items-center justify-center"><h3 className="font-sans text-[10px] font-semibold text-black mb-1 p-2">Lorem ipsum, dolor sit amet <br></br> consectetur adipisicing elit. </h3></div>
  <div className="flex justify-center mt-2 space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded-full cursor-pointer"></div>
                <div className="w-4 h-4 bg-pink-800 rounded-full cursor-pointer"></div>
                <div className="w-4 h-4 bg-green-800 rounded-full cursor-pointer"></div>
              </div>
    </div>
    <div className="w-[140px] h-[320px] lg:w-[200px] lg:h-[300px] shadow-lg z-30  rounded-md bg-gradient-to-t from-gray-200 to-transparent ">
    <img
    src="/image.png"
    alt="Card Image"
    className="w-[200px] h-[150px]  object-cover"
  />
  <div className="flex w-full items-center justify-center"><h3 className="font-sans font-semibold text-pink-600">Catagory</h3></div>
  <div className="flex w-full items-center justify-center"><h3 className="font-sans font-semibold text-black mb-1">Item Name</h3></div>
  <div className="flex w-full items-center justify-center"><h3 className="font-sans text-[10px] font-semibold text-black mb-1 p-2">Lorem ipsum, dolor sit amet <br></br> consectetur adipisicing elit. </h3></div>
  <div className="flex justify-center mt-2 space-x-2">
                <div className="w-4 h-4 bg-red-600 rounded-full cursor-pointer"></div>
                <div className="w-4 h-4 bg-pink-800 rounded-full cursor-pointer"></div>
                <div className="w-4 h-4 bg-green-800 rounded-full cursor-pointer"></div>
                </div>
    </div>
    </div>
    </div>
    <div className="relative w-full   h-[310px] overflow-hidden rounded-md shadow-md bottom-16 z-10 ">
  <img
    src="/image2.jpg"
    alt="Card Image"
    className="w-full h-full object-cover"
  />
  <div className="absolute top-0 left-3 p-2 bg-opacity-60 text-white">
    <h3 className="text-sm font-light">CATEGORIES</h3>
  </div>
  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Timeless Gem For</h2>
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Every Occasion</h2>
    <p className="text-xs sm:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint consectetur pariatur hic sapiente eos eius </p>
    <button className="mt-2 py-1 px-4 bg-gradient-to-r hover:bg-pink-200 from-pink-500 flex items-center to-pink-800 text-white rounded-full">
      Go To Categories <FaEye className="ml-2" />
    </button>
  </div>
  </div>
  </div>
    

  
 
    </>
  )
}

export default Jewlers