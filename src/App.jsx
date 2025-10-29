import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        {/* Dummy routes for now */}
        <Routes>
          <Route path="/" element={ <Home />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
