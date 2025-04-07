import React, { useEffect, useState } from "react";
import Spinner from "../Spinner";
import Button from "../Button";
import ConfirmAlert from "../ConfirmAlert";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GuestsTable = () => {
  const [guests, setGuests] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [reservation, setReservation] = useState([]);

  const [activeModal, setActiveModal] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_guests.php",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
          }
        );

        const result = await response.json();

        if (response.ok) {
          // const sortedData = result.data.sort((a, b) => a.id - b.id);
          setGuests(result.data);
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

    fetchData();
  }, []);

  const fetchReservation = async (guestId) => {
    try {
      const response = await fetch(
        `http://localhost/lafreza-server/admin/fetch_reservation_info.php?guest_id=${guestId}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok && result.data) {
        setReservation(result.data.status);
      } else {
        setReservation("No reservation found");
      }
    } catch (error) {
      console.log("An error occurred: ", error);
      setReservation("Error fetching reservation");
    }
  };

  if (loading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-center mt-10 text-red-500">{errorMessage}</p>;
  }

  const openActions = async (guest) => {
    setSelectedGuest(guest);
    setReservation("None");
    setActiveModal(true);
    await fetchReservation(guest.id);
  };

  const deleteGuest = async (id) => {
    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/delete_guest.php",
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
        setGuests(
          (prevGuests) => prevGuests.filter((guest) => guest.id !== id) // Remove deleted guest from the list
        );
        toast.success("Guest account deleted successfully");
      } else {
        setErrorMessage(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
      setErrorMessage("An unexpected error occured. Please try again later.");
      setLoading(false);
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedGuest(id);
    setShowConfirm(true);
  };

  const handleCancel = async () => {
    setShowConfirm(false);
  };

  const handleConfirm = async () => {
    setShowConfirm(false);
    setActiveModal(false);
    await deleteGuest(selectedGuest);
  };

  return (
    <section>
      <table className="w-full">
        <thead className="mb-2">
          <tr className="mb-2">
            <th className="w-14">#</th>
            <th className="w-1/3">Name</th>
            <th className="w-1/3">Email</th>
            <th className="w-1/3">Contact Number</th>
            <th className="w-20"></th>
          </tr>
        </thead>
        <tbody>
          {guests.map((guest, index) => (
            <tr key={guest.id} className=" py-1">
              <td className="w-14 py-1 px-2 border">{index + 1}</td>
              <td className="w-1/3 py-1 px-2 border">{guest.guest_name}</td>
              <td className="w-1/3 py-1 px-2 border">{guest.guest_email}</td>
              <td className="w-1/3 py-1 px-2 border">
                0{guest.contact_number}
              </td>
              <td className="w-1/3 py-1 px-2">
                <div className="flex justify-center gap-2 ">
                  <Button
                    buttonName={"View"}
                    buttonColor={"bg-yellow-400"}
                    buttonHoverColor={"hover:bg-yellow-300"}
                    onClickFunction={() => openActions(guest)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {activeModal && selectedGuest && (
        <div className="fixed bg-black bg-opacity-40 flex items-center justify-center inset-0">
          <div className="text-gray-900 bg-gray-200 rounded-lg w-[400px] py-6 px-7 shadow-xl border border-gray-900">
            <h1 className="font-bold text-xl mb-3">
              {selectedGuest.guest_name}
            </h1>
            <ul className="mb-10">
              <li>
                <span className="text-gray-500">Email: </span>
                {selectedGuest.guest_email}
              </li>
              <li>
                <span className="text-gray-500">Contact Number: </span>0
                {selectedGuest.contact_number}
              </li>
              <li className="mt-4 ">
                <span className="text-gray-500">Reservation: </span>
                {reservation.length > 0 ? (
                  <ul className="mt-1 space-y-1">
                    {reservation.map((res, index) => (
                      <li
                        key={index}
                        className="bg-white p-2 rounded shadow text-sm"
                      >
                        <div>
                          <strong>Accommodation:</strong>{" "}
                          {res.accommodation_name}
                        </div>
                        <div>
                          <strong>Check-in:</strong> {res.check_in}
                        </div>
                        <div>
                          <strong>Check-out:</strong> {res.check_out}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-sm mt-1 text-gray-600">
                    No reservation found
                  </div>
                )}
              </li>
            </ul>

            <div className="flex justify-around">
              <Button
                buttonName={"Delete"}
                buttonColor={"bg-red-600"}
                buttonHoverColor={"hover:bg-red-500"}
                buttonWidth={"w-1/3"}
                onClickFunction={() => handleDeleteClick(selectedGuest.id)}
              />
              <Button
                buttonName={"Close"}
                buttonHoverColor={"hover:bg-gray-300"}
                buttonWidth={"w-1/3"}
                onClickFunction={() => setActiveModal(false)}
              />

              {showConfirm && (
                <ConfirmAlert
                  message="Are you sure you want to delete this guest account? This action cannot be undone."
                  onConfirm={handleConfirm}
                  onCancel={handleCancel}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GuestsTable;
