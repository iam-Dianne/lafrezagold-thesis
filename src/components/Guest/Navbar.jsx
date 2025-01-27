import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black bg-opacity-50 text-gray-200 sm:flex sm:justify-between sm:px-36 py-4 px-6 absolute w-full z-10">
      <div className="py-4 px-6 flex justify-between items-center">
        <div className="font-bold">LAFREZA GOLD</div>
        <button onClick={ToggleMenu} className="sm:hidden">
          <FaX className={`${isOpen ? "block" : "hidden"}`} />
          <FaBars className={`${!isOpen ? "block" : "hidden"}`} />
        </button>
      </div>
      <div
        className={`px-4 ${
          isOpen ? "block" : "hidden"
        } sm:flex sm:items-center`}
      >
        <ul className="sm:flex mb-8 sm:mb-0 sm:mr-12">
          <li className="">
            <a
              href=""
              className="hover:text-yellow-400 rounded sm:bg-none block px-2 py-1 sm:mr-3"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-yellow-400 rounded block px-2 py-1 mt-1 sm:mt-0 sm:mr-3"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-yellow-400 rounded block px-2 py-1 mt-1 sm:mt-0 sm:mr-3"
            >
              Bookings
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-yellow-400 rounded block px-2 py-1 mt-1 sm:mt-0"
            >
              Amenities
            </a>
          </li>
        </ul>
        <Button
          buttonName={"Login"}
          buttonColor={"bg-yellow-400"}
          buttonHoverColor={"hover:bg-yellow-300"}
        />
      </div>
    </div>
  );
};

export default Navbar;
