import React from "react";

const Card = ({ icon, title, description, className }) => {
  return (
    <div className={` bg-white rounded-lg shadow-md p-5 h-auto ${className}`}>
      <div className="flex flex-col items-start mb-8">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="h-8 w-8 mb-2 text-blue-500" />
        ) : (
          icon && <icon className="h-8 w-8 mb-2 text-blue-600" />
        )}
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
