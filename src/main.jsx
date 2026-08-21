import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./i18n";
import "./styles/index.css";

// Suppress browser-level intervention notices from polluting the console
if (typeof window !== "undefined") {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("[Intervention]")) return;
    originalWarn.apply(console, args);
  };
  const originalInfo = console.info;
  console.info = (...args) => {
    if (typeof args[0] === "string" && args[0].includes("[Intervention]")) return;
    originalInfo.apply(console, args);
  };
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
