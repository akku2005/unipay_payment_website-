import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const TermsOfService = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Terms of <span className="text-rose-500">Service</span>
            <span className="text-lime-500">.</span>
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              Welcome to Unipay Payment! These Terms of Service ("Terms") govern
              your access to and use of our services, including our website,
              applications, and any related services (collectively, the
              "Services"). By using our Services, you agree to comply with these
              Terms. If you do not agree with any part of these Terms, please do
              not use our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">2. Eligibility</h2>
            <p className="text-gray-300">
              To use our Services, you must be at least 18 years old or have the
              consent of a parent or guardian. By using our Services, you
              represent and warrant that you meet these eligibility
              requirements.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              3. Account Registration
            </h2>
            <p className="text-gray-300">
              To access certain features of our Services, you may be required to
              create an account. You agree to provide accurate, current, and
              complete information during the registration process and to update
              such information to keep it accurate, current, and complete.
            </p>
            <p className="text-gray-300">
              You are responsible for maintaining the confidentiality of your
              account and password and for all activities that occur under your
              account. If you suspect any unauthorized use of your account, you
              must notify us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">4. Use of Services</h2>
            <p className="text-gray-300">
              You agree to use our Services only for lawful purposes and in
              accordance with these Terms. You agree not to use our Services:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                In any way that violates any applicable federal, state, local,
                or international law or regulation.
              </li>
              <li>
                For the purpose of exploiting, harming, or attempting to exploit
                or harm others.
              </li>
              <li>
                To transmit, or procure the sending of, any advertising or
                promotional material.
              </li>
              <li>
                To engage in any other conduct that restricts or inhibits
                anyone's use or enjoyment of the Services.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">5. User Content</h2>
            <p className="text-gray-300">
              You are responsible for any content that you post, upload, or
              otherwise make available through our Services ("User Content").
              You retain all rights in your User Content, but by posting it, you
              grant us a worldwide, non-exclusive, royalty-free license to use,
              reproduce, modify, publish, and distribute it in connection with
              our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              6. Third-Party Services
            </h2>
            <p className="text-gray-300">
              Our Services may contain links to third-party websites or services
              that are not owned or controlled by Unipay Payment. We have no
              control over, and assume no responsibility for, the content,
              privacy policies, or practices of any third-party websites or
              services. We encourage you to review the terms and conditions and
              privacy policies of any third-party websites or services that you
              visit.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-300">
              To the fullest extent permitted by law, Unipay Payment shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages, including without limitation, loss of profits,
              data, use, goodwill, or other intangible losses, resulting from
              (a) your use of or inability to use our Services; (b) any
              unauthorized access to or use of our servers and/or any personal
              information stored therein; or (c) any interruption or cessation
              of transmission to or from our Services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with
              the laws of the jurisdiction in which Unipay Payment operates,
              without regard to its conflict of law provisions. Any legal action
              or proceeding arising out of or relating to these Terms shall be
              brought exclusively in the courts located within that
              jurisdiction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              9. Changes to These Terms
            </h2>
            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on our website.
              Your continued use of our Services after the posting of changes
              constitutes your acceptance of such changes.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">10. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about these Terms, please contact us at:
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

export default TermsOfService;
