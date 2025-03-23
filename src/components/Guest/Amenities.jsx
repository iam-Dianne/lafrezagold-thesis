import React from "react";

const Amenities = () => {
  return (
    <div id="amenities" className="min-h-screen relative amenities-background">
      <div className="content text-gray-100 relative h-full w-full px-8 pt-24 8 sm:pt-28 flex flex-col items-center">
        <div className="w-full flex flex-col items-center mb-8">
          <div className="text-lg 2xl:text-[1.2rem]">AMENITIES</div>
          <div className="text-3xl font-bold text-center 2xl:text-[2rem]">
            CORE EXPERIENCES WE OFFER
          </div>
        </div>
        <div className="cards w-full h-full flex flex-col sm:flex-row sm:justify-center sm:flex-wrap gap-5 ">
          <div className="w-[320px] sm:w-[450px] 2xl:w-[750px] 2xl:h-52 h-32 sm:h-40 rounded-lg shadow-xl overflow-hidden">
            <img
              src="../../images/beach-volleyball.jpg"
              alt=""
              className="object-cover sm:w-full w-full h-full rounded-md"
            />
          </div>
          <div className="w-[320px] 2xl:w-[750px] 2xl:h-52 sm:w-[450px] h-32 sm:h-40 rounded-lg shadow-xl overflow-hidden">
            <img
              src="../../images/banana-boat.jpg"
              alt=""
              className="object-cover sm:w-full w-full h-full rounded-md"
            />
          </div>
          <div className="w-[320px] sm:w-[450px] h-32 sm:h-40 2xl:w-[750px] 2xl:h-52 rounded-lg shadow-xl overflow-hidden">
            <img
              src="../../images/boat-ride.jpg"
              alt=""
              className="object-cover sm:w-full w-full h-full rounded-md"
            />
          </div>
          <div className="w-[320px] sm:w-[450px] h-32 sm:h-40 2xl:w-[750px] 2xl:h-52 rounded-lg shadow-xl overflow-hidden">
            <img
              src="../../images/bonfire.jpg"
              alt=""
              className="object-cover sm:w-full w-full h-full rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
