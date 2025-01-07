import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const AccomodationsTable = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
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

        if (response.ok) {
          const sortedData = result.data.sort((a, b) => a.id - b.id);
          setAccommodations(sortedData);
          setLoading(false);
        } else {
          setErrorMessage(result.message || "Failed to load accommodations");
          setLoading(false);
        }
      } catch (error) {
        console.log("An error occured: ", error);
        setErrorMessage("An unexected error occured. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  return (
    <table className="w-full">
      <thead className="mb-2">
        <tr className="mb-2">
          <th className="w-24">#</th>
          <th className="w-3/5">Name</th>
          <th className="w-1/5">Type</th>
          <th className="w-1/5">Actions</th>
        </tr>
      </thead>
      <tbody>
        {accommodations.map((accommodation, index) => (
          <tr key={accommodation.id} className=" py-1">
            <td className="w-14 py-1 px-2 border">{index + 1}</td>
            <td className="w-3/5 py-1 px-2 border">
              {accommodation.accomodation_name}
            </td>
            <td className="w-1/5 py-1 px-2 border">
              {accommodation.accomodation_type}
            </td>
            <td className="w-1/5 py-1 px-2">
              <div className="flex justify-center gap-2 ">
                <Link
                  to={`/admin/accommodation/${accommodation.id}`}
                  className="rounded-lg py-2 px-5 text-gray-900 bg-yellow-400 hover:bg-yellow-300"
                >
                  Show more
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccomodationsTable;
