import React from "react";

import Hero from "../../components/Guest/Hero";
import About from "../../components/Guest/About";

const Homepage = () => {
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default Homepage;
