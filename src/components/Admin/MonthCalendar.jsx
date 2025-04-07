import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  format,
  isSameDay,
  startOfDay,
  isSameMonth,
  parseISO,
  isWithinInterval,
} from "date-fns";

const MonthCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [reservations, setReservations] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedReservations, setSelectedReservations] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(
          "http://localhost/lafreza-server/admin/fetch_calendar.php",
          {
            method: "GET",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
          }
        );

        const result = await response.json();
        console.log("fetched shit: ", result);

        if (result.success) {
          const approvedReservations = result.data.filter(
            (res) => res.status === "approved"
          );
          setReservations(approvedReservations);
        }
      } catch (error) {
        console.log("Failed to fetch reservations", error);
      }
    };

    fetchReservations();
  }, []);

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        ‹
      </button>
      <h2 className="text-xl font-bold">{format(currentMonth, "MMMM yyyy")}</h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        ›
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center font-bold" key={i}>
          {format(addDays(date, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const thisDay = day; // freeze for this cell
        const formattedDate = format(thisDay, "yyyy-MM-dd");

        const todayReservations = reservations.filter((res) => {
          const from = parseISO(res.date_from);
          const to = parseISO(res.date_to);
          return isWithinInterval(thisDay, { start: from, end: to });
        });

        days.push(
          <div
            key={thisDay.toISOString()}
            className={`border p-2 h-24 overflow-auto cursor-pointer ${
              !isSameMonth(thisDay, monthStart)
                ? "bg-gray-100 text-gray-400"
                : ""
            }`}
            onClick={() => {
              const clicked = startOfDay(thisDay);
              console.log("Clicked date:", clicked.toISOString());

              const dateReservations = reservations.filter((res) => {
                if (!res.date_from || !res.date_to) return false;

                const from = startOfDay(parseISO(res.date_from));
                const to = startOfDay(parseISO(res.date_to));

                const isMatch = isWithinInterval(clicked, {
                  start: from,
                  end: to,
                });

                console.log({
                  clickedDay: clicked.toISOString(),
                  from: from.toISOString(),
                  to: to.toISOString(),
                  isMatch,
                  guest_name: res.guest_name,
                });

                return isMatch;
              });

              setSelectedDate(clicked);
              setSelectedReservations(dateReservations);
              setShowModal(true);
            }}
          >
            <div className="text-sm font-semibold">{format(thisDay, "d")}</div>

            {todayReservations.map((res) => (
              <div
                key={res.reservation_id}
                className="text-xs bg-blue-200 p-1 mt-1 rounded"
              >
                {res.guest_name}
              </div>
            ))}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div className="grid grid-cols-7" key={day.toISOString()}>
          {days}
        </div>
      );

      days = [];
    }

    return <div>{rows}</div>;
  };

  const Modal = ({ onClose, date, reservations }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">
            Reservations on {format(date, "MMMM d, yyyy")}
          </h2>
          <button onClick={onClose} className="text-gray-600 hover:text-black">
            ✕
          </button>
        </div>
        {reservations.length > 0 ? (
          <ul className="space-y-2 max-h-60 overflow-y-auto">
            {reservations.map((res) => (
              <li key={res.reservation_id} className="text-sm border-b pb-2">
                <div className="mb-5">
                  <p>
                    <strong>Guest:</strong> {res.guest_name}
                  </p>
                  <p>
                    <strong>Room:</strong> {res.accomodation_name}
                  </p>
                  <p>
                    <strong>From:</strong> {res.date_from}
                  </p>
                  <p>
                    <strong>To:</strong> {res.date_to}
                  </p>
                </div>
                <p>
                  <strong>STATUS:</strong> {res.status.toUpperCase()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reservations for this day.</p>
        )}
      </div>
    </div>
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {showModal && (
        <Modal
          date={selectedDate}
          reservations={selectedReservations}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default MonthCalendar;
