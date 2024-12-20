import React from "react";
import CardSmall from "./CardSmall";
import { FaDoorClosed } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const CardRow = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardSmall
        cardTitle={"Available Rooms"}
        cardCount={28}
        cardIcon={<FaDoorClosed size={46} />}
        cardColor={"bg-yellow-300"}
      />
      <CardSmall
        cardTitle={"Checked-in"}
        cardCount={6}
        cardIcon={<FaDoorOpen size={46} />}
        cardColor={"bg-gray-100"}
      />
      <CardSmall
        cardTitle={"Pending"}
        cardCount={5}
        cardIcon={<FaClock size={46} />}
        cardColor={"bg-yellow-300"}
      />
    </div>
  );
};

export default CardRow;
