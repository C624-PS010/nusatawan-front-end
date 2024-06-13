import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GlobalStateProvider } from "./context/GlobalStateContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>
);
