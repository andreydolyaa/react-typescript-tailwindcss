import ReactApexChart from "react-apexcharts";
import { RiLineChartLine as Line } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";
import { useChartOptions } from "../../hooks/useChartOptions";
import { useState } from "react";

const ExpensesCard = () => {
  // TODO: change this data

  const [chartSeries, setChartSeries] = useState([
    {
      name: "This Month",
      data: [
        77, 300000, 1677, 6700, 12, 3333, 12, 100313, 22341, 222222, 4444, 2312, 33224,
        442, 1, 323, 33, 6666, 342, 100000, 4324, 5523,
      ],
    },
  ]);
  const chartOptions = useChartOptions({
    type: "area",
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    lineColors: ["#FF9B00"],
    lineWidth: 2,
    pointsWidth: 3,
    curve: "smooth",
    pointShape: "circle",
    xaxisShowLabels: true,
    yaxisShowLabels: true,
  });
  return (
    <DashboardCard gridPosition={"2"}>
      <div className="h-full">
        <Badge
          title="Expenses"
          subtitle="This Month's Expenses"
          iconComponent={Line}
          color="#FF9B00"
        />
        <div className="">
          <ReactApexChart options={chartOptions} series={chartSeries} height={"100%"} />
        </div>
      </div>
    </DashboardCard>
  );
};

export default ExpensesCard;
