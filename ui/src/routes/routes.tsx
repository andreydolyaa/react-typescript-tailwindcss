import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard";
import Root from "./Root";
import Users from "../pages/Users";

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
      {
        path: "users",
        element: <Users />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
