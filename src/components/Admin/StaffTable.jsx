import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner";
import Button from "../Button";

const StaffTable = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_staff.php",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const result = await response.json();

        if (response.ok) {
          const sortedData = result.data.sort((a, b) => a.id - b.id);
          setStaff(sortedData);
          setLoading(false);
        } else {
          setErrorMessage(result.message || "Failed to load accommodations");
          setLoading(false);
        }
      } catch (error) {
        console.log("An error occured: ", error);
        setErrorMessage("An unexpected error occured. Please try again later.");
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
          <th className="w-14">#</th>
          <th className="w-2/5">Name</th>
          <th className="w-2/5">Email</th>
          <th className="w-1/5"></th>
        </tr>
      </thead>
      <tbody>
        {staff.map((staff, index) => (
          <tr key={staff.id} className=" py-1">
            <td className="w-14 py-1 px-2 border">{index + 1}</td>
            <td className="w-1/5 py-1 px-2 border">{staff.staff_name}</td>
            <td className="w-1/5 py-1 px-2 border">{staff.staff_email}</td>
            <td className="w-1/5 py-1 px-2">
              <div className="flex justify-center gap-2 ">
                <Button
                  buttonName={"Actions"}
                  buttonColor={"bg-yellow-400"}
                  buttonHoverColor={"hover:bg-yellow-300"}
                />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;
