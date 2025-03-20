import React from "react";
import AdminTables from "../../components/Admin/AdminTables";
import { Link } from "react-router-dom";

const ManageAdmins = () => {
  return (
    <div className="text-gray-900 mt-2">
      <section>
        <div className="create flex justify-end ">
          <Link
            to="/admin/create-new-admin"
            className="bg-gray-300 py-1 px-3 rounded-lg"
          >
            + New
          </Link>
        </div>
        <AdminTables />
      </section>
    </div>
  );
};

export default ManageAdmins;
