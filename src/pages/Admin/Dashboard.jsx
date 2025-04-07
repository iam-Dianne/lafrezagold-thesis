import React, { useState, useEffect } from "react";
import CardRow from "../../components/Admin/CardRow";
import DashboardTable from "../../components/Admin/DashboardTable";

const Dashboard = () => {
  const [admin, setAdmin] = useState(null);
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchAdminData = async () => {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/fetch_admin_info.php",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.success) {
        setAdmin(data);
      } else {
        console.error("Admin not logged in or session expired");
      }
    };

    const currentDate = new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setDate(currentDate);

    fetchAdminData();
  }, []);

  return (
    <div className="dashboard-section flex flex-col text-gray-900">
      <CardRow selectedDate={date} />
      <div className="mt-7 mb-5">
        {admin && (
          <div className="flex justify-between text-xl">
            <h1>
              Hello, <span className="font-bold">{admin.admin_username}</span>!
            </h1>
            <p>
              <span className="font-bold">{date}</span>
            </p>
          </div>
        )}
      </div>

      <DashboardTable />
    </div>
  );
};

export default Dashboard;
