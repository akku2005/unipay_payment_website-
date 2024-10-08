import React, { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div
    className={`faq-item border-b border-gray-300 p-4 ${isOpen ? "open" : ""}`}
    onClick={onClick}
  >
    <div className="faq-question flex justify-between items-center cursor-pointer text-lg font-bold">
      {question}
      <span>{isOpen ? "✕" : "＋"}</span>
    </div>
    {isOpen && <div className="faq-answer text-gray-700 mt-2">{answer}</div>}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is UniPay?",
      answer:
        "UniPay is a payment platform that allows users to make and receive payments securely and efficiently. We offer a variety of payment solutions for businesses and individuals.",
    },
    {
      question: "How do I create an account?",
      answer:
        "To create an account, visit our signup page, fill in the required details, and follow the instructions in the confirmation email to verify your account.",
    },
    {
      question: "What payment methods does UniPay support?",
      answer:
        "UniPay supports multiple payment methods, including credit cards, debit cards, and bank transfers. You can view the complete list of supported methods on our payment options page.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we take security seriously. All payment information is encrypted and processed through secure channels to ensure your data is protected.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via the contact form on our website or by emailing support@unipay.com. Our team is available 24/7 to assist you.",
    },
    {
      question: "Are there any fees associated with using UniPay?",
      answer:
        "UniPay has a transparent fee structure. You can find detailed information about our fees on the pricing page of our website.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "If you've forgotten your password, click on the 'Forgot Password?' link on the login page and follow the instructions to reset your password.",
    },
    {
      question: "Can I use UniPay internationally?",
      answer:
        "Yes, UniPay supports international payments. However, additional fees may apply depending on the currencies involved.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold mb-6 mt-16 text-center">
          Frequently Asked <span className="text-rose-500">Questions</span>
          <span className="text-lime-500">.</span>
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;
