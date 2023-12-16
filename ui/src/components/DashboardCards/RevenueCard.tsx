import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const RevenueCard = () => {
  return (
    <DashboardCard gridPosition={"5"}>
      <div className="flex items-center">
        <Badge
          title="Revenue"
          subtitle="Revenue Subtitle"
          iconComponent={User}
          color="#2CCBB3"
        />
        <h1>sdfdsf</h1>
      </div>
    </DashboardCard>
  );
};

export default RevenueCard;
