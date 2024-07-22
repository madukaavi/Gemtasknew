import Image from 'next/image';
import MainHeader from '../HeaderComponent/MainHeader';
import Navbar from '../NavbarComponent/Navbar';
import Slider from '../SliderComponent/Slider';
import Buttonpack from '../HeroButtonpack/Buttonpack';



const HeroComponent = () => {
  return (
    <>
    {/*--Headr-Body-area-Color*/}
    <div className="w-full h-[650px] bg-gradient-to-r from-custom-blue via-custom-purple">
      <MainHeader/>
      <Navbar/>
      <Slider/>
      <Buttonpack/>
    </div>
    {/*--Headr-Body-area-Color*/}
    </>
  )
}

export default HeroComponent