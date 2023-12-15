import React from "react";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  color: string;
  gridPosition: string;
  iconComponent: IconType;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  color,
  gridPosition,
  iconComponent,
}) => {
  const IconComponent = iconComponent;
  return (
    <div className={`dashboard-card-${gridPosition} bg-white rounded-md shadow p-5`}>
      <p>{title}</p>
      <div className="w-10 h-10" style={{ backgroundColor: color }}>
        <IconComponent />
      </div>
    </div>
  );
};

export default DashboardCard;
