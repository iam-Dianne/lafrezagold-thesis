import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

const ReservationsTable = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_reservations.php",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );
        const result = await response.json();
        console.log("API Response: ", result);

        if (response.ok) {
          const sortedData = result.data.sort((a, b) => a.id - b.id);
          setReservations(sortedData);
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

  const updateReservationStatus = async (reservationId, newStatus) => {
    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/update_reservation_status.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            reservation_id: reservationId,
            status: newStatus,
          }),
        }
      );

      const result = await response.json();
      if (result.success) {
        console.log(`Updated status for reservation ${reservationId}`);
        setReservations((prev) =>
          prev.map((r) =>
            r.reservation_id === reservationId ? { ...r, status: newStatus } : r
          )
        );
      } else {
        alert("Failed to update status: " + result.message);
      }
    } catch (err) {
      console.error("Error updating status", err);
      alert("An error occurred while updating status.");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  return (
    <table className="w-full mb-4 mt-5">
      <thead className="mb-2">
        <tr className="mb-2">
          <th className="w-10">ID</th>
          <th className="w-1/6">Guest ID</th>
          <th className="w-1/6">Accommodation</th>
          <th className="w-1/6">Date</th>
          <th className="w-1/6">Total Price</th>
          <th className="w-1/6">Update</th>
          <th className="w-1/4">Status</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation) => (
          <tr key={reservation.reservation_id} className="py-1">
            <td className="w-10 py-1 px-2 border">
              {reservation.reservation_id}
            </td>
            <td className="w-1/6 py-1 px-2 border">{reservation.guest_name}</td>
            <td className="w-1/6 py-1 px-2 border">
              {reservation.accomodation_name}
            </td>
            <td className="w-1/6 py-1 px-2 border">
              {reservation.date_from} to {reservation.date_to}
            </td>
            <td className="w-1/6 py-1 px-2 border">
              Php {reservation.total_price}
            </td>
            <td className="w-1/6 py-1 px-2 border">{reservation.updated_at}</td>
            <td className="w-1/4 py-1 px-2 ">
              <select
                name="status"
                value={reservation.status}
                className="rounded-lg py-3 px-5 w-full bg-gray-200"
                onChange={(e) =>
                  updateReservationStatus(
                    reservation.reservation_id,
                    e.target.value
                  )
                }
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="declined">Declined</option>
                <option value="canceled">Canceled</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReservationsTable;
