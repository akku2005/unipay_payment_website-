import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const CookiePolicy = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow mt-44 mb-10 text-white">
        <div className="max-w-screen-lg mx-auto px-4 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-white mb-10">
            Cookie Policy
          </h1>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-300">
              This Cookie Policy explains how Unipay Payment ("we," "us," or
              "our") uses cookies and similar tracking technologies on our
              website and applications (collectively, the "Services"). By using
              our Services, you consent to the use of cookies as described in
              this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              2. What Are Cookies?
            </h2>
            <p className="text-gray-300">
              Cookies are small text files that are placed on your device
              (computer, mobile device, etc.) when you visit a website. They are
              widely used to make websites work more efficiently, as well as to
              provide information to the website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              3. Types of Cookies We Use
            </h2>
            <p className="text-gray-300">
              We use the following types of cookies on our Services:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4">
              <li>
                <strong>Essential Cookies:</strong> These cookies are necessary
                for the website to function and cannot be turned off in our
                systems. They are usually set in response to actions made by
                you, such as setting your privacy preferences or filling out
                forms.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies help us
                understand how visitors interact with our website by collecting
                and reporting information anonymously. This helps us improve the
                performance of our Services.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies enable the
                website to provide enhanced functionality and personalization.
                They may be set by us or by third-party providers whose services
                we have added to our pages.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies may be set
                through our Services by our advertising partners. They may be
                used by those companies to build a profile of your interests and
                show you relevant ads on other sites.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">4. Managing Cookies</h2>
            <p className="text-gray-300">
              You can manage your cookie preferences at any time. Most web
              browsers allow you to control cookies through their settings
              preferences. You can choose to block or delete cookies, but this
              may affect your ability to use certain features of our Services.
            </p>
            <p className="text-gray-300">
              For more information about how to manage cookies, you can visit
              the help section of your browser or visit{" "}
              <a
                href="https://www.allaboutcookies.org/"
                className="text-blue-400"
              >
                www.allaboutcookies.org
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              5. Changes to This Cookie Policy
            </h2>
            <p className="text-gray-300">
              We may update our Cookie Policy from time to time. Any changes
              will be posted on this page with an updated effective date. We
              encourage you to review this Cookie Policy periodically to stay
              informed about our use of cookies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-4">6. Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about our Cookie Policy or our use of
              cookies, please contact us at:
            </p>
            <p className="text-gray-300">Email: support@unipay.com</p>
            <p className="text-gray-300">Phone: +(91)7420987728 </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
