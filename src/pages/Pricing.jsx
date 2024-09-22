import React from "react";

const pricingData = [
  {
    title: "Starter",
    price: "₹3,999",
    description: "Perfect for small businesses",
    features: [
      "2 Payment Gateways",
      "100 Transactions/mo",
      "Basic Analytics",
      "Email Support",
    ],
  },
  {
    title: "Growth",
    price: "₹11,999",
    description: "Ideal for growing businesses",
    features: [
      "5 Payment Gateways",
      "1000 Transactions/mo",
      "Advanced Analytics",
      "Priority Support",
      "Fraud Detection",
    ],
  },
  {
    title: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: [
      "Unlimited Gateways",
      "Unlimited Transactions",
      "Custom Integrations",
      "Dedicated Account Manager",
      "99.99% Uptime SLA",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Pricing Plans
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {pricingData.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              <p className="text-2xl font-bold text-blue-600 mb-4">
                {plan.price}
              </p>
              <p className="mb-4">{plan.description}</p>
              <ul className="list-disc list-inside mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
