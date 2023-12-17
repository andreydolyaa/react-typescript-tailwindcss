import { RiShakeHandsLine as Hands } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const EarningReportsCard = () => {
  return (
    <DashboardCard gridPosition={"6"}>
      <div className="flex items-center">
        <Badge
          title="Earning Reports"
          subtitle="latest closed deals"
          iconComponent={Hands}
          color="#00E4DA"
        />
        <div></div>
      </div>
    </DashboardCard>
  );
};

export default EarningReportsCard;
