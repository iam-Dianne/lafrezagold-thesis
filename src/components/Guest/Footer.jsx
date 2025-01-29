import React from "react";
import { FaEnvelope, FaLocationDot, FaMessage, FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      id="contact-us"
      className="bg-gray-900 text-gray-100 w-full h-[500px] sm:h-[350px]"
    >
      <div className="px-8 sm:px-28 py-9 sm:py-10 sm:flex">
        <div className="mb-7">
          <p className="text-lg">LAFREZA GOLD</p>
          <p className="sm:mt-5 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt
            temporibus non sit reprehenderit praesentium ullam consectetur omnis
            cumque, soluta illo eum tempora in porro ea, atque tenetur labore
            veniam?
          </p>
        </div>
        <div>
          <p className="text-lg font-bold mb-2">CONTACT US</p>
          <ul>
            <li className="text-yellow-400 flex items-center">
              <FaPhone className="inline mr-6" />
              Phone
            </li>
            <li className="text-gray-500 ml-10 mb-1 sm:mb-3">+63 9988616822</li>
            <li className="text-yellow-400">
              <FaEnvelope className="inline mr-5" /> Email
            </li>
            <li className="text-gray-500 ml-10 mb-1 sm:mb-3">
              lafrezagold@gmail.com
            </li>
            <li className="text-yellow-400">
              <FaLocationDot className="inline mr-5" /> Location
            </li>
            <li className="text-gray-500 ml-10 mb-1 sm:mb-3">
              Sitio Crossing Nagbalayong , Morong, Philippines
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
