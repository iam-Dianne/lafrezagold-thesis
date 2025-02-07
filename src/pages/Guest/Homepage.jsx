import React from "react";

import Hero from "../../components/Guest/Hero";
import About from "../../components/Guest/About";
import Bookings from "../../components/Guest/Bookings";
import Amenities from "../../components/Guest/Amenities";

const Homepage = () => {
  return (
    <div className="relative flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <Bookings />
      <Amenities />
    </div>
  );
};

export default Homepage;
