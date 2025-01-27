import React from "react";
import Navbar from "../components/Guest/Navbar";
import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
