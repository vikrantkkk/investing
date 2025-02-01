import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DarkModeProvider } from "./hooks/DarkModeContext.jsx";
import { WebinarProvider } from "./hooks/WebinarContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WebinarProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </WebinarProvider>
  </StrictMode>
);
