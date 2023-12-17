import { RiBox1Line as Box } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const RevenueCard = () => {
  return (
    <DashboardCard gridPosition={"3"}>
      <div className="flex items-center">
        <Badge
          title="Revenue"
          subtitle="Total revenue created this month"
          iconComponent={Box}
          color="#E40080"
        />
        <div></div>
      </div>
    </DashboardCard>
  );
};

export default RevenueCard;
