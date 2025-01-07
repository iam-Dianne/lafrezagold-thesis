import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const AccommodationPage = () => {
  const { id } = useParams();
  const [accommodation, setAccommodation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log(id);
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
          setAccommodation(result.data);
          setLoading(false);
        } else {
          setErrorMessage(
            result.message || "Failed to load accommodation details"
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

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  return (
    <div className="single-accomodation text-gray-900">
      <div className="back-container mb-3">
        <Link to="/admin/accomodations" className="flex items-center">
          <FaArrowLeft className="mr-2" /> Back
        </Link>
      </div>
      <div className="main flex justify-center">
        <div className="w-3/5 ">
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
        <div className="photos"></div>
      </div>
    </div>
  );
};

export default AccommodationPage;
