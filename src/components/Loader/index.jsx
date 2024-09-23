import React from "react";
import "../../styles/Loader.css";

const Loader = () => {
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className="loader-spanne-20">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
