import React from "react";
import StaffTable from "../../components/Admin/StaffTable";
import { Link } from "react-router-dom";

const ManageStaff = () => {
  return (
    <div className="all-staff text-gray-900 mt-2">
      <section>
        <div className="create flex justify-end ">
          <Link
            to="/admin/create-new-staff"
            className="bg-gray-300 py-1 px-3 rounded-lg"
          >
            + New
          </Link>
        </div>
        <StaffTable />
      </section>
    </div>
  );
};

export default ManageStaff;
