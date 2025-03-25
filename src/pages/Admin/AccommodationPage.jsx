import React, { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmAlert from "../../components/ConfirmAlert";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const AccommodationPage = ({ initialStatus }) => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  const navigate = useNavigate();

  useEffect(() => {
    // console.log("Accommodation ID:", id);
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
          // console.log(result.data);
          setAccommodation(result.data.accommodation);
          setImages(result.data.images);
          setStatus(result.data.accommodation.availability);
          setLoading(false);
        } else {
          setErrorMessage(
            result.message || "Failed to load accommodation details."
          );
          setLoading(false);
        }
      } catch (error) {
        console.log("An error occured: ", error);
        setErrorMessage(
          "An unexpected error occurred. Please try again later."
        );
        setLoading(false);
      }
    };
    fetchAccommodation();
  }, [id]);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    await deleteAccommodation();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  const changeStatus = async () => {
    const newStatus = status === "Available" ? "Booked" : "Available";

    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/update_status.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, status: newStatus }),
          credentials: "include",
        }
      );

      const result = await response.json();
      console.log("Server response: ", result);

      if (response.ok && result.success) {
        setStatus(newStatus);
      } else {
        toast.error(result.message || "Failed to update status");
      }
    } catch (error) {
      console.log("Error updating status: ", error);
    }
  };

  const deleteAccommodation = async () => {
    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/delete_accommodation.php",
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log("Response:", result);

      if (response.ok && result.success) {
        toast.success("Accommodation deleted successfully");
        return navigate("/admin/accomodations");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
      setErrorMessage("An unexpected error occured. Please try again later.");
      setLoading(false);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="single-accomodation flex flex-col text-gray-900 w-full h-full px-20">
      <div className="back-container mb-10">
        <Link to="/admin/accomodations" className="flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
      </div>
      <div className="main-container flex justify-center ">
        <div className="flex justify-center">
          <div className="images-carousel w-[380px] h-[230px]">
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
              <li className="mt-5">
                <Button
                  buttonName={status === "Available" ? "Available" : "Booked"}
                  buttonColor={
                    status === "Available" ? "bg-yellow-300" : "bg-blue-400"
                  }
                  buttonHoverColor={
                    status === "Available"
                      ? "hover:bg-yellow-200"
                      : "hover:bg-blue-300"
                  }
                  onClickFunction={changeStatus}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="actions-container flex flex-col items-center gap-2 mt-16">
        <Button
          buttonName={"Edit"}
          buttonColor={"bg-blue-600"}
          buttonHoverColor={"hover:bg-blue-500"}
          buttonWidth={"w-1/3"}
          onClickFunction={() => {
            navigate(`/admin/edit-accommodations/${accommodation.id}`);
          }}
        />
        <Button
          buttonName={"Delete"}
          buttonColor={"bg-red-600"}
          buttonHoverColor={"hover:bg-red-500"}
          buttonWidth={"w-1/3"}
          onClickFunction={handleDeleteClick}
        />

        {showConfirm && (
          <ConfirmAlert
            message="Are you sure you want to delete this accommodation? This action cannot be undone."
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default AccommodationPage;
