import React from "react";

const IndustriesCard = ({ icon, title, description }) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      {/* Icon Section */}
      <div className="relative mx-4 -mt-6 h-40 flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 to-black shadow-lg shadow-pink-500/40 transform transition-transform duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-pink-700 hover:to-gray-900">
        {typeof icon === "string" ? (
          <img src={icon} alt={title} className="h-16 w-16 text-white" />
        ) : (
          icon && <icon className="h-16 w-16 text-white" />
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>

      {/* Button Section */}
      <div className="p-6 pt-0">
        <button
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default IndustriesCard;
