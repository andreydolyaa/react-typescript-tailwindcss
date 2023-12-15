import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainView from "../components/MainView";
import { useLocation } from "react-router-dom";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("dashboard");
    }
  }, [navigate]);
  return (
    <div className="root-page h-full">
      <Header />
      <Sidebar />
      <MainView /> {/* <--- outlet */}
    </div>
  );
};

export default Root;
