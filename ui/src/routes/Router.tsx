import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import NotFound from "../pages/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import Root from "./Root";
import Employees from "../pages/Devices/Devices";

export const MainRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="employees" element={<Employees />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
