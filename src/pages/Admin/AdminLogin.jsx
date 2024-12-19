import React from "react";
import Button from "../../components/Button";
import "../../App.css";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="login-card flex justify-center items-center h-screen w-full background-container">
      <div className="rounded-lg text-gray-900 bg-gray-50 shadow-lg h-2/3 w-96 py-7 px-6 flex flex-col justify-between">
        <div className="content">
          <div className="flex items-center flex-col mb-10">
            <h1 className="mb-1 font-bold text-xl">Admin Log-in</h1>
            <p className="text-sm">
              Or{" "}
              <Link to="/admin-signup" className="text-yellow-400 underline ">
                Sign up
              </Link>{" "}
              for a new admin account
            </p>
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="admin-username">Enter username</label>
              <input
                type="text"
                id="admin-username"
                name="admin-username"
                placeholder="Username"
                required
                className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="admin-password">Password</label>
              <input
                type="password"
                id="admin-password"
                name="admin-password"
                placeholder="Password"
                required
                className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
              />
            </div>
            <div className="flex justify-end">
              <a href="" className="text-yellow-400 underline text-sm">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
        <div>
          <Button
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"bg-yellow-300"}
            buttonName={"Sign in"}
            buttonWidth={"w-full"}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
