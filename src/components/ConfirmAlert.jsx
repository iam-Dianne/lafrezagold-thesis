import React from "react";

const ConfirmAlert = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed bg-black bg-opacity-70 flex items-center justify-center inset-0">
      <div className="text-gray-900 bg-gray-200 rounded-lg w-[400px] py-6 px-5 shadow-xl border border-gray-900">
        <h1 className="text-center mb-5">{message}</h1>
        <div className="options flex justify-center gap-10">
          <button
            onClick={onConfirm}
            className="bg-yellow-400 hover:bg-yellow-300 rounded-full px-5 py-3 text-sm"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="hover:bg-gray-400 border rounded-full px-5 py-3 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
