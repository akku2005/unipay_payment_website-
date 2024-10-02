import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const GettingStarted = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-28 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-rose-500 mb-10">
            Getting Started with UniPay<span className="text-lime-500">.</span>
          </h1>

          {/* Introduction Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Welcome to UniPay!</h2>
            <p className="text-gray-300">
              Follow the steps below to easily set up your account and start
              accepting payments.
            </p>
          </section>

          {/* Steps Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Steps to Get Started
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <Step
                number="1"
                title="Create Your Account"
                description="To begin using UniPay, you'll need to create an account. Click the button below to sign up:"
                buttonText="Sign Up"
                buttonLink="/signup"
              />
              <Step
                number="2"
                title="Verify Your Email"
                description="After signing up, check your email for a verification link. Click the link to verify your email address and activate your account."
              />
              <Step
                number="3"
                title="Set Up Payment Methods"
                description="Log in to your account and navigate to the payment methods section. Add your preferred payment methods, such as credit cards or bank accounts."
              />
              <Step
                number="4"
                title="Make Your First Payment"
                description="To make your first payment, go to the payments page, enter the amount, select the payment method, and follow the prompts to complete the transaction."
              />
              <Step
                number="5"
                title="Explore Features"
                description="UniPay offers various features to enhance your payment experience. Take a moment to explore our dashboard, where you can access analytics, invoicing, and more."
              />
              <Step
                number="6"
                title="Contact Support"
                description="If you have any questions or need assistance, our customer support team is available 24/7. You can reach out via the contact form on our website or email support@unipay.com."
              />
            </div>
          </section>

          {/* Feedback Form Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-semibold mb-4">Feedback</h2>
            <p className="text-gray-300 mb-4">
              We value your feedback! Please fill out the form below to share
              your thoughts with us.
            </p>
            <form className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                  placeholder="Your Feedback"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-black text-white py-2 rounded-lg font-medium transition duration-300"
              >
                Submit Feedback
              </button>
            </form>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Step component
const Step = ({ number, title, description, buttonText, buttonLink }) => {
  return (
    <div className="mb-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
      <h3 className="text-xl font-semibold text-white">
        Step {number}: {title}
      </h3>
      <p className="text-gray-300 mt-2">{description}</p>
      {buttonText && (
        <a href={buttonLink}>
          <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300">
            {buttonText}
          </button>
        </a>
      )}
    </div>
  );
};

export default GettingStarted;
