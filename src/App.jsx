import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";

// Lazy load your MainPageWrapper
const MainPageWrapper = lazy(() => import("./pages/MainPageWrapper"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPageWrapper />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
