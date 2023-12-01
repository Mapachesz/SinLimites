// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Importa Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min"; // Importa Bootstrap JS

// Suponiendo que estás utilizando React 18, la renderización se manejaría así:
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
