import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../pages/Admin/SidebarMenu";
import Navbar from "../components/Navbar";
import ContentCanvas from "../components/ContentCanvas";

const StaffLayout = () => {
  return (
    <div className="flex bg-gray-200 h-screen">
      <SidebarMenu />
      <ContentCanvas>
        <Navbar />
        <Outlet />
      </ContentCanvas>
    </div>
  );
};

export default StaffLayout;
