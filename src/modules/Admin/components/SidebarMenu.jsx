import React from "react";
import { useState } from "react";

import {
  FaHouse,
  FaDoorClosed,
  FaCalendar,
  FaUser,
  FaUsers,
  FaReceipt,
  FaCreditCard,
} from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

const SidebarMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState("");

  // setActiveDropdown naguupdate ng activeDropdown state and keeps track if it is currently active or nah
  // so bali Clicking on an already-open dropdown closes it.
  const toggleDropdown = (dropdown) => {
    // so this basically says: is this dropdown already open? if not the drop down eyy
    setActiveDropdown((prev) => (prev === dropdown ? "" : dropdown));
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
              aria-expanded={activeDropdown === "rooms"}
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
              className={`${activeDropdown === "rooms" ? "block" : "hidden"}`}
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
              aria-expanded={activeDropdown === "reservations"}
              aria-controls="dropdown-reservations"
            >
              <div className="flex items-center">
                <FaCalendar className="mr-4" size={18} />
                <span>Reservations</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-reservations"
              className={`${
                activeDropdown === "reservations" ? "block" : "hidden"
              }`}
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
                  Completed
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
              aria-expanded={activeDropdown === "guests"}
              aria-controls="dropdown-guests"
            >
              <div className="flex items-center">
                <FaUser className="mr-4" size={18} />
                <span>Guests</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-guests"
              className={`${activeDropdown === "guests" ? "block" : "hidden"}`}
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
              onClick={() => toggleDropdown("staff")}
              aria-expanded={activeDropdown === "staff"}
              aria-controls="dropdown-staff"
            >
              <div className="flex items-center">
                <FaUsers className="mr-4" size={18} />
                <span>Staff</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-staff"
              className={`${activeDropdown === "staff" ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Staff
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Add New Staff
                </a>
              </li>
            </ul>
          </li>

          {/* REPORTS TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("reports")}
              aria-expanded={activeDropdown === "reports"}
              aria-controls="dropdown-reports"
            >
              <div className="flex items-center">
                <FaReceipt className="mr-4" size={18} />
                <span>Reports</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-reports"
              className={`${activeDropdown === "reports" ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Revenue Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Occupancy Report
                </a>
              </li>
            </ul>
          </li>

          {/* TRANSACTIONS TOGGLE */}
          <li>
            <button
              type="button"
              className="flex items-center justify-between w-full text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg transition duration-75"
              onClick={() => toggleDropdown("transactions")}
              aria-expanded={activeDropdown === "transactions"}
              aria-controls="dropdown-transactions"
            >
              <div className="flex items-center">
                <FaCreditCard className="mr-4" size={18} />
                <span>Transactions</span>
              </div>
              <RiArrowDropDownLine size={28} className="items-center" />
            </button>
            <ul
              id="dropdown-transactions"
              className={`${
                activeDropdown === "transactions" ? "block" : "hidden"
              }`}
            >
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  All Transactions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Pending Transactions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between w-full pl-9 text-gray-900 hover:bg-yellow-200 py-2 px-3 rounded-lg"
                >
                  Refund Requests
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
