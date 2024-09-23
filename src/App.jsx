import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Lazy load the pages
const Hero = lazy(() => import("./pages/Hero"));
const Features = lazy(() => import("./pages/Features"));
const IntegrationPartners = lazy(() => import("./pages/IntegrationPartners"));
const TrustedAcrossIndustries = lazy(() =>
  import("./pages/TrustedAcrossIndustries")
);
const CustomersReviews = lazy(() => import("./pages/CustomersReviews"));
const Pricing = lazy(() => import("./pages/Pricing"));
const ReadyToSimplify = lazy(() => import("./pages/ReadyToSimplify"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
import Loader from "./components/Loader";

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Header />
        <Hero />
        <Features />
        <IntegrationPartners />
        <TrustedAcrossIndustries />
        <CustomersReviews />
        <Pricing />
        <ReadyToSimplify />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
