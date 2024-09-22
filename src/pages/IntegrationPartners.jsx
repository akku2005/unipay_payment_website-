import React from "react";
import IntegrationCard from "../components/Card/IntegrationCard"; // Adjust the import path as necessary
import "../styles/IntegrationPartners.css"; // Import the CSS file
import paymentIcon from "../constants/PaymentIcons";

const partners = [
  { name: "Stripe", icon: paymentIcon.Stripe },
  { name: "PayPal", icon: paymentIcon.paypal },
  { name: "Razorpay", icon: paymentIcon.Razorpay },
  { name: "Square", icon: paymentIcon.square },
  { name: "Authorize.net", icon: paymentIcon.AuthorizeNet },
];

const IntegrationPartners = () => {
  return (
    <section
      id="integrations"
      className="w-full py-12 md:py-24 lg:py-32 bg-white justify-center items-center"
    >
      <div className="container px-4 md:px-6 integration-container relative">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Integration Partners
        </h2>

        <div className="blur-effect left-blur" />
        <div className="blur-effect right-blur" />

        <div className="scroll-wrapper">
          {/* Render partners twice for continuous scrolling */}
          <div className="flex">
            {partners.map(({ name, icon }) => (
              <div className="partner" key={name}>
                <IntegrationCard
                  partnerName={name}
                  icon={icon}
                  className="w-full"
                />
              </div>
            ))}
          </div>
          <div className="flex">
            {partners.map(({ name, icon }) => (
              <div className="partner" key={name}>
                <IntegrationCard
                  partnerName={name}
                  icon={icon}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;
