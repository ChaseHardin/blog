import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";

const repoName = '/';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename={repoName}>
      <App />
    </HashRouter>
  </StrictMode>
);
