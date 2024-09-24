import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid"; // Import Heroicons
import CustomerReview from "../../components/Card/CustomerReview"; // Ensure the path is correct
import avatar1 from "../../assets/icons/man.png"; // Adjust the path for avatar1
import avatar2 from "../../assets/icons/924915.png"; // Adjust the path for avatar2

const CustomerReviews = () => {
  const reviews = [
    {
      avatar: avatar1,
      review: "This product changed my life! Highly recommend.",
      name: "John Doe",
      rating: 5,
      company: "Tech Solutions",
    },
    {
      avatar: avatar2,
      review: "Great service and support!",
      name: "Jane Smith",
      rating: 3,
      company: "Creative Agency",
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="w-full py-8 sm:py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-8 sm:mb-12">
          What Our{" "}
          <span style={{ fontFamily: "Dancing Script, cursive" }}>
            Customers Say
          </span>
        </h2>
        <div className="flex flex-col items-center justify-center">
          <CustomerReview {...reviews[currentReviewIndex]} />

          <div className="flex justify-center w-full mt-4 space-x-4">
            <button
              onClick={handlePrev}
              className="bg-gray-100 text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <ChevronLeftIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            <div className="flex mt-4 space-x-2">
              {reviews.map((_, index) => (
                <div
                  key={index}
                  className={`w-5 h-2 rounded-full ${
                    index === currentReviewIndex ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="bg-gray-100 text-black rounded-full p-2 hover:bg-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            >
              <ChevronRightIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
