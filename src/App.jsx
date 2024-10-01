import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Blog from "./pages/Blog";
import DevelopersPage from "./pages/DevelopersPage";

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
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
