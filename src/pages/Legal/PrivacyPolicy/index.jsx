import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Privacy Policy
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Unipay Payment's Privacy Policy. Your privacy is
              important to us. This policy outlines how we collect, use,
              disclose, and safeguard your information when you use our
              services, including our website and applications (collectively,
              the "Services"). By using our Services, you consent to the
              practices described in this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-300">
              We may collect the following types of information:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                <strong>Personal Information:</strong> We may collect personal
                information, such as your name, email address, phone number, and
                payment details, when you create an account or make a
                transaction.
              </li>
              <li>
                <strong>Usage Information:</strong> We may collect information
                about how you use our Services, including your IP address,
                browser type, pages visited, and the time and date of your
                visit.
              </li>
              <li>
                <strong>Cookies and Tracking Technologies:</strong> We use
                cookies and similar tracking technologies to monitor activity on
                our Services and store certain information. You can instruct
                your browser to refuse all cookies or to indicate when a cookie
                is being sent.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We may use the information we collect for various purposes,
              including:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>To provide and maintain our Services.</li>
              <li>
                To process transactions and send you transaction-related
                communications.
              </li>
              <li>To improve our Services and enhance user experience.</li>
              <li>
                To communicate with you, including sending updates and
                promotional materials.
              </li>
              <li>To prevent fraud and ensure the security of our Services.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              4. Information Sharing
            </h2>
            <p className="text-gray-300">
              We do not sell or rent your personal information to third parties.
              We may share your information in the following situations:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                With service providers who assist us in operating our Services.
              </li>
              <li>
                To comply with legal obligations or respond to legal requests.
              </li>
              <li>
                In connection with a merger, acquisition, or sale of all or a
                portion of our assets.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-gray-300">
              We take the security of your information seriously and implement
              appropriate technical and organizational measures to protect your
              personal information from unauthorized access, use, or disclosure.
              However, no method of transmission over the Internet or method of
              electronic storage is 100% secure, and we cannot guarantee its
              absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">6. Your Rights</h2>
            <p className="text-gray-300">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                The right to access, update, or delete your personal
                information.
              </li>
              <li>
                The right to withdraw consent for the processing of your
                information.
              </li>
              <li>
                The right to request the transfer of your personal information
                to another service provider.
              </li>
            </ul>
            <p className="text-gray-300">
              To exercise these rights, please contact us using the information
              provided below.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on our
              website. You are advised to review this Privacy Policy
              periodically for any changes. Changes to this Privacy Policy are
              effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:support@unipay.com"
                className="text-blue-400 hover:underline"
              >
                support@unipay.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
