import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

// 🌀 Lazy loading improves performance — load pages only when needed
const Home = React.lazy(() => import("./Pages/Home"));
const PageNotFound = React.lazy(() => import("./components/PageNotFound"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Suspense fallback to show loader while pages load */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
