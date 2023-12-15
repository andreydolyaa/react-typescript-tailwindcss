import DashboardCard from "../../components/DashboardCard";
import { RiUser3Line as User } from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="dashboard h-full bg-gray-50">
      <DashboardCard title="Employees" iconComponent={User} color="purple" />
      <DashboardCard title="Employees" iconComponent={User} color="purple" />
      <DashboardCard title="Employees" iconComponent={User} color="purple" />
      {/* TODO: handle grid layout ! */}
    </div>
  );
};

export default Dashboard;
