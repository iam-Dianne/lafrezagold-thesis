import React from "react";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Guests from "./pages/Admin/Guests";
import ManageStaff from "./pages/Admin/ManageStaff";
import Reports from "./pages/Admin/Reports";
import Reservations from "./pages/Admin/Reservations";
import Rooms from "./pages/Admin/Rooms";
import Transactions from "./pages/Admin/Transactions";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={<AdminLayout />} />)
  );

  return <RouterProvider router={router} />;
};

export default App;
