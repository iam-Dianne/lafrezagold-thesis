import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState();

  const toggleDropdown = (dropdown) => {
    // so this basically says: is this dropdown already open? if not the drop down eyy
    setActiveDropdown((prev) => !prev);
  };

  return (
    <div className="flex justify-between text-gray-900">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="relatie profile-icon flex flex-col items-center mr-3">
        <button className="flex mb-4" onClick={toggleDropdown}>
          <FaUserCircle size={28} className="mr-1" />
          <RiArrowDropDownLine size={28} />
        </button>

        {activeDropdown && (
          <ul className="absolute top-20 right-8 w-40 bg-gray-900 rounded-lg text-gray-100 px-3 py-4">
            <li>
              <a
                href="#"
                className="flex hover:bg-gray-800 w-full py-2 px-3 rounded-lg"
              >
                Profile
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex hover:bg-gray-800 w-full py-2 px-3 rounded-lg"
              >
                Log out
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
