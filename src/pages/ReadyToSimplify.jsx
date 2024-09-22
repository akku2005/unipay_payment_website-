import React from "react";
import Button from "../components/Button"; // Adjust the path if needed
import "../styles/ReadyToSimplify.css"; // Import your CSS file

const ReadyToSimplify = () => {
  return (
    <section className="ready-to-simplify-section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Ready to Simplify Your Payments?
          </h2>
          <p className="max-w-[600px] text-white md:text-xl lg:text-base xl:text-xl">
            Join thousands of businesses using UniPay to streamline their
            payment processes.
          </p>
          <Button
            className="bg-white/30 backdrop-blur-md border border-white/50 text-black hover:bg-white/40 transition"
            size="lg"
          >
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToSimplify;
