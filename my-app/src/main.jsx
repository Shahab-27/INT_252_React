import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Event from "./Event";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Event/>
  </StrictMode>
);
