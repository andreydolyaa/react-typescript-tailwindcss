import { Outlet } from "react-router-dom";

const MainView = () => {
  return (
    <div className="main-view h-full">
      <Outlet />
    </div>
  );
};

export default MainView;
