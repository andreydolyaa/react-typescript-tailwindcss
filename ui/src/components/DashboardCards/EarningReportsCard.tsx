import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const EarningReportsCard = () => {
  return (
    <DashboardCard gridPosition={"6"}>
      <div className="flex items-center">
        <Badge
          title="Earning Reports"
          subtitle="Earning Reports Subtitle"
          iconComponent={User}
          color="#2CCBB3"
        />
        <h1>sdfdsf</h1>
      </div>
    </DashboardCard>
  );
};

export default EarningReportsCard;
