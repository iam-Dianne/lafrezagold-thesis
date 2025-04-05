import React from "react";
import Navbar from "../components/Guest/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Guest/Footer";
import { HelmetProvider } from "react-helmet-async";

const GuestLayout = () => {
  return (
    <>
      <HelmetProvider>
        <title>La Freza Gold | Home</title>
      </HelmetProvider>
      <div className="bg-gray-100 text-gray-900 min-h-screen">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default GuestLayout;
