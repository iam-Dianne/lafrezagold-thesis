import React from "react";
import StaffTable from "../../components/Admin/StaffTable";

const ManageStaff = () => {
  return (
    <div className="all-staff text-gray-900 mt-2">
      <section>
        <StaffTable />
      </section>
    </div>
  );
};

export default ManageStaff;
