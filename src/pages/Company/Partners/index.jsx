import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const partnersData = [
  {
    name: "Partner 1",
    description: "A leading provider of innovative payment solutions.",
    logo: "path/to/partner1-logo.png", // Replace with actual logo path
    website: "https://partner1.com",
  },
  {
    name: "Partner 2",
    description: "A trusted partner in financial technology.",
    logo: "path/to/partner2-logo.png", // Replace with actual logo path
    website: "https://partner2.com",
  },
  {
    name: "Partner 3",
    description: "Specializing in secure online transactions.",
    logo: "path/to/partner3-logo.png", // Replace with actual logo path
    website: "https://partner3.com",
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            Our <span className="text-rose-500">Partners</span>
            <span className="text-lime-500">.</span>
          </h1>

          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnersData.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-20 w-auto mb-4 mx-auto"
                  />
                  <h2 className="text-2xl font-semibold mb-2">
                    {partner.name}
                  </h2>
                  <p className="text-gray-300 mb-4">{partner.description}</p>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
