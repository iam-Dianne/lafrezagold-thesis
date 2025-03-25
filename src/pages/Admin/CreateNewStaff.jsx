import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
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
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
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

const CreateNewStaff = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost/lafreza-server/admin/staff_signup.php",
        {
          method: "POST",
          headers: { "Content-Type": "" },
          body: JSON.stringify(data),
          credentials: "include",
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        return navigate("/admin/manage-staff");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("An error occured: ", error);
      toast.error("An error occured when creating an account");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" text-gray-900 mt-10 flex flex-col justify-between sm:w-[600px] xs:w-[400px]"
      >
        <div className="content flex flex-col">
          <div className="staff-fullname">
            <div className="flex gap-4">
              <div className="mb-4 flex flex-col w-2/3">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  {...register("firstName")}
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className="mb-4 flex flex-col w-1/3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  {...register("lastName")}
                  className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                {...register("username")}
                className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                {...register("email")}
                className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="password">
              <div className="flex gap-4">
                <div className="mb-4 flex flex-col w-1/2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    {...register("password")}
                    className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 flex flex-col w-1/2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    className="rounded py-2 px-3 bg-gray-200 text-gray-900"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Button
            buttonColor={"bg-yellow-400"}
            buttonHoverColor={"bg-yellow-300"}
            buttonName={"Create Account"}
            buttonWidth={"w-full"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNewStaff;
