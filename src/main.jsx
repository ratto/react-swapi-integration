import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./templates/App/index";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
