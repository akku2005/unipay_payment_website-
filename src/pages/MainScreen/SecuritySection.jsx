import React from "react";
import {
  ShieldCheckIcon,
  ChartBarIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline"; // New icons for back side
import "../../styles/SecuritySection.css"; // Adjust the path if necessary

import AgenciesImage from "../../assets/images/AgenciesImage.jpeg";
import FinancialImage from "../../assets/images/FinancialImage.jpeg";
import EnterpriseImage from "../../assets/images/EnterpriseImage.jpeg";

const pricingData = [
  {
    title: "Government Agencies",
    icon: <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-4" />,
    description:
      "Bring modern collaboration to federal, state & local agencies while maintaining the security of classified information.",
    frontImage: AgenciesImage,
  },
  {
    title: "Financial services",
    icon: <ChartBarIcon className="h-10 w-10 text-green-600 mx-auto mb-4" />,
    description:
      "Empower financial institutions to streamline their operations while adhering to industry compliance and security standards.",
    frontImage: FinancialImage,
  },
  {
    title: "Enterprise",
    icon: (
      <OfficeBuildingIcon className="h-10 w-10 text-purple-600 mx-auto mb-4" />
    ),
    description:
      "Provide scalable and secure solutions for large enterprises with customized integration and dedicated support.",
    frontImage: EnterpriseImage,
  },
];

const SecuritySection = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gray-100" id="about">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-medium tracking-tighter sm:text-5xl text-center mb-12">
          Built for organizations with the{" "}
          <span className="block mt-2 text-rose-500">
            strictest security standards
          </span>
        </h2>

        <p className="text-center mb-8 font-medium">
          Providing the autonomy and flexibility needed to operate in highly
          regulated environments.
        </p>

        <div className="grid gap-8 md:grid-cols-3 mt-24">
          {pricingData.map((plan, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                {/* Front side of the card */}
                <div className="card-front relative">
                  <img
                    src={plan.frontImage}
                    alt={`${plan.title} front view`}
                    className="h-full w-full object-cover rounded-lg"
                  />
                  <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl font-semibold text-center text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    {plan.title}
                  </h3>
                </div>

                {/* Back side of the card */}
                <div className="card-back p-6 bg-white rounded-lg shadow-lg">
                  {/* Icon and short description */}
                  {plan.icon}
                  <h3 className="text-lg font-semibold text-center mb-2">
                    {plan.title}
                  </h3>
                  <p className="mb-4 text-center text-gray-700">
                    {plan.description}
                  </p>

                  {/* Learn More button */}
                  <button className="mt-4 px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 w-full">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
