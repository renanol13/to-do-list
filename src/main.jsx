import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StorageProvider } from "./Context/ContextStorage.jsx";
import { ThemaProvider } from "./Context/ThemaContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StorageProvider>
      <ThemaProvider>
        <App />
      </ThemaProvider>
    </StorageProvider>
  </StrictMode>
);
