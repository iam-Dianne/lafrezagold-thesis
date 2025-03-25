import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmAlert from "../../components/ConfirmAlert";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SingleAccommodation = ({ initialStatus }) => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccommodation = async () => {
      try {
        const response = await fetch(
          `http://localhost/lafreza-server/admin/fetch_single_accomodation.php?id=${id}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const result = await response.json();

        if (response.ok && result.success) {
          setAccommodation(result.data.accommodation);
          setImages(result.data.images);
          setStatus(result.data.accommodation.availability);
          setLoading(false);
        } else {
          setErrorMessage(
            setErrorMessage(
              result.message || "Failed to load accommodation details."
            )
          );
          setLoading(false);
        }
      } catch (error) {
        console.log("An error occurred: ", error);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
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
    <div className=" w-full min-h-screen pt-24 pb-24 guest-form-bg flex justify-center items-center">
      <div className="bg-gray-100 w-[340px] sm:w-[1000px] 2xl:w-[1300px] shadow-lg rounded-lg p-5 sm:px-14 sm:pt-10 2xl:px-20">
        <div className="mb-10">
          <Link to="/accommodations" className="flex items-center">
            <FaArrowLeft className="mr-2" /> Back
          </Link>
        </div>
        <div className="main-container flex justify-center">
          <div className="flex sm:justify-center sm:flex-row flex-col">
            <div className="images-carousel w-[300px] sm:w-[380px] sm:h-[230px] sm:mb-0 mb-5 2xl:w-[480px] 2xl:h-[330 px]">
              <Swiper
                style={{ zIndex: 0 }}
                spaceBetween={5}
                slidesPerView={1}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                modules={[Pagination, Navigation]}
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`http://localhost/lafreza-server${image}`}
                      alt={`Accommodation Image ${index + 1}`}
                      className="rounded-lg w-full h-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="ml-5">
              <h1 className="text-3xl font-bold mb-4">
                {accommodation.accomodation_name}
              </h1>
              <ul>
                <li>
                  <span className="text-gray-500">Type: </span>
                  {accommodation.accomodation_type}
                </li>
                <li>
                  <span className="text-gray-500">Features: </span>
                  {accommodation.features}
                </li>
                <li>
                  <span className="text-gray-500">Capacity: </span>
                  {accommodation.capacity}
                </li>
                <li>
                  <span className="text-gray-500">Price: </span>₱
                  {accommodation.price}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="reservation-date">
          <div className="date mt-10 mb-2 font-bold">Date of Reservation:</div>
          <div className="reservation-date flex sm:gap-10 items-center sm:justify-center flex-wrap">
            <div className="date-from flex sm:items-center flex-col sm:flex-row">
              <label htmlFor="date-from" className="mr-3">
                From
              </label>
              <input
                type="date"
                id="date-from"
                className="rounded-lg p-2 sm:w-[300px]"
              />
            </div>
            <FaArrowRight size={25} />
            <div className="date-to flex sm:items-center flex-col sm:flex-row">
              <label htmlFor="date-to" className="mr-3">
                To
              </label>
              <input
                type="date"
                id="date-to"
                className="rounded-lg p-2 sm:w-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAccommodation;
