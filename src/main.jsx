import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { initProtection } from "./utils/protection";

// Initialize simple anti-clone protection
// Chỉ cảnh báo, không block DevTools (để bạn có thể debug)
initProtection({
  detectDevTools: true,
  addCopyrightWatermark: true
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
