import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainView from "../components/MainView";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);
  return (
    <div className="root-page">
      <Header />
      <Sidebar />
      <MainView /> {/* <--- outlet */}
    </div>
  );
};

export default Root;
