import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Features = () => {
  const features = [
    {
      title: "Easy Integration",
      description:
        "Integrate Unipay with your existing systems effortlessly using our simple API and plugins.",
      icon: "/images/easy_integration.png", // Add the correct path to your icon images
    },
    {
      title: "Secure Payments",
      description:
        "We ensure that all transactions are secure with end-to-end encryption and compliance with industry standards.",
      icon: "/images/secure_payments.png",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Gain insights into your sales and customer behavior with our real-time analytics dashboard.",
      icon: "/images/real_time_analytics.png",
    },
    {
      title: "Multi-Currency Support",
      description:
        "Accept payments in multiple currencies, making it easier to reach global customers.",
      icon: "/images/multi_currency.png",
    },
    {
      title: "Automated Invoicing",
      description:
        "Simplify your billing process with automated invoicing features tailored to your business needs.",
      icon: "/images/automated_invoicing.png",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available 24/7 to assist you with any inquiries or issues.",
      icon: "/images/customer_support.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Key Features</h1>
        <p className="text-lg mb-8">
          Explore the powerful features of Unipay that make payment processing
          easy and efficient.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="h-16 mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
