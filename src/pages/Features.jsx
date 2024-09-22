import React from "react";
import Card from "../components/Card/Card";
import icons from "../constants/Ions"; // Make sure the path is correct

const Features = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: icons.creditCard, // Use the icon from icons
              title: "Multi-Gateway Support",
              description:
                "Connect and manage multiple payment gateways from a single dashboard.",
            },
            {
              icon: icons.power, // Assuming this is an imported React component
              title: "Instant Integration",
              description:
                "Go live in minutes with our easy-to-use APIs and SDKs.",
            },
            {
              icon: icons.padlock,
              title: "Advanced Security",
              description:
                "PCI DSS compliant with fraud detection and prevention tools.",
            },
            {
              icon: icons.earthGlobe,
              title: "Global Payments",
              description:
                "Accept payments in multiple currencies from anywhere in the world.",
            },
            {
              icon: icons.insurance,
              title: "Smart Routing",
              description:
                "Automatically route transactions to the most optimal gateway.",
            },
            {
              icon: icons.briefcase,
              title: "Detailed Analytics",
              description:
                "Gain insights with comprehensive reporting and analytics tools.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
