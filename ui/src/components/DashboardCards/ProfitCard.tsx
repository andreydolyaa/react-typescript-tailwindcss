import ReactApexChart from "react-apexcharts";
import { RiMoneyDollarCircleLine as Money } from "react-icons/ri";
import DashboardCard from "./DashboardCard";
import Badge from "../Badge";
import { useState } from "react";
import { useChartOptions } from "../../hooks/useChartOptions";

const ProfitCard = () => {
  // TODO: change this data

  const [chartSeries, setChartSeries] = useState([
    {
      name: "This Month",
      data: [1545, 1677, 6700, 12],
    },
  ]);
  const chartOptions = useChartOptions({
    type: "line",
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    lineColors: ["#6B2CCB", "#BFBFBF"],
    lineWidth: 3,
    pointsWidth: 7,
    curve: "smooth",
    pointShape: "square",
    xaxisShowLabels: true,
    yaxisShowLabels: true,
  });

  return (
    <DashboardCard gridPosition={"1"}>
      <div className="h-full flex flex-col justify-between">
        <Badge
          title="Profit"
          subtitle="This Month's Weekly Profits"
          iconComponent={Money}
          color="#6B2CCB"
        />
        <div className="">
          <ReactApexChart options={chartOptions} series={chartSeries} height={"100%"} />
        </div>
      </div>
    </DashboardCard>
  );
};

export default ProfitCard;
