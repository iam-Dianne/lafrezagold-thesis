import React from "react";

const Button = ({
  buttonName,
  onClickFunction,
  buttonColor,
  buttonHoverColor,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`cursor-pointer border rounded-lg py-2 px-5 text-gray-900 ${buttonColor} ${buttonHoverColor}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
