import React, { useState } from "react";

const IntegrationCard = ({ partnerName, icon, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:bg-white/20 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && icon ? (
        <img src={icon} alt={`${partnerName} logo`} className="h-7 w-7 mr-2" />
      ) : (
        <span className="text-lg font-semibold">{partnerName}</span>
      )}
    </div>
  );
};

export default IntegrationCard;
