import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Accommodations = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full h-screen pt-24 guest-form-bg overflow-x-hidden sm:px-44 px-8">
      <div className="banner text-gray-100 flex flex-col items-center mb-4">
        <h1 className="text-3xl font-bold mb-1">ACCOMMODATIONS</h1>
      </div>
      <div className="content w-full h-full mx-90 sm:flex sm:justify-between sm:gap-3 ">
        {isFilterOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={() => setIsFilterOpen(false)}
          ></div>
        )}
        <section className="filter sm:w-[280px]">
          <div className="button flex justify-end">
            <button
              className="sm:hidden rounded bg-yellow-400 px-2 py-1 hover:bg-yellow-300 "
              onClick={() => setIsFilterOpen(true)}
            >
              {" "}
              <FaFilter className="inline mr-2" /> Filter
            </button>
          </div>
          <div
            className={`fixed top-0 right-0 h-full sm:h-[450px] w-80 bg-gray-100 shadow-lg py-3 px-4  transition-transform transform z-50 sm:rounded-lg ${
              isFilterOpen ? "translate-x-0" : "translate-x-full"
            } sm:static sm:w-[280px] sm:translate-x-0`}
          >
            <button
              className="sm:hidden absolute top-4 right-4"
              onClick={() => setIsFilterOpen(false)}
            >
              <FaX />
            </button>
            <h2 className="font-bold text-lg mb-3">FILTERS</h2>

            <div className="mb-5">
              <h3 className="font-semibold mb-1">Type</h3>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  id="all"
                  name="all"
                  value="all"
                  className="mr-2"
                />{" "}
                All
              </label>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  id="room"
                  name="room"
                  value="room"
                  className="mr-2"
                />{" "}
                Room
              </label>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  id="cottage"
                  name="cottage"
                  value="cottage"
                  className="mr-2"
                />{" "}
                Cottage
              </label>
            </div>
            <div className="mb-5">
              <h3 className="font-semibold mb-1">Capacity</h3>
              <input
                type="range"
                name="capacity"
                min="4"
                max="36"
                step="1"
                className="w-full"
              />{" "}
              <div className="flex justify-between text-sm">
                <span>4</span>
                <span>36</span>
              </div>
              <div className="mt-1">Capacity: 4 people</div>
            </div>
            <div className="mb-3">
              <h3 className="font-semibold mb-1">Price Range</h3>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  name="lowPrice"
                  value="lowPrice"
                  className="mr-2"
                />{" "}
                ₱4,000 - ₱10,000
              </label>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  name="midPrice"
                  value="midPrice"
                  className="mr-2"
                />{" "}
                ₱10,001 - ₱20,000
              </label>
              <label className="flex items-center mb-1 ">
                <input
                  type="checkbox"
                  name="highPrice"
                  value="highPrice"
                  className="mr-2"
                />{" "}
                ₱20,001 - ₱30,000
              </label>
            </div>
          </div>
        </section>
        <section className="accommodations sm:w-full">fda</section>
      </div>
    </div>
  );
};

export default Accommodations;
