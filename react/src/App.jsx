import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Details from "./pages/Details";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
