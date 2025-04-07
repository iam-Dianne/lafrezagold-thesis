import React, { useState } from "react";
import Button from "../../components/Button";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object()
    .shape({
        username: yup.string().required("Username is reqired"),
        password: yup.string().required("Password is required"),
    })
    .required();

const StaffLogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("  ");

    const onSubmit = async (data) => {
        // console.log("Logged in", data);
        try {
            const response = await fetch(
                "http://localhost/lafreza-server/admin/staff_login.php",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data),
                    credentials: "include",
                }
            );
            const result = await response.json();

            console.log("Server response: ", result);

            if (result.success) {
                toast.success(result.message);
                return navigate("/staff");
            } else {
                setErrorMessage(result.message);
            }
        } catch (error) {
            console.log("An error occured: ", error);
            setErrorMessage("An unexpected error occured. Please try again later.");
        }
    };

    return (
        <div className="login-card flex justify-center items-center h-screen w-full background-container">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-lg text-gray-900 bg-gray-50 shadow-lg w-96 py-7 px-6 flex flex-col justify-between"
            >
                <div className="content">
                    <div className="flex items-center flex-col mb-10">
                        <h1 className="mb-1 font-bold text-xl">Staff Log-in</h1>
                        {/* <p className="text-sm">
                  Or{" "}
                  <Link to="/admin-signup" className="text-yellow-400 underline ">
                    Sign up
                  </Link>{" "}
                  for a new admin account
                </p> */}
                    </div>
                    {errorMessage && (
                        <div className="text-red-500 text-sm">{errorMessage}</div>
                    )}
                    <div>
                        <div className="mb-4">
                            <label htmlFor="username">Enter username</label>
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
                        <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                {...register("password")}
                                className="rounded py-2 px-3 bg-gray-200 text-gray-900 w-full"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <div className="flex justify-end">
                            <a href="" className="text-yellow-400 underline text-sm">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <Button
                        buttonColor={"bg-yellow-400"}
                        buttonHoverColor={"bg-yellow-300"}
                        buttonName={"Sign in"}
                        buttonWidth={"w-full"}
                    />
                </div>
            </form>
        </div>
    );
}

export default StaffLogin
