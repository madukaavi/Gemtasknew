import Image from 'next/image';
const Logo = () => {

  return (
    <>
    {/*-----logo--Area*/}
    
    <div className="hidden sm:block md:block lg:block xl:block mt-2">
    <div className="flex justify-center">
    <Image 
        src="/image 1.png" 
        alt="Description of the image" 
        width={100} 
        height={100} 
      />
      </div>
      </div>
      {/*-logo--Area*/}
    </>
  )
}

export default Logo