import { Outlet } from "react-router-dom";

const MainView = () => {
  return (
    <div className="main-view">
      <Outlet />
    </div>
  );
};

export default MainView;
