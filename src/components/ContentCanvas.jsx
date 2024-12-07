import React from "react";

const ContentCanvas = ({ children }) => {
  return (
    <div className="ml-64 h-screen w-full py-5 pr-4">
      <div className="bg-gray-50 rounded-lg h-full px-5 pt-6 pb-4">
        {children}
      </div>
    </div>
  );
};

export default ContentCanvas;
