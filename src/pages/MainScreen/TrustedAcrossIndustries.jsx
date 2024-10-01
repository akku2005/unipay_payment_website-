import React from "react";
import TechCircle from "../../components/TechCircle"; // Import the circular design component

const TrustedAcrossIndustries = () => {
  return (
    <section
      id="features"
      className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 flex flex-col items-center"
    >
      {/* Heading Section */}
      <div className="flex flex-col items-center mb-4">
        {" "}
        {/* Adjust margin here */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center text-gray-800 ">
          Trusted Across{" "}
          <span
            className="text-rose-500 font-sans"
            style={{ fontFamily: "Dancing Script, cursive ," }}
          >
            Industries
          </span>
        </h2>
      </div>

      {/* TechCircle Section */}
      <div className="flex-1 flex justify-center mt-5">
        <TechCircle /> {/* Circular Tech Design Component */}
      </div>

      {/* Additional Information Section */}
      <div className="w-full md:w-3/4 mt-8 space-y-2 text-center">
        {" "}
        {/* Adjust margin here */}
        <h3 className="text-2xl font-semibold text-gray-800">
          Why Choose Unipay?
        </h3>
        <p className="text-lg text-gray-700">
          Unipay offers seamless integration, robust security, and unmatched
          support tailored for all industries.
        </p>
        <p className="text-lg text-gray-700">
          Our payment solutions are designed to cater to your specific needs,
          ensuring a smooth and efficient experience for your users.
        </p>
      </div>
    </section>
  );
};

export default TrustedAcrossIndustries;
