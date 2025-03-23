import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="h-screen bg-[url('../../../images/hero-img.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/50">
        <div className="content text-gray-200 relative flex flex-col justify-center h-full px-8 sm:px-44">
          <div className="text-5xl 2xl:text-[7rem] sm:text-7xl font-bold mb-2">
            LAFREZA GOLD BEACH RESORT AND HOTEL
          </div>
          <div className="text-xl sm:text-2xl flex items-center">
            <FaLocationDot size={25} className="mr-2 text-yellow-400" />
            Barrio Nagbalayon, Morong Bataan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
