import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import ProtectedRoute from "./pages/Admin/ProtectedRoute";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminLayout from "./layouts/AdminLayout";
import AddRoom from "./pages/Admin/AddRoom";
import Dashboard from "./pages/Admin/Dashboard";
import Guests from "./pages/Admin/Guests";
import GuestsHistory from "./pages/Admin/GuestsHistory";
import GuestsFeedback from "./pages/Admin/GuestsFeedback";
import ManageStaff from "./pages/Admin/ManageStaff";
import Reservations from "./pages/Admin/Reservations";
import ReservationsHistory from "./pages/Admin/ReservationsHistory";
import ReservationsCalendar from "./pages/Admin/ReservationsCalendar";
import Rooms from "./pages/Admin/Rooms";
import Transactions from "./pages/Admin/Transactions";
import RefundRequests from "./pages/Admin/RefundRequests";
import AdminSignup from "./pages/Admin/AdminSignup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AccommodationPage from "./pages/Admin/AccommodationPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-signup" element={<AdminSignup />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="/admin/accomodations" element={<Rooms />} />
          <Route
            path="/admin/accommodation/:id"
            element={<AccommodationPage />}
          />
          <Route path="/admin/add-accomodations" element={<AddRoom />} />
          <Route path="/admin/reservations" element={<Reservations />} />
          <Route
            path="/admin/reservations-history"
            element={<ReservationsHistory />}
          />
          <Route
            path="/admin/reservations-calendar"
            element={<ReservationsCalendar />}
          />
          <Route path="/admin/guests" element={<Guests />} />
          <Route path="/admin/guests-history" element={<GuestsHistory />} />
          <Route path="/admin/guests-feedback" element={<GuestsFeedback />} />
          <Route path="/admin/manage-staff" element={<ManageStaff />} />
          <Route path="/admin/transactions" element={<Transactions />} />
          <Route path="/admin/refund-requests" element={<RefundRequests />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
};

export default App;
