// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import HomeContextProvider from "./context/HomeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeContextProvider>
      <Router>
        <App />
      </Router>
    </HomeContextProvider>
  </StrictMode>
);
