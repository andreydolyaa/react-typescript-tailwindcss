import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
