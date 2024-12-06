import React from "react";
import { useState } from "react";

import { FaHouse } from "react-icons/fa6";
import { FaDoorClosed } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const SidebarMenu = () => {
  // dropdown logic. set state isRoomsDropdownOpen = default value is FALSE
  // function to call natin is setRoomsDropdownOpen to toggle the state
  const [isRoomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [isResDropdownOpen, setResDropdownOpen] = useState(false);
  const [isGuestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [isStaffDropdownOpen, setStaffDropdownOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "rooms") {
      setRoomsDropdownOpen((prev) => !prev);
    } else if (dropdown === "reservations") {
      setResDropdownOpen((prev) => !prev);
    } else if (dropdown === "guests") {
      setGuestsDropdownOpen((prev) => !prev);
    } else if (dropdown === "staff") {
      setStaffDropdownOpen((prev) => !prev);
    }
  };

  return (
    <aside id="default-sidebar" className="fixed w-64 h-screen">
      <div className="h-full px-4 py-5 bg-yellow-400 overflow-y-auto">
        <div className="logo mb-6 flex items-center justify-center">
          <span className="text-xl font-semibold text-gray-900 ">
            LA FREZA GOLD
          </span>
        </div>
        <ul className="">
          <li>
            <a
              link="#"
              className="flex items-center text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
            >
              <FaHouse className="mr-4 items-center" size={18} />
              <span>Dashboard</span>
            </a>
          </li>

          {/* ROOMS TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("rooms")}
              aria-expanded={isRoomsDropdownOpen}
              aria-controls="dropdown-rooms"
            >
              <div className="flex items-center">
                <FaDoorClosed className="mr-4" size={18} />
                <span>Rooms</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-rooms"
              className={`${isRoomsDropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Rooms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Add New Room
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Availability
                </a>
              </li>
            </ul>
          </li>

          {/* RESERVATIONS TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("reservations")}
              aria-expanded={isResDropdownOpen}
              aria-controls="dropdown-rooms"
            >
              <div className="flex items-center">
                <FaCalendar className="mr-4" size={18} />
                <span>Reservations</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-rooms"
              className={`${isResDropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Reservations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Pending
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Approved
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Calendar
                </a>
              </li>
            </ul>
          </li>

          {/* GUESTS TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("guests")}
              aria-expanded={isGuestsDropdownOpen}
              aria-controls="dropdown-rooms"
            >
              <div className="flex items-center">
                <FaUser className="mr-4" size={18} />
                <span>Guests</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-rooms"
              className={`${isGuestsDropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Guests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Guest History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Guest Feedback
                </a>
              </li>
            </ul>
          </li>

          {/* STAFF TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("guests")}
              aria-expanded={isGuestsDropdownOpen}
              aria-controls="dropdown-rooms"
            >
              <div className="flex items-center">
                <FaUser className="mr-4" size={18} />
                <span>Staff</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-rooms"
              className={`${isGuestsDropdownOpen ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Guests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Guest History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Guest Feedback
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarMenu;
