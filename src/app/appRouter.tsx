import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import { Main } from "@/pages/home";
import { NewsPage } from "@/pages/newsPage";

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout></BaseLayout>,
    errorElement: (
      <div>
        <h1>error</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Main></Main> },
      { path: "/news/:id", element: <NewsPage></NewsPage> },
    ],
  },
]);
