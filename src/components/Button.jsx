import React from "react";

const Button = ({ buttonName, onClickFunction }) => {
  return (
    <button
      onClick={onClickFunction}
      className="cursor-pointer border rounded-lg bg-yellow-400 py-2 px-5 text-gray-900 hover:bg-yellow-300"
    >
      {buttonName}
    </button>
  );
};

export default Button;
