import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { initProtection } from "./utils/protection";

// Initialize simple anti-clone protection
initProtection({
  disableRightClickMenu: true,
  detectDevTools: true,
  addCopyrightWatermark: true
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
