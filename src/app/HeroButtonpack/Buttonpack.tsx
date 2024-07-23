import React from 'react'

function Buttonpack() {
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col ">
      <h5 className='font-inter lg:font-semibold text-2xl text-blue-400 md:font-bold'>SRI LANKAN</h5>
      <h1 className='font-inter font-extrabold text-3xl text-black'>BLUE SAPPHIRE</h1>
      <div className="w-full flex items-center justify-center gap-4 mt-4">
      <button className="bg-custom-gradient text-white h-[50px] w-[250px] font-inter font-light px-4  hover:bg-pink-600">
       EXPLORE MORE
      </button>
      <button className="border-[1px] font-inter border-custom-gradient font-semibold  text-customPink h-[50px] w-[250px]">
       LEARN MORE
      </button>
      </div>
    </div>
    </>
  )
}

export default Buttonpack