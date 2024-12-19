import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const AdminSignup = () => {
  return (
    <div className="login-card flex justify-center items-center h-screen w-full background-container">
      <div className="rounded-lg text-gray-900 bg-gray-50 shadow-lg py-7 px-6 flex flex-col justify-between sm:w-[600px] xs:w-[400px]">
        <div className="content flex flex-col">
          <div className="flex items-center flex-col mb-10">
            <h1 className="mb-1 font-bold text-xl">Admin Signup</h1>
            <p className="text-sm">
              Or{" "}
              <Link to="/admin-login" className="text-yellow-400 underline ">
                Log in
              </Link>{" "}
              to an existing account
            </p>
          </div>
          <div className="admin-fullname">
            <div className="flex gap-4">
              <div className="mb-4 flex flex-col w-2/3">
                <label htmlFor="admin-first-name">First Name</label>
                <input
                  type="text"
                  id="admin-first-name"
                  name="admin-first-name"
                  placeholder="First Name"
                  required
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
              </div>
              <div className="mb-4 flex flex-col w-1/3">
                <label htmlFor="admin-last-name">Last Name</label>
                <input
                  type="text"
                  id="admin-last-name"
                  name="admin-last-name"
                  placeholder="Last Name"
                  required
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="signup-admin-username">Username</label>
            <input
              type="text"
              id="signup-admin-username"
              name="signup-admin-username"
              placeholder="Username"
              required
              className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
            />
          </div>
          <div className="mb-4 flex flex-col">
            <label htmlFor="signup-admin-email">Email</label>
            <input
              type="email"
              id="signup-admin-email"
              name="signup-admin-email"
              placeholder="Email"
              required
              className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
            />
          </div>
          <div className="admin-password">
            <div className="flex gap-4">
              <div className="mb-4 flex flex-col w-1/2">
                <label htmlFor="signup-admin-password">Password</label>
                <input
                  type="password"
                  id="signup-admin-password"
                  name="signup-admin-password"
                  placeholder="Password"
                  required
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
              </div>
              <div className="mb-4 flex flex-col w-1/2">
                <label htmlFor="signup-admin-confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="signup-admin-confirm-password"
                  name="signup-admin-confirm-password"
                  placeholder="Confirm Password"
                  required
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"bg-yellow-300"}
            buttonName={"Sign up"}
            buttonWidth={"w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSignup;
