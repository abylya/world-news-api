//import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "../providers/TemeProvider.tsx";
import ReduxProvider from "../providers/ReduxProvider.tsx";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "../appRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <ThemeProvider>
      <RouterProvider router={appRouter}></RouterProvider>
    </ThemeProvider>
  </ReduxProvider>,
);
