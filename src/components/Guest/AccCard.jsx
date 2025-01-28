import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import Spinner from "../Spinner";

const AccCard = () => {
  const { id } = useParams();
  const [accommodations, setAccommodations] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_accommodations.php",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const result = await response.json();
        console.log(result);

        if (response.ok && result.success) {
          setAccommodations(result.data);
          setLoading(false);
        } else {
          setErrorMessage(result.message || "Failed to load accommodations.");
          setLoading(false);
        }
      } catch (error) {
        console.log("An error occured: ", error);
        setErrorMessage("An unexpected error occured. Please try again later.");
        setLoading(false);
      }
    };
    fetchAccommodation();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="w-full h-[350px] flex flex-wrap gap-5 justify-center">
      {accommodations.map((accommodation) => (
        <a
          key={accommodation.id}
          href=""
          className="bg-gray-100 w-64 h-full rounded-lg shadow-xl overflow-hidden transition delay-50 ease-in-out hover:-translate-y-1 hover:scale-105"
        >
          <div
            key={accommodation.id}
            className="image-carousel w-full h-40 p-2"
          >
            <img
              src="../../images/gazebo.jpg"
              alt=""
              className="object-cover w-full h-full rounded-md"
            />
            <div className="text-content px-3 py-2 flex flex-col">
              <div>
                <h1 className="text-lg font-bold mb-2">
                  {accommodation.accomodation_name}
                </h1>
                <ul>
                  <li className="text-gray-500">
                    {accommodation.accomodation_type}
                  </li>
                  <li className="text-gray-500">
                    Capacity: {accommodation.capacity}
                  </li>
                  <li className="text-gray-500">
                    Features:{" "}
                    {accommodation.features.length > 20
                      ? `${accommodation.features.slice(0, 20)}...`
                      : accommodation.features}
                  </li>
                </ul>
              </div>
              <div className="text-yellow-400 font-bold mt-5">
                ₱ {accommodation.price}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default AccCard;
