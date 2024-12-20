import React from "react";

const Button = ({
  buttonName,
  onClickFunction,
  buttonColor,
  buttonHoverColor,
  buttonWidth,
}) => {
  return (
    <button
      onClick={onClickFunction}
      className={`cursor-pointer rounded-lg py-2 px-5 text-gray-900 ${buttonColor} ${buttonHoverColor} ${buttonWidth}`}
    >
      {buttonName}
    </button>
  );
};

export default Button;
