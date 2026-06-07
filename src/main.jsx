import React from "react";
import { createRoot } from "react-dom/client";
import TDEECalculator from "./TDEECalculator.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TDEECalculator />
  </React.StrictMode>
);
