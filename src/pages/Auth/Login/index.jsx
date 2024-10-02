import React, { useState } from "react";
import Logo from "../../../assets/companyLogo/logo-color.png"; // Replace with your logo path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send a request to your backend for authentication
    // Simulating a successful login
    toast.success("Login Successful!"); // Show toast message

    // Reset form fields
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-sky-200 to-white justify-center items-center px-4">
      {/* Container for both logo and form */}
      <div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg md:flex-row h-full">
        {/* Left Side - Company Logo */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img src={Logo} alt="Company Logo" className="w-3/4 mb-10" />
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h1>
          <form
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-200 text-gray-800 focus:outline-none"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-200 text-gray-800 focus:outline-none"
                placeholder="Your Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-black text-white py-2 rounded-lg font-medium transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <a
              href="/reset-password" // Replace with your reset password page route
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-2 text-center">
            <span className="text-gray-600">Don’t have an account? </span>
            <a
              href="/signup" // Replace with your signup page route
              className="text-blue-500 hover:underline"
            >
              Create a new account
            </a>
          </div>
          <ToastContainer /> {/* Add ToastContainer for toast notifications */}
        </div>
      </div>
    </div>
  );
};

export default Login;
