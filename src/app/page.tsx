import Image from "next/image";
import HeroComponent from "./HeroComponent/HeroComponent";
import CardSlider from "./CardSliderComponent/CardSlider";
import NewArrvial from "./NewArrvialComponent/NewArrvial"
import Jewlers from "./JewlersComponent/Jewlers";
import ArrivalSlider from "./NewArrvialComponent/ArrivalSlider";
import Services from "./ServicesComponent/Services";
import BannerBox from "./BnnerBoxComponent/Bannerbox";
import Footer from "./FooterComponent/Footer";
import AllProduct from "./AllProductComponent/AllProduct";

export default function Home() {
  return (
    <>
    <HeroComponent/>
    <CardSlider/>
    <NewArrvial/>
    <Jewlers/>
    <AllProduct/>
    <ArrivalSlider/>
    <ArrivalSlider/>
    <ArrivalSlider/>
    <Services/>
    <BannerBox/>
    <Footer/>
    </>
  );
}
