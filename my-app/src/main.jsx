import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Student from "./Student.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Student name="Shahab Fardeen" section="K23KM" />
  </StrictMode>
);
