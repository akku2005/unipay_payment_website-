import React from "react";
import IndustriesCard from "../../components/Card/IndustriesCard"; // Correct the import path for IndustriesCard
import icons from "../../constants/Ions"; // Correct the path for icons

const TrustedAcrossIndustries = () => {
  const industriesData = [
    {
      icon: icons.shoppingCart, // Use the icon from your icons object
      title: "E-commerce",
      description: "Streamline checkout processes and boost conversions.",
    },
    {
      icon: icons.building, // Use the icon from your icons object
      title: "SaaS",
      description: "Manage subscriptions and recurring payments with ease.",
    },
    {
      icon: icons.research, // Use the icon from your icons object
      title: "Marketplaces",
      description: "Facilitate secure transactions between buyers and sellers.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-100"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl text-center mb-20">
          Trusted Across <span>Industries</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {industriesData.map((industry, index) => (
            <IndustriesCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedAcrossIndustries;
