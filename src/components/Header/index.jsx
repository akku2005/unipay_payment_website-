// src/components/Header/index.jsx

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll
import { XIcon, MenuIcon } from "@heroicons/react/solid";
import logo from "../../assets/icons/logo.jpg";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to check current route

const Header = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const location = useLocation(); // To determine current path

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  const handleToggleNav = () => {
    setShowNav(!showNav);
  };

  // Function to handle "Learn more" click
  const handleLearnMore = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to determine if we're on the home page
  const isHome = location.pathname === "/";

  return (
    <>
      {showBanner && (
        <div className="bg-indigo-600 fixed w-full z-10">
          <div className="max-w-screen-xl mx-auto px-4 py-3 text-white sm:text-center md:px-8 flex justify-between items-center">
            <p className="font-medium text-xs sm:text-sm md:text-base">
              We just launched a new version of our Payment System!{" "}
              <a
                href="#"
                onClick={handleLearnMore} // Replaced href with onClick handler
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
        {isHome ? (
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center justify-center cursor-pointer"
          >
            <img src={logo} alt="UniPay Logo" className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold">UniPay</span>
          </ScrollLink>
        ) : (
          <Link className="flex items-center justify-center" to="/">
            <img src={logo} alt="UniPay Logo" className="w-10 h-10" />
            <span className="ml-2 text-xl font-bold">UniPay</span>
          </Link>
        )}

        <nav className="hidden lg:flex ml-auto flex gap-4 sm:gap-6 cursor-pointer">
          {isHome ? (
            <>
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="integrations"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Integrations
              </ScrollLink>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                About
              </ScrollLink>
            </>
          ) : (
            <>
              <Link
                to="/#features"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                to="/#integrations"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Integrations
              </Link>
              <Link
                to="/#about"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </>
          )}
        </nav>

        <div className="hidden lg:block ml-6">
          <Link to="/getting-started">
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-300 to-indigo-400 text-white rounded-3xl hover:from-emerald-400 hover:to-indigo-500 transition-all">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Navigation Button */}
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
          <div className="fixed top-14 left-0 w-full bg-white border-b lg:hidden z-20 shadow-lg">
            <nav className="flex flex-col p-4">
              {isHome ? (
                <>
                  <ScrollLink
                    to="features"
                    smooth={true}
                    duration={500}
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)} // Close nav on click
                  >
                    Features
                  </ScrollLink>
                  <ScrollLink
                    to="integrations"
                    smooth={true}
                    duration={500}
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)}
                  >
                    Integrations
                  </ScrollLink>
                  <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)}
                  >
                    About
                  </ScrollLink>
                </>
              ) : (
                <>
                  <Link
                    to="/#features"
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)}
                  >
                    Features
                  </Link>
                  <Link
                    to="/#integrations"
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)}
                  >
                    Integrations
                  </Link>
                  <Link
                    to="/#about"
                    className="text-sm font-medium hover:text-blue-600 transition-colors mb-2"
                    onClick={() => setShowNav(false)}
                  >
                    About
                  </Link>
                </>
              )}
            </nav>
            <div className="p-4">
              <Link to="/signup">
                <button className="w-full px-4 py-2 bg-gradient-to-r from-emerald-300 to-indigo-400 text-white rounded-3xl hover:from-emerald-400 hover:to-indigo-500 transition-all">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
