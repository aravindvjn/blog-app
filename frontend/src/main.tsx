import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Wrapper from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper />
  </StrictMode>
);
