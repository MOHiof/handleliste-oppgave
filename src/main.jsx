// src/main.jsx
// MM: Startpunktet til hele React appen min

import React from "react";
import ReactDOM from "react-dom/client";
// MM: Global stil og oppsett fikk jeg litt hjelp av ChatGPT til.
import "./index.css";

import App from "./App.jsx";

// MM: Standard React måte å rendre hovedkomponenten på.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

