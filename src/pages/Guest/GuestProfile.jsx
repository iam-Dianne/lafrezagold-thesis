import React, { useEffect, useState } from "react";

const GuestProfile = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const guestId = localStorage.getItem("guest_id"); // Assuming guest_id is stored in localStorage

  useEffect(() => {
    const fetchBookings = async () => {
      if (!guestId) {
        console.error("Guest ID is missing");
        return;
      }

      try {
        const response = await fetch(
          `http://localhost/lafreza-server/guest/fetch_guest_booking.php?guest_id=${guestId}`
        );
        const result = await response.json();

        if (result.success) {
          setReservations(result.bookings); // Assuming response returns bookings
        } else {
          console.error("Failed to fetch bookings:", result.message);
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [guestId]);

  if (loading) {
    return (
      <div className="w-full min-h-screen pt-24 pb-24 guest-form-bg flex sm:justify-center items-center flex-col">
        <div className="bg-gray-100 w-[340px] sm:w-[1000px] 2xl:w-[1300px] h-full shadow-lg rounded-lg p-5 sm:px-10  2xl:px-20 mb-5 ">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-24 pb-24 guest-form-bg flex sm:justify-center items-center flex-col">
      <div className="bg-gray-100 w-[340px] sm:w-[1000px] 2xl:w-[1300px] h-full shadow-lg rounded-lg p-5 sm:px-10  2xl:px-20 mb-5 ">
        <h1 className="text-2xl font-bold mb-5">Your Bookings</h1>

        {reservations.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="space-y-4">
            {reservations.map((reservation) => (
              <div
                key={reservation.reservation_id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h2 className="font-bold text-lg">
                  {reservation.accommodation_name}
                </h2>
                <p>
                  <strong>From:</strong> {reservation.date_from}
                </p>
                <p>
                  <strong>To:</strong> {reservation.date_to}
                </p>
                <p>
                  <strong>Total Price:</strong> Php {reservation.total_price}
                </p>
                <p>
                  <strong>STATUS:</strong> {reservation.status.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestProfile;
