import React from "react";
import SidebarMenu from "../components/SidebarMenu";
import ContentCanvas from "../components/ContentCanvas";

const AdminLayout = () => {
  return (
    <div className="flex bg-gray-200">
      <SidebarMenu />
      <ContentCanvas />
    </div>
  );
};

export default AdminLayout;
