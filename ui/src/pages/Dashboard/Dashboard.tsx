import DashboardCard from "../../components/DashboardCard";
import { RiUser3Line as User } from "react-icons/ri";
import DashboardGraph from "../../components/DashboardGraph";

const Dashboard = () => {
  return (
    <div className="dashboard h-full bg-gray-100 flex items-center justify-center">
      <div className="dashboard-container h-full w-full p-5">
        <DashboardCard
          title="Employees"
          iconComponent={User}
          color="purple"
          gridPosition={"1"}
        />
        <DashboardCard
          title="Employees"
          iconComponent={User}
          color="purple"
          gridPosition={"2"}
        />
        <DashboardCard
          title="Employees"
          iconComponent={User}
          color="purple"
          gridPosition={"3"}
        />
        <DashboardCard
          title="Employees"
          iconComponent={User}
          color="purple"
          gridPosition={"4"}
        />
        <DashboardCard
          title="Employees"
          iconComponent={User}
          color="purple"
          gridPosition={"5"}
        />
        <DashboardGraph />
      </div>
      {/* TODO: handle grid layout ! */}
    </div>
  );
};

export default Dashboard;
