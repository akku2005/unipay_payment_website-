import React, { useEffect, useRef } from "react";
import Card from "../components/Card/Card";
import icons from "../constants/Ions"; // Ensure the path is correct
import gsap from "gsap";

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");

          if (entry.isIntersecting) {
            const direction = index % 4 === 0 ? -100 : 100; // Alternate directions

            // Animate the card entering the viewport
            gsap.fromTo(
              entry.target,
              { x: direction, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
            );

            // Optionally, unobserve after animation
            observer.unobserve(entry.target);
          } else {
            // Reset the card position when it goes out of view
            const direction = index % 4 === 0 ? -100 : 100; // Reset direction
            gsap.set(entry.target, { x: direction, opacity: 0 });

            // Re-observe the card to allow animation again
            observer.observe(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    ); // Trigger when 50% of the card is visible

    cardsRef.current.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: icons.creditCard,
              title: "Multi-Gateway Support",
              description:
                "Connect and manage multiple payment gateways from a single dashboard.",
            },
            {
              icon: icons.power,
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
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)} // Store the reference for each card
              data-index={index} // Add data attribute for index
            >
              <Card
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
