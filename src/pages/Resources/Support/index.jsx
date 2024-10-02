import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Support = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-rose-500 mb-10">
            Support<span className="text-lime-500">.</span>
          </h1>

          {/* Support Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Need Help?</h2>
            <p className="text-gray-300">
              If you have any questions or need assistance, feel free to reach
              out to our support team. We are here to help you 24/7.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-300">You can contact us at:</p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@unipay.com"
                  className="text-blue-400 hover:underline"
                >
                  support@unipay.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <span className="text-blue-400 hover:underline">
                  +91 7420987728
                </span>
              </li>
            </ul>
            <p className="text-gray-300">
              You can also reach out to us on our social media channels:
            </p>
            <ul className="flex space-x-4 list-none mt-2">
              <li>
                <a
                  href="https://twitter.com/unipay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/unipay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/unipay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="text-3xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-6">
              <FaqItem
                question="How can I reset my password?"
                answer="You can reset your password by clicking on the 'Forgot Password' link on the login page."
              />
              <FaqItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards and PayPal."
              />
              <FaqItem
                question="How do I contact customer support?"
                answer="You can contact customer support via email or phone as mentioned above."
              />
              <FaqItem
                question="What should I do if I encounter a technical issue?"
                answer="If you face any technical issues, please contact our support team with a detailed description of the problem."
              />
              <FaqItem
                question="Can I change my subscription plan?"
                answer="Yes, you can change your subscription plan at any time through your account settings."
              />
              <FaqItem
                question="Where can I find tutorials and guides?"
                answer="You can find helpful tutorials and guides in our Documentation section."
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

// FAQ Item component
const FaqItem = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-white">{question}</h3>
    <p className="text-gray-300 mt-2">{answer}</p>
  </div>
);

export default Support;
