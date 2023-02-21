import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PaginationProvider } from "./components/context/PaginationContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PaginationProvider>
      <App />
    </PaginationProvider>
  </React.StrictMode>
);
