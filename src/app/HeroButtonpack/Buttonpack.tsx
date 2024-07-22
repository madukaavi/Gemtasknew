import React from 'react'

function Buttonpack() {
  return (
    <>
    <div className="w-full flex justify-center items-center flex-col ">
      <h5 className='font-sans lg:font-semibold text-2xl text-blue-400 md:font-bold'>SRI LANKAN</h5>
      <h1 className='font-sans font-extrabold text-3xl text-black'>BLUE SAPPHIRE</h1>
      <div className="w-full flex items-center justify-center gap-4 mt-4">
      <button className="bg-gradient-to-r from-pink-800 to-pink-400 text-white py-2 font-sans font-light px-4  hover:bg-pink-600">
       EXPLORE MORE
      </button>
      <button className="border-[1px] font-sans border-pink-700 font-semibold hover:font-light text-pink-700 py-2 px-4  hover:bg-gradient-to-r from-pink-800 to-pink-400 hover:text-white">
       LEARN MORE
      </button>
      </div>
    </div>
    </>
  )
}

export default Buttonpack