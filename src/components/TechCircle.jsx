import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import UniPayLogo from "../assets/icons/logo.jpg";

// Importing the SVG icons from the path you've provided
import awsIcon from "../assets/svgIcons/aws-svgrepo-com.svg";
import bankIcon from "../assets/svgIcons/bank-svgrepo-com.svg";
import cartPlusIcon from "../assets/svgIcons/cart-plus-svgrepo-com.svg";
import dockerIcon from "../assets/svgIcons/docker-svgrepo-com.svg";
import expressIcon from "../assets/svgIcons/express-svgrepo-com.svg";
import githubIcon from "../assets/svgIcons/github-svgrepo-com.svg";
import mongodbIcon from "../assets/svgIcons/mongodb-logo-svgrepo-com.svg";

// Icons data with manual positions
const iconsData = [
  {
    id: 1,
    src: awsIcon,
    alt: "AWS Icon",
    info: "Amazon Web Services (AWS)",
    style: { left: "45px", top: "-4px" },
  },
  {
    id: 2,
    src: bankIcon,
    alt: "Bank Icon",
    info: "Banking Solutions",
    style: { right: "45px", top: "-4px" },
  },
  {
    id: 3,
    src: cartPlusIcon,
    alt: "Cart Plus Icon",
    info: "E-commerce Integrations",
    style: { left: "-16px", top: "100px" },
  },
  {
    id: 4,
    src: dockerIcon,
    alt: "Docker Icon",
    info: "Containerization with Docker",
    style: { right: "-16px", top: "100px" },
  },
  {
    id: 5,
    src: expressIcon,
    alt: "Express Icon",
    info: "Express.js for Backend",
    style: { left: "0px", bottom: "30px" },
  },
  {
    id: 6,
    src: githubIcon,
    alt: "GitHub Icon",
    info: "Version Control with GitHub",
    style: { right: "0px", bottom: "30px" },
  },
  {
    id: 7,
    src: mongodbIcon,
    alt: "MongoDB Icon",
    info: "MongoDB Database",
    style: { right: "40%", bottom: "-16px" },
  },
];

const TechCircle = () => {
  const circleRef = useRef(null); // Reference for the circle
  const [rotation, setRotation] = useState(null); // Rotation control state
  const [hoveredIcon, setHoveredIcon] = useState(null); // Hover state for icons

  // GSAP animation setup for rotating the circle
  useEffect(() => {
    const animation = gsap.to(circleRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 40,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    setRotation(animation);

    // Clean up animation on component unmount
    return () => {
      animation.kill();
    };
  }, []);

  // Handlers for mouse hover
  const handleMouseEnter = (icon) => {
    if (rotation) rotation.pause(); // Pause rotation on hover
    setHoveredIcon(icon); // Set the hovered icon state
  };

  const handleMouseLeave = () => {
    if (rotation) rotation.resume(); // Resume rotation on mouse leave
    setHoveredIcon(null); // Clear hovered icon state
  };

  return (
    <div className="flex justify-center items-center h-[400px] bg-gray-100 relative mt-10">
      {/* Central Icon */}
      <div className="absolute bg-white p-6 rounded-full z-0">
        <img
          src={UniPayLogo}
          alt="UniPay Logo"
          className="w-16 h-16 object-cover"
        />
      </div>

      {/* Rotating Circle with Dotted Border */}
      <div
        ref={circleRef}
        className="relative w-80 h-80 rounded-full border-2 border-dotted border-gray-400 flex justify-center items-center"
      >
        {/* Icons positioned around the circle */}
        {iconsData.map((icon) => (
          <div
            key={icon.id}
            className="absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500 bg-white"
            style={icon.style}
            onMouseEnter={() => handleMouseEnter(icon)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={icon.src} alt={icon.alt} className="w-12 h-12" />
          </div>
        ))}
      </div>

      {/* Info Card for Hovered Icon */}
      {hoveredIcon && (
        <div className="absolute bg-white p-4 rounded-md shadow-lg -top-16 left-1/2 transform -translate-x-1/2 z-0">
          <p className="text-sm text-gray-700">{hoveredIcon.info}</p>
        </div>
      )}
    </div>
  );
};

export default TechCircle;
