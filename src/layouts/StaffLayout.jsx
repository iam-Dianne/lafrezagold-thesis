import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenuStaff from "../pages/Staff/SidebarMenuStaff";
import Navbar from "../components/Navbar";
import ContentCanvas from "../components/ContentCanvas";
import { HelmetProvider } from "react-helmet-async";

const StaffLayout = () => {
    return (
        <>
            <HelmetProvider>
                <title>La Freza Gold | Staff</title>
            </HelmetProvider>
            <div className="flex bg-gray-200 h-screen">
                <SidebarMenuStaff />
                <ContentCanvas>
                    <Navbar />
                    <Outlet />
                </ContentCanvas>
            </div>
        </>
    );
};

export default StaffLayout
