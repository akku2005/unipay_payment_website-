import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../../assets/companyLogo/logo-color.png"; // Replace with your logo path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send a request to your backend to send the reset password email
    // Simulating a successful request
    toast.success("Reset link sent to your email!"); // Show toast message

    // Reset email field
    setEmail("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-sky-200 to-white justify-center items-center">
      {/* Container for both logo and form */}
      <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-white rounded-lg p-8 shadow-lg">
        {/* Left Side - Company Logo */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <img src={Logo} alt="Company Logo" className="w-3/4 mb-10" />
        </div>

        {/* Right Side - Reset Password Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-200 text-gray-800 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-black text-white py-2 rounded-lg font-medium transition duration-300"
            >
              Send Reset Link
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Remembered your password?{" "}
            <Link to="/login" className="text-blue-500 underline">
              Go back to Login
            </Link>
          </p>
          <ToastContainer /> {/* Add ToastContainer for toast notifications */}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
