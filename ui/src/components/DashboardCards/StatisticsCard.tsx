import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const StatisticsCard = () => {
  return (
    <DashboardCard gridPosition={"4"}>
      <div className="flex items-center">
        <Badge
          title="Employees Data"
          subtitle="Most profitable employees of the month"
          iconComponent={User}
          color="#2CCBB3"
        />
        <div>

        </div>
      </div>
    </DashboardCard>
  );
};

export default StatisticsCard;
