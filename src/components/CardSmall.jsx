import React from "react";

const CardSmall = ({ cardTitle, cardCount, cardIcon, cardColor }) => {
  return (
    <div
      className={`h-24 rounded-lg p-4 shadow-lg text-gray-900 ${cardColor} flex`}
    >
      <div className="w-2/3">
        <h3>{cardTitle}</h3>
        <p className="text-3xl font-bold">{cardCount}</p>
      </div>
      <div className="flex items-center ml-5">{cardIcon}</div>
    </div>
  );
};

export default CardSmall;
