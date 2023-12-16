import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const CustomersCard = () => {
  return (
    <DashboardCard gridPosition={"3"}>
      <div className="flex items-center">
        <Badge
          title="Customers"
          subtitle="Customers Subtitle"
          iconComponent={User}
          color="#2CCBB3"
        />
        <h1>sdfdsf</h1>
      </div>
    </DashboardCard>
  );
};

export default CustomersCard;
