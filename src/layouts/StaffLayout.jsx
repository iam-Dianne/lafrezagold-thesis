import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenuStaff from "../pages/Staff/SidebarMenuStaff";
import Navbar from "../components/Navbar";
import ContentCanvas from "../components/ContentCanvas";

const StaffLayout = () => {
    return (
        <div className="flex bg-gray-200 h-screen">
            <SidebarMenuStaff />
            <ContentCanvas>
                <Navbar />
                <Outlet />
            </ContentCanvas>
        </div>
    );
};

export default StaffLayout
