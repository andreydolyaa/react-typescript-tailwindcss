import React from "react";

interface DashboardCardProps {
  gridPosition: string;
  children: string | JSX.Element;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ gridPosition, children }) => {
  return (
    <div
      className={`dashboard-card-${gridPosition} bg-white rounded-md shadow p-5 animate-appear2`}
    >
      {children}
    </div>
  );
};

export default DashboardCard;
