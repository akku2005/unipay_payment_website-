import React from "react";
import Card from "../../components/Card";
import icons from "../../constants/Ions";
import heroImage from "../../assets/images/DasjboardImage.jpg";

const Hero = () => {
  return (
    <main className="flex-1">
      <section
        className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r bg-slate-100 text-black pt-32"
        id="home"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                Unified Payment Solutions for Modern{" "}
                <span className="text-blue-500">Businesses</span>
                <span className="text-3xl text-rose-500">.</span>
              </h1>
              <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-lg text-black md:text-xl">
                Simplify your payment processes with{" "}
                <span className="text-rose-500 font-semibold">UniPay's</span>{" "}
                all-in-one platform
              </p>
            </div>
            <div className="space-x-0 sm:space-x-4 flex flex-col sm:flex-row">
              <button className="bg-gray-200 text-blue-600 hover:bg-blue-50 p-2 rounded-md mb-2 sm:mb-0">
                Start Free Trial
              </button>
              <button
                variant="outline"
                size="lg"
                className="text-blue-600 border-blue-600 hover:bg-blue-100 p-2 rounded-md"
              >
                Schedule Demo
              </button>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 mb-20">
              <Card imageSrc={icons.creditCard} text="Multiple Gateways" />
              <Card imageSrc={icons.power} text="Fast Integration" />
              <Card imageSrc={icons.padlock} text="Bank-grade Security" />
            </div>
            {/* Image at the Bottom */}
            <div className="mt-12">
              <img
                src={heroImage}
                alt="Hero bottom illustration"
                className="w-full max-w-8xl mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
