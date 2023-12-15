import React from "react";
import { IconType } from "react-icons";

interface DashboardCardProps {
  title: string;
  color: string;
  iconComponent: IconType;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, color, iconComponent }) => {
  const IconComponent = iconComponent;
  return (
    <div className="border">
      <p>{title}</p>
      <div className="border" style={{ backgroundColor: color }}>
        <IconComponent />
      </div>
    </div>
  );
};

export default DashboardCard;
