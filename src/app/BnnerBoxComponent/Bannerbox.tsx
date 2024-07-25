"use client"; 
import { FaSearch } from 'react-icons/fa';

const BannerBox = () => {
  return (
    <section className="relative w-full h-[300px] overflow-hidden">
      <img
        src="https://s3-alpha-sig.figma.com/img/5fb2/4939/53c888e81a3e655422b4837f4cae8a3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BLy~QMol7SXx9uwRI-hydrLKCT0TNjUjRTDqc-oB84ikfevS978-bbVIsFPJ8OL3ztS4iukJEGIYzw6d4t2Er1A1sDRdxezhaxKmr9YomRlqqGKNejUb9hFl6bl~Mlz7gNDtdJ6NAf2Oor~zINmkPt3av4QqPW1vfvwxGDX3zL4qfpOJ5~L7LjMX8uP~qX5tBBkmZs-MjR~nUdxXaxtpHXdG5x8YAo~UAfO7B53x9QMWMKXv7eqisVsnlf16dhoxtP0zTFyTV02g2WRYD~yH5LgOOS7dsIWWd9HxBnFq5GH2-nyPBOX7jA5Li0GMNLRCuB3kFwxgJll1kZp9OmEbJQ__"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 bg-black bg-opacity-50">
        <h2 className="text-5xl font-bold mb-4 font inter">Subscribe & Get 10% Discount</h2>
        <p className="text-4x1  font-semibold font inter relative right-[80px]">Get E-mail updates about our latest shop</p>
        <p className="text-4x1  font-semibold font inter relative right-[90px]">and special offers.</p>
        <div className="flex flex-col items-center w-full max-w-md">
          <div className="flex w-full relative">
            <input
              type="text"
              placeholder=""
              className=" w-[300px]  py-2 rounded-full border-none outline-none relative bottom-12 left-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBox;
