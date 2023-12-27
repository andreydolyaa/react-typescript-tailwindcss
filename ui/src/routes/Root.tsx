import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainView from "../components/MainView";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";

const Root = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch({
      type: "WEBSOCKET_CONNECT"
    })
    // return () => {
    //   dispatch({
    //     type: "WEBSOCKET_DISCONNECT"
    //   })
    // }
  },[])


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
