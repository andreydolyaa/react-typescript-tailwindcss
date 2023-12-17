import { RiSuitcaseLine as Suitcase } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const CustomersCard = () => {
  return (
    <DashboardCard gridPosition={"5"}>
      <div className="flex items-center">
        <Badge
          title="Customers"
          subtitle="Latest customers joined"
          iconComponent={Suitcase}
          color="#008EE4"
        />
        <div></div>
      </div>
    </DashboardCard>
  );
};

export default CustomersCard;
