import React, { useState, useEffect } from "react";
import CardSmall from "../CardSmall";
import { FaDoorClosed } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";

const CardRow = () => {
  const [todayBookings, setTodayBookings] = useState(0);
  const [checkedInRooms, setCheckedInRooms] = useState(0);
  const [pendingReservations, setPendingReservations] = useState(0);

  useEffect(() => {
    const fetchTodayBookings = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_booked.php"
        );
        const result = await response.json();
        console.log(result);

        if (result.success) {
          setTodayBookings(result.total_bookings);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching today's bookings:", error);
      }
    };

    fetchTodayBookings();
  }, []);

  useEffect(() => {
    const fetchCheckedInRooms = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_checked_in.php"
        );
        const result = await response.json();
        console.log(result);

        if (result.success) {
          setCheckedInRooms(result.checked_in_rooms);
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching checked-in rooms:", error);
      }
    };

    fetchCheckedInRooms();
  }, []);

  useEffect(() => {
    const fetchPendingReservations = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_pending.php"
        );
        const result = await response.json();
        console.log(result);

        if (result.success) {
          setPendingReservations(result.pending_reservations); // Assuming pending_count is returned
        } else {
          console.error(result.message);
        }
      } catch (error) {
        console.error("Error fetching pending reservations:", error);
      }
    };

    fetchPendingReservations();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardSmall
        cardTitle={"Today's Bookings"}
        cardCount={todayBookings}
        cardIcon={<FaDoorClosed size={46} />}
        cardColor={"bg-yellow-300"}
      />
      <CardSmall
        cardTitle={"Checked-in"}
        cardCount={checkedInRooms}
        cardIcon={<FaDoorOpen size={46} />}
        cardColor={"bg-gray-100"}
      />
      <CardSmall
        cardTitle={"Pending"}
        cardCount={pendingReservations}
        cardIcon={<FaClock size={46} />}
        cardColor={"bg-yellow-300"}
      />
    </div>
  );
};

export default CardRow;
