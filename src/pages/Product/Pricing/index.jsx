import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹750/month",
      features: [
        "Access to basic features",
        "Limited transactions per month",
        "Email support",
      ],
      image:
        "https://storage.googleapis.com/a1aa/image/ROFizWSezKQJJi584wEqWuFBzqGvIVNoiIaBVpGheYK4OeGnA.jpg",
    },
    {
      name: "Standard",
      price: "₹1,800/month",
      features: [
        "Access to all basic features",
        "Unlimited transactions",
        "Priority email support",
        "Monthly reports",
      ],
      image:
        "https://storage.googleapis.com/a1aa/image/TSwiAQrBwwLeSy7ZB3xkyJvUPQPZvyVe7ASq7VkMkME3OeGnA.jpg",
    },
    {
      name: "Premium",
      price: "₹4,000/month",
      features: [
        "All Standard features",
        "Advanced analytics",
        "Dedicated account manager",
        "24/7 support",
      ],
      image:
        "https://storage.googleapis.com/a1aa/image/EO5efeh2JhCliIyez5WFFdCdGp9DWZEbw5uZ1fXurhuv2xbcC.jpg",
    },
  ];

  return (
    <div>
      <Header />

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">
          Pricing <span className="text-rose-500">Plans</span>
          <span className="text-lime-500">.</span>
        </h1>

        <div className="flex space-x-1 justify-center mt-10">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 text-center w-80 ${
                plan.name === "Standard" ? "transform scale-105" : ""
              }`}
            >
              <img
                src={plan.image}
                alt={`${plan.name} plan`}
                className="mx-auto mb-4"
                width="100"
                height="100"
              />

              <h2 className="text-xl font-bold mb-2">
                {plan.name.toUpperCase()}
              </h2>

              {plan.name === "Standard" && (
                <div className="text-sm text-gray-500 mb-4">
                  Most Popular Plan
                </div>
              )}

              <ul className="text-left mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center mb-2">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <div className="text-gray-500 mb-6">Per month</div>

              <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
