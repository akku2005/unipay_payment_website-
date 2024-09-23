import React from "react";
import Card from "../components/Card";
import icons from "../constants/Ions";
import heroImage from "../assets/images/DasjboardImage.jpg"; // Replace with the actual path of your image

const Hero = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r bg-slate-100 text-black pt-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                Unified Payment Solutions for Modern Businesses
              </h1>
              <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-lg text-black md:text-xl">
                Simplify your payment processes with UniPay's all-in-one
                platform
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

// import React from "react";
// import Card from "../components/Card";
// import icons from "../constants/Ions";
// import backgroundImage from "../assets/icons/HeroBackground.jpg"; // Adjust the path to your image

// const Hero = () => {
//   return (
//     <main className="flex-1 ">
//       <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 text-white bg-cover bg-center">
//         {/* Background Image with Blur */}
//         <div
//           className="absolute inset-0 bg-cover bg-center mt-12"
//           style={{
//             backgroundImage: `url(${backgroundImage})`,
//             filter: "blur(10px)", // Adjust the blur amount here
//             zIndex: 2, // Set zIndex to 2 for the image
//             backgroundSize: "cover", // Ensures the image covers the section
//           }}
//         />
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50" />

//         {/* Content Container */}
//         <div
//           className="container px-4 md:px-6 relative z-20"
//           style={{ zIndex: 2 }}
//         >
//           <div className="flex flex-col items-center space-y-4 text-center">
//             <div className="space-y-2">
//               <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
//                 Unified Payment Solutions for Modern Businesses
//               </h1>
//               <p className="mx-auto max-w-[700px] text-xl text-blue-100 md:text-2xl">
//                 Simplify your payment processes with UniPay's all-in-one
//                 platform
//               </p>
//             </div>
//             <div className="space-x-8">
//               <button className="bg-white text-blue-600 hover:bg-blue-50 p-2 rounded-md">
//                 Start Free Trial
//               </button>
//               <button
//                 variant="outline"
//                 size="lg"
//                 className="text-white border-white hover:bg-white/10 p-2 rounded-md"
//               >
//                 Schedule Demo
//               </button>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
//               <Card imageSrc={icons.creditCard} text="Multiple Gateways" />
//               <Card imageSrc={icons.power} text="Fast Integration" />
//               <Card imageSrc={icons.padlock} text="Bank-grade Security" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default Hero;
