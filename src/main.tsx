import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const repoName = '/blog';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={repoName}>
      <App />
    </BrowserRouter>
  </StrictMode>
);
