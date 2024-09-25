import React, { useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import icons from "../../constants/Ions"; // Ensure the path is correct
import gsap from "gsap";

const Features = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");

          if (entry.isIntersecting) {
            const direction = index % 2 === 0 ? -50 : 50; // Alternate directions (reduce the distance)

            // Animate the card entering the viewport
            gsap.fromTo(
              entry.target,
              { x: direction, opacity: 0 }, // Starting position
              { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" } // Ending position
            );

            // Unobserve after animation
            observer.unobserve(entry.target);
          } else {
            // Reset the card position when it goes out of view
            gsap.set(entry.target, { x: 0, opacity: 0 }); // Reset position to avoid layout shift
            observer.observe(entry.target); // Re-observe to allow animation again
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the card is visible
    );

    // Observe all cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card); // Unobserve on cleanup
      });
    };
  }, []);

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="flex justify-center" // Centering the card on smaller screens
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
