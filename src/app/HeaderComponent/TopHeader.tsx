import { FiChevronDown, FiPhone } from 'react-icons/fi';
import { CiLocationArrow1 } from "react-icons/ci";

const TopHeader = () => {
  const schedule: string[] = [
    "7 days a week from 9.00 am to 7.00 pm"
  ];
  

  return (
    <header className="bg-transparent text-black py-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side content */}
        <div className="flex items-center">
          <div className="mr-4">
            {/* Arrow icon */}
            <CiLocationArrow1  className='hidden md:block sm:block relative left-5'/>
          </div>
          <div className="hidden md:block sm:block">
            {/* News text */}
            <span className="text-sm font-sans font-bold relative left-3">{schedule[0]}</span>
          </div>
        </div>

        {/* Right side content */}
        <div className="ml-auto flex items-center gap-1 md:gap-2">
          {/* Currency button with dropdown */}
          <div className="relative hidden md:block sm:block ml-2 right-5">
            <button className="border-black font-inter text-sm border font-semibold rounded-full py-1 px-3 bg-transparent  flex items-center  ">
              USD <FiChevronDown className="ml-1" />
            </button>
          </div>
           
          {/* Call icon */}
            <FiPhone className="w-4 h-4 ml-8 text-black  hidden relative right-7 sm:block md:block " />
            <h4 className='font-sans text-sm font-semibold md:mr-2 md:block sm:block hidden relative right-7'>Contact</h4>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
