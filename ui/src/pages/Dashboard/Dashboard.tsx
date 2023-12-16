// import DashboardCard from "../../components/DashboardCards/DashboardCard";
// import { RiUser3Line as User } from "react-icons/ri";
import DashboardGraph from "../../components/DashboardGraph";
// import Badge from "../../components/Badge";
import StatisticsCard from "../../components/DashboardCards/StatisticsCard";
import ProfitCard from "../../components/DashboardCards/ProfitCard";
import ExpensesCard from "../../components/DashboardCards/ExpensesCard";
import CustomersCard from "../../components/DashboardCards/CustomersCard";
import RevenueCard from "../../components/DashboardCards/RevenueCard";
import EarningReportsCard from "../../components/DashboardCards/EarningReportsCard";

const Dashboard = () => {
  return (
    <div className="dashboard h-full bg-gray-100 flex items-center justify-center">
      <div className="dashboard-container h-full w-full p-5">
        <ProfitCard />
        <ExpensesCard />
        <CustomersCard />
        <StatisticsCard />
        <RevenueCard />
        <DashboardGraph />
        <EarningReportsCard />
      </div>
    </div>
  );
};

export default Dashboard;
