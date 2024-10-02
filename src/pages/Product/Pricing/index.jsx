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
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Pricing Plans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-bold mb-4">{plan.name}</h2>
              <p className="text-2xl font-semibold mb-4">{plan.price}</p>
              <ul className="list-disc pl-5 mb-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300">
                Sign Up
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
