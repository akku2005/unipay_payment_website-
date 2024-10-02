import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const Compliance = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Compliance
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              At Unipay Payment, we are committed to maintaining the highest
              standards of compliance with applicable laws and regulations. This
              page outlines our compliance framework and the measures we take to
              ensure the security and integrity of our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              2. Regulatory Compliance
            </h2>
            <p className="text-gray-300">
              We adhere to all relevant regulations governing payment processing
              and data protection. This includes compliance with:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                <strong>
                  Payment Card Industry Data Security Standard (PCI DSS):
                </strong>{" "}
                We follow the PCI DSS requirements to ensure that all payment
                card information is securely processed and stored.
              </li>
              <li>
                <strong>General Data Protection Regulation (GDPR):</strong> We
                are committed to protecting the personal data of our users and
                ensuring compliance with GDPR, including obtaining consent for
                data processing and enabling users to exercise their rights.
              </li>
              <li>
                <strong>Anti-Money Laundering (AML) Regulations:</strong> We
                have established robust policies and procedures to prevent money
                laundering and to comply with applicable AML laws.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              3. Data Protection and Privacy
            </h2>
            <p className="text-gray-300">
              We prioritize the protection of our users' personal data. Our data
              protection policies include:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                Regular data protection assessments to identify and mitigate
                risks.
              </li>
              <li>
                Implementation of strong encryption and security measures to
                protect sensitive data.
              </li>
              <li>
                Training our employees on data protection and privacy best
                practices.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              4. Compliance Monitoring
            </h2>
            <p className="text-gray-300">
              We continuously monitor our compliance with applicable laws and
              regulations through:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                Regular audits and assessments of our compliance practices.
              </li>
              <li>
                Ongoing training and awareness programs for our employees.
              </li>
              <li>
                Collaborating with external experts to ensure best practices are
                followed.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              5. Reporting and Feedback
            </h2>
            <p className="text-gray-300">
              We encourage our users to report any concerns regarding compliance
              or data protection. You can contact us through the following
              methods:
            </p>
            <p className="text-gray-300">Email: support@unipay.com</p>
            <p className="text-gray-300">Phone: + (91) 7420987728</p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              6. Changes to This Compliance Page
            </h2>
            <p className="text-gray-300">
              We may update this Compliance Page from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this page periodically to stay informed about our
              compliance efforts.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Compliance;
