import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import MainView from "../components/MainView";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import { useAppSelector } from "../hooks/useAppSelector";
// import { createWebSocketConnection, sendWebSocketMessage } from "../services/websocket";
// import { closeConnection } from "../features/websocket/websocketSlice";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const dispatch = useAppDispatch();
  // const { connection, isConnected } = useAppSelector((state) => state.websocket);

  // useEffect(() => {
  //   let socket: WebSocket | null;

  //   if (!isConnected) {
  //     socket = createWebSocketConnection(dispatch);
  //   }
  //   return () => {
  //     if (socket) {
  //       socket.close();
  //       dispatch(closeConnection());
  //     }
  //   };
  // }, [dispatch, isConnected]);

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
