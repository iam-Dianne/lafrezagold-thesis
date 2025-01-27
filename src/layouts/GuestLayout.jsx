import React from "react";
import Navbar from "../components/Guest/Navbar";
import Hero from "../components/Guest/Hero";

const GuestLayout = () => {
  return (
    <div className="bg-gray-200 text-gray-900 relative">
      <Navbar />
      <Hero />
    </div>
  );
};

export default GuestLayout;
