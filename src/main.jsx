import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Builder from "./Builder.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NextUIProvider>
      <AnimatePresence>
        <Router>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/builder" element={<Builder />} />
          </Routes>
        </Router>
      </AnimatePresence>
    </NextUIProvider>
  </StrictMode>
);
