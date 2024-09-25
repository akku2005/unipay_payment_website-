import React from "react";
import CustomersReviews from "./MainScreen/CustomersReviews";
import Features from "./MainScreen/Features";
import Hero from "./MainScreen/Hero";
import IntegrationPartners from "./MainScreen/IntegrationPartners";
import SecuritySection from "./MainScreen/SecuritySection";
import ReadyToSimplify from "./MainScreen/ReadyToSimplify";
import TrustedAcrossIndustries from "./MainScreen/TrustedAcrossIndustries";
import Header from "../components/Header";
import Footer from "../components/Footer";
const MainPageWrapper = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <IntegrationPartners />
      <TrustedAcrossIndustries />
      <CustomersReviews />
      <SecuritySection />
      <ReadyToSimplify />
      <Footer />
    </div>
  );
};

export default MainPageWrapper;
