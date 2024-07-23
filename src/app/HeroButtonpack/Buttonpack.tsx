import React from 'react'

function Buttonpack() {
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col ">
      <h5 className='font-inter lg:font-semibold text-2xl text-blue-400 md:font-bold'>SRI LANKAN</h5>
      <h1 className='font-inter font-extrabold text-3xl text-black'>BLUE SAPPHIRE</h1>
      <div className="w-full flex items-center justify-center gap-4 mt-4 ">
      <button className="bg-custom-gradient text-white py-2 font-inter font-light px-4 mr-1  hover:bg-pink-600">
       EXPLORE MORE
      </button>
      <button className="border-2 font-inter  border-customPink font-semibold ml-1  text-customPink py-2 px-4">
       LEARN MORE
      </button>
      </div>
    </div>
    </>
  )
}

export default Buttonpack