import React from "react";

const CustomerReview = ({ avatar, review, name, rating, company }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? "text-yellow-500" : "text-gray-300"}
    >
      ★
    </span>
  ));

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img
        src={avatar}
        alt={`${name}'s avatar`}
        className="h-16 w-16 rounded-full mx-[250px] mb-4 items-center"
      />
      <p className="text-gray-700 mb-4">"{review}"</p>
      <h3 className="text-lg font-semibold">{name}</h3>
      <div className="flex justify-center mb-2">{stars}</div>
      <p className="text-sm text-gray-500">{company}</p>
    </div>
  );
};

export default CustomerReview;
