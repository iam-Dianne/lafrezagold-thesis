import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../pages/Admin/SidebarMenu";
import Navbar from "../components/Navbar";
import ContentCanvas from "../components/ContentCanvas";
import { HelmetProvider } from "react-helmet-async";

const AdminLayout = () => {
  return (
    <>
      <HelmetProvider>
        <title>La Freza Gold | Admin</title>
      </HelmetProvider>
      <div className="flex bg-gray-200 h-screen">
        <SidebarMenu />
        <ContentCanvas>
          <Navbar />
          <Outlet />
        </ContentCanvas>
      </div>
    </>
  );
};

export default AdminLayout;
