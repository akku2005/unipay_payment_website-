import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-10">
            About <span className="text-rose-500">Us</span>
            <span className="text-lime-500">.</span>
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At UniPay, our mission is to simplify digital payments for
              everyone. We strive to provide a secure, efficient, and
              user-friendly payment solution that caters to the needs of
              businesses and consumers alike.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              Our vision is to become a global leader in the payment processing
              industry, empowering businesses of all sizes to thrive in a
              digital-first economy. We envision a world where payments are
              seamless, secure, and accessible to all.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>
                Integrity: We conduct our business with honesty and
                transparency.
              </li>
              <li>
                Innovation: We embrace change and continually strive to improve
                our services.
              </li>
              <li>
                Customer Focus: Our customers are at the heart of everything we
                do.
              </li>
              <li>
                Collaboration: We believe in teamwork and the power of
                collective efforts.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
            <p className="text-gray-300">
              Our team is composed of experienced professionals dedicated to
              providing exceptional service and support. Together, we work to
              ensure that our customers receive the best possible experience
              when using our platform.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">Join Us</h2>
            <p className="text-gray-300">
              We are always looking for passionate individuals to join our team.
              If you're interested in being part of a dynamic and innovative
              company, check out our{" "}
              <a href="/careers" className="text-blue-500 hover:underline">
                Careers
              </a>{" "}
              page.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
