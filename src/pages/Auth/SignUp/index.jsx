import React, { useState } from "react";
import Logo from "../../../assets/companyLogo/logo-color.png"; // Replace with your logo path
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com"; // Import EmailJS
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Registration Successful!"); // Show toast message
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending registration details.");
        }
      );

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-sky-200 to-white justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-lg md:flex-row h-full">
        {/* Left Side - Company Logo */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img src={Logo} alt="Company Logo" className="w-3/4 mb-10" />
        </div>

        {/* Right Side - Signup Form */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
          <Link to="/">
            <h1 className="text-center underline text-green-500 mb-3">
              Go back to website
            </h1>
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Sign Up
          </h1>
          <form
            className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-200 text-gray-800 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
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
              <label className="block text-gray-700 mb-2" htmlFor="mobile">
                Indian Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-2 rounded bg-gray-200 text-gray-800 focus:outline-none"
                placeholder="Your Mobile Number"
                pattern="[0-9]{10}" // Regex pattern for Indian mobile numbers
                maxLength={10}
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
              Sign Up
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
          <ToastContainer /> {/* Add ToastContainer for toast notifications */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
