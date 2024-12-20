import React from "react";
import CardRow from "../../components/CardRow";
import DashboardTable from "../../components/DashboardTable";

const Dashboard = () => {
  return (
    <div className="dashboard-section flex flex-col text-gray-900">
      <CardRow />
      <h3 className="mt-6 mb-3 text-lg">Recent Reservations</h3>
      <DashboardTable />
    </div>
  );
};

export default Dashboard;
