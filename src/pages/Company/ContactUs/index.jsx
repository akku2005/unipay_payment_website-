import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your backend)
    console.log("Form submitted:", formData);
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-300 mb-6">
              We would love to hear from you! Please fill out the form below and
              we’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full p-2 rounded bg-gray-800 text-white"
                  placeholder="Your Message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Additional Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-300">You can also reach us through:</p>
            <ul className="list-disc list-inside text-gray-300">
              <li>Email: support@unipay.com</li>
              <li>Phone: + (91) 7420987728</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
