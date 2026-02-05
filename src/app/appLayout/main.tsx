//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "../providers/TemeProvider.tsx";
import ReduxProvider from "../providers/ReduxProvider.tsx";
import { App } from "@/pages/home/index.ts";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <ReduxProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
);
