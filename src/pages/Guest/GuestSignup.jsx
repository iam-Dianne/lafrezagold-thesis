import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object()
  .shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact: yup
      .string()
      .matches(/^[0-9]{11}$/, "Contact number must be exactly 11 digits")
      .required("Contact number is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password must contain at least one letter")
      .matches(/\d/, "Password must contain at least one number")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm password"),
  })
  .required();

const GuestSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost/lafreza-server/guest/guest_signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        return navigate("/login");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
      toast.error("An error occured when creating an account");
    }
  };

  return (
    <div className="w-full h-screen sm:pt-5 flex flex-col justify-center items-center guest-form-bg overflow-x-hidden">
      <div className="sm:w-[700px] w-[300px] rounded-lg shadow-xl bg-gray-100 px-6 py-5">
        <div className="w-full flex flex-col items-center text-xs sm:text-sm mb-4">
          <h1 className="font-bold text-base sm:text-xl">Sign up</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="content mb-5">
            <div className="name sm:flex sm:gap-3">
              <div className="mb-3 sm:w-2/3 flex flex-col">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  {...register("firstName")}
                  className="rounded py-2 px-3  bg-gray-200"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mb-3 sm:w-1/3 flex flex-col">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="rounded py-2 px-3  bg-gray-200"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="contacts sm:flex sm:gap-3">
              <div className="mb-3 sm:w-3/5 flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  {...register("email")}
                  className="rounded py-2 px-3 w-full bg-gray-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="mb-3 sm:w-2/5 flex flex-col">
                <label htmlFor="contact">Contact number</label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder="Contact Number"
                  {...register("contact")}
                  className="rounded py-2 px-3 w-full bg-gray-200"
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm">
                    {errors.contact.message}
                  </p>
                )}
              </div>
            </div>
            <div className="password sm:flex sm:gap-3">
              <div className="mb-3 sm:w-1/2 flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")}
                  className="rounded py-2 px-3 w-full bg-gray-200"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="mb-3 sm:w-1/2 flex flex-col">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                  className="rounded py-2 px-3 w-full bg-gray-200"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mb-3">
            <Link to="/login" className="text-yellow-400 underline ">
              Log in to an existing account
            </Link>
          </div>

          <div className="submit-button">
            <Button
              buttonName={"Sign up"}
              buttonColor={"bg-yellow-400"}
              buttonHoverColor={"hover:bg-yellow-400"}
              buttonWidth={"w-full"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default GuestSignup;
