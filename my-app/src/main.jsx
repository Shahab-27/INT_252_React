import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Hook2 from "./Hook2";
import RegForm from "./RegForm";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hook2/>
  </StrictMode>
);
