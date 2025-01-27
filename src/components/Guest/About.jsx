import React from "react";

const About = () => {
  return (
    <div id="about" className="h-screen relative">
      <div className="content text-gray-800 relative h-full w-full px-8 pt-40 sm:px-44 sm:pt-36 flex flex-col items-center">
        <div className="w-full flex justify-between">
          <div className="about-img w-[350px] h-[380px] hidden sm:block">
            <img
              src="../../../images/gazebo.jpg"
              alt="about-img"
              className="rounded-xl shadow-xl object-cover h-full w-full"
            />
          </div>
          <div className="about-text  w-[610px] my-auto">
            <div className="text-lg mb-3">ABOUT US</div>
            <h1 className="text-5xl font-bold mb-3">EXPERIENCE OUR WONDERS</h1>
            <div className="bg-yellow-400 w-full h-1 mb-6 rounded"></div>
            <p>
              Escape to LAFREZA GOLD Beach Resort in Bataan for an unforgettable
              tropical getaway. Nestled beside a marine nature reserve and the
              Pawikan conservation center, our 10 private villas offer a serene
              retreat. With friendly staff and a blend of Creole-inspired
              design, our resort promises a unique and memorable experience for
              every guest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
