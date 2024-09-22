import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import IntegrationPartners from "./pages/IntegrationPartners";
import TrustedAcrossIndustries from "./pages/TrustedAcrossIndustries";
import CustomersReviews from "./pages/CustomersReviews";
import Pricing from "./pages/Pricing";
import ReadyToSimplify from "./pages/ReadyToSimplify";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Features />
      <IntegrationPartners />
      <TrustedAcrossIndustries />
      <CustomersReviews />
      <Pricing />
      <ReadyToSimplify />
      <Footer />
      {/* <Routes>
        <Route></Route>
      </Routes> */}
    </Router>
  );
}

export default App;
