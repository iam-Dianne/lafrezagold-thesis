import React from "react";
import Navbar from "./Navbar";

const ContentCanvas = () => {
  return (
    <div className="ml-64 h-screen w-full py-5 pr-4">
      <div className="bg-gray-50 rounded-lg h-full px-5 pt-6 pb-4">
        <Navbar />
      </div>
    </div>
  );
};

export default ContentCanvas;
