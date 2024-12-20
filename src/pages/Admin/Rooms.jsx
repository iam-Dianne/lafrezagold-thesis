import React from "react";
import { FaFilter } from "react-icons/fa6";
import AccomodationsTable from "../../components/AccomodationsTable";

const Rooms = () => {
  return (
    <div className="all-accomodations text-gray-900 mt-2">
      <section className="filters flex justify-end mb-3">
        <button
          type="Button"
          className="flex flex-wrap bg-gray-300 items-center rounded-lg py-1 px-2 "
        >
          <FaFilter />
          <span className="ml-3">Filters</span>
        </button>
      </section>
      <section>
        <AccomodationsTable />
      </section>
    </div>
  );
};

export default Rooms;
