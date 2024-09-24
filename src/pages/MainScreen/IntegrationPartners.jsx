import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import IntegrationCard from "../../components/Card/IntegrationCard";
import "../../styles/IntegrationPartners.css";
import paymentIcon from "../../constants/PaymentIcons";
import illustration from "../../assets/icons/curved-arrow-shape.png"; // Adjust the path to your illustration

const partners = [
  { name: "Stripe", icon: paymentIcon.Stripe },
  { name: "PayPal", icon: paymentIcon.paypal },
  { name: "Razorpay", icon: paymentIcon.Razorpay },
  { name: "Square", icon: paymentIcon.square },
  { name: "Authorize.net", icon: paymentIcon.AuthorizeNet },
];

const IntegrationPartners = () => {
  const illustrationRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Create a timeline that repeats indefinitely

    tl.to(illustrationRef.current, {
      opacity: 1, // Fade in
      duration: 2,
      ease: "power1.inOut",
    }).to(illustrationRef.current, {
      opacity: 0, // Fade out
      duration: 2,
      ease: "power1.inOut",
    });

    return () => {
      tl.kill(); // Clean up on component unmount
    };
  }, []);

  return (
    <section
      id="integrations"
      className="w-full py-12 md:py-24 lg:py-32 justify-center items-center"
      style={{
        background:
          "linear-gradient(to right, rgba(249, 250, 251, 1), rgba(249, 250, 251, 0))",
      }}
    >
      <div className="container px-4 md:px-6 integration-container relative">
        <h2 className="text-3xl font-semibold tracking-tighter sm:text-5xl text-center mb-12 relative ">
          Integration{" "}
          <span style={{ fontFamily: "Dancing Script, cursive" }}>
            Partners
          </span>
          <img
            src={illustration}
            alt="Highlight Illustration"
            ref={illustrationRef}
            className="inline-block w-24 ml-10 mb-12 mt-10 hide-on-mobile" // Add the class to hide on mobile
            style={{
              opacity: 0, // Start with 0 opacity
              transform: "rotate(-50deg)", // Rotate the image
              position: "relative",
              top: "-20px",
            }}
          />
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
