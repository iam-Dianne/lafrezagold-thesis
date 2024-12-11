import React from "react";

const DashboardTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th className="w-2/5">Room</th>
          <th className="w-1/5">Date</th>
          <th className="w-1/5">Status</th>
          <th className="w-1/5">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2 border">HOTEL ROOM (4 persons)</td>
          <td className="px-4 py-2 border">December 10, 2024</td>
          <td className="px-4 py-2 border">Booked</td>
          <td className="px-4 py-2 border">Show More</td>
        </tr>
        <tr>
          <td className="px-4 py-2 border">HOTEL ROOM (6 persons)</td>
          <td className="px-4 py-2 border">December 12, 2024</td>
          <td className="px-4 py-2 border">Pending</td>
          <td className="px-4 py-2 border">Show More</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DashboardTable;
