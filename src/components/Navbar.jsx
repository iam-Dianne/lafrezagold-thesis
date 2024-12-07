import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="flex justify-between text-gray-900">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="profile-icon flex items-center mr-3">
        <button className="flex">
          <FaUserCircle size={28} className="mr-1" />
          <RiArrowDropDownLine size={28} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
