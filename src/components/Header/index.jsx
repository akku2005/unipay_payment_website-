import React, { useState } from "react";
import { Link } from "react-router-dom";
import { XIcon, MenuIcon } from "@heroicons/react/solid"; // Import the Cross and Menu icons
import logo from "../../assets/icons/logo.jpg"; // Import the logo

const Header = () => {
  const [showBanner, setShowBanner] = useState(true); // State to manage banner visibility
  const [showNav, setShowNav] = useState(false); // State to manage navigation visibility on mobile

  const handleCloseBanner = () => {
    setShowBanner(false); // Hide the banner when the cross button is clicked
  };

  const handleToggleNav = () => {
    setShowNav(!showNav); // Toggle navigation visibility on mobile
  };

  return (
    <>
      {showBanner && (
        <div className="bg-indigo-600 fixed w-full z-10">
          <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8 flex justify-between items-center">
            <p className="font-medium text-xs sm:text-sm md:text-base">
              We just launched a new version of our Payment System!{" "}
              <a
                href="javascript:(0)"
                className="font-semibold underline duration-150 hover:text-indigo-100 inline-flex items-center gap-x-1"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </p>
            <button onClick={handleCloseBanner} className="text-white">
              <XIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
      <header
        className={`px-4 lg:px-6 h-14 flex items-center fixed w-full bg-white z-10 border-b ${
          showBanner ? "mt-12" : ""
        }`}
      >
        <Link className="flex items-center justify-center" to="/">
          <img src={logo} alt="UniPay Logo" className="w-10 h-10" />
          <span className="ml-4 text-xl font-bold">UniPay</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            to="/features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            to="/integrations"
          >
            Integrations
          </Link>
          <Link
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            to="/pricing"
          >
            Pricing
          </Link>
        </nav>

        <div className="hidden lg:block ml-6">
          <button className="px-4 py-2 bg-gradient-to-r from-emerald-300 to-indigo-400 text-white rounded-3xl">
            Get Started
          </button>
        </div>

        {/* Mobile Navigation */}
        <button
          className="lg:hidden flex justify-center items-center w-10 h-10 ml-auto"
          onClick={handleToggleNav}
        >
          {showNav ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Navigation Links */}
        {showNav && (
          <div className="fixed top-14 left-0 w-full bg-white border-b lg:hidden">
            <nav className="flex flex-col p-4">
              <Link
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                to="/features"
              >
                Features
              </Link>
              <Link
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                to="/integrations"
              >
                Integrations
              </Link>
              <Link
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                to="/pricing"
              >
                Pricing
              </Link>
            </nav>
            <div className="p-4">
              <button className="px-4 py-2 bg-gradient-to-r from-emerald-300 to-indigo-400 text-white rounded-3xl">
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
