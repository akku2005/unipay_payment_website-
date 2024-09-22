import React from "react";

const Card = ({ imageSrc, text, className }) => {
  return (
    <div
      className={`flex items-center text-black bg-white/30 border border-white/20 backdrop-blur-lg p-2 rounded-md ${className} gap-2 mt-5 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-white/40 hover:border-white/30 hover:backdrop-blur-xl hover:shadow-xl z-2`}
    >
      <img src={imageSrc} alt={text} className="w-8 h-8 object-cover" />
      <span className="text-lg font-semibold">{text}</span>
    </div>
  );
};

export default Card;
