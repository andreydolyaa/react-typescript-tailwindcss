import { RiUser3Line as User } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";

const ExpensesCard = () => {
  return (
    <DashboardCard gridPosition={"2"}>
      <div className="flex items-center">
        <Badge
          title="Expenses"
          subtitle="Expenses Subtitle"
          iconComponent={User}
          color="#2CCBB3"
        />
        <h1>sdfdsf</h1>
      </div>
    </DashboardCard>
  );
};

export default ExpensesCard;
