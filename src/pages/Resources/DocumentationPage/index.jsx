import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Documentation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the API key request form
    console.log(formData);
    alert("API key request submitted!");
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-28 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Unipay Payment
            <span className="text-rose-500"> API Documentation</span>
            <span className="text-lime-500">.</span>
          </h1>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300">
              Welcome to the Unipay Payment API documentation. Our API allows
              you to securely process payments, manage transactions, and
              retrieve payment history. This guide will walk you through the
              steps of setting up and integrating the Unipay Payment API.
            </p>
          </section>

          {/* API Overview Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">API Overview</h2>
            <p className="text-gray-300 mb-4">
              The Unipay Payment API provides RESTful endpoints to access
              various payment-related features. It supports JSON format for
              requests and responses.
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Payment Processing</li>
              <li>Transaction Management</li>
              <li>Payment History Retrieval</li>
              <li>Refund Processing</li>
            </ul>
          </section>

          {/* Authentication Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Authentication</h2>
            <p className="text-gray-300">
              All API requests must include an API key in the request headers.
              You can request an API key by filling out the form below. Once you
              receive your API key, include it in the `Authorization` header as
              shown:
            </p>
            <code className="block bg-gray-800 text-gray-200 rounded-lg p-4 mt-4">
              Authorization: Bearer &lt;Your-API-Key&gt;
            </code>
          </section>

          {/* Endpoints Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Endpoints</h2>

            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Payment Processing
              </h3>
              <code className="block bg-gray-800 text-gray-200 rounded-lg p-4 mb-4">
                POST /api/v1/payments
              </code>
              <p className="text-gray-300 mb-4">
                Initiates a payment process. Requires authentication and
                transaction details in the request body.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Transaction History
              </h3>
              <code className="block bg-gray-800 text-gray-200 rounded-lg p-4 mb-4">
                GET /api/v1/transactions
              </code>
              <p className="text-gray-300 mb-4">
                Retrieves the list of all transactions. Supports filtering by
                date range and status.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                Refund a Payment
              </h3>
              <code className="block bg-gray-800 text-gray-200 rounded-lg p-4 mb-4">
                POST /api/v1/refunds
              </code>
              <p className="text-gray-300">
                Initiates a refund for a specific transaction. Requires the
                transaction ID in the request body.
              </p>
            </div>
          </section>

          {/* Error Handling Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Error Handling</h2>
            <p className="text-gray-300">
              The API returns appropriate HTTP status codes and error messages
              for every request. Common status codes include:
            </p>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                <strong>200 OK:</strong> The request was successful.
              </li>
              <li>
                <strong>400 Bad Request:</strong> The request was invalid or
                missing required parameters.
              </li>
              <li>
                <strong>401 Unauthorized:</strong> The API key is missing or
                invalid.
              </li>
              <li>
                <strong>500 Internal Server Error:</strong> An error occurred on
                the server.
              </li>
            </ul>
          </section>

          {/* API Key Request Form */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Request an API Key</h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-200 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-200 font-medium mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-700 rounded-lg text-gray-200 bg-gray-800 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-black text-white py-2 rounded-lg font-medium transition duration-300"
                >
                  Request API Key
                </button>
              </form>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <FaqItem
                question="How do I reset my API key?"
                answer="You can reset your API key by navigating to the API settings in your dashboard."
              />
              <FaqItem
                question="What is the rate limit for API requests?"
                answer="The API allows 1000 requests per hour per account."
              />
              <FaqItem
                question="Is the API free to use?"
                answer="The Unipay Payment API offers a free tier with limited access. For more extensive usage, you can upgrade to a paid plan."
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// FAQ Item component
const FaqItem = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-white">{question}</h3>
    <p className="text-gray-300 mt-2">{answer}</p>
  </div>
);

export default Documentation;
