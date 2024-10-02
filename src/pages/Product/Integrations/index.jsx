import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Integrations = () => {
  const integrations = [
    {
      name: "PayPal",
      description: "Seamlessly accept payments from millions of PayPal users.",
      logo: "/images/paypal.png", // Add the correct path to your logo images
    },
    {
      name: "Stripe",
      description: "Connect with Stripe for hassle-free online payments.",
      logo: "/images/stripe.png",
    },
    {
      name: "WooCommerce",
      description: "Integrate with WooCommerce to manage your online store.",
      logo: "/images/woocommerce.png",
    },
    {
      name: "Shopify",
      description: "Easily set up and manage your Shopify store with Unipay.",
      logo: "/images/shopify.png",
    },
    {
      name: "QuickBooks",
      description: "Automate your accounting with QuickBooks integration.",
      logo: "/images/quickbooks.png",
    },
    {
      name: "Zapier",
      description: "Connect Unipay to over 2000+ apps through Zapier.",
      logo: "/images/zapier.png",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6">Integrations</h1>
        <p className="text-lg mb-6">
          Connect Unipay with your favorite platforms for a seamless experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={integration.logo}
                alt={`${integration.name} logo`}
                className="h-16 mb-4 mx-auto"
              />
              <h2 className="text-xl font-bold mb-2">{integration.name}</h2>
              <p className="text-gray-700">{integration.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Integrations;
