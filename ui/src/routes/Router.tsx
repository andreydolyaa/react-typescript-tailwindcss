import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "./Root";
import Users from "../pages/Users";
import { getEmployees } from "../features/employees/employeesSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

export const MainRouter = () => {
  const dispatch = useAppDispatch();
  const loadEmployees = () => dispatch(getEmployees());
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "dashboard",
          loader: loadEmployees,
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
  return <RouterProvider router={router} />;
};
