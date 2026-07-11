import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { PortfolioPage } from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <PortfolioPage />
    </StrictMode>,
  );
}