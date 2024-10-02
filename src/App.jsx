import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Blog from "./pages/Resources/Blog";
import DevelopersPage from "./pages/Resources/DevelopersPage";
import Support from "./pages/Resources/Support";
import Documentation from "./pages/Resources/DocumentationPage";
import Legal from "./pages/Legal";
import Company from "./pages/Company";
import Product from "./pages/Product";
import GettingStarted from "./pages/GettingStarted";
import Signup from "./pages/Auth/SignUp";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";

// Lazy load your MainPageWrapper
const MainPageWrapper = lazy(() => import("./pages/MainPageWrapper"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPageWrapper />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/documentation" element={<Documentation />} />

          <Route path="/legal/compliance" element={<Legal.Compliance />} />
          <Route path="/legal/cookie-policy" element={<Legal.CookiePolicy />} />
          <Route
            path="/legal/privacy-policy"
            element={<Legal.PrivacyPolicy />}
          />
          <Route
            path="/legal/terms-of-service"
            element={<Legal.TermsOfService />}
          />

          {/* Company Pages */}
          <Route path="/about-us" element={<Company.AboutUs />} />
          <Route path="/careers" element={<Company.Careers />} />
          <Route path="/contact-us" element={<Company.ContactUs />} />
          <Route path="/partners" element={<Company.Partners />} />
          {/* product page */}
          <Route path="/features" element={<Product.Features />} />
          <Route path="/integrations" element={<Product.Integrations />} />
          <Route path="/pricing" element={<Product.Pricing />} />
          <Route path="/faq" element={<Product.FAQ />} />
          {/* Getting start page */}
          <Route path="/getting-started" element={<GettingStarted />} />
          {/* Signup page */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
