import React from "react";
import Button from "./Button";

const ConfirmAlert = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed bg-black bg-opacity-70 flex items-center justify-center inset-0">
      <div className="text-gray-900 bg-gray-200 rounded-lg w-[400px] py-6 px-5 shadow-xl border border-gray-900">
        <h1 className="text-center mb-5">{message}</h1>
        <div className="options flex justify-center gap-10">
          <Button
            buttonName={"Confirm"}
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"hover:bg-yellow-300"}
            buttonWidth={"w-1/3"}
            onClickFunction={onConfirm}
          />
          <Button
            buttonName={"Cancel"}
            buttonHoverColor={"hover:bg-gray-300"}
            buttonWidth={"w-1/3"}
            onClickFunction={onCancel}
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
