import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AccCardMain = ({ accommodation }) => {
  return (
    <div className="rounded-lg w-full mt-5 sm:mt-0 h-48 sm:h-56 bg-gray-100 shadow-lg py-3 px-4 flex gap-4">
      <div className="image w-1/3">
        <img
          src="../../images/gazebo.jpg"
          alt=""
          className="object-cover sm:w-full w-36 h-full rounded-md"
        />
      </div>
      <div className="text flex flex-col justify-between sm:w-full sm:pr-2 ">
        <div>
          <h1 className="sm:text-lg 2xl:text-xl text-md font-bold mb-2">
            {accommodation.accomodation_name}
          </h1>
          <ul>
            <li className="text-gray-500 sm:text-base text-xs">
              {accommodation.accomodation_type}
            </li>
            <li className="text-gray-500 sm:text-base text-xs">
              Capacity: {accommodation.capacity}
            </li>
            <li className="text-gray-500 sm:text-base text-xs">
              Features: {accommodation.features}
            </li>
          </ul>
        </div>
        <div className="text-yellow-400  sm:text-base text-xs flex justify-between items-center">
          <div className="font-extrabold 2xl:text-xl">
            ₱ {accommodation.price}
          </div>
          <Link
            to={`/accommodations/${accommodation.id}`}
            className="hover:text-yellow-300 font-extrabold"
          >
            See more <FaArrowRight className="inline ml-1" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccCardMain;
