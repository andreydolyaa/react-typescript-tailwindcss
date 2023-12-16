import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const StatisticsCard = () => {
  return (
    <DashboardCard gridPosition={"4"}>
      <div className="flex items-center">
        <Badge
          title="Employees"
          subtitle="Employees Subtitle"
          iconComponent={User}
          color="#2CCBB3"
        />
        <h1>sdfdsf</h1>
      </div>
    </DashboardCard>
  );
};

export default StatisticsCard;
