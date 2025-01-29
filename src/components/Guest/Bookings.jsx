import React from "react";
import AccCard from "./AccCard";
import { FaArrowRight } from "react-icons/fa6";

const Bookings = () => {
  return (
    <div id="accommodations" className="h-screen bookings-background relative">
      <div className="content text-gray-900 relative w-full h-screen px-8 pt-20 sm:px-28 sm:pt-28 flex flex-col items-center">
        <div className=" w-full flex flex-col items-center mb-5">
          <div className="text-lg">ACCOMMODATIONS</div>
          <div className="text-3xl font-bold">EXPLORE OUR OFFERS</div>
        </div>
        <div>
          <AccCard />
        </div>
        <div className="text-gray-100 mt-48 sm:mt-6">
          <a href="" className="flex items-center hover:text-yellow-400">
            View All <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
