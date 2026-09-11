// This is the entry point of the app. Its only job is to find the
// empty <div id="root"> sitting in index.html and mount our App
// component inside of it. Everything the user sees comes from App.

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
