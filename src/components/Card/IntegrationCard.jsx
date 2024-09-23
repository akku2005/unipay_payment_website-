import React, { useState } from "react";

const IntegrationCard = ({ partnerName, icon, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex items-center justify-center bg-white p-4 rounded-lg shadow-md transition-colors duration-300 hover:bg-white/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: "200px", height: "90px" }}
    >
      {/* Partner Name */}
      <span
        className={`text-lg font-semibold transition-opacity duration-300 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        {partnerName}
      </span>

      {/* Partner Icon */}
      {icon && (
        <img
          src={icon}
          alt={`${partnerName} logo`}
          className={`absolute h-14 w-14 object-contain transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }} // Center the image
        />
      )}
    </div>
  );
};

export default IntegrationCard;
