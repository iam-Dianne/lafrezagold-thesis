import React from "react";
import Navbar from "../components/Guest/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Guest/Footer";

const GuestLayout = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GuestLayout;
